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
//Illustrator's interpreter is not support indexOf function. what??? why????
Array.prototype.indexOf = Array.prototype.indexOf || function(value, start) {
  for (var i = 0, length = this.length; i < length; i++) {
    if (this[i] == value) {
      return i;
    }
  }
  return -1;
}

if (app.documents.length > 0) {
    main();
}
else alert('Cancelled by user');

/*
    parser
*/
function parseFromIcon(icon){
    var ALLOWED_IDIOMS = ['iphone','ipad','universal'];
    var filenameStr = icon.split("@");
    var iconName = filenameStr[0].split("-");

    if(iconName.length!=2){
        console.log("Invalid format", icon);
        return null;
    }

    var scale = filenameStr.length == 2 ? filenameStr[1] : '1x';
    var scaleFloat = parseFloat(scale.replace('x',''));
    var size = iconName[1];

    return {
        "idiom": ALLOWED_IDIOMS.indexOf(iconName[0])>-1 ? iconName[0] : "universal",
        "size": size+"x"+size,
        "sizeFloat": size * scaleFloat,
        "filename": icon+".png",
        "scale": scale,
        "scaleFloat": scaleFloat
    };
}

function makeContentJs(icons){
    return {
        images: icons.map(function(icon){
            var iconDict = parseFromIcon(icon);
            var content = {};
            content["idiom"] = iconDict.idiom;
            content["filename"] = iconDict.filename;
            content["scale"] = iconDict.scale;
            if(iconDict['idiom'] != 'universal'){
                content["size"] = iconDict.size;
            }
            return content;
        }),
        info: {
            version: 1,
            author: "xcode"
        }
    }
}

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
        for(var i = 0; i < ICONS.length; i++){
            var iconDict = parseFromIcon(ICONS[i]);
            var file = new File(folder.fsName + '/' + iconDict.filename);
            options.horizontalScale = 100 * (iconDict.sizeFloat / document.width);
            options.verticalScale = 100 * (iconDict.sizeFloat / document.height);

            document.exportFile(file,ExportType.PNG24,options);
        }
        
        /*
            export file
        */
        var contentsJson = new File(folder.fsName + "/Contents.json");
        contentsJson.open("w");
        contentsJson.write(JSON.stringify(makeContentJs(ICONS), null, 2));
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
