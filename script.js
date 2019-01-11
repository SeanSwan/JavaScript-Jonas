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

var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}

var heightJohn = (1.8288).toFixed();
var massJohn = (113.398).toFixed();
var heightMark = (2.1336).toFixed();
var massMark = (158.757).toFixed();

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher then John's.");
} else {
  console.log("John's BMI is higher then Mark's.");
}
/**********************************************************************************
 * Boolean logic
 */

/*var firstName = 'John';
 var age = 16;

 if (age < 13) {
   console.log(firstName + ' is a boy');
 } else if (age >= 13 && age < 20) {  //between 13 and 20 >= 13 AND  age < 20
  console.log(firstName + ' is a teenager');
 }  else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man');
 } else {
  console.log(firstName + ' is a man');
 } */

/************************************************************************
 * THE TERNARY OPERATOR AND SWITCH STATEMENTS
 */

var firstName = "John";
var age = 18;

age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log((firstName = " drinks juice."));

// condition operator 18 then question beer or juice
var drink = age >= 18 ? "beer" : "juice";
console.log(drink);


//IF ELSE VERSION
/*if (age >= 18) {
  var drink = "beer";
} else {
  var drink = "juice";
}*/


//SWITCH STATEMENT
/*var job = 'teacher';
switch (job) {
  case 'teacher':
  case 'instructer':
  console.log(firstName + ' teaches kids how to code.');
  break;
  case'actor':
  console.log(firstName + ' Performes in brodway plays.');
  break;
  case'personal trainer':
  console.log(firstName + ' Knows Sean Swan is the best trainer in the world.');
  break;
  default:
  console.log(firstName + ' dose somthing else');
}


age = 22
//Make the switch statement work as an if else statement with ranges.
switch (true) {
  case age < 13:
  console.log(firstName + ' is a boy');
  break;
  case age >= 13 && age < 20:
  console.log(firstName + ' is a teenager');
  break;
  case age >= 20 && age < 30:
  console.log(firstName + ' is a youngman.');
  break;
  default:
  console.log(firstName + ' is a man.');
}*/

/************************************************
 * TRUTY AND FALSY VALUES AND EQUALITY OPERATORS
 */

 //falsy values: undefined, null, 0, '', NaN
 //truthy values: NOT falsy values

 var height;

 height = 23;
 if (height || height === 0) {
   console.log('Variable is defined');
 } else {
   console.log('Variable has NOT been defined');
 }

 // Equality Operators
 if (height == '23') {
   console.log('The == operator dose type coercion!');
 }

 /*******************************************
  * CODING CHALLENGE 2
  */

  /* 
  John and Mike both play basketball on different 
  teams. In the latest 3 games, John's team scored 89, 
  120 and 103 points, while Mike's team scored 116, 94
  and 123 points.

  1. Calculate the average score for each team
  2. Decide which teams wins in average (highest 
    average score), and print the winner on the console.
    Also include the average score in the output.
    3. Then change the scores to show different winners.
    Don't forget to take into account there might be a
    draw (the same average score)

    4. EXTRA: Mary also plays basketball, and her team
    scored 97, 134 and 105 points. Like before,log the
    average winner to the console. HINT: you will need
    the && operator to take the dicision. If you can't
    solve this one, just watch the solution, it's no
    problem :)
    5. Like before, change the scores to generate
    different winners, keeping in mind there might be
    draws.

    */

    /*var johnScore =  (89 + 120 + 103) / 3;
    var mikeScore =  (116 + 94 + 123) / 3;
    var maryScore = (97 + 134 + 105) / 3;
    console.log(mikeScore, johnScore,  maryScore);

    if (johnScore > mikeScore && johnScore > maryScore) {
      console.log('John\'s team wins with ' + johnScore + ' points');

    } else if (mikeScore > johnScore && mikeScore > maryScore) {
      console.log('Mike\'s team wins with ' + mikeScore + 'points');
    } else if (maryScore > johnScore && maryScore > mikeScore) {
      console.log('Mary\'s team wins with ' + maryScore + ' points');
    } else {
      console.log('There is a draw');
    }*/
    
    
    
    
    /*if (johnScore > mikeScore) {
      console.log('John\'s team wins with ' + johnScore + ' points');

  } else if (mikeScore > johnScore) {
    console.log('Mike\'s team wins with ' + mikeScore + ' points');
  } else {
    console.log('there is a draw');
  }*/

  /***********************************************************************
   * FUNCTIONS
   */

   /*function calculateAge(birthYear) {
     return 2018 - birthYear;
   }

   var  ageJohn = calculateAge(1990);
   var  ageSean = calculateAge(1980);
   var  ageJasmine = calculateAge(1991);
   var  ageMike = calculateAge(1940);
   console.log(ageJohn, ageJasmine, ageSean, ageMike);

   function yearsUntilRetirement(year, firstName) {
     var age = calculateAge(year);
     var retirement = 65 - age;

     if (retirement > 0) {
       console.log(firstName + ' retires in ' + retirement + ' years.')
     } else {
      console.log(firstName + ' is already retired.')
     }
     
   }

   yearsUntilRetirement(1990, 'John');
   yearsUntilRetirement(1980, 'sean');
   yearsUntilRetirement(1991, 'jasmine');
   yearsUntilRetirement(1940, 'mike');*/

   /****************************************************************
    * FUNCTION STATEMENTS AND EXPRESSIONS
    */
   
   //Function Declaration
   //function whatDoYouDo(job, firstName) {}
   
    //Function expressions
    var whatDoYouDo = function(job, firstName) {
      switch(job) {
        case 'teacher':
        return firstName + ' teaches kids how to code';
        case 'driver':
        return firstName + ' is a race car driver for nascar';
        case 'designer':
        return firstName + ' owns there own fashion line';
        default:
        return firstName + ' is a bum';
      }
    }

    console.log(whatDoYouDo('actor', 'sean'));
    console.log(whatDoYouDo('designer', 'jasmine'));
    console.log(whatDoYouDo('driver', 'jimmy'));