var secretNumber = 4;
var guess = prompt("guess a number");

if(Number(guess) === secretNumber)
{
	alert("hey,you win");
}
else
{
	alert("you loose")
}