function setbg(color)
{
    document.getElementById("textBox").style.background=color
}
function checkInput(event) {
    var keyCode = event.hasOwnProperty('which') ? event.which : event.keyCode;
    if (keyCode == 108 || keyCode == 76) {
        window.open(" ", "_self")
    }else if (keyCode == 109 || keyCode == 77) {
        window.open("#extraText", "_self")
    } else {
        alert("Wrong key")
    }
}
document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("textBox").addEventListener("keypress", checkInput);

})