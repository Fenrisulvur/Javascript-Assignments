document.addEventListener("DOMContentLoaded", function(event) { 
    let defaultSize = 18;
    let maxSize = 24;
    let minSize = 12;
    let pElem = document.getElementById("target");

    document.getElementById("larger").onclick = larger;
    document.getElementById("smaller").onclick = smaller;

    function larger() {
        var fontSize = parseFloat(window.getComputedStyle(pElem, null).getPropertyValue('font-size'))
        if (fontSize < defaultSize) {
            pElem.style.fontSize = (defaultSize)+'px';
        } else {
            pElem.style.fontSize = (maxSize)+'px';
        }
    }

    function smaller() {
        var fontSize = parseFloat(window.getComputedStyle(pElem, null).getPropertyValue('font-size'))
        if (fontSize > defaultSize) {
            pElem.style.fontSize = (defaultSize)+'px';
        } else {
            pElem.style.fontSize = (minSize)+'px';
        }
    }
});
