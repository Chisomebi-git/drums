// Alert for Title Drum Kit
document.querySelector("#title").addEventListener("click", function(){alert("I go commot your teeth just now!")});


// Detect Key presses
document.addEventListener("keydown",  function(event){check(event.key)});


// function to makesound on key or click
function check(soundKey){

    switch (soundKey) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log(innerHTML)
            break;

        
    }        
}

// Add addEventListener to buttons

var numberOfDrums = document.querySelectorAll(".set .drum").length;

for (i=0; i <= numberOfDrums; i++){
    document.querySelectorAll(".set .drum")[i].addEventListener("click", function(){

        var ButtonInnerHTML = this.innerHTML;

        check(ButtonInnerHTML);

        
        

    }

)};
