var text = document.getElementById("text");
var author = document.getElementById("author");
var newQuoteButton = document.getElementById("new-quote");
var tweetQuote = document.getElementById("tweet-quote");
var button = document.querySelector("button");
var html = document.querySelector("html");


var quotes = {
    "1": {
        text: "quote-1",
        author: "author-1",
    },
    "2": {
        text: "quote-2",
        author: "author-2",
    },
    "3": {
        text: "quote-3",
        author: "author-3",
    },
    "4": {
        text: "quote-4",
        author: "author-4",
    },
    "5": {
        text: "quote-5",
        author: "author-5",
    },
};

var quotesLength = Object.keys(quotes);

function newQuote() {
    
    var mathRandom = Math.floor(Math.random() * quotesLength.length) + 1;
    
    text.innerHTML = quotes[mathRandom].text;
    author.innerHTML = quotes[mathRandom].author;
    tweetQuote.href="https://twitter.com/intent/tweet/?text=" +  quotes[mathRandom].text + quotes[mathRandom].author;
    
}

function changeColor() {
    
    var redVal = Math.random() * 255;
    var greenVal = Math.random() * 255;
    var blueVal = Math.random() * 255;
    
    text.style.color = "rgba(" + redVal + "," + greenVal + "," + blueVal + ")";
    author.style.color = "rgba(" + redVal + "," + greenVal + "," + blueVal + ")";
    button.style.backgroundColor = "rgba(" + redVal + "," + greenVal + "," + blueVal + ")";
    tweetQuote.style.backgroundColor = "rgba(" + redVal + "," + greenVal + "," + blueVal + ")";
    html.style.backgroundColor = "rgba(" + redVal + "," + greenVal + "," + blueVal + ")";
    
}

newQuote();
changeColor();

newQuoteButton.addEventListener("click", () => {
    newQuote();
    changeColor();
});