let exemple_numbers = [];
let exemple_string = [];

let some_array = [
    "Пример строки",
    7,
    [9, "вложенный массив", 18],
    "Еще один пример",
    24,
    12.7,
    "28"
];

for (i=0; i<some_array.length; i++) {

        if (typeof(some_array[i]) === String) {
            exemple_string.push(some_array[i]);
        } 
        else if (typeof(some_array[i]) === Number) {
            exemple_numbers.push(some_array[i]);
        }
}
console.log(exemple_string);
console.log(exemple_numbers);
