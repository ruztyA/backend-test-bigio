function chiper(str, num) {
  const huruf = "abcdefghijklmnopqrstuvwxyz";
  str = str.toLowerCase().split(" ");
  let result = "";
  
  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < str[i].length; j++) {
      let check = huruf.includes(str[i][j]);    
      if(check === true) { 
        let indexHuruf = huruf.indexOf(str[i][j]);
        indexHuruf = indexHuruf + num;
        if(indexHuruf > 26) {
          indexHuruf = indexHuruf - 26;
        }
        result += huruf[indexHuruf];
      }
    } result += " ";
  }
  return result;
}

console.log(chiper("chiper", 2));
console.log(chiper("hello worldz", 3));
