let road_first = document.querySelector(".one");
let road_second = document.querySelector(".two");
let red = document.querySelectorAll(".red");
let green = document.querySelectorAll(".green");


let red_buttom = document.querySelector(".red_buttom");

if (road_first.style.backgroundColor = 'null') {

  red_buttom.addEventListener('click', function (){
    road_first.style.backgroundColor = '#ef0404';
    road_second.style.backgroundColor = '#04ef75';

});
  if (road_first.style.backgroundColor = 'ef0404') 
 red_buttom.addEventListener('click', function (){
    road_second.style.backgroundColor = '#ef0404';
    road_first.style.backgroundColor = '#04ef75';
});

}