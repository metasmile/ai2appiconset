# Creating iOS and OS icon sets from Adobe Illustrator

According to Apple's [iOS Human Interface Guidelines](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/IconMatrix.html#//apple_ref/doc/uid/TP40006556-CH27-SW1) and [OS X Human Interface Guidelines](https://developer.apple.com/library/mac/documentation/UserExperience/Conceptual/OSXHIGuidelines/Gallery.html#//apple_ref/doc/uid/20000957-CH88-SW1), the following set of icons are needed for devices supporting iOS8 and Mac OS X, respectively:
![Set of icons for iOS and OS](https://github.com/CaryChamplin/CreatingIconsFromAI/blob/master/ios-os-icon-chart.png)

[Adobe Illustrator](http://www.adobe.com/products/illustrator.html) (AI) was used for creating the icon designs for both iOS devices and Mac OS X. AI was used for creating the mobile device icon design. AI creates artwork in vector format which is perfect for creating a scaleable images that are pixelated only when during the saving step ('Save for Web' using png24 at each specific icon size). This capability permitted the use of a single artboard on AI with a size of 1024x1024. Although asset generation is not built into AI, it is possible to create a script that generates all the iPhone and iPad icons automagically from the single AI artboard and, similarly, with Mac OS X icons.

###AI Scripts for Creating iOS8 and OS X App Icons
AI supports use of external script files (e.g., Java) that can be executed on a particular AI document from within AI. Here are the details:

- Since app icons for iOS and OS X may be designed differently, in the general case, there should be two scripts: one script for generating the iOS icon image assets and a second script for generating the OS X icon image assests.
- Scripts can be written in various scripting languages, but these two scripts are written in Java.
- Script files should be placed in the following folder: Applications/Adobe Illustrator CC 2014/Presets/en_US/Scripts/.

The only difference in the Java code between the iOS8 version and the OS X version is the list of icons.

Read the [post](http://champlintechnologiesllc.com/2015/04/26/blog020-ai-scripts-to-export-app-icons/) on [Champlin Technologies LLC](http://champlintechnologiesllc.com) for more info.

ADOBE ILLUSTRATOR CC SCRIPTING GUIDE : http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/pdf/illustrator/scripting/CC/Illustrator%20Scripting%20Guide.pdf
