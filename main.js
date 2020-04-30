

var log = function(){console.log()}

// CHALLENGE 1: REVERSE A STRING
// ex. reverseString('Welcome') === 'emoclew'

function reverseString(str) {
    // const strArray = str.split('');
    //     strArray.reverse()
    //     return strArray.join();

    //////////////////////////////////
    // let revString = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     revString = revString + str[i];
    // }
    // return revString;
    //////////////////////////////////

    let revString = '';
    for(let i = 0; i <= str.length - 1; i++) {
      revString = str[i] + revString;
    }
    return revString;

    ////////////////////////

//   let revString = '';
//   for(let char of str) {
//     revString = char + revString;
//   }
//   return revString;

  ///////////////////////

  // let revString = '';
  // str.split('').forEach(char => revString = char + revString);
  // return revString;

  //////////////////////
  
  
  //let arr = [...str];
  //let newArr = arr.map((_, i, arr) => {
  //     return arr[arr.length - 1 - i];
  //   });
  //return newArr.join("");



 // return str.split('').reduce((revString, char) => char + revString, '');
}




const output = reverseString('Welcome');
console.log(output);
////////////////////////////////////////////////////////////////////////////////////////////////

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    const reverseString = str.split('').reverse().join('');
     if(reverseString === str ){
         return true;
        
     }
     else {return false;}
     
    //return revString === str;
  }

  const Palindrome = isPalindrome("hello");
  console.log(Palindrome)
  
  ////////////////////////////////////////////////////////////////////

  // CHALLENGE 3: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
    for(let i =1; i<=100; i++){
    if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbizz")
        }else if (i % 3 === 0){
        console.log("fizz");
    }else if(i % 5 === 0){
       console.log("bizz")
    }else{
       console.log(i)
    }
}
};
const FizzBuzz= fizzBuzz();
console.log(FizzBuzz);

// CHALLENGE 4: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('');

  return parseInt(revString) * Math.sign(int);
}
const ReverseInt = reverseInt(12345)
console.log(ReverseInt)



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('write in capital letters') === 'Write In Capital Letters'
function capitalizeLetters(str) {
    const strArr = str.toLowerCase().split(' ');
  
    for(let i = 0; i < strArr.length; i++) {
     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
     }
  
    return strArr.join(' ');

     /////////////////////////////

  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.substr(1))
  //   .join(' ');

  /////////////////////////////

//   return str.replace(/\b[a-z]/gi, function(char) {
//     return char.toUpperCase();
//   });

}

const CapitalizeLetters = capitalizeLetters('write in capital letters');
console.log(CapitalizeLetters);


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('Madam') == 'a'
function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(function(char) {
        if(charMap[char]) {
          charMap[char]++;
        } else {
          charMap[char] = 1;
        }
      });
    
      for(let char in charMap) {
        // debugger;
        if(charMap[char] > maxNum) {
          maxNum = charMap[char];
          maxChar = char;
        }
      }
    
      return maxChar;
}

const MaxCharacter = maxCharacter('Madam');
console.log(MaxCharacter)

//CHALLENGE 6: LETTER CHANGES
// b should return c and z should return a. It should return the next letter.
function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
        if (char === 'z' || char === 'Z') {
          return 'a';
        } else {
          return String.fromCharCode(char.charCodeAt() + 1);
        }
      });
    
      newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());
    
      return newStr;
}
const LetterChanges = letterChanges("Welcome")
console.log(LetterChanges);// returns xfmdpnf

// CHALLENGE 7: Array Spliting
// Split an array into chunked arrays of a specific length
// ex. splitArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function splitArray(arr, len) {
  
  const splitedArr = [];

  // Loop through arr
  arr.forEach(val => {
    // Get last element
    const last = splitedArr[splitedArr.length - 1];

    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      splitedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return splitedArr;
}
const SplitArr = splitArray([1, 2, 3, 4, 5, 6, 7], 2)
console.log(SplitArr); 



// CHALLENGE 8: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]


function  flatenArray(arr){
  newArr = []
  for( let i = 0 ; i < arr.length ; i++){
      for(let j = 0 ; j < arr[i].length ; j++){
          newArr.push(arr[i][j])
      }
  }
  return newArr
}
const FlatenArray = flatenArray([[1, 2], [3, 4], [5, 6], [7]])
console.log(FlatenArray); 


// CHALLENGE 9 : ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagramx (str1,str2){
  const arr1 = str1.split('').sort()
  const arr2 = str2.split('').sort()
  return arr1.every((value,index) => value === arr2[index])
}

const IsAnagramx = isAnagramx();
console.log(IsAnagramx);



// CHALLENGE 10: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll() {
  var args = Array.prototype.slice.call(arguments);
  var total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}