const clock = document.querySelector('h2#clock');
function getClock() {
	const date = new Date(); // new를 굳이 쓰는 이유? typeof 으로 확인 & 생성자 함수 공부.
	const hours = String(date.getHours()).padStart(2, '0'); // date.getHours() returns a number.
	const minutes = String(date.getMinutes()).padStart(2, '0'); // So we need to String() it to convert it to a string for using padStart().
	const seconds = String(date.getSeconds()).padStart(2, '0'); // And then padStart() to make it always have 2 digits.
	clock.innerHTML = `${hours}:${minutes}:${seconds}`; // the opposite is padEnd()
}
// Below is easier way to do the same thing.
// function getClock() {
// 	clock.innerText = new Date().toLocaleTimeString();
// }

getClock(); // to get the clock right away when we refresh the page.
setInterval(getClock, 1000); // to keep calling the clock every second.
// setTimeout(getClock, 5000);
