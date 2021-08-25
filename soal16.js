function f(num) {
  let result = "";
  for(let m = 1; m <= num; m++) {
    for(let n = 1; n <= num; n++) {
      if(n > m) {
        result += " ";
      } else {
        result += n;
      }
    }
    for(let n = num - 1; n >= 1; n--) {
      if(n <= m) {
        result += n;
      } else {
        result += " ";
      }
    }
    result += "\n";
  } 
  
  for(let m = num - 1; m > 0; m--) {
    for(let n = 1; n < num; n++) {
      if(n > m) {
        result += " ";
      } else {
        result += n;
      }
    }
    for(n = num; n >= 1; n--){
      if(n > m) {
        result += " ";
      } else { 
        result += n;
      }
    }
  result += "\n";
  }
   
  return result;
}

console.log(f(5));

