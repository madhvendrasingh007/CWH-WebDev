console.log("This is tutorial");

//function
function greet(name, greetText){       //defined,   name and greettext are called parameeters
    console.log(name  + " is a jaipurite");
    console.log(greetText + " " + name);
}

function sum(a,b,c){
    let d = a+b+c;
    console.log(d);
    return d;
}

let name = 'MD';
let name1 = 'Shubham';
let name2 = 'Raj';
let name3 = 'Rohan';

greetText =  "Goodbye: ";

greet(name, greetText);        //called
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);

sum(2,2,3);
sum(2,3,4);
sum(2,4,5);
sum(2,5,6);


// console.log(name  + " is a jaipurite");
// console.log(name1 + " is a jaipurite");
// console.log(name2 + " is a jaipurite");
// console.log(name3 + " is a jaipurite");
// instead of above codes, we created a function greet