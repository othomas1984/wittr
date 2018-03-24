self.addEventListener('fetch', function(event) {
  event.respondWith(
      new Response('<span class="a-winner-is-me">A Winner Is Me</span>', {
        headers: {'Content-Type': 'text/html'}
      })
    );
});