let big = document.querySelector('.big');
let child = document.querySelectorAll('.child');

for (let i = 0; i<child.length; i++) {
    child[i].addEventListener('mouseover', function (){
        big.src = child[i].src
    });
}