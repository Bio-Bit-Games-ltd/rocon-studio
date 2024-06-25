











export function animation(){

    const playAnimationButton = document.getElementById("play-animation");
    const needle = document.getElementById("needle");
    const forwardAnimationButton = document.getElementById("forward-animation");
    const trackRuler = document.getElementById("track-ruler");
    const pauseAnimationButton = document.getElementById("pause-animation");

    let needleLeft = 0;

    function playAnimation(state){
        if (state){

            setInterval(() => {
                needleLeft++;
                needle.style.left = `${needleLeft}px`
            }, 10);         

            if (needle.style.left >= trackRulers.style.width){
                needleLeft = 0;
            }
             
        }
    }

    playAnimationButton.addEventListener("click",function(){
        playAnimation(true);
    })

    pauseAnimationButton.addEventListener("click",function(){
        playAnimation(false);
    })

}