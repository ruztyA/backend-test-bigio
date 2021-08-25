const input = ["P", "H", "O", "B", "I", "A"];

function palindrome(str) {
  // str = str.replace(/[^a-z]/gi, "");  
  let newStr = "";
  for(let i = 0; i < str.length; i++) {
    newStr += str[i];
  }
  let reverseStr = "";
  for(let i = str.length - 1 ; i >= 0; i--){
    reverseStr += str[i];
  }
  return newStr + reverseStr.slice(1);
}

console.log(palindrome(input));

// ===========================================================

const inputString = "P, H, O, B, I, A";

function palindromeStr(str) {
  str = str.replace(/[^a-z]/gi, "");  
  let newStr = "";
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== ","){
      newStr += str[i];
    }
  }
  let reverseStr = "";
  for(let i = str.length - 1 ; i >= 0; i--){
    if(str[i] !== ","){
      reverseStr += str[i];
    }
  }
  return newStr + reverseStr.slice(1);
}

console.log(palindromeStr(inputString));
