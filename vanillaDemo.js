//arrays
[25, 4, -1, 0].map(Math.sqrt);

var dogs = ["spike", "sparky", "spot"];
dogs.map(function (d) {return d.toUpperCase()});

//conditionals
var cats = 2;

function myCatsCond() {
	var cats = 10;
	if(cats < 5){
		console.log('I have ${cats} cats');
	}else{
		console.log("That's a lot of cats!");
	}
}

console.log(cats);

myCatsCond();

//loops
var cats = 2;

function myCatsLoop() {
	var cats = 10;
	for(var i = 1; i < cats; i++){
		console.log('Cat ${cats}, reporting for duty')
	}
}

console.log(cats);

myCatsLoop();