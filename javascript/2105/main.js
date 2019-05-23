
let answer = [ [], [] ];

let arr = [
    "Пример строки",
    7,
    [" Еще один пример", "пример вложенного массива"],
    24,
    12.7,
    34,
    47,
    "text",
    " hello"
];
for (k=0; k<arr.length; k++) {
    if (arr[k] === "object")  {     
        for (i=0; i<k.length; i++) {    
                if ([i] === "string") {
                answer[0].push(i);
                } 
                else if ([i] === "number") {
                        answer[1].push(i);
                }
                
        }  
    }
    else if (arr[k] === "string") {
        answer[0].push(k);
        } 
    else if (arr[k] === "number") {
            answer[1].push(k);
        }
}

    console.log(answer[0]);
    console.log("</br>" + answer[1]);



