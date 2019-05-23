
let answer = [
 str=[],
 num=[]
];
let arr = [
    "Пример строки",
    7,
    " Еще один пример",
    24,
    12.7,
    34,
    47,
    " hello"
];

for (i=0; i<arr.length; i++) {    
        if (typeof(arr[i]) === "string") {
        answer[0].push(arr[i]);
        } 
       else if (typeof(arr[i]) === "number") {
            answer[1].push(arr[i]);
        }
        
}

document.write(str);
document.write("</br>" + num);



