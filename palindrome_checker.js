function palindrome(str) {

    let regex = /[\W_]/g;
    let cleanedStr = str.replace(regex, '').toLowerCase();
  
    let turnedToArr = cleanedStr.split("");
    let count = turnedToArr.length;
  
    for(let i=0; i<count; i++) {
      
      let tempCount = (count-1) - i;
  
      if(turnedToArr[i] !== turnedToArr[tempCount]) {
        return false;
      }
  
    }
  
    return true;
  
  }
  
  palindrome("nope");