
function onMouseEnter(el){
    el.classList.add("highlight");
}

function onMouseLeave(el){
    el.classList.remove("highlight");
}

//Javascript fade animation instead of css
function fadeH2() { 
    let id = setInterval(function(){fade(id)}, 100); 
    margin = 0;
    function fade(intervalID) { 
        var elem = document.getElementsByTagName("h2")[0];
        opacity = Number(window.getComputedStyle(elem).getPropertyValue("opacity")); 
        if (margin < 20) {
            margin = margin +2;
            elem.style.marginLeft = (margin)+"px";
        }
        if (opacity > .25) { 
            opacity = opacity - 0.05; 
            elem.style.opacity = opacity
            
        } 
        if(margin >= 20 && opacity <= .25) { 
            clearInterval(intervalID);
            //Initiate paragraph fade animation to 50%
            let id = setInterval(function(){fadeParagraphs(id)}, 100);  
        } 
    }
} 

//Javascript fade animation instead of css
function fadeParagraphs(intervalID) { 
    var elem = document.getElementsByTagName("p");
    for (var i = 0; i < elem.length; i++) {
        opacity = Number(window.getComputedStyle(elem[i]).getPropertyValue("opacity")); 
        if (opacity > .50) { 
            opacity = opacity - 0.05; 
            elem[i].style.opacity = opacity 
        } else { 
            clearInterval(intervalID); 
        }
    } 
}

document.addEventListener("DOMContentLoaded", function(event) { 
    //Delay class change by 500ms because it loads to fast on my computer for the animation to work
    setTimeout(() => {  document.body.className = "fadein"; }, 500);
    //Assign events to every p
    let pTags = document.getElementsByTagName("p");
    for (var i = 0; i < pTags.length; i++) {
        let curEl = pTags[i]
        curEl.addEventListener("mouseover",function( event ) { onMouseEnter(curEl) });
        curEl.addEventListener("mouseout",function( event ) { onMouseLeave(curEl) });
    }
    //Initiate fade animation on h2 click.
    document.getElementsByTagName("h2")[0].addEventListener("click", fadeH2);
});