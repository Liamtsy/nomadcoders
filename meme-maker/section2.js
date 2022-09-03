const modeBtn = document.querySelector('#mode-btn');
const destroyBtn = document.querySelector('#destroy-btn');
const eraserBtn = document.querySelector('#eraser-btn');
const colorOptions = Array.from(
	document.querySelectorAll('.color-option')
); // We gotta create an array of colors to apply addEventLister to each of colors.
const lineWidth = document.querySelector('#line-width');
const color = document.querySelector('#color');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
canvas.style.borderRadius = '50%';
ctx.lineWidth = lineWidth.value;

let isPainting = false;
let isFilling = false;

function trackMouse(event) {
	if (isPainting) {
		ctx.lineTo(event.offsetX, event.offsetY);
		ctx.stroke();
		return;
	}
	ctx.beginPath();
	ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
	isPainting = true;
}
function cancelPainting() {
	isPainting = false;
}
function onLineWidthChange(event) {
	ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
	ctx.strokeStyle = event.target.value;
	ctx.fillStyle = event.target.value;
}
function onColorClick(event) {
	const colorValue = event.target.dataset.color;
	ctx.strokeStyle = colorValue;
	ctx.fillStyle = colorValue;
	color.value = colorValue;
}
function onHover(event) {
	event.target.style.boxShadow = '3px 5px 5px';
}
function offHover(event) {
	event.target.style.boxShadow = 'none';
}
function onModeClick() {
	if (isFilling) {
		isFilling = false;
		modeBtn.innerText = 'Fill';
	} else {
		isFilling = true;
		modeBtn.innerText = 'Draw';
	}
}
function onCanvasClick() {
	if (isFilling) {
		ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	}
}
function onDestroyClick() {
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function onEraserClick() {
	ctx.strokeStyle = 'white';
	isFilling = false;
	modeBtn.innerText = 'Fill';
}
canvas.addEventListener('mousemove', trackMouse);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);
canvas.addEventListener('mousedown', onCanvasClick);
// or you can write like this: document.addEventListener('mouseup', cancelPainting);

lineWidth.addEventListener('change', onLineWidthChange);
color.addEventListener('change', onColorChange);
colorOptions.forEach((colorOption) =>
	colorOption.addEventListener('click', onColorClick)
);
// colorOptions.forEach.addEventListener('click', onColorChange);
// 이건 왜 안되지..... 틀린 이유 잘 모르겠음
colorOptions.forEach((colorOption) =>
	colorOption.addEventListener('mouseover', onHover)
);
colorOptions.forEach((colorOption) =>
	colorOption.addEventListener('mouseout', offHover)
);

modeBtn.addEventListener('click', onModeClick);
destroyBtn.addEventListener('click', onDestroyClick);
eraserBtn.addEventListener('click', onEraserClick);
