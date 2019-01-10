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

/*var firstName = 'John';
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
 var lastName = prompt('What is his last N ame');
 console.log(firstName + ' ' + lastName); */

/****************************************
 * BASIC OPERATORS
 */
/*var year, yearJohn, yearMark = 2020;
now = 2019;
ageJohn = 28;
ageMark = 33;
  
  //MATH OPERATORS
  var yearJohn = now - ageJohn;
  var yearMark = now - ageMark;
  
  console.log(yearJohn);

  console.log(now + 2);
  console.log(now * 2);
  console.log(now / 10);


  //LOGICAL OPERATORS
  var johnOlder = ageJohn < ageMark;
  console.log(johnOlder);

  //TYPE OF OPERATOR
  console.log(typeof johnOlder);
  console.log(typeof ageJohn);
  console.log(typeof 'Mark is older then john'); 
  var x; //UNDEFINED
  console.log(typeof x);*/

/****************************************
 * OPERATOR PRECEDENCE /-- PRECEDENCE: the condition of being considered more important than someone or something else; priority in importance, order, or rank.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 */

/*var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//MULTIPLE OPERATORS
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

//GROUPING
// Calculate average age of john and his friend
var ageJohn = now - yearJohn;
var ageMark = 35;
// CALCULATE SUM and DIVIDE IT BY 2
var average = (ageJohn = ageMark) / 2;
console.log(average);

//MULTIPLE ASSIGNMENTS
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

//MORE OPERATORS
x *= 2;   // 52
console.log(x);

x += 10;  // 62 
console.log(x);
x++
console.log(x);
x--
console.log(x);*/

/**********************************
 * CODING CHALLLENGE 1
 */

 /*
 Mark and John are trying to compare their first BMI
 (Body Mass Index), which is calculated using the formula:
 BMI = mass / height^2 = mass / (height * height).
 (mass in kg and height in meter).

 1. Store Mark's and John's mass and height in variables
 2. Calculate both their BMIs
 3. Create a boolean variable containing information about
 whether Mark has a higher BMI then John.
 4. Print a string to the console containing the variable from step 3.
 (Somthing like "Is Mark's  BMI higher then John's? true").

*/


/*var heightJohn = (1.8288).toFixed();
var massJohn = (113.398).toFixed();
var heightMark = (2.1336).toFixed();
var massMark = (158.757).toFixed();

var meter = "Meters"
var kg  = "kg"

// calculations need to be analyized and redefined
var bmiJohn = massJohn = (massJohn / heightJohn ^2 ) / (heightJohn * heightJohn);    
console.log(bmiJohn);

var bmiMark = massMark = (massMark / heightMark ^2 ) / (heightMark * heightMark);    
console.log(bmiMark);

var higherBodyFat = bmiMark >= bmiJohn

console.log("Is Mark\'s BMI higher then John\'s?" + ' ' + higherBodyFat);

//SOULTION 2

var heightJohn = (1.8288).toFixed();
var massJohn = (113.398).toFixed();
var heightMark = (2.1336).toFixed();
var massMark = (158.757).toFixed();

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI =BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher then John\'s ' + markHigherBMI);*/


/**********************************************************
 * IF / ELSE STATEMENTS
 */


 var firstName = 'John';
 var civilStatus = 'single';

 if (civilStatus === 'married') {
   console.log(firstName + ' is married!');

 } else { 
   console.log(firstName + ' will hopefully marry soon :)');
 }

    var isMarried = true;
 if (isMarried) {
  console.log(firstName + ' is married!');

} else { 
  console.log(firstName + ' will hopefully marry soon :)');
}
 


var heightJohn = (1.8288).toFixed();
var massJohn = (113.398).toFixed();
var heightMark = (2.1336).toFixed();
var massMark = (158.757).toFixed();

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log('Mark\'s BMI is higher then John\'s.');
} else {
  console.log('John\'s BMI is higher then Mark\'s.');
}

//var markHigherBMI =BMIMark > BMIJohn;
//console.log('Is Mark\'s BMI higher then John\'s ' + markHigherBMI);
