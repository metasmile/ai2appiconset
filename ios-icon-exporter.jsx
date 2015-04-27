#target Illustrator

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

		// iphone iOS8 icon family only

        var icons = [
            {"name": "iphone-icon-60@2x",  "size":120},
            {"name": "iphone-icon-60@3x",  "size":180},
            {"name": "iphone-icon-40@2x",  "size":80},
            {"name": "iphone-icon-40@3x",  "size":120},
            {"name": "iphone-icon-29@2x",  "size":58},
            {"name": "iphone-icon-29@3x",  "size":87},
            {"name": "ipad-icon-76",       "size":76},
            {"name": "ipad-icon-76@2x",    "size":152},
            {"name": "ipad-icon-40",       "size":40},
            {"name": "ipad-icon-40@2x",    "size":80},
            {"name": "ipad-icon-29",       "size":29},
            {"name": "ipad-icon-29@2x",    "size":58},
            {"name": "iTunesArtwork",      "size":512},
            {"name": "iTunesArtwork@2x",   "size":1024}
        ];

        var icon, file;
        for(var i = 0; i < icons.length; i++)
        {
            icon = icons[i];

            file = new File(folder.fsName + '/' + icon.name + ".png");

            options.horizontalScale = 100 * (icon.size / document.width);
            options.verticalScale = 100 * (icon.size / document.height);

            document.exportFile(file,ExportType.PNG24,options);
        }

        activeAB.artboardRect = abBounds;
    }
}