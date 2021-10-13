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

// it should be in the beggining of code but we should need the navigation first before using it 😜
const navbarLinks = document.querySelectorAll('.menu__link');

// creating scrollTo function
function scrollTo(a, section) {
	// when a is slicked scroll to section

	a.addEventListener('click', e => {
		e.preventDefault();
		section.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
	});
}

// activateSection
const activateSection = function () {
	for (let i = 0; i < sections.length; i++) {
		let elementOffset = sections[i].getBoundingClientRect().top;

		if (elementOffset <= 250 && elementOffset >= -250) {
			sections[i].classList.add('active');
			navbarLinks[i].classList.add('active-link');
		} else {
			sections[i].classList.remove('active');
			navbarLinks[i].classList.remove('active-link');
		}
	}
};

// using activeSection() function on scroll change
window.addEventListener('scroll', activateSection);
