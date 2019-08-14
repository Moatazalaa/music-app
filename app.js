window.addEventListener("load",()=>{
    const sounds=document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const visual=document.querySelector(".visual");
    const colors=[
        "#60d394",
        "#6260d3",
        "#b860d3",
        "#d3c260",
        "#d36060",
        "#23af17"
        

    ];
    //let play sound
    pads.forEach((pad,index)=>{
        pad.addEventListener("click",function(){
            sounds[index].currentTime=0;
            sounds[index].play();
            createBubbles(index);
        });
    });
    const createBubbles =(index)=>{
        const Bubble =document.createElement("div")
        visual.appendChild(Bubble);
        Bubble.style.backgroundColor=colors[index];
        Bubble.style.animation='jump 1s ease';
        Bubble.createElement('animationend',function(){
            visual.removeChild(Bubble);
        })

    };



});