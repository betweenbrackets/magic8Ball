$(document).ready(function() {
	
var Magic8Ball = {};
$('#answer').hide();
Magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes - definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
Magic8Ball.askQuestion = function (question) {
	$('#answer').fadeIn(4000);
  	var answerRandomNumber = Math.random();
  	var answerRandomArray = answerRandomNumber * this.listOfAnswers.length;
  	var answerRandomIndex = Math.floor(answerRandomArray);
  	var answerRandom = this.listOfAnswers[answerRandomIndex];
	console.log("Your question is " + question + ". The answer is " + answerRandom);
	$("#answer").text( answerRandom );
	$('#8ball').attr('src', "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
 	$('#8ball').effect("shake");
};

var askMe = function() {
	$('#answer').hide();
	
	$("#8ball").attr('src', "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	
	setTimeout(
    	function() {
		    var question = prompt("ASK A YES/NO QUESTION!");
		    Magic8Ball.askQuestion(question);
    }, 500);
	
   	
}	
$("#questionButton").click( askMe );

});