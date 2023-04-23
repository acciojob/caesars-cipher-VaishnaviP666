// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
  let decodedArr = []; // Your Result goes here
  var re = new RegExp("[a-z]", "i");
  var min = 'A'.charCodeAt(0);
  var max = 'Z'.charCodeAt(0);
  var factor = 13;
  var result = "";
  str = str.toUpperCase();
  
  for (var i=0; i<str.length; i++) {
    result += (re.test(str[i]) ?
      String.fromCharCode((str.charCodeAt(i) - min + factor) % (max-min+1) + min) : str[i]);
  }
  
  return result;


//module.exports = rot13;
