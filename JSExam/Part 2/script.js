document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("change").onclick = changeStyle;

    function selector() {
        let run = true;
        let answer = "";
        while(run){
            answer = prompt("p1 or p2?", "p1")
            if (answer == "p1" || answer == "p2") run=!run;
        }
        return answer;
    }

    function fontInput() {
        let answer = prompt("Font size in pixels?", "34");
        return parseInt(answer);
    }

    function fontFaceInput() {
        let answer = prompt("What font to use?", "Times New Roman");
        return answer;
    }

    function changeStyle(){
        let selection = selector();
        let fontsize = fontInput();
        let font = fontFaceInput();
        let element = document.getElementById(selection)

        element.style.fontSize = fontsize+"px";
        element.style.fontFamily = font;
    }
});