//// Global variables

// -= navbar
const navbarListEl = document.getElementById('navbar__list');

// -= sections
const sections = document.querySelectorAll('section');

/// Bulding the navigation
const buildTheNav = () => {
	let list = '';

	sections.forEach(section => {
		list += `<li><a href='#${section.id}' class='menu__link'>${section.dataset.nav}</a></li>`;
	});

	navbarListEl.innerHTML = list;
};

buildTheNav();

//// Add active cass to element on scroll
// add active class to an element
const addActiveClass = sec => {
	sec.classList.add('active');
};

// remove active class from an element
const removeActiveClass = sec => {
	sec.classList.remove('active');
};

// check if an element in viewport then return true
const inViewport = elementOffset => {
	return elementOffset < 120 && elementOffset >= -120;
};

// MAIN FUNCTION: activate section
const activateSection = () => {
	sections.forEach(section => {
		// calculate element offset
		let elementOffset = section.getBoundingClientRect().top;

		// check element in viewport or not
		let checkInViewport = inViewport(section, elementOffset);

		if (checkInViewport) {
			// if in viewport
			section.classList.add('active'); // add `active` class
		} else {
			section.classList.remove('active'); // else remove `active` class
		}
	});
};

// run functon on scrolling
window.addEventListener('scroll', activateSection);
