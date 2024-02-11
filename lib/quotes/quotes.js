

// Dependencies 
const fs = require("fs");

// Quote Object - Module scaffolding
const quote = {};

quote.allQuotes = ()=>{
    const quoteData = fs.readFileSync(`${__dirname}/data.txt`,"utf8");
    const quoteList = quoteData.split(/\r?\n/);

    return quoteList;
}


module.exports = quote;