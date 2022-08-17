const quotes = [{
        quote: 'Where there is a will there is a way.',
        author: 'Angela Merkel',
    },
    {
        quote: 'Life is a journey.',
        author: 'Ralph Waldo Emerson',
    },
    {
        quote: "And now that you don't have to be perfect, you can be good.",
        author: 'John Steinbeck',
    },
    {
        quote: `No pain, No gain.`,
        author: 'Benjamin Franklin',
    },
    {
        quote: `The die is cast.`,
        author: `Julius Caesar`,
    },
    {
        quote: `This too shall pass away.`,
        author: `Abraham Lincoln`,
    },
    {
        quote: `Seeing is believing.`,
        author: `Thomas Fuller`,
    },
    {
        quote: 'The will of man is his happiness.',
        author: 'Friedrich Schiller',
    },
    {
        quote: 'When in doubt, choose change.',
        author: 'Lily Leung',
    },
    {
        quote: "Don't dream, Be it.",
        author: 'Tim Curry',
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = ` - ${todaysQuote.author} -`;