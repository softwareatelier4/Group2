const navbarTopMobile = document.querySelector('#navbar-top-mobile ul');
const navbarTopDesktop = document.querySelector('#navbar-top-desktop ul');

function drawMenu() {
	let menuEl = {};

	menuEl.home = {
		name: 'Home',
		link: '/',
		icon: 'fa-home'
	};

	// if ('userNotLogged' == true) {
	menuEl.login = {
		name: 'Login',
		link: '#'
	}

	menuEl.register = {
		name: 'Register',
		link: '#'
	}
	// }

	$.get("/html/menuElement.html", function(elementHTML) {

		for (let [key, el] of Object.entries(menuEl)) {
			addElementMenu(elementHTML, el.name, el.link, el.icon);
		}
	});
}

function addElementMenu(htmlDust, name, link, iconName) {

	let data = {
		name,
		link,
		icon: iconName
	};

	dust.renderSource(htmlDust, data, function(err, el) {
		console.log(el);
		navbarTopMobile.innerHTML += el;
		navbarTopDesktop.innerHTML += el;
	});
}
