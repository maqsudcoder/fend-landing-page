// global variables
const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// create navigation
for (let i = 0; i < sections.length; i++) {
	// creating elements
	const liEl = document.createElement('li');
	const aEl = document.createElement('a');

	// adding attributes to <a></a> element
	aEl.className = 'menu__link';
	aEl.innerText = `${sections[i].dataset.nav}`;

	// adding <a> element inside <li> element
	liEl.appendChild(aEl);

	// adding all <li> elements to navbarList
	navbarList.appendChild(liEl);

	// using scrollTo() function there
	scrollTo(aEl, sections[i]);
}

// creating scrollTo function
function scrollTo(a, section) {
	// when a is slicked scroll to section

	a.addEventListener('click', () => {
		section.scrollIntoView();
	});
}

// activateSection
const activateSection = function () {
	for (let i = 0; i < sections.length; i++) {
		let elementOffset = sections[i].getBoundingClientRect().top;

		if (elementOffset <= 200 && elementOffset >= -200) {
			sections[i].classList.add('active');
		} else {
			sections[i].classList.remove('active');
		}
	}
};

// using activeSection() function on scroll change
window.addEventListener('scroll', activateSection);
