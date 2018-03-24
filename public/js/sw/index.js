self.addEventListener('fetch', function(event) {
  console.log(event.request);  
  // Add a comment then refresh the page to get a new waiting worker. Test with "sw-waiting"
});