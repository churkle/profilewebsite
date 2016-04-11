$(document).ready(function() {
	$( ".quote" ).text(generateRandomQuote());
});

function generateRandomQuote(){
	var quotes = ["\"He who hesitates is lost.\" \n-Unknown",
	 "\"It's not whether you get knocked down; it's whether you get up.\" \n-Vince Lombardi",
	 "\"Very little is needed to make a happy life; it is all within yourself, in your way of thinking.\" \n-Marcus Aurelius"];
	var index = Math.floor(Math.random() * quotes.length);
	return quotes[index];
}