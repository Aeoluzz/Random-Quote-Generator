/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Create array titled `quotes` which will hosts an array of objects containing quotes
***/

const quotes = [];
quotes.push( // add 5 or more objects with key and value pairs to the array
  {
    quote: "Most people assume the fights are going to be the left versus the right, but it always is the reasonable versus the jerks",
    source: "Jimmy Wales",
    citation: "Keynote Speech, SXSW",
    year: "2006"
  }, 
  {
    quote: "The highest result of education is tolerance.",
    source: "Helen Keller",
    citation: "Optimism, 1903",
    year: "1880 - 1968"
  }, 
  {
    quote: "The whole point in bein' a hero is to do somethin' greater than yerself. It'd be easy to do it for the glory or the girls. We're bigger men than that.",
    source: "Alexander Woo",
    citation: "True Blood, Beyond Here Lies Nothing",
    year: "2009"
  }, 
  {
    quote: "The quantity of civilization is measured by the quality of imagination.",
    source: "Victor Hugo",
    citation: "Les Miserables",
    year: "1802 - 1885"
  }, 
  {
    quote: "Passion is seldom the end of any story, for it cannot long endure if it is not soon supplemented with true affection and mutual respect.",
    source: "Kathryn L. Nelson",
    citation: "Pemberley Manor",
    year: "2006"
  },
  {
    quote: "I have never let my schooling interfere with my education.",
    source: "Mark Twain",
    year: "1835 - 1910"
  },
  {
    quote: "When defeat is inevitable, it is wisest to yield.",
    source: "Quintilian",
  }, 
  {
    quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    source: "Marilyn Monroe",
    tags: "attributed-no-source, best, life, love, mistakes, out-of-control, truth, worst"
  }
  );


/***
 * create the function `getRandomQuote` to return a random quote object from the quotes array
***/

const getRandomQuote = () => {
  const randomNumber = Math.floor(Math.random() * quotes.length); // Generate a random number stored in randomNumber variable
  return quotes[randomNumber];
};

/***
 * Create function to change background color each time a quote is displayed.
 */

 const randomRGBColor = () => {
   return Math.floor(Math.random() * 257);
 } 

/***
 * create the printQuote function to display the random generated quote the screen.
***/
const printQuote = () => {
   const randomQuote = getRandomQuote(); // Store value returned from getRandomQuote function in this variable
   let message = `<p class="quote">${randomQuote.quote}</p>
   <p class="source">${randomQuote.source}`;
   if (randomQuote.hasOwnProperty("citation")) {
    message += `<span class="citation">${randomQuote.citation}</span>`;
   } 
   if (randomQuote.hasOwnProperty("year")) {
    message += `<span class="year">${randomQuote.year}</span>`;
   }
   
   message += `</p>`;
   document.getElementsByTagName('body')[0].style.backgroundColor = `rgb(${randomRGBColor()},${randomRGBColor()},${randomRGBColor()})`; // change the background color
   return document.getElementById('quote-box').innerHTML = message;
};

window.setInterval(printQuote, 5000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);