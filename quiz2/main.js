
function validate(){

	var question1 = document.quiz.question1;
	var question2 = document.quiz.question2;
	var question3 = document.quiz.question3;
	var correct = 0;
	var pictures = ["win.gif", "meh.gif", "lose.gif"];
	var message = ["Great job", "That's just okay", "You really need to do better"];

	if (question1.value == "Providence") {
		correct++;
}
	if (question2.value == "Hartford") {
		correct++;
}	
	if 
	
	document.getElementById("after_submit").style.visibility = "visible";


	document.getElementById("answer").innerHTML = "You got " + correct + " correct";
	document.getElementById("picture").src = "win.gif";
	}
	
