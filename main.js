

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