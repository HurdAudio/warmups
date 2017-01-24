'use strict';

//Find the only element in an array that only occurs once. For example in //[1,2,2,3,3,5,5,1,6], 6 is the only element that occurs precisely one time.

function onlyUnique (arr) {
  var value;
  var isUnique = false;
  var returnArray = [];

  for (let i = 0; i < arr.length; i++){
    value = arr[i];
    isUnique = true;
    for (let j = 0; j < arr.length; j++) {
      if ((arr[j] === value) &&(j !== i)) {
        isUnique = false;
      }
    }
    if (isUnique === true) {
      returnArray.push(value);
    }

  }
  return returnArray;
}

var testArray = [1,2,2,3,3,5,5,1,6];

console.log(onlyUnique(testArray));

var otherTestArray = ['welcome', 666, 'orange jolly ranchers', 666, 'welcome', 'tootsie rolls', 55];

console.log(onlyUnique(otherTestArray));

var yetAnotherTestArray = ['Dracula', 'Pudding', 'Swamp Creature', 'American Maid', 'Dracula', 'Bigfoot', 'Baby Spider', 'Pudding', 'American Maid', 'Captain Russia', 'Swamp Creature', 'Dracula'];

console.log(onlyUnique(yetAnotherTestArray));

var testCaseArray = [666, 44, 88, 347, 88, 347, 44, 123, 456, 456, 123];

console.log(onlyUnique(testCaseArray));
