module.exports = function toReadable (number) {

    if(number==0) return "zero"
    let sign = number<0 ? "minus " : "";
    number = number>0 ? number : -number;

    let divisions = [null, "thousand", "million", "billion"];
    let humanFormat = "";
    for(let i=0;number>0;i++){
      humanFormat = hundredsToHumanFormat(number%1000) 
                  + (divisions[i] ? (" " + divisions[i]) : "") 
                  + (humanFormat ? (" "+ humanFormat) : "");
      number = Math.floor(number/1000);
    }
    return sign + humanFormat;
   // return sign + hundredsToHumanFormat(number);

  function digitsToHumanFormat(num){
    switch(num){
        case 1: return "one";
        case 2: return "two";
        case 3: return "three";
        case 4: return "four";
        case 5: return "five";
        case 6: return "six";
        case 7: return "seven";
        case 8: return "eight";
        case 9: return "nine";
    }
  }

  function teensToHumanFormat(num){
    if(num<10) return digitsToHumanFormat(num);
    switch(num){
        case 10: return "ten";
        case 11: return "eleven";
        case 12: return "twelve";
        case 13: return "thirteen";
        case 15: return "fifteen";
        case 18: return "eighteen";
        default: return digitsToHumanFormat(num%10) +"teen";
    }
  }

  function tensToHumanFormat(num){
    if(num<20) return teensToHumanFormat(num);
    let temp = "";
    switch(Math.floor(num/10)){
        case 2: temp = "twenty";
        break;
        case 3:  temp ="thirty";
        break;
        case 4: temp = "forty";
        break;
        case 5: temp = "fifty";
        break;
        case 8: temp = "eighty";
        break;
        default: temp = digitsToHumanFormat(Math.floor(num/10)) +"ty";
    }
    return num%10>0 ? temp + " " + digitsToHumanFormat(num%10) : temp;
  }

  function hundredsToHumanFormat(num){
    if(num<100) return tensToHumanFormat(num);
    let temp = digitsToHumanFormat(Math.floor(num/100)) + " hundred";
    return num%100==0 ? temp : temp + " " + tensToHumanFormat(num%100);
  }










}

