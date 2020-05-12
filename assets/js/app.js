if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('sw.js')
		.then(reg => console.log('service worker is registered in scope: ', reg.scope))
		.catch(err => console.log('service worker not registered', err));
}else {
	console.log("Service worker not supported in this browser")
}
