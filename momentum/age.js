const age = parseInt(prompt('How old are you?'));

if (isNaN(age) || age < 0) {
	console.log(
		"You didn't enter a real positive number. Plaese enter a real positive number again."
	);
} else if (age < 18) {
	console.log('You are quite young!! Go home cutie!');
} else if (age >= 18 && age <= 50) {
	console.log(
		'You are old enough to enter into this website! Enjoy it!'
	);
} else {
	console.log(
		'You are too old to enter into this website.. Please go home..'
	);
}
