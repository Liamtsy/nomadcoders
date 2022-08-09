const screen = document.querySelector('body');
function backgroundHandler() {
	const width = window.innerWidth;
	if (width < 800) {
		screen.classList.add('cornflowerblue');
	} else if (width > 800 && width < 1200) {
		screen.classList.remove('cornflowerblue');
		screen.classList.add('blueviolet');
	} else if (width > 1200) {
		screen.classList.remove('blueviolet');
		screen.classList.add('gold');
	}
}

window.addEventListener('resize', backgroundHandler);
