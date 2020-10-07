//GLOBAL SCOPE
let food = 'Apple';
let fruits = 5;
var x = 5;


function store() {
    //FUNCTION SCOPE

    let food = 'banana';
    let fruits = 50;
    var x = 5;

}

//BLOCK SCOPE
for (var x = 0; x < 10; x++) {
    console.log(x);
}

console.log('Global' + x);

