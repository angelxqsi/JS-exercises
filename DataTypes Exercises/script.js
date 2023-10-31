let challenge = '30DaysOfJavaScript';

// Print the string on the browser console
console.log(challenge);

// Print the length of the string on the browser console
console.log(challenge.length);

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())

// Cut (slice) out the first word of the string using substr()
console.log(challenge.substring(2))

// Slice out the phrase "DaysOfJavaScript" from "30DaysOfJavaScript"
console.log(challenge.slice(2))

// Check if the string contains the word 'Script' using includes() method
console.log(challenge.includes('Script'))

// Split the string into an array using split() method
console.log(challenge.split(''))

// Split the string "30DaysOfJavaScript" at the space using split() method
console.log(challenge.split(' '))

// Split the string 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon' at the comma and change it to an array
let companies = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon';
console.log(companies.split(','))

// Change "30DaysOfJavaScript" to "30DaysOfNode" using replace() method
console.log(challenge.replace('JavaScript', 'Node'))

// Character at index 15 using charAt() method
console.log(challenge.charAt(15))

// Character code of 'J' using charCodeAt() method
console.log(challenge.charCodeAt(11))

//Use indexOf to determine the position of the first occurrence of 'a' in 30DaysOfJavaScript
console.log(challenge.indexOf('a'))


//Use lastIndexOf to determine the position of the last occurrence of 'a' in 30DaysOfJavaScript
console.log(challenge.lastIndexOf('a'))


//Use indexOf to find the position of the first occurrence of the word 'because' in the given sentence
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'))

//Use lastIndexOf to find the position of the last occurrence of the word 'because' in the given sentence
console.log(sentence.lastIndexOf('because'))

//Use search to find the position of the first occurrence of the word 'because' in the given sentence
console.log(sentence.search('because'))

//Use trim() to remove any trailing whitespace at the beginning and the end of a string
let stringWithWhitespace = '   30DaysOfJavaScript   ';
console.log(stringWithWhitespace.trim()); 

//Use startsWith() method with the string 30DaysOfJavaScript and make the result true
console.log(challenge.startsWith('30DaysOf'))

//Use endsWith() method with the string 30DaysOfJavaScript and make the result true
console.log(challenge.endsWith('JavaScript'))

//Use match() method to find all the 'a's in 30DaysOfJavaScript
console.log(challenge.match(/a/g))

//Use concat() and merge '30DaysOf' and 'JavaScript' to a single string, '30DaysOfJavaScript'
console.log('30DaysOf'.concat('JavaScript'))

// Use repeat() method to print 30DaysOfJavaScript 2 times
console.log(challenge.repeat(2))















