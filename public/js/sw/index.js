self.addEventListener('fetch', function(event) {
  console.log(event.request);  
  // Add a comment then refresh the page to get a new waiting worker. Test with "sw-waiting"
  // Then close all server windows (any pages loaded with localhost:8888) 
  // and reopen them to install the new service worker. Test with "sw-active"
});