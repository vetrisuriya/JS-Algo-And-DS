function telephoneCheck(str) {
  
    let regex = /^([1][\s]?)?(\([\d]{3}\)[\s]?|[\d]{3})[-\s]?(\([\d]{3}\)[\s]?|[\d]{3})[-\s]?[\d]{4}$/;
    let result = regex.test(str);
  
    return result;
  
  }
  
  telephoneCheck("555-555-5555");