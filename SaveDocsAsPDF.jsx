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

/** Saves every document open in Illustrator
	as a PDF file in a user specified folder.
*/

// Main Code [Execution of script begins here]

try {
	// uncomment to suppress Illustrator warning dialogs
	// app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

	if (app.documents.length > 0 ) {

		// Get the folder to save the files into
		var destFolder = null;
		destFolder = Folder.selectDialog( 'Select folder for PDF files.', '~' );

		if (destFolder != null) {
			var options, i, sourceDoc, targetFile;	
			
			// Get the PDF options to be used
			options = this.getOptions();
			// You can tune these by changing the code in the getOptions() function.
					
			for ( i = 0; i < app.documents.length; i++ ) {
				sourceDoc = app.documents[i]; // returns the document object
										
				// Get the file to save the document as pdf into
				targetFile = this.getTargetFile(sourceDoc.name, '.pdf', destFolder);
				
				// Save as pdf
				sourceDoc.saveAs( targetFile, options );
			}
			alert( 'Documents saved as PDF' );
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
	@return PDFSaveOptions object
*/
function getOptions()
{
	// Create the required options object
	var options = new PDFSaveOptions();
	// See PDFSaveOptions in the JavaScript Reference for available options
			
	// Set the options you want below:

	// For example, uncomment to set the compatibility of the generated pdf to Acrobat 7 (PDF 1.6)
	// options.compatibility = PDFCompatibility.ACROBAT7;
	
	// For example, uncomment to view the pdfs in Acrobat after conversion
	// options.viewAfterSaving = true;
	
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
