let page = (new URLSearchParams(window.location.search)).get('p');
if (page == null) page = 'main';

function addScript(script) {
	let pageScript = document.createElement('script');
	pageScript.async = false;
	pageScript.src = script;
	document.body.append(pageScript);
}

addScript(`./pages/${page}.js`);
addScript('./pages/constructor.js');
