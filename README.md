# Stash.js
A jQuery plugin that can instigate application/octet-stream downloads of local content

```javascript
  $(this).stash('codepen','html', function (contents) {    
    console.log('About to download contents of $(this) as codepen.html");
    return contents;
  });
```
