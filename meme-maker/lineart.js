const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

const colors = [
	'#cd84f1',
	'#ffcccc',
	'#ff4d4d',
	'#ffaf40',
	'#fffa65',
	'#32ff7e',
	'#7efff5',
	'#18dcff',
	'#7d5fff',
	'#4b4b4b'
];

function mouseMove(event) {
	ctx.beginPath();
	ctx.moveTo(400, 400);
	ctx.lineTo(event.offsetX, event.offsetY);
	const color = colors[Math.floor(Math.random() * colors.length)]; // Math.random() 은 0~1 사이 float 난수 생성, 최대값인 1의 범위만 조정해주면 되니까 원하는 최대값을 곱해주면 됨.
	ctx.strokeStyle = color;
	ctx.stroke();
}

canvas.addEventListener('mousemove', mouseMove);
