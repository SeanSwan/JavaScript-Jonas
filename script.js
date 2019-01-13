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

/*var firstName = "John";
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
}*/
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

/*var firstName = "John";
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

/*var height;

height = 23;
if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log("Variable has NOT been defined");
}

// Equality Operators
if (height == "23") {
  console.log("The == operator dose type coercion!");
}*/

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
/*var whatDoYouDo = function(job, firstName) {
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
    console.log(whatDoYouDo('driver', 'jimmy'));*/

/***********************************************************************
 * ARRAYS
 */

//Initialize new Array
/*var names = ['john', 'Mark', 'Jane'];
 var years = new Array(1990, 1969, 1948);

 console.log(names[2]);
 console.log(names.length);

 //Mutate Array data
 names[1] = 'Ben';
 names[names.length] = 'Mary';
 console.log(names);

 //Diffrent Data Typpes
 var john = ['John', 'Smith', 1990, 'teacher', 'designer', false];

 john.push('blue');
 john.unshift('Mr.');
 console.log(john);

 john.pop();
 john.pop();
 john.shift();
 console.log(john);
 console.log(john.indexOf(23));

  var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' 
 : 'John Is a designer';
 console.log(isDesigner);*/

/********************************************************************************
 *  CODING CHALLANGE 2 REALLY 3 THOUGH NEXT ONE WILL BE 4
 */
/*

  John and his family went on a holiday and went to 3 diffrent resturants.
  The bills were $124, $48 and $268.
  
  To tip the waiter a fair amount , John created a tip calculator
  (as a function). He likes to tip 20% of the bill when the bill is less then $50,
  15% when the bill is between $50 and $200, and 10% if the bill is more then $200.

  In the end, John would like to have 2 arrays:
  1) Containing all three tips (one for each bill)
  2) Containing all three final paid amounts (bill + tip).

  (NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)*/

/*function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

console.log(tipCalculator(50));

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];

var finalValues = [
bills[0] + tips[0], 
bills[1] + tips[1], 
bills[2] + tips[2]];
console.log(tips, finalValues);*/

/*********************************************************************************
 * OBJECTS AND PROPERTIES
 */
//Object literal
/*var john = {
   firstName: 'John',
   lastName: 'Smith',
   birthYear: 1990,
   family: ['jane', 'Mark', 'Bob', 'Emily'],
   job: 'teacher',
   isMarried: false
 };

 console.log(john.firstName);
 console.log(john['lastName']);
 var x = 'birthYear';
 console.log(john[x]);
 
 //Mutate Objects
 john.job = 'designer';
 john['isMarried'] = true;
 console.log(john);

//New Object Syntax
 var jane = new Object();
 jane.firstName = 'Jane';
 jane.birthYear = 1969;
 jane['lastName'] = 'Smith';
 console.log(jane);*/

/*****************************************************************************
 * OBJECTS AND METHODS
 */

/*var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function(birthYear) {
    this.age = 2018 - this.birthYear;
  }
};

 john.calcAge();
 console.log(john)*/

/************************************************************************************
 * CODING CHALLANGE 4
 */

/*Let's remember the first coding challange where Mark and john
  compared their BMI's. Let's now implement the same functionality with objects and methods.
  1. for each of them, create an object with properties for their full namespace, mass, and height
  2. Then add a method to each object to calculate the BMI.firstNameSaveBMI to the object and also return it from method.
  3.In the end, log to the console who has the highest BMI.
  together wioth the full name and the respective BMI. Don't forget they might have the same BMI.

  Remember: BMI = mass / height^2 = mass / (height * height).
  (mass in kg and height in meter).*/

/*var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  }

  var mark = {
    fullName: 'Mark Smith',
    mass: 122,
    height: 1.99,
    calcBMI: function() {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  }


console.log(john, mark);

if (john.calcBMI() > mark.calcBMI()) {
  console.log(john.fullName + ' has higher BMI of ' + john.bmi.toFixed());
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi.toFixed());
} else {
  console.log('They have the same BMI');
}*/

/******************************************************************************
 * LOOPS AND ITERATION
 */

