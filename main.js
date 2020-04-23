// CHALLENGE 1: REVERSE A STRING
// ex. reverseString('Welcome') === 'emoclew'

function reverseString(str) {
const strArray = str.split('');
    strArray.reverse()
    return strArray.join();
    
  }

  const output = reverseString('Welcome');
  console.log(output);