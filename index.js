var i;
var n = document.querySelectorAll(".drum").length;

for(i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function ()
{
    var butval = this.innerHTML;
    makesound(butval);

    
});

document.querySelectorAll(".drum")[i].addEventListener("keydown",function (e)
{
    var butval = e.key;

    makesound(butval);

});

}




function makesound(key){
    switch(key){

        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();

        break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;

        default:
            console.log();

    }
}





