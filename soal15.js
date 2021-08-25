function f(num) {
  let triangle = "";
  let invertedTriangle = "";

  for(let i = num; i > 0; i--) {
    for(let k = 0; k <= num - i; k ++){
      invertedTriangle += " ";
    }
    for(let j = 0; j < i ; j++) {
      invertedTriangle += "* ";
    } 
    invertedTriangle += "\n";
  }

  for(let i = num - 1; i > 0; i--) {
    for(let j = 0; j < i ; j++) {
      triangle += " ";
    } 
    for(let k = 0; k <= num - i; k ++){
      triangle += "* ";
    }
    triangle += "\n";
  }

  return invertedTriangle + triangle;
}

console.log(f(5));
