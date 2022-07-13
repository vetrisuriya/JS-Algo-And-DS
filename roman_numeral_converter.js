function convertToRoman(num) {

    let romanNumerals = {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX",
      10: "X",
      20: "XX",
      30: "XXX",
      40: "XL",
      50: "L",
      60: "LX",
      70: "LXX",
      80: "LXXX",
      90: "XC",
      100: "C",
      200: "CC",
      300: "CCC",
      400: "CD",
      500: "D",
      600: "DC",
      700: "DCC",
      800: "DCCC",
      900: "CM",
      1000: "M",
      2000: "MM",
      3000: "MMM"
    };
  
    let numLen = num.toString().length;
    let numArr = num.toString().split("");
    let tempVal = [];
  
    for(let i=0; i<numLen; i++) {
      let numTemp = (numLen-1) - i;
      if(numTemp > 0) {
        let tempStore = numArr[i];
        for(let j=1; j<=numTemp; j++) {
          tempStore = tempStore+""+0;
        }
        tempVal.push(tempStore);
      } else {
        tempVal.push(numArr[i]);
      }
    }
  
    for(let f=0; f<tempVal.length; f++) {
      if(romanNumerals.hasOwnProperty(tempVal[f])) {
        tempVal[f] = romanNumerals[tempVal[f]];
      }
    }
  
    let finalResult = tempVal.filter(fil => {
      return !fil.includes(0);
    })
  
    return finalResult.join("");
  }
  
  convertToRoman(2014);