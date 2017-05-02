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

	menuEl.freelancerCreation = {
		name: 'New freelancer',
		link: '/freelancerCreation.html',
		dom_name: 'create-reelancer'
	};


	$.get("/html/menuElement.html", function(elementHTML) {

		for (let [key, el] of Object.entries(menuEl)) {
			addElementMenu(elementHTML, el.name, el.link, el.modal, el.icon);
		}
	});
};

let drawLoginMenu = function() {
	isLogged(function(loginRes) {
		console.log(loginRes);
		let menuEl = {};
		const logged = loginRes.result;

		if (!logged) {

			menuEl.login = {
				name: 'Login',
				modal: '#modal-login',
				dom_name: 'login-link'
			};

			menuEl.register = {
				name: 'Register',
				link: '/registration.html',
				dom_name: 'register-link'
			};
		} else {
			if (logged.level == 0) {
				menuEl.claim = {
					name: 'Claim request',
					link: '/html/claimRequestsView.html'
				};
			}

			menuEl.logout = {
				name: 'Logout',
				fnOnClick: 'LOGIN.logout()',
				dom_name: 'logout-link'
			};

		}

		$.get("/html/menuElement.html", function(elementHTML) {

			for (let [key, el] of Object.entries(menuEl)) {
				addElementMenu(elementHTML, el.name, el.link, el.modal, el.icon, el.fnOnClick, el.dom_name);
			}
		});
	});
}

let addElementMenu = function(htmlDust, name, link, modal, iconName, fnOnClick, dom_name) {

	let data = {
		name,
		link,
		modal,
		icon: iconName,
		fnOnClick,
		dom_name
	};

	dust.renderSource(htmlDust, data, function(err, el) {
		navbarTopMobile.innerHTML += el;
		navbarTopDesktop.innerHTML += el;
	});
}
