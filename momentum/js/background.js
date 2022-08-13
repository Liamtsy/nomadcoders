const images = [
	'0.jpeg',
	'1.jpeg',
	'2.jpeg',
	'3.jpg',
	'4.jpg',
	'5.jpg',
	'6.jpg',
	'7.jpg',
	'8.jpg',
	'9.jpg',
	'10.jpg'
];

const chosenImage = images[parseInt(Math.random() * images.length)]; // or Math.floor(Math.random() * quotes.length)

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
// If you want to add the image to other place except for the last child, use insertBefore() instead of appendChild.
// EXAMPLE:
// const h2 = document.querySelector("#clock")
// document.body.insertBefore(bgImage, h2);
// You can use variable from other files if it's imported. But It's not recommended due to debugging.
