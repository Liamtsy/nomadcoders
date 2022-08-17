const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');
const API_KEY = '4cb2ff8508ad4fc946d2446cc14b2b02';

function onGeoOk(position) {
	//success 함수는 GeolocationPosition object를 parameter로 get함.
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url) // 해당 url에 갈 필요 없이 js가 fetch를 해서 응답을 받음.
		.then((response) => response.json()) // fetch 후에 then 안의 것을 실행. 어려우니까 유튜브 클론코딩 고고
		.then((data) => {
			city.innerText = data.name;
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
		});
}
function onGeoError() {
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
