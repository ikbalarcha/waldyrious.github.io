// Code from: http://benvinegar.github.io/seamless-talk/#/24
// Should be called "referer", but I refuse to obey a spec term
// that is based on a misspelling: https://en.wiktionary.org/wiki/referer#Usage_notes

var iframe = document.getElementById('footer');

//Wait for the iframe to send us the OK signal
iframe.addEventListener('message', function (e) {
	if (e.data[0] == 'fixReferrer') {
		iframe.contentWindow.postMessage( ['referrer', window.location.href], '*' );
	}
}, false);
