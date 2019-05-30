let big = document.querySelector('.main_cat');
let child = document.querySelectorAll('.child_cat');
let c = big.src
for (let i = 0; i<child.length; i++) {
    child[i].addEventListener('mouseover', function (){
        big.src = child[i].src
    });
    child[i].addEventListener('mouseout', function (){
        big.src = c
    });
}

