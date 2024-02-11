/*
 * Title: Infinite  File Reading App.
 * Description: File Read In Local Computer By Node Js.
 * Author: San Bin Hoque.
 * Date: 11/02/2024
 *
 */



// Dependencies
const randomNumber = require("./lib/randomNumber")
const quote = require("./lib/quotes/quotes");



// App Object - Module scaffolding
const app = {};
app.config= {
    printIntervalTime : 1000,
}



app.printQuote = ()=>{
    const quotes = quote.allQuotes();
    const quoteLength = quotes.length;

    const quoteIndex = randomNumber.randomNumByRange(0,quoteLength - 1);

    const selectedQuote = quotes[quoteIndex];

    console.log(selectedQuote);
}


app.quotePrintLoop = ()=>{
    setInterval(app.printQuote, app.config.printIntervalTime);
}


// Invoke the loop
app.quotePrintLoop();
