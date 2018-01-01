Freeboard Plugins
=================

These are my plugins for [Freeboard][fb]. 

[fb]: https://github.com/Freeboard/freeboard

## Installation

Add the `.js` files in the index.html file at the top near the head.js script 
loader, like this:
```html
    <script type="text/javascript">
        head.js("js/freeboard_plugins.min.js",
                "plugins/colorblocks/colorvalue.js",
                "plugins/colorblocks/colorthreshold.js",
                // *** Load more plugins here ***
```

## Color Blocks Widgets
Colorblocks give a bright color status based on a computed value. There are two
widgets, colorthreshold.js and colorvalue.js.

__colorthreshold.js__ lets you set a computed value, good/bad values, and customize
good/warning/bad colors. The grading of good and bad values can be inverted.

![example](https://user-images.githubusercontent.com/35010457/34471180-c2814a48-eef6-11e7-9180-571ecae1c6b8.png | width=640)
![example](https://user-images.githubusercontent.com/35010457/34471177-c20178d6-eef6-11e7-9efc-5b1f4034a27f.png | width=326)

__colorvalue.js__ lets you set a computed value, good value, and customise good/bad
colors.

![example](https://user-images.githubusercontent.com/35010457/34471179-c2588432-eef6-11e7-860e-91e4e4de1c36.png | width=640)
![example](https://user-images.githubusercontent.com/35010457/34471178-c22d8098-eef6-11e7-8d18-33ccfe44378a.png | width=326)



