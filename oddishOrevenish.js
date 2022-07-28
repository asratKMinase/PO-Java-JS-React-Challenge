const oddish_evenish = (number) => {
    let array = number.toString();
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += parseInt(array[i]);
    }
    
    if (sum % 2 === 0) {
      return "Evenish";
    } else{
      return "Oddish";
    }
  };
  
  console.log(oddish_evenish(10));
  console.log(oddish_evenish(1111));
  console.log(oddish_evenish(4655));