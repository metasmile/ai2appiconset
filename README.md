
[Ad] Meet our app using ai2app, Elie - Your next mobile photography assistant. http://elie.camera

![logo](https://github.com/metasmile/ai2app/blob/master/logo.png)

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/vsouza/awesome-ios#tools)

# Creating AppIcon sets from Adobe Illustrator

This repo is rewrited from original repo https://github.com/CaryChamplin/CreatingIconsFromAI.

Just generates a completely valid contents of 'AppIcon.appiconset'.

## Usage
Clone(or download) this repo to
```
/Applications/Adobe Illustrator CC/Presets.localized/en_US/Scripts/ (in my case)
```
And click below menus.

```
File > Scripts > ios-icon-exporter
File > Scripts > mac-icon-exporter
```

If you need more information, see this : http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/pdf/illustrator/scripting/CC/Illustrator%20Scripting%20Guide.pdf

## Output results

### AppIcon.appiconset
```
Contents.json
ipad_29.png
ipad_29@2x.png
ipad_40.png
ipad_40@2x.png
ipad_76.png
ipad_76@2x.png
ipad_83.5@2x.png
iphone_29@2x.png
iphone_29@3x.png
iphone_40@2x.png
iphone_40@3x.png
iphone_60@2x.png
iphone_60@3x.png
```

### Content.json
```json
{
  "images" : [
    {
      "size" : "29x29",
      "idiom" : "iphone",
      "filename" : "iphone_29@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "29x29",
      "idiom" : "iphone",
      "filename" : "iphone_29@3x.png",
      "scale" : "3x"
    },
    {
      "size" : "40x40",
      "idiom" : "iphone",
      "filename" : "iphone_40@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "40x40",
      "idiom" : "iphone",
      "filename" : "iphone_40@3x.png",
      "scale" : "3x"
    },
    {
      "size" : "60x60",
      "idiom" : "iphone",
      "filename" : "iphone_60@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "60x60",
      "idiom" : "iphone",
      "filename" : "iphone_60@3x.png",
      "scale" : "3x"
    },
    {
      "size" : "29x29",
      "idiom" : "ipad",
      "filename" : "ipad_29.png",
      "scale" : "1x"
    },
    {
      "size" : "29x29",
      "idiom" : "ipad",
      "filename" : "ipad_29@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "40x40",
      "idiom" : "ipad",
      "filename" : "ipad_40.png",
      "scale" : "1x"
    },
    {
      "size" : "40x40",
      "idiom" : "ipad",
      "filename" : "ipad_40@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "76x76",
      "idiom" : "ipad",
      "filename" : "ipad_76.png",
      "scale" : "1x"
    },
    {
      "size" : "76x76",
      "idiom" : "ipad",
      "filename" : "ipad_76@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "83.5x83.5",
      "idiom" : "ipad",
      "filename" : "ipad_83.5@2x.png",
      "scale" : "2x"
    }
  ],
  "info" : {
    "version" : 1,
    "author" : "xcode"
  }
}
```

## Format for icon images

```
{idiom}_{float/int square size}@{integer_ScreenScale}x

ex: "iphone_60@2x"
    "iphone_60.5@2x"
```

or

```
{idiom}_{float/int width}x{float/int height}@{integer_ScreenScale}x

ex: "iphone_60x45@2x"
    "iphone_60.5x45.5@2x"
```

for iOS https://github.com/metasmile/ai2app/blob/master/ios-icon-exporter.jsx

```
ICONS = [
    "iphone_60@2x",
    "iphone_60@3x",
    "iphone_40@2x",
    "iphone_40@3x",
    "iphone_29@2x",
    "iphone_29@3x",
    "ipad_76",
    "ipad_76@2x",
    "ipad_40",
    "ipad_40@2x",
    "ipad_29",
    "ipad_29@2x",
    "ipad_83.5@2x",
    "iTunesArtwork_512",
    "iTunesArtwork_512@2x"
];
#include "icon-exporter.jsx"
```
