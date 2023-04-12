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
  // Only change code below this line
function rot13(str) {
var arr = [];
  for(var i = 0; i < str.length; i++){
    var code = 0;
    code = str.charCodeAt(i);
    if(code < 65){
      arr.push(String.fromCharCode(code));
    } else{
      code = code + 13;
      if(code > 90){
      code = code % 90 + 65 -1;
      arr.push(String.fromCharCode(code));
    }
      else{
      arr.push(String.fromCharCode(code));
    }
   }
}
  return arr.join("");
}
  //return ;//return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
