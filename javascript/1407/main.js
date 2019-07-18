// let md_array = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// let new_array = [];
// function newArr(some_array, array){

//     for(let i=0;i<some_array.length;i++){
       
//        for(let j=0;j<some_array[i].length;j++){
//         array.push(some_array[i][j] )
//        }
//     }

// }
// newArr(md_array, new_array);
// console.log(new_array)

// function calc(int1, int2, dig){
//     if (typeof int1 && typeof int2 === 'number' &&  dig === '+' ){
//         return int1 + int2
//     }
//     else if(typeof int1 && typeof int2 === 'number' &&  dig === '-' ){
//         return int1 - int2
//     }
//     else if(typeof int1 && typeof int2 === 'number' &&  dig === '*' ){
//         return int1 * int2
//     }
//      else if(typeof int1 && typeof int2 === 'number' &&  dig === '/' ){
//         return int1 / int2
//     }
//     else {
//         return "ВВедите число"
//     }
// };
// b = calc(1, 8, '+');
// console.log(b);

// let array = ["Яблоко", "Апельсин", "Груша"];
 
// let new_array = [];

// function newForEach (arr, new_arr){
//     arr.forEach(function(item, i, arr){
//         new_arr.push(item);
//     });
// }
// newForEach(array, new_array);
// console.log(new_array);
let but = document.querySelector('.but');

but.addEventListener('mousedown', function(){
    but.style.backgroundColor = 'red';
});
but.addEventListener('mouseup', function(){
    but.style.backgroundColor = 'blue';
});