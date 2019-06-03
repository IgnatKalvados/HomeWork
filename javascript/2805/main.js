let road_first = document.querySelector(".one");
let road_second = document.querySelector(".two");
let red = document.querySelectorAll(".red");
let green = document.querySelectorAll(".green");
let light1 = document.querySelector(('b2', 'green'),('a2','green'), ('b1', 'red'),('a1','red'));
let light2 = document.querySelector(('b1', 'green'),('a1','green'), ('b2', 'red'),('a2','red'));

let red_buttom = document.querySelector(".red_buttom");

red_buttom.addEventListener('click',function(){
    if(this.classList.contains('active')){
        road_first.style.background = "#ef0404";
        road_second.style.background='#04ef75';
        this.classList.remove('active');
    } 
    else{
        road_second.style.background='#ef0404';
        road_first.style.background='#04ef75';
        this.classList.add('active');
    }   
});