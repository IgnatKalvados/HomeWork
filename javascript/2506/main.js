let arr = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
]
let count = arr.filter(function(el) {
    if(el==1){
      return false;
    }     
    for(let i=2; i*i<=el; i++){  
      if(el % i == 0){
        return false;
      }      
    }
    return el;  
  });
  
 let sumNumbers = count.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  
  console.log(sumNumbers);