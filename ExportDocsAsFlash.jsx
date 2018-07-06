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

/**	Exports every document open in Illustrator
	as a SWF file in a user specified folder.
*/

// Main Code [Execution of script begins here]

// uncomment to suppress Illustrator warning dialogs
// app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

try {
	if (app.documents.length > 0 ) {

		// Get the folder to save the files into
		var destFolder = null;
		destFolder = Folder.selectDialog( 'Select folder for SWF files.', '~' );
	  
		if (destFolder != null) {
			var options, i, sourceDoc, targetFile;  
			 
    		// Get the Flash export options to be used.
			options = this.getOptions();
    		// You can tune these by changing the code in the getOptions() function.
	    			
    		for ( i = 0; i < app.documents.length; i++ ) {
    			sourceDoc = app.documents[i]; // returns the document object
									
	    		// Get the file to export the document as swf into
				targetFile = this.getTargetFile(sourceDoc.name, '.swf', destFolder);
			
				// Export to flash
				sourceDoc.exportFile(targetFile, ExportType.FLASH, options);
			}
			alert( 'Documents exported as SWF' );
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
	@return ExportOptionsFlash object
*/
function getOptions()
{
	// Create Flash export options
	var options = new ExportOptionsFlash();
	// See ExportOptionsFlash in the JavaScript Reference for available options
		
	// Set the options you want below:
	
	// For example, uncomment to set the version of the generated file to SWF Version 8	
	// options.exportVersion = FlashExportVersion.FLASHVERSION8;
	
	return options;
}

/** Returns the file to save or export into.
	@param docName the name of the document to be saved or exported
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
