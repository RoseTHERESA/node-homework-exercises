var fs = require('fs');
var contents = fs.readFile("dogs.txt", function(err, contents){
	if (err) {throw err}
var arr = (contents.toString().split("\n"));
console.log(arr.length);
});



