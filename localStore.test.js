var app_store = localStore("key_name");

// Setting expiry time to 5 seconds
app_store.setExpiryTime(5*1000);

app_store.set({
  test : 'test123'
});

setTimeout(function() {
  var value = app_store.get(); 
  console.log( 'Test 1 : ' + (value.test === 'test123' ? 'Success' : 'Fail')); 
}, 1000);

setTimeout(function() {
  var value = app_store.get(); 
  console.log( 'Test 2 : ' + (value === null ? 'Success' : 'Fail')); 
}, 5001);

setTimeout(function() {
  console.log( 'All Tests completed.'); 
}, 6000);
