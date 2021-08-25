function reverse(str) {
  // using built in function
  return str.split("").reverse().join("");

  //using for loop
  // let result = "";
  // for(let i = str.length - 1; i >= 0; i--) {
  //   result += str[i];
  // }
  // return result;
}

console.log(reverse("hello"));