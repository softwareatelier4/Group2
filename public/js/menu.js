/*jshint esversion: 6 */
const navbarTopMobile = document.querySelector('#navbar-top-mobile ul');
const navbarTopDesktop = document.querySelector('#navbar-top-desktop ul');

let drawMenu = function() {
	drawLoginMenu();

	let menuEl = {};

	menuEl.home = {
		name: 'Home',
		link: '/',
		icon: 'fa-home'
	};

	$.get("/html/menuElement.html", function(elementHTML) {

		for (let [key, el] of Object.entries(menuEl)) {
			addElementMenu(elementHTML, el.name, el.link, el.modal, el.icon);
		}
	});
};

let drawLoginMenu = function() {
	isLogged(function(loginRes) {
		let menuEl = {};
		const logged = loginRes.result;

		if (!logged) {

			menuEl.login = {
				name: 'Login',
				modal: '#modal-login'
			};

			menuEl.register = {
				name: 'Register',
				link: '#'
			};
		}

		$.get("/html/menuElement.html", function(elementHTML) {

			for (let [key, el] of Object.entries(menuEl)) {
				addElementMenu(elementHTML, el.name, el.link, el.modal, el.icon);
			}
		});
	});
}

let addElementMenu = function(htmlDust, name, link, modal, iconName) {

	let data = {
		name,
		link,
		modal,
		icon: iconName
	};

	dust.renderSource(htmlDust, data, function(err, el) {
		navbarTopMobile.innerHTML += el;
		navbarTopDesktop.innerHTML += el;
	});
}
