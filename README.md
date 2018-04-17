# Schema TinyMCE Plugin
This plugin helps the content editor add Schema values to content inside the WYISIWYG editor.

## Installation
1. Via NPM:
```
$ npm i tinymce-schema
```
2. Via Github:
```
$ git clone https://github.com/nomensa/tinymce-schema
```

## User workflow
1. Highlight text;
2. Press the "Add schema" button;
3. A popup window appears with the title of "Adding schema" and field label "Schema property"
4. Add the schema value as the "Schema property'
5. Press "Ok"

## Developer workflow
1. The developer adds a schema type to the template, i.e:
```javascript
itemtype="http://schema.org/Event"
 ```
2. The WYSIWYG content editor highlights text and adds a property 'value' to the text;
3. The plugin (always) adds a 'itemprop' attribute to the text with a ```<span>``` tag, i.e.:
```javascript
<span itemprop="..."> Highlighted text </span>
 ```
4. The plugin uses the value provided by the content editor inside the value of the 'itemprop' attribute, i.e.:
```javascript
<span itemprop="event-title"> Highlighted text </span> 
```

## The development server
By running the `npm start` command you start the development server and open a browser window with an instance of TinyMCE with your plugin added to it. This window will reload automatically whenever a change is detected in the `index.html` file in the `static` folder or in one of the JavaScript files in the `src` directory.

## The production build
By running the `npm run build` command Webpack will create a `dist` directory with a child directory with the name of your plugin (schema) containing three files:

* `plugin.js` - the bundled plugin
* `plugin.min.js` - the bundles, uglified and minified plugin
* `LICENSE` - a file explaining the license of your plugin (copied over from `src/LICENSE`) 
