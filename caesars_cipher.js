function rot13(str) {
    let val1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let val2 = "NOPQRSTUVWXYZABCDEFGHIJKLM".split("");
  
    let value = str.split(" ");
    for(let i=0; i<value.length; i++) {
      let word = value[i].split("");
      for(let j=0; j<word.length; j++) {
        let charPos = val1.indexOf(word[j]);
        if(charPos != -1) {
          word[j] = val2[charPos];
        }
      }
      value[i] = word.join("");
    }
  
    return value.join(" ");
  }
  
  rot13("SERR CVMMN!");