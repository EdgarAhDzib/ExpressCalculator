var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

app.get('/:operation/:firstNum/:secNum', function (req, res) {
	var operation = req.params.operation.toLowerCase();
	var firstNum = parseInt(req.params.firstNum);
	var secNum = parseInt(req.params.secNum);
	var result;

	switch (operation) {
		case "add" :
		result = firstNum + secNum;
		break;
		case "subtract" :
		result = firstNum - secNum;
		break;
		case "multiply" :
		result = firstNum * secNum;
		break;
		case "divide" :
		result = firstNum / secNum;
		break;
		default:
		result = "Sorry! The only valid operators are 'add','subtract', 'multiply', and 'divide'!";
		break;
	}
	res.send(result.toString());
});

app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});