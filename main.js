

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

// function isAnagramx (str1,str2){
//   const arr1 = str1.split('').sort()
//   const arr2 = str2.split('').sort()
//   return arr1.every((value,index) => value === arr2[index])
// }

// const IsAnagramx = isAnagramx();
// console.log(IsAnagramx);



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
const AddAll = addAll(4,2,5,6);
console.log(AddAll);


//CHALLENGE 11: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  let total = 0;

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}

const SumAllPrimes = sumAllPrimes(20);
console.log(SumAllPrimes);

// CHALLENGE 12: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;

  arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

  return [evenSum, oddSum];
}
const EvenOddSums = evenOddSums([50, 60, 60, 45, 71]);
console.log(EvenOddSums);


// CHALLENGE 13: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// missingLetters("abcefgh") == "d"

function missingLetters(str) {
  let compare = str.charCodeAt(0);
  let missing;

  str.split('').map((char, i) => {
    if (str.charCodeAt(i) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

const MissingLetters = missingLetters("abcefgh");
console.log(MissingLetters);



//Challenhe 14: Remove duplicates from array
// ex:  a = [1,2,3,2,4,1,5,,8] == [1,2,3,4,5,8]


let a = [1,2,3,2,4,1,5,,8]

let b = []
let len = a.length // it will reduce the effort of calculating length on each iteration.
for (let i=0;i<len;i++){
  if(b.indexOf(a[i])== -1){
    b.push(a[i])
  }

}

console.log(b);

///////////////////////////////////////////////////////////
// CHALLENGE 15: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(arr) {
  const args = Array.from(arguments);

  function filterArr(arr) {
    // Return true if NOT in array
    return args.indexOf(arr) === -1;
  }

  return arr.filter(filterArr);
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));

////////////////////////////////////////////////////////////////

//Challenge 16 : Convert Minutes to Seconds

function convert1(input) {
  var parts = input.split(':'),
      minutes = Number(parts[0]),
      seconds = Number(parts[1]);
  return (minutes * 60 + seconds).toFixed(3);
}

console.log(convert1('1:29.460')); 


// Challenge 17: Program for Fibonacci numbers
//The Fibonacci numbers are the numbers in the following integer sequence.
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..
function fibonacci(n){
let arr = [0,1];
for (let i = 2; i < n+1; i++) {
    arr.push((arr[i-2]) + (arr[i - 1]));
}
return arr[n];
}
console.log(fibonacci(10));

//Challenge 16 : Convert hour to Seconds
function convert2(input) {
  var parts = input.split(':'),
      hours = Number(parts[0]),
      minutes = Number(parts[1]),
      seconds = Number(parts[2]);
  return (hours * 60 * 60 + minutes * 60 + seconds).toFixed(3);
}

console.log(convert2('1:29:46')); 


//Challenge 17 Return first element from Array.

var Array = ['First','second','Third','fourth','fifth']
alert(Array[0]);

// Challenge 18 Is the string empty?

var str ="";

function isEmpty(str){
  if (str.length === 0){
    return true;
    
    }else{
      return false;
  }
}
console.log(isEmpty(""));

// Challenge 19 find the factorial

//use recursive function

const factorial = num => {
  return num === 1 ? 1 : num * factorial(num - 1);
}

console.log(factorial(4));


//Challenge 18 Eliminate duplicate no from array by using hashtable

// eliminate duplicate no from array
//always use hash table

const duplicate = arr => {
  var hashTable = {};
  for (let i = 0; i < arr.length; i++) {
      if(hashTable[arr[i]] === 1)
      {
          arr.splice(i,1);
          --i;
      }
      else
          hashTable[arr[i]] = 1;
  }
  return arr;
}

const array = [3,5,3,2,34,6,2,6,3,56,4,87];
console.log(array);
console.log(duplicate(array));


//Challenge 19 Convert float to binary

const convert = num => {
  var binary=[];
  wholeNum = Math.floor(num);
  while(wholeNum > 0)
  {
      binary.push(wholeNum%2);
      wholeNum = Math.floor(wholeNum / 2);

  }
  var frac = num - Math.floor(num);
  var bin = [];
  for (let i = 0; i < 10 || frac ===  0; i++) {
      frac = frac*2;
      bin.push(Math.floor(frac));
      frac = frac - Math.floor(frac);
  }
  console.log(bin);

  return binary.reverse().join("") +"."+ bin.join("");
}


console.log(convert(28.12));



// Challenge 20 Replace each space with %20
//in a given string

const replace = str => {
  var newstring = "";

  for(var i = 0; i < str.length; i++){
      if(str[i] == " ")
          newstring +=  "%20";
      else
          newstring +=  str[i];
      }
  return newstring;
}


console.log(replace("a d f"));

//Challenge 21 :You will be given an array of several arrays that each contain integers and your goal is to
//write a function that will sum up all the numbers in all the arrays. For example,if the
//input is [[3, 2], [1], [4, 12]] then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22.


function sum_array(arr) {

  // store our final answer
  var sum = 0;

  // loop through entire array
  for (var i = 0; i < arr.length; i++) {

    // loop through each inner array
    for (var j = 0; j < arr[i].length; j++) {

      // add this number to the current final sum
      sum += arr[i][j];

    }

  }

  return sum;

}

console.log(sum_array([[3, 2], [1], [4, 12]]));

// CHALLENGE 22: REVERSE A STRING
// ex. reverseString('Welcome') === 'emoclew'
function reverseString(str) {
let reverseStr = '';
for (let i = str.length - 1; i >= 0; i--) {
  reverseStr= reverseStr + str[i];
 }
return reverseStr;
}

console.log(reverseString("Welcom"));


//Challenge 23: Finding the first non-repeated character