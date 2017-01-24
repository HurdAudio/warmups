'use strict';
// Write a function named removeDupes which takes a string and removes
// all duplicate characters in the String. Here are some examples:
//   removeDupes('AABB'); // 'AB'
//   removeDupes('AaAaBbBb'); // 'AaBb'
//   removeDupes('cAtCaT'); // 'cAtCaT'

// Write a function named removeDupesCI which takes a string and removes
// all duplicate characters regardless of capitalization. Here are some examples:
//   removeDupesCI('AABB'); // 'AB'
//   removeDupesCI('AaAaBbBb'); // 'AB'
//   removeDupesCI('cAtCaT'); // 'cAt'


function removeDupes (inputString){

	var trackerObj = new Object();
	var returnString = "";

	for (var i = 0; i < inputString.length; i++) {
		if (trackerObj[inputString[i].toLowerCase()] !== true) {
			trackerObj[inputString[i].toLowerCase()] = true;
			returnString = returnString + inputString[i];
		}
	}
	return returnString;
}

//CI for case insensitive
function removeDupesCI (inputString){

	var trackerObj2 = new Object();
	var returnString2 = "";

	for (var i = 0; inputString.length; i++) {

		if (trackerObj2[inputString[i]] !== true) {

			trackerObj2[inputString[i]] = true;
			returnString2 = returnString2 + inputString[i];
		}
		
	}
	return returnString2;

}

console.log(removeDupes("Bubbly bourbon barrels makes for distilled wisdom of blonde bodybuilders basking in tubs of bangers and mash."));
//console.log(removeDupesCI("Beer Night in Berlin"));
