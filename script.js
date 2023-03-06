const currentDay = document.querySelector('.current-day');
const funFact = document.querySelector('.fun-fact');

const facts = [
	'Humans beings are the only animals confirmed to cry tears in response to emotions.',
	'Ben Franklin’s formal education ended at 10 years old.',
	'Sharks have no bones.',
	'There are only two countries in the world that use the color purple in their flag.',
	'A giraffe and a human have the same number of bones in their necks.',
	'Twinkies only have a shelf life of 45 days.',
	'The chainsaw was originally created to aid in childbirth.',
	'There are different sizes of infinity.',
];

const day = new Date();
currentDay.textContent = day.toLocaleString('en', { weekday: 'long' });

const showRandomFact = () => {
	const number = Math.floor(Math.random() * facts.length);
	funFact.textContent = facts[number];
};

showRandomFact();
