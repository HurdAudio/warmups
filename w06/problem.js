'use strict';

// Query strings are often used to pass data from one "page" to another, through the URL. The query string is a list of key-value pairs at the end of a URL. The query string always starts with a ?, and the key-value pairs are separated by &'s. Take a look at the following examples:
//
// http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA
//
// http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week
//
// Write a function called parseQueryString which takes a URL string as an argument and returns a Javascript object containing the key-value pairs from the query string. For example:
//
// parseQueryString("http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA")
//
// //=> {find_desc: "tacos", find_loc: "San+FranciscoCA"}
//
// parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week")

function parseQueryString (urlString) {
  var returnObj = {};
  var keyString = '';
  var keyValueString = '';
  var index = 0;

  do {
    ++index;
  } while ((urlString[index] !== '?') && (index < urlString.length));

  if (urlString[index] === '?') {
    ++index;
    do {
      do {
        keyString += urlString[index];
        ++index;
      } while ((urlString[index] !== '=') && (index < urlString.length));
      if (urlString[index] === '=') {
        ++index;
        do {
          keyValueString += urlString[index];
          ++index;
        } while ((urlString[index] !== '&') && (index <urlString.length));
      }
      // for (let i = 0; i < keyValueString.length; i++) {
      //   if (keyValueString[i] === '+') {
      //     keyValueString[i] = ' ';
      //   }
      // }
      returnObj[keyString] = keyValueString;
      keyString = '';
      keyValueString = '';
      if (urlString[index] === '&') {
        ++index;
      }
    } while (index < urlString.length);
  }
  return (returnObj);

}

console.log(parseQueryString("http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA"));

console.log(parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week"));





//=> {q: "dogs", sort: "top", t: "week"}
// // Write a function that takes 2 inputs. One input is an array and the second input is a callback function.
//
// // The callback function will expect three inputs:
// // currentValue: The current element being processed in the array.
// // index: The index of the current element being processed in the array.
// // array: The array map was called upon.
//
// // Your myMap function should return an array.
//
// function callbackFnc (element, index, array) {
//   var returnValue = element;
//   var returnArray = [];
//   returnArray[index] = returnValue
//   return (returArray);
// }
//
// function myMap(array, callbackFnc){
//   //WRITE CODE HERE
//   for (let i=0; i < array.length; i++) {
//     array = callbackFnc(array[i], i, array);
//
//   }
//   return (array);
//   // return array.map(callbackFnc); // this solution is off limits :)
// }
//
// var numArray = [1,2,3,4];
//
// //Write a callback function that is passed to myMap that will return the given input plus 4.
// var addedArray = myMap(numArray,function(){
//   //WRITE CODE HERE
//   var returnArray = [];
//   for (let i = 0; i < numArray.lenth; i++) {
//     returnArray[i] = numArray[i] + 4;
//   }
//   return (returnArray);
// });
//
// // Write a callback function that is passed to myMap that will return a string like "The Person at index 0 owes $1"
// var dollarArray = myMap(numArray, function(){
//   //WRITE CODE HERE
//   var returnString = '';
//
//
//
// })
//
// console.log(addedArray); // [5,6,7,8]
// console.log(dollarArray);
// // [ 'The Person at index 0 owes $1',
// //   'The Person at index 1 owes $2',
// //   'The Person at index 2 owes $3',
// //   'The Person at index 3 owes $4' ]
