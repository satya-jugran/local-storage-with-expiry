# local-storage-with-expiry
Local storage that can expire like a Cookie

## Usage
```javascript
var app_store = localStore("key_name");

app_store.set({
  test : test123
});

var value = app_store.get();
```
