var num1;
var num2;
var answer;
var inputText; 
var operands = {
	PLUS : 0,
	MINUS : 1,
	MULTIPLY: 2,
	DIVIDE: 3
};
var operand;

$('document').ready(function(){
	inputText = document.getElementById('input'); 
	input.innerHTML = '';
	operand = operands.PLUS;
});

// event handlers for number buttons
$('#7').click(function() {
	input.innerHTML += '7';
});

$('#8').click(function() {
	input.innerHTML += '8';
});

$('#9').click(function() {
	input.innerHTML += '9';
});

$('#4').click(function() {
	input.innerHTML += '4';
});

$('#5').click(function() {
	input.innerHTML += '5';
});

$('#6').click(function() {
	input.innerHTML += '6';
});

$('#1').click(function() {
	input.innerHTML += '1';
});

$('#2').click(function() {
	input.innerHTML += '2';
});

$('#3').click(function() {
	input.innerHTML += '3';
});

$('#0').click(function() {
	input.innerHTML += '0';
});


//event handlers for operands
$('#plus').click(function() {
	num1 = parseInt(inputText.innerHTML);
	operand = operands.PLUS;
	inputText.innerHTML = ''
	console.log('operand ' + operand);
});

$('#minus').click(function() {
	num1 = parseInt(inputText.innerHTML);
	operand = operands.MINUS;
	inputText.innerHTML = '';
	console.log('operand ' + operand);
});

$('#multiply').click(function() {
	num1 = parseInt(inputText.innerHTML);
	operand = operands.MULTIPLY;
	inputText.innerHTML = '';
	console.log('operand ' + operand);
});

$('#divide').click(function() {
	num1 = parseInt(inputText.innerHTML);
	operand = operands.DIVIDE;
	inputText.innerHTML = '';
	console.log('operand ' + operand);
});

$('#C').click(function(){
	input.innerHTML = '';
	operand = operands.PLUS;
});

$('#equals').click(function(){
	num2 = parseInt(inputText.innerHTML);
	switch(operand){
		case operands.PLUS:
			answer = num1 + num2;
			inputText.innerHTML = answer;
			break;

		case operands.MINUS:
			answer = num1 - num2;
			inputText.innerHTML = answer;
			break;

		case operands.MULTIPLY:
			answer = num1 * num2;
			inputText.innerHTML = answer;
			break;

		case operands.DIVIDE:
			answer = num1 / num2;
			inputText.innerHTML = answer;
			break;

		answer = null;
		num1 = num2 = null;
	}
});