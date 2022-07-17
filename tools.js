{
    "id": "com.cbeyondata.tools",
    "version": "1.0.0",
    "name": "DOM Update",
    "description": "BAS Tools",
    "newInstancePrefix": "Tools",
    "icon": "https://cbeyondatanmd.github.io/widgets/object-group.svg",
    "vendor": "cBeyondata",
    "eula": "",
    "license": "",
    "webcomponents": [
      {
        "kind": "main",
        "tag": "com-cbeyondata-tools",
        "url": "https://cbeyondatanmd.github.io/widgets/tools.js",
        "integrity": "",
        "ignoreIntegrity": true
      }
    ],
    "properties": {},
    "methods": {
      "postMessage": {
	  "returnType": "string",
        "description": "HTTP Post.",
        "parameters": [
          {
            "name": "url",
            "type": "string",
            "description": "Post to URL."
          },
          {
            "name": "body",
            "type": "string",
            "description": "Content to post."
          },
          {
            "name": "csrf",
            "type": "string",
            "description": "CSRF Token."
          }
        ]
      }        
    },
      "events": {
    "onClick": {
      "description": "Called when the user clicks the Objects."
    }
  }
}
