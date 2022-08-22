const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const todoForm = document.querySelector('#todo-form');
const link = document.querySelector('a');
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username'; // This is a convention.
// If a varible is composed of only string and if you wanna save the string, use this way.
// Also, this varialbe shouldn't be an important information.

function onSubmitBtnClick(event) {
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings(username);
}

function paintGreetings(name) {
	greeting.classList.remove(HIDDEN_CLASSNAME);
	todoForm.classList.remove(HIDDEN_CLASSNAME);
	greeting.innerText = `Welcome, ${name}!`; // Practice to use this way!!
}

loginForm.addEventListener('submit', onSubmitBtnClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener('submit', onSubmitBtnClick);
} else {
	paintGreetings(savedUsername);
}
