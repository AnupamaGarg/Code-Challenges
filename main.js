// CHALLENGE 1: REVERSE A STRING
// ex. reverseString('Welcome') === 'emoclew'

function reverseString(str) {
// const strArray = str.split('');
//     strArray.reverse()
//     return strArray.join();
let revString = '';
 for(let i = str.length - 1; i >= 0; i--) {
  revString = revString + str[i];}
  return revString;        
   }                  

  const output = reverseString('Welcome');
  console.log(output);