var fs = require('fs');
fs.readFile("dogs.txt", function(err, data){
    console.log(data.toString());
});