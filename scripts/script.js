var text = document.getElementById("text");
var author = document.getElementById("author");
var button = document.getElementById("new-quote");

var quotes = {
    "1": {
        text: "quote#1",
        author: "author#1",
    },
    "2": {
        text: "quote#2",
        author: "author#2",
    },
};

var quotesLength = Object.keys(quotes);

var mathRandom = Math.floor(Math.random() * quotesLength.length) + 1;

function newQuote(id) {
    text.innerHTML = quotes[id].text;
    author.innerHTML = quotes[id].author;
}

console.log(mathRandom);

button.addEventListener("click", newQuote(mathRandom));