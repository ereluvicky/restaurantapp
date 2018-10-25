if ('serviceWorker' in navigator) {
<<<<<<< HEAD
	window.addEventListener('load', function() {
	  navigator.serviceWorker.register('/sw.js').then(function(registration) {
		// Registration was successful
		console.log('ServiceWorker registration successful with scope: ', registration.scope);
	  }, function(err) {
		// registration failed :(
		console.log('ServiceWorker registration failed: ', err);
	  });
	});
  }
=======
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Registration worked!');
	})
	.catch(function() {
		console.log('Registration failed!');
	});
}
>>>>>>> cf96e1f2a9a16b71971286a23ffa9118b0ec1b1a
