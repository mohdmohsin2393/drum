// Method #1

// document.querySelector("button").addEventListener("click", tapped);
//
// function tapped(){ //With function name
// alert("you tapped me");
// }

// Method #2
// document.querySelectorAll("button")[0].addEventListener("click", function(){ //without function is called Anonymous function
//   alert("You Again tapped Me");
// });


// Method #3

var x = document.querySelectorAll(".drum").length;
for (var i = 0; i < x; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    // alert("you have clicked me!");

  });
}

function tom1(){
  var audio = new Audio('sounds/tom-1.mp3');
  audio.play();
}

function tom2(){
  var audio = new Audio('sounds/tom-2.mp3');
  audio.play();
}

function tom3(){
  var audio = new Audio('sounds/tom-3.mp3');
  audio.play();
}

function tom4(){
  var audio = new Audio('sounds/tom-4.mp3');
  audio.play();
}

function snare(){
  var audio = new Audio('sounds/snare.mp3');
  audio.play();
}

function crash(){
  var audio = new Audio('sounds/crash.mp3');
  audio.play();
}

function kick(){
  var audio = new Audio('sounds/kick-bass.mp3');
  audio.play();
}
