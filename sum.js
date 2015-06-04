
var total = 0
for(var i = 2; i < process.argv.length; i++){
	var x = process.argv[i];
	sum += parseInt(x);
}

console.log(sum)