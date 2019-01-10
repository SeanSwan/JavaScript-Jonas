/*************************************
* VARIABLES AND DATA TYPES
*/
/*
const firstName = 'john';
console.log(firstName);

const lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Personal Trainer';
console.log(job);

// Variable Naming Rules
var _3years = 3;
var johnMark = 'John and Mark';
*/

/*****************************************
 * VARIABLE MUTATION AND TYPE COERCION
 * */
 
var firstName = 'John';
var age = 28;

//TYPE COERCION
console.log(firstName + ' ' + age);

//BEST PRATICE IS TO ADD ALL VARIABLES ON ONE LINE BY ADDING A COMMA
var job, isMarried;
job = 'Personal Trainer'
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//VARIBLE MUTATION = CHANGING THE VALUE OF AN VARIABLE
age = 'twenty eight';
job = 'driver';

//ALERT ALTERNATIVE VERSION TO CONSOLE.LOG
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

  //USING PROMPT FOR STORING USER DATA RECIEVING AN ANSWER TO A QUESTION ETC..
 var lastName = prompt('What is his last Name');
 console.log(firstName + ' ' + lastName);
