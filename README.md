# Stash.js
A jQuery plugin that can instigate application/octet-stream downloads of dom elements.

```javascript
  <textarea>Hello World</textarea>
  $('textarea').stash('example','txt', function (contents) {    
    console.log('About to download contents of textarea as example.txt');
    return contents;
  });
```
