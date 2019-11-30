# local-storage-with-expiry
A browser's Local storage that can expire like a Cookie.

## Use case
A cookie can be made to expire after a specific duration. However, the combined size of all cookie can not exceed 4096 Bytes per domain. To store large size data, we have to rely on other browser storage systems like localstorage. The issue is that we can not set an expiry time for localstorage data. 
The "local-storage-with-expiry" comes with a feature to expire data stored in the localstorage. The data would expire the next time it tries to get it past expiry time.

## Usage
```javascript
var app_store = localStore("key_name");

// Setting expiry time to 1 hour
app_store.setExpiryTime(60*60*1000);

app_store.set({
  test : test123
});

var value = app_store.get();
```
