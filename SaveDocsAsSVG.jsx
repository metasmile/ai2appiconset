/**********************************************************

ADOBE SYSTEMS INCORPORATED 
Copyright 2005-2006 Adobe Systems Incorporated 
All Rights Reserved 

NOTICE:  Adobe permits you to use, modify, and 
distribute this file in accordance with the terms
of the Adobe license agreement accompanying it.  
If you have received this file from a source 
other than Adobe, then your use, modification,
or distribution of it requires the prior 
written permission of Adobe. 

*********************************************************/

/**	Saves every document open in Illustrator
	as an SVG file in a user specified folder.
*/

// Main Code [Execution of script begins here]

// uncomment to suppress Illustrator warning dialogs
// app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

try {
	if (app.documents.length > 0 ) {

		// Get the folder to save the files into
		var destFolder = null;
		destFolder = Folder.selectDialog( 'Select folder for SVG files.', '~' );

		if (destFolder != null) {
			var options, i, sourceDoc, targetFile;	
			
    		// Get the SVG options to be used.
			options = this.getOptions();
    		// You can tune these by changing the code in the getOptions() function.
	    			
			for ( i = 0; i < app.documents.length; i++ ) {
				sourceDoc = app.documents[i]; // returns the document object
										
				// Get the file to save the document as svg into
				targetFile = this.getTargetFile(sourceDoc.name, '.svg', destFolder);
				
				// Save as SVG
				sourceDoc.exportFile(targetFile, ExportType.SVG, options);
				// Note: the doc.exportFile function for SVG is actually a Save As
				// operation rather than an Export, that is, the document's name
				// in Illustrator will change to the result of this call.				
			}
			alert( 'Documents saved as SVG' );
		}
	}
	else{
		throw new Error('There are no document open!');
	}
}
catch(e) {
	alert( e.message, "Script Alert", true);
}


/** Returns the options to be used for the generated files.
	@return ExportOptionsSVG object
*/
function getOptions()
{
	// Create the required options object
	var options = new ExportOptionsSVG();
	// See ExportOptionsSVG in the JavaScript Reference for available options
		
	// Set the options you want below:
	
	// For example, uncomment to set the compatibility of the generated svg to SVG Tiny 1.1	
	// options.DTD = SVGDTDVersion.SVGTINY1_1;
	
	// For example, uncomment to embed raster images
	// options.embedRasterImages = true;
	
	return options;
}

/** Returns the file to save or export the document into.
	@param docName the name of the document
	@param ext the extension the file extension to be applied
	@param destFolder the output folder
	@return File object
*/
function getTargetFile(docName, ext, destFolder) {
	var newName = "";

	// if name has no dot (and hence no extension),
	// just append the extension
	if (docName.indexOf('.') < 0) {
		newName = docName + ext;
	} else {
		var dot = docName.lastIndexOf('.');
		newName += docName.substring(0, dot);
		newName += ext;
	}
	
	// Create the file object to save to
	var myFile = new File( destFolder + '/' + newName );
	
	// Preflight access rights
	if (myFile.open("w")) {
		myFile.close();
	}
	else {
		throw new Error('Access is denied');
	}
	return myFile;
}
