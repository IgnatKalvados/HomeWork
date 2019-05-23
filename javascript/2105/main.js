
let answer = [
 str=[],
 num=[]
];
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
    if (typeof(k) === "object")  { 
    
        for (i=0; i<k.length; i++) {    
                if (typeof(i) === "string") {
                answer[0].push(i);
                } 
            else if (typeof(i) === "number") {
                    answer[1].push(i);
                }
                
        }  
    }
    else if (typeof(k) === "string") {
        answer[0].push(k);
        } 
    else if (typeof(k) === "number") {
            answer[1].push(k);
        }
}

    document.write(str);
    document.write("</br>" + num);