/*for (var i = 0; i < 10; i++) {
  console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
//...
// i = 9, 9 < 10 true, log i to console, i++ 
// i = 10, 10 < 10 FALSE, exit loop! 

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

var john = ['John', 'Smith', 1990, 'teacher', 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}
  

//While Loop
  var i = 0;
  while(i < john.length) {
  console.log(john[i]);
  i++;
}

// Continue and Break Statements
var john = ['john', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
      console.log(john[i]);
  }
  for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
        console.log(john[i]);
    }

    // Looping backwards
    for (var i = john.length - 1; i >= 0; i--) {
      console.log(john[i]);
    }*/

/**************************************************************************
 * CODING CHALLANGE 5
 */

/*
     Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

     This time, John and his family went to 5 diffrent resturants.
     The bills were $124, $48, $268, &180 and $42.


     John likes to tip 20% of the bill when the bill is less then $50,
     15% when the bill is between $50 and $200, and 10% if the bill is more then $200.

     Implement a tip calculator using objects and loops:
     1. Create an object with an array for the bill values.
     2. Add a method to calculate the tip
     3. This method should include a loop to iterate over all the paid bills and do the tip calculations.
     4. As an output create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip.)
      HINT: Start with two empty arrays as properties and then fill them up in a loop.

      EXTRA AFTER FINSHING: Mark's family also went on a holiday, going to 4 diffrent resturants.
      The bills were $77, $375, $110, and $45
      Mark likes to tip 20% of the bill when the bill is less then $100,
     10% when the bill is between $100 and $300, and 25% if the bill is more then $300.

     5.Implement the same functioality as before, this time using mark's tipping rules.
     6.Create a function (not a method) to calculate the average of a given array of tips.
     HINT: Loop over the array, and in each iteration store the current sum into a variable (starting from 0).
     After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average).
     7. Calculate the average tip for each family
     8. Log to the console with family paid the highest tips on average.*/

/*var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  tipCalculator: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules

      var percentage;
      var bill = this.bills[i];
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      //Add results to the corraponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

john.tipCalculator();
console.log(john);

var mark = {
  fullName: "Mark Smith",
  bills: [77, 475, 110, 45],
  tipCalculator: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules

      var percentage;
      var bill = this.bills[i];
      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      //Add results to the corraponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

function tipAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }

  return sum / tips.length;
}
// [2, 6, 4] -> 0 / 2 / 8 / 12
mark.tipCalculator();
john.tipCalculator();
console.log(john, mark);

john.average = tipAverage(john.tips)
mark.average = tipAverage(mark.tips)
console.log(john, mark);

if (john.average > mark.average) {
 console.log(john.fullName + '\'s family pays higher tips with an average of $' + john.average.toFixed());
} else if (mark.average > john.average) {
  console.log(mark.fullName + '\'s family pays higher tips with an average of $' + mark.average.toFixed());
}*/


/*****************************************************************************************
 * HOISTING
 */

 /*calculateAge(1965);
 
 function calculateAge (year) {
   console.log(2016 - year);

 }

 calculateAge(1990);

 
  // retirement(1956);

 var retirement = function(year) {
   console.log (65 - (2016  - year));
 }

 retirement(1980);

 // variables 
console.log(age);
var age = 23;
console.log(age);

function foo() {
  var age = 65;
  console.log(age);
}

foo();
console.log(age);*/

/**********************************************************************************************
 * FIRST SCOPING EXAMPLE
 */

 /*var a = 'Hello!';
 first();

 function  first() {
   var b = 'Hi!';
   second();

   function second() {
     var c = 'Hey!';
     third()
   }
 }

function third() {
  var d = 'John';
  //console.log(c);
  console.log(a+d)
}*/

/*********************************************************************************
 * THE "THIS" KEYWORD
 */

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2016 - this.yearOfBirth);

    // inner function used to show that console.logging 'this' in a declaritive function will have 'this'
    // attached to the window not the object vs console log this in john object, 'this will be attached to object'
    //'this' is only assigned a value when the object calls the method
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  }
}

john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1994
};

// Borrowing  function calculateAge from john and using it for mike.
mike.calculateAge = john.calculateAge;
mike.calculateAge();


