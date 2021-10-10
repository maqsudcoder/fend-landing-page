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

////Navigate to section on click
const scrollToSection = () => {
	const allLinks = document.querySelectorAll('.menu__link');

	console.log(allLinks);
	for (let i = 0; i < allLinks.length; i++) {
		allLinks[i].addEventListener('click', () => {
			allLinks[i].scrollTo(sections[i]);
		});
	}
};

scrollToSection();

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
	return elementOffset < 200 && elementOffset >= -200;
};

// MAIN FUNCTION: activate section
const activateSection = () => {
	sections.forEach(section => {
		// calculate element offset
		let elementOffset = section.getBoundingClientRect().top;

		// check element in viewport or not
		let checkInViewport = inViewport(elementOffset);

		if (checkInViewport) {
			// if in viewport
			addActiveClass(section); // add `active` class
		} else {
			removeActiveClass(section); // else remove `active` class
		}
	});
};

// run functon on scrolling
// window.addEventListener('scroll', actkivateSection);
window.addEventListener('scroll', activateSection);
