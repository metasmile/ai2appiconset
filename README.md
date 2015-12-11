![logo](https://github.com/metasmile/ai2app/blob/master/logo.png)


# Creating AppIcon sets from Adobe Illustrator

All scripts of this repo is improved from original repo https://github.com/CaryChamplin/CreatingIconsFromAI.
It just generate a completely valid 'AppIcon.appiconset'.

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
ipad-29.png
ipad-29@2x.png
ipad-40.png
ipad-40@2x.png
ipad-76.png
ipad-76@2x.png
ipad-83.5@2x.png
iphone-29@2x.png
iphone-29@3x.png
iphone-40@2x.png
iphone-40@3x.png
iphone-60@2x.png
iphone-60@3x.png
```

### Content.json
```json
{
  "images" : [
    {
      "size" : "29x29",
      "idiom" : "iphone",
      "filename" : "iphone-29@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "29x29",
      "idiom" : "iphone",
      "filename" : "iphone-29@3x.png",
      "scale" : "3x"
    },
    {
      "size" : "40x40",
      "idiom" : "iphone",
      "filename" : "iphone-40@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "40x40",
      "idiom" : "iphone",
      "filename" : "iphone-40@3x.png",
      "scale" : "3x"
    },
    {
      "size" : "60x60",
      "idiom" : "iphone",
      "filename" : "iphone-60@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "60x60",
      "idiom" : "iphone",
      "filename" : "iphone-60@3x.png",
      "scale" : "3x"
    },
    {
      "size" : "29x29",
      "idiom" : "ipad",
      "filename" : "ipad-29.png",
      "scale" : "1x"
    },
    {
      "size" : "29x29",
      "idiom" : "ipad",
      "filename" : "ipad-29@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "40x40",
      "idiom" : "ipad",
      "filename" : "ipad-40.png",
      "scale" : "1x"
    },
    {
      "size" : "40x40",
      "idiom" : "ipad",
      "filename" : "ipad-40@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "76x76",
      "idiom" : "ipad",
      "filename" : "ipad-76.png",
      "scale" : "1x"
    },
    {
      "size" : "76x76",
      "idiom" : "ipad",
      "filename" : "ipad-76@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "83.5x83.5",
      "idiom" : "ipad",
      "filename" : "ipad-83.5@2x.png",
      "scale" : "2x"
    }
  ],
  "info" : {
    "version" : 1,
    "author" : "xcode"
  }
}
```
