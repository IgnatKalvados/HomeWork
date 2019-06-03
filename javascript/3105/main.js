let number = document.querySelector('#a');
let plus = document.querySelector('.plus');
let reset = document.querySelector('.reset');
let count = document.querySelector('.count');
let show_array = document.querySelector('.show_array');

let arr = [];
let b = 1;
let c = 0;

plus.addEventListener('click', function () {
    arr.push(number.value)
});

reset.addEventListener('click', function () {
    number.value='';
});


function mult () {
    for( i=0; i<arr.length; i++){
    b = b*arr[i];
    }

    return b;
}

function division (){
    c = b/arr.length;
    return c;
}

count.addEventListener('click', function(){
    console.log(mult(b));
    console.log(division(c));
});
show_array.addEventListener('click', function(){
    for (let i = 0; i<arr.length; i++){          
        console.log(arr[i]);
    } 
});



















// let a = 0;

// function b(x) {
//     if(arguments.length>0) {
//         for(let i =0; i<arguments.length; i++)
//         if(typeof arguments[i]==="number")
//         a+=arguments[i]
//     }
//     else{
//         a ="нет аргументов";
//     }
//     return a
// };
// console.log(b(1,2,3));