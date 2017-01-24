'use strict';
// Given a string, you have to return a string in which
// each character (case-sensitive) is repeated once.
// if anything but a string is passed to the function,
// return "Ruh roh! That isn't a string!"

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!

// DONE?? Do it with a RegEx! (a 2 line solution is possible)

//

//@group - warmup: // Write functions to sort the following in ascending order. Include at least 1 what if/assumption you are working with:
//var array1 = ["zoe","nicole", "lyric", "nancy", "anna"]; // [Anna","Lyric","Nancy", "Nicole", "Zoe"]
//var array2 = [5,2,7,3]; //[2,3,5,7]
//var array3 = [10,2,100,3]; //[2,3,10,100]

// Stretch, sort this array of objects in ascending order by age.:
//var array4 = [];
//array4[0] = {name: "Zoe", age:10, numDogs:2};
//array4[1] = {name: "Nick", age:2, numDogs:3};
//array4[2] = {name: "Lyric", age:34, numDogs:4};
//array4[3] = {name: "Nancy", age:100, numDogs:1};
//array4[4] = {name: "Anna", age:7, numDogs:2};
//array4[5] = {name: "Edward", age:59, numDogs:0};

//function agnosticSort (inputArr) {

  // return (inputArr.sort(function(a, b){return a-b}));

// }

// function ageSorter (inputArr) {
//   var returnArr = [];
//   var passArr = [];
//   var smallestAge = 100000;
//   var smallestAgeIndex = 0;
//
//   if (inputArr.length === 1) {
//     return inputArr;
//   }
//
//
//   for (var i = 0; i < inputArr.length; i++) {
//
//     if (inputArr[i].age < smallestAge) {
//       smallestAge = inputArr[i].age;
//       smallestAgeIndex = i;
//     }
//   }
//   returnArr[0] = inputArr[smallestAgeIndex];
//   passArr = inputArr.splice(smallestAgeIndex, 1);
//
//   return (returnArr.concat(ageSorter(passArr)));
//
// }
//
// var array1 = ["zoe", "nicole", "lyric", "nancy", "anna"];
// var array2 = [5, 2, 7, 3];
// var array3 = [10, 2, 100, 3];
// var array4 = [
//  {name: "Zoe", age:10, numDogs:2}, {name: "Nick", age:2, numDogs:3}, {name: "Lyric", age:34, numDogs:4}, {name: "Nancy", age:100, numDogs:1}, {name: "Anna", age:7, numDogs:2}, {name: "Edward", age:59, numDogs:0} ];

// console.log(agnosticSort(array1));
// console.log(agnosticSort(array2));
// console.log(agnosticSort(array3));
// console.log(ageSorter(array4));



// Part 1: Write a function that takes an object that has dogs and
// their ages and returns an object with the ages(as integers)
// converted to dog years (multiply each age by 7).
// Example: {'sparky': 1, 'zion':3, 'henry':5, 'lucky':8}
// will return {'sparky': 7, 'zion':21, 'henry':35, 'lucky':56}

// var dogs = {'sparky': 1, 'zion':3, 'henry':5, 'lucky':8};
//
//
// function dogYears (dogObj) {
//   var returnDogs = {};
//
//   for (var k in dogObj) {
//     returnDogs[k] = dogObj[k] * 7;
//
//   }
//   return returnDogs;
// }
//
// function displayDogNames (dogObj) {
//
//   for (var k in dogObj) {
//     console.log(k);
//   }
// }
//
// console.log(dogYears(dogs));
// displayDogNames(dogs);

// Define a JavaScript function add that can be used like so:

// add(1)(1);   // returns 2
// add(20)(20); // returns 40
//
// function add (num1) {
//   return function (num2) {
//     return (num1 + num2);
//   };
// }
//
// console.log(add(1)(1));
// console.log(add(20)(20));
// console.log(add(7)(13));

// Write a function that takes two numbers and multiplies them without using *
//Stretch: write a curried version

// Write a function that takes two arrays and returns a new array with all items in alphabetical order.

// function multiplyWithoutAst (num1, num2) {
//   var returnNum = 0;
//
//   if (num1 === 0 || num2 === 0) {
//     return 0;
//   }
//
//   if (num2 > 0) {
//
//     for (var i = 0; i < num2; i++) {
//       if (num1 > 0) {
//         returnNum = returnNum + num1;
//       } else {
//         returnNum = returnNum - Math.abs(num1);
//       }
//     }
//   } else {
//     for (var j = 0; j > num2; j--) {
//       if (num1 >0) {
//         returnNum = returnNum - Math.abs(num2);
//       } else {
//         returnNum = returnNum + Math.abs(num2);
//       }
//     }
//   }
//
//   return returnNum;
// }
//
// console.log(multiplyWithoutAst(2,2));
// console.log(multiplyWithoutAst(2,-2));
// console.log(multiplyWithoutAst(-2,2));
// console.log(multiplyWithoutAst(-2,-2));
//
// function mutliplyCurry (num1) {
//   return function (num2) {
//     var returnNum = 0;
//     if (num1 === 0 || num2 === 0) {
//       return 0;
//     }
//     for (var i = 0; i < Math.abs(num2); i++) {
//       returnNum = returnNum + Math.abs(num1);
//     }
//     if (((num1 < 0) && (num2 > 0)) || ((num1 > 0) && (num2 < 0))) {
//       returnNum = returnNum - returnNum - returnNum;
//     }
//     return returnNum;
//   };
// }
//
// console.log(mutliplyCurry(2)(2));
// console.log(mutliplyCurry(2)(-2));
// console.log(mutliplyCurry(-2)(2));
// console.log(mutliplyCurry(-2)(-2));
//
// function concatAndAlpha (arr1, arr2) {
//   var returnArr = arr1.concat(arr2);
//
//   returnArr = returnArr.sort();
//
//
// }
//
// function test() {
//
//   // console.log(x);
//
//   x = 1;
//   var x;
//
//   console.log(x);
//
// }
//
// test();


var count = 0;
var verifiedCount = 0;

function userCount () {


  count++;
  return count;
}

function verifiedUserCount() {
  verifiedCount++;
  return verifiedCount;
}

console.log(userCount());
console.log(userCount());
console.log(userCount());
console.log(userCount());
console.log(userCount());

console.log(verifiedUserCount);
console.log(verifiedUserCount);
console.log(verifiedUserCount);
