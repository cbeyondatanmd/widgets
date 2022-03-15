{
 "id": "com.sample.box",
 "version": "1.0.0",
 "name": "Box",
 "description": "A colored box",
 "newInstancePrefix": "Box",
 "icon": "https://cbeyondatanmd.github.io/widgets/icon.png",
 "vendor": "Sample",
 "eula": "",
 "license": "",
 "webcomponents": [
 {
 "kind": "main",
 "tag": "com-sample-box",
 "url": "https://cbeyondatanmd.github.io/widgets/box.js",
 "integrity": "",
 "ignoreIntegrity": true
 },
 {
 "kind": "builder",
 "tag": "com-sample-boxbuilder",
 "url": "https://cbeyondatanmd.github.io/widgets/box_builder.js",
 "integrity": "",
 "ignoreIntegrity": true
 }
 ],
 "properties": {
 "color": {
 "type": "string",
 "description": "Background color",
 "default": "red"
 },
 "opacity": {
 "type": "number",
 "description": "Opacity",
 "default": 1
 },
 "width": {
 "type": "integer",
 "default": 100
 },
 "height": {
 "type": "integer",
 "default": 100
 }
 },
 "methods": {
 "setColor": {
 "description": "Sets the background color.",
 "parameters": [
 {
 "name": "newColor",
 "type": "string",
 "description": "The new background color"
 }
 ],
 "body": "this.color = newColor;"
 },
 "getColor": {
 "returnType": "string",
 "description": "Returns the background color.",
 "body": "return this.color;"
 },
 "addRow": {
 "description": "Adds Hyperlink to Sidebar.",
 "parameters": [
 {
 "name": "newCaption",
 "type": "string",
 "description": "Adds a new row caption"
 },
 {
 "name": "newHref",
 "type": "string",
 "description": "Adds a new hyperlink to row"
 }
 ],

 },
 "events": {
 "onClick": {
 "description": "Called when the user clicks the Box."
 }
 }
}
