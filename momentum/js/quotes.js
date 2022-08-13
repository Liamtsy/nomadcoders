const quotes = [
	{
		quote:
			'If there is an obstacle in your life, there are two things that the obstacle can do. First, make you stop. Second, make you creative.',
		author: 'Amy Purdy'
	},
	{
		quote:
			'We are all in the gutter, but some of us are looking at the stars.',
		author: 'Oscar Wilde'
	},
	{
		quote: 'The best way to predict the future is to create it.',
		author: 'Peter Drucker'
	},
	{
		quote: 'Poverty makes you sad as well as wise.',
		author: 'Bertolt Brecht'
	},
	{
		quote: `You've got to think about big things while you're doing small things, so that all the small things go in the right direction.`,
		author: 'Alvin Toffler'
	},
	{
		quote: 'Be realistic, demand the impossible!',
		author: 'Che Guevara'
	},
	{
		quote: 'That which does not kill us makes us stronger.',
		author: 'Friedrich Nietzsche'
	},
	{
		quote:
			'Life is like riding a bicycle. To keep your balance, you must keep moving.',
		author: 'Albert Einstein'
	}
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[parseInt(Math.random() * quotes.length)]; // or Math.floor(Math.random() * quotes.length)

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
// If you wanna know a difference between innerText and innerHTML, check below.
// quote.innerText = `<h1>${todaysQuote.quote}</h1>`;
// author.innerHTML = `<h1>${todaysQuote.author}<h1>`;
