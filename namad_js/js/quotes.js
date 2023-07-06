const quotes =[
    {
    quote: "I never dreamed about success, I worked for it", 
    author: "unknown"
    },
    {
    quote: "You will face many defeats in life, but never let yourself be defeated",
    author: "Maya Angelou",
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
    },
    {
    quote: "Life is either a daring adventure or nothing at all",
    author: "Helen Keller"
    },
    {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison"
    },
    {
    quote: " I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom",
    author: "Rosa Parks "
    },
    {
    quote: "Being happy never goes out of style.",
     author: "Lilly Pulitzer"
    },
    {
    quote: " All you need in this life is ignorance and confidence; then success is sure",
    author: "Mark Twain"
    },
    {
    quote: " I have very strong feelings about how you lead your life. You always look ahead, you never look back.",
     author: "Ann Richards "
    },
    
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote= (quotes[(Math.floor(Math.random( )* quotes.length))]);
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
