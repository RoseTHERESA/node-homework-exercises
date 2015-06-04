var fs = require('fs')
var contents = fs.readFileSync("dogs.txt")
var arr = (contents.toString().split("\n"));

console.log(arr.length);
