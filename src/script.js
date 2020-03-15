var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
let quoteData;
let current_quote;
let current_author;

function getQuotes() {
  return $.getJSON("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", function(data){
    quoteData = data.quotes;
    // $("twitter").show();
    // console.log(quoteData);
  });
}

function getRandomQuote(){
  return quoteData[Math.floor(Math.random() * quoteData.length)];
}
 
function onClick(){
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  var quote = getRandomQuote();
  current_quote = quote.quote;
  current_author = quote.author;
  
  $("#quote_text").text(current_quote);
  $("#quote_author").text("- " + current_author);
  // $("body").css("background-color", random_color);
  $("body").animate({backgroundColor: random_color, color: random_color}, 500);
  $("#new_button").animate({backgroundColor: random_color}, 200);
  $(".social_media").animate({backgroundColor: random_color}, 200);
};

function shareOntwitter(){
    var url = 'https://twitter.com/intent/tweet?text='+encodeURIComponent('"'+current_quote+'" -'+current_author);
    window.open(url, 'TwitterWindow',width=600,height=300);
 }
  
$('#new_button').on('click', onClick)  
$('#twitter').on('click', shareOntwitter)  


$(document).ready(function() {
getQuotes();
});
