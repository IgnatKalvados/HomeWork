let n = +prompt("Цикл с for");
for (f=1; n; f*=n--); 
console.log(f);


function factorial(n){
  let res = 1;
  
  while (n--) 
      res *= n + 1
  
  return res;
}
let num =+prompt("Цикл с while");
console.log(factorial(num));