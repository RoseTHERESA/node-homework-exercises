var fs = require('fs');
fs.readFile("dogs.txt", function(err, contents){
    console.log(contents.toString().match(/\n/g).length + 1);
});

