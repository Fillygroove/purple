let volume = (new URLSearchParams(window.location.search)).get('v');

function addScript(script) {
	let pageScript = document.createElement('script');
	pageScript.async = false;
	pageScript.src = script;
	document.body.append(pageScript);
}

addScript(`./${volume}/data.js`);
addScript('./constructor.js');
