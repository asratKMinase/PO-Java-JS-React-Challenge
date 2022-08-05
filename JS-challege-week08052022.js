function repeatString(str, num) {
   
    if (num > 0) {
        return str.repeat(num);
    } else {
        return "";
    }
    }
    console.log(repeatString("**", 3));