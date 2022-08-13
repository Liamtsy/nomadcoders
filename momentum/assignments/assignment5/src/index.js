const colors = [
	'#ef5777',
	'#575fcf',
	'#4bcffa',
	'#34e7e4',
	'#0be881',
	'#f53b57',
	'#3c40c6',
	'#0fbcf9',
	'#00d8d6',
	'#05c46b',
	'#ffc048',
	'#ffdd59',
	'#ff5e57',
	'#d2dae2',
	'#485460',
	'#ffa801',
	'#ffd32a',
	'#ff3f34'
];

const button = document.querySelector('button');

function handleClick() {
	const bgColor1 = colors[parseInt(Math.random() * colors.length)];
	const bgColor2 = colors[parseInt(Math.random() * colors.length)];
	// If you define these variables outside of the function, they won't change.
	console.log(bgColor1, bgColor2);
	if (bgColor1 === bgColor2) {
		return handleClick();
	}
	document.body.style.background = `linear-gradient(45deg, ${bgColor1}, ${bgColor2})`;
}

button.addEventListener('click', handleClick);
