const countdown = document.querySelector('h2#countdown');
function getCountdown() {
	const ChristmasEve = new Date(
		'December 24, 2022 00:00:00'
	).getTime();
	const now = new Date().getTime();
	const distance = ChristmasEve - now;
	const days = String(
		Math.floor(distance / (1000 * 60 * 60 * 24))
	).padStart(2, '0');
	const hours = String(
		Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	).padStart(2, '0');
	const minutes = String(
		Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
	).padStart(2, '0');
	const seconds = String(
		Math.floor((distance % (1000 * 60)) / 1000)
	).padStart(2, '0');
	countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getCountdown();
setInterval(getCountdown, 1000);
