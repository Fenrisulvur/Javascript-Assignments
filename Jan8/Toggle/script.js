function setbg(color)
{
    document.getElementById("textBox").style.background=color
}

function largeStyle(){
    document.body.className = "large";
}

function defaultStyle(){
    document.body.className = "";
}

function narrowStyle(){
    document.body.className = "narrow";
}

function checkInput(event) {
    var keyCode = event.hasOwnProperty('which') ? event.which : event.keyCode;
    //alert(""+keyCode);
    if (keyCode == 108 || keyCode == 76) {
        largeStyle();
    } else if (keyCode == 100 || keyCode == 68) {
        defaultStyle()
    } else if (keyCode == 110 || keyCode == 78) {
        narrowStyle()
    } else {
        //alert("Wrong key")
    };
}

document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("textBox").addEventListener("keypress", checkInput);
    document.getElementById("switcher-default").addEventListener("click", defaultStyle);
    document.getElementById("switcher-narrow").addEventListener("click", narrowStyle);
    document.getElementById("switcher-large").addEventListener("click", largeStyle);
})