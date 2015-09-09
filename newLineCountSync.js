var fs = require('fs');
var contents = fs.readFileSync("dogs.txt", "utf-8");
console.log(contents.match(/\n/g).length + 1);

