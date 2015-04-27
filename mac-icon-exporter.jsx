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

		// mac yosemite icon family only

        var icons = [
            {"name": "mac-icon_16x16",       "size":16},
            {"name": "mac-icon_16x16@2x",    "size":32},
            {"name": "mac-icon_32x32",       "size":32},
            {"name": "mac-icon_32x32@2x",    "size":64},
            {"name": "mac-icon_128x128",     "size":128},
            {"name": "mac-icon_128x128@2x",  "size":256},
            {"name": "mac-icon_256x256",     "size":256},
            {"name": "mac-icon_256x256@2x",  "size":512},
            {"name": "mac-icon_512x512",     "size":512},
            {"name": "mac-icon_512x512@2x",  "size":1024},
            {"name": "iTunesArtwork",        "size":512},
            {"name": "iTunesArtwork@2x",     "size":1024}
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