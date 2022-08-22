let numberOfButtons = document.querySelectorAll(".button").length;

for(let i=0; i< numberOfButtons; i++){
    document.querySelectorAll(".button")[i].addEventListener('click',function(){
        let buttonStyle = this.innerHTML;
        playSound(buttonStyle);
       animation(buttonStyle);
    });
}
document.addEventListener('keypress',function(event){
    playSound(event.key);
    // animation(event.key);
});
function playSound(key){
    switch(key){
        case "1":
            let sound1 = new Audio("sounds/01- CLAP.mp3");
            sound1.play();
            break;
        case "2":
            let sound2 = new Audio("sounds/02- HITHAT.mp3");
            sound2.play();
            break;
        case "3":
            let sound3= new Audio("sounds/03- KICK.mp3");
            sound3.play();
            break;
        case "4":
            let sound4= new Audio("sounds/04-OPENHAT.mp3");
            sound4.play();
            break;
        case "5":
            let sound5= new Audio("sounds/05- BOOM.mp3");
            sound5.play();
            break;
        case "6":
            let sound6= new Audio("sounds/06-RIDE.mp3");
            sound6.play();
            break;
        case "7":
            let sound7= new Audio("sounds/07- SNARE.mp3");
            sound7.play();
            break;
        case "8":
            let sound8= new Audio("sounds/08- T0M.mp3");
            sound8.play();
            break;
        case "9":
            let sound9= new Audio("sounds/09- TINK.mp3");
            sound9.play();
            break;
        default: return;
    }
    
}