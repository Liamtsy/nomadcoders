const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 800;

// A house
// pillars
ctx.fillRect(200, 250, 50, 300);
ctx.fillRect(500, 250, 50, 300);
// a door
ctx.fillRect(325, 349, 100, 200);
// a ceiling
ctx.fillRect(200, 220, 350, 30);
// a roof
ctx.moveTo(200, 220);
ctx.lineTo(375, 100);
ctx.lineTo(550, 220);
ctx.fill();

// A people
// arms and torso
ctx.beginPath();
ctx.fillRect(800, 300, 20, 100);
ctx.fillRect(960, 300, 20, 100);
ctx.fillRect(850, 300, 80, 200);
ctx.arc(890, 240, 60, 0, 2 * Math.PI);
ctx.fill();
// eyes
ctx.beginPath();
ctx.arc(870, 220, 10, 1 * Math.PI, 2 * Math.PI);
ctx.arc(910, 220, 10, 1 * Math.PI, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();
