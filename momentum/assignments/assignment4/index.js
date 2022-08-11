const countdown = document.querySelector('h2#countdown');
function getCountdown() {
	const ChristmasEve = new Date('2022-12-24');
	const now = new Date();
	const difference = ChristmasEve - now;
	const secondsInMs = Math.floor(difference / 1000);
	const minutesInMs = Math.floor(secondsInMs / 60);
	const hoursInMs = Math.floor(minutesInMs / 60);
	const days = Math.floor(hoursInMs / 24);
	// 1. padStart() way
	const secondsStr = String(secondsInMs % 60).padStart(2, '0');
	const minutesStr = String(minutesInMs % 60).padStart(2, '0');
	const hoursStr = String(hoursInMs % 24).padStart(2, '0');
	const daysStr = String(days).padStart(2, '0');
	// 2. ternary operator way
	// const seconds = secondsInMs % 60;
	// const minutes = minutesInMs % 60;
	// const hours = hoursInMs % 24;
	// const daysStr = `${days < 10 ? `0${days}` : days}d`;
	// const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
	// const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
	// const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
	countdown.innerHTML = `${daysStr}d ${hoursStr}h ${minutesStr}m ${secondsStr}s`;
}

getCountdown();
setInterval(getCountdown, 1000);
