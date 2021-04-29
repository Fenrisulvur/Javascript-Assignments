document.addEventListener("DOMContentLoaded", function(event) { 
    let defaultSize = 28;
    let increment = 2;
    let pElem = document.getElementById("paragraph");
    document.getElementById("increase").onclick = increaseTextSize;
    document.getElementById("default").onclick = defaultTextSize;
    document.getElementById("decrease").onclick = decreaseTextSize;


    function increaseTextSize() {
        var fontSize = parseFloat(window.getComputedStyle(pElem).getPropertyValue('font-size'))
        pElem.style.fontSize = (fontSize+increment)+'px'
    }

    function defaultTextSize() {
        var fontSize = parseFloat(window.getComputedStyle(pElem).getPropertyValue('font-size'))
        pElem.style.fontSize = (defaultSize)+'px';
    }

    function decreaseTextSize() {
        var fontSize = parseFloat(window.getComputedStyle(pElem).getPropertyValue('font-size'))
        pElem.style.fontSize = (fontSize-increment)+'px';
    }


});