
function validate(){

	var question1 = document.quiz.question1;
	var question2 = document.quiz.question2;
	var question3 = document.quiz.question3;
	var correct = 0;


	if (question1.value == "Providence") {
		correct++;
}
	if (question2.value == "Hartford") {
		correct++;
}	
	if (question3.value == "Albany") {
		correct++;
	}
	
	var pictures = ["win.gif", "meh.jpeg", "lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
