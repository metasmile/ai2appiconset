#target Illustrator

/*
  includes
*/
//json
#include "json2.js"
//Illustrator's interpreter is not support map function
Array.prototype.map = function (callback) {
  var obj = Object(this);
  if (obj.length === 0) return null;
  if (typeof(callback) === 'undefined') return null;
  for (var i = 0, o; o = obj[i]; i++) {
    obj[i] = callback(o);
  }
  return obj;
};

if (app.documents.length > 0) {
    main();
}
else alert('Cancelled by user');

function main() {
    var document = app.activeDocument;
    var afile = document.fullName;
    var filename = afile.name.split('.')[0];

    var folder = afile.parent.selectDlg("Export as CSS Layers (images only)...");

    if(folder != null)
    {
        var activeABidx = document.artboards.getActiveArtboardIndex();
        var activeAB = document.artboards[activeABidx]; // get active AB
        var abBounds = activeAB.artboardRect;// left, top, right, bottom

        var docBounds = document.visibleBounds;
        activeAB.artboardRect = docBounds;

        var options = new ExportOptionsPNG24();
        options.antiAliasing = true;
        options.transparency = true;
        options.artBoardClipping = true;

        /*
          export image files
        */
        var icon, file;
        for(var i = 0; i < ICONS.length; i++)
        {
            icon = ICONS[i];

            file = new File(folder.fsName + '/' + icon.name + ".png");

            options.horizontalScale = 100 * (icon.size / document.width);
            options.verticalScale = 100 * (icon.size / document.height);

            document.exportFile(file,ExportType.PNG24,options);
        }

        /*
          export Contents.json
        */
        var contents = {
            images: ICONS.map(function(icon){
                var iconName = icon.name.split("-");
                var scaleStr = icon.name.split("@");
                scaleStr = scaleStr.length == 2 ? scaleStr[1] : '1x';
                var filenameStr = icon.name+".png";
                return iconName.length == 3 ? {
                  "idiom": iconName[0],
                  "size": icon.size+"x"+icon.size,
                  "filename": filenameStr,
                  "scale": scaleStr
                } : {
                  "idiom" : "universal",
                  "filename" : filenameStr,
                  "scale" : scaleStr,
                }
            }),
            info: {
                version: 1,
                author: "xcode"
            }
        };
        var contentsJson = new File(folder.fsName + "/Contents.json");
        contentsJson.open("w");
        contentsJson.write(JSON.stringify(contents, null, 2));
        contentsJson.close();

        activeAB.artboardRect = abBounds;
    }
}

/*
ref to format

https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/IconMatrix.html#//apple_ref/doc/uid/TP40006556-CH27-SW1

    {
      "idiom": "iphone",
      "size": "29x29",
      "filename": "AppIcon-29@2.png",
      "scale": "2x"
    },

    {
      "idiom" : "universal",
      "scale" : "2x",
      "filename" : "iTunesArtwork@2x.png"
    },
    {
      "idiom" : "universal",
      "scale" : "3x"
    }
*/
