var numberOfButtons = document.querySelectorAll(".drum").length;
// selecting all class (.drum) and the its length

for(var i = 0; i < numberOfButtons; i++){
    //looping through all drum classes

    document.querySelectorAll(".drum")[i].addEventListener("click", 
    function (){
        var buttonInnerhtml = this.innerHTML;
        makeSound(buttonInnerhtml);
        btnAnimation(buttonInnerhtml);
        // onClick the inner html do some work
});
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    btnAnimation(event.key);
    // on keypress do same as on click
});

function makeSound(key){
    switch(key){
        case "w" :
            var crash = new Audio('sounds/crash.mp3');
                crash.play();
        break;
        case "a" :
            var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
        break;
        case "s" :
            var snare = new Audio('sounds/snare.mp3');
                snare.play();
        break;
        case "d" :
            var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
        break;
        case "j" :
            var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
        break;
        case "k" :
            var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
        break;
        case "l" :
            var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
        break;

        default:
   console.log(buttonInnerhtml);
       }
}
// switch to select the given keypress

function btnAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 120);
}
// click ya keypress pe pressed class add hogi uske 120milisecond haat jaaegi