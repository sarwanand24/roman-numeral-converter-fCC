function convertToRoman(num) {
  var str = "";
  str+=num;
  var strArr = [];
  var romanStr = "";
  var pos = 1;
  if(str[0] > 0){
    for(var i=str.length-1; i>=0; i--){
      if(pos == 1){
        switch(str[i]){
          case "1":
          strArr.unshift("I");
          pos++;
          break;
          case "2":
          strArr.unshift("II");
          pos++;
          break;
          case "3":
          strArr.unshift("III");
          pos++;
          break;
          case "4":
          strArr.unshift("IV");
          pos++;
          break;
          case "5":
          strArr.unshift("V");
          pos++;
          break;
          case "6":
          strArr.unshift("VI");
          pos++;
          break;
          case "7":
          strArr.unshift("VII");
          pos++;
          break;
          case "8":
          strArr.unshift("VIII");
          pos++;
          break;
          case "9":
          strArr.unshift("IX");
          pos++;
          break;
          default:
          pos++;
        }
      }
      else if(pos == 2){
        switch(str[i]){
          case "1":
          strArr.unshift("X");
          pos++;
          break;
          case "2":
          strArr.unshift("XX");
          pos++;
          break;
          case "3":
          strArr.unshift("XXX");
          pos++;
          break;
          case "4":
          strArr.unshift("XL");
          pos++;
          break;
          case "5":
          strArr.unshift("L");
          pos++;
          break;
          case "6":
          strArr.unshift("LX");
          pos++;
          break;
          case "7":
          strArr.unshift("LXX");
          pos++;
          break;
          case "8":
          strArr.unshift("LXXX");
          pos++;
          break;
          case "9":
          strArr.unshift("XC");
          pos++;
          break;
          default:
          pos++;
        }
      }
       else if(pos == 3){
        switch(str[i]){
          case "1":
          strArr.unshift("C");
          pos++;
          break;
          case "2":
          strArr.unshift("CC");
          pos++;
          break;
          case "3":
          strArr.unshift("CCC");
          pos++;
          break;
          case "4":
          strArr.unshift("CD");
          pos++;
          break;
          case "5":
          strArr.unshift("D");
          pos++;
          break;
          case "6":
          strArr.unshift("DC");
          pos++;
          break;
          case "7":
          strArr.unshift("DCC");
          pos++;
          break;
          case "8":
          strArr.unshift("DCCC");
          pos++;
          break;
          case "9":
          strArr.unshift("CM");
          pos++;
          break;
          default:
          pos++;
        }
      }
       else if(pos == 4){
        switch(str[i]){
          case "1":
          strArr.unshift("M");
          pos++;
          break;
          case "2":
          strArr.unshift("MM");
          pos++;
          break;
          case "3":
          strArr.unshift("MMM");
          pos++;
          break;
        }
      }
    }
  }
  console.log(strArr)
  for(var j=0; j<strArr.length; j++){
     romanStr += strArr[j];
  }
  console.log(romanStr)
  return romanStr;
}

convertToRoman(68);
