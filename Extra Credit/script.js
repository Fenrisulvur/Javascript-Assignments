document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("checkSubmit").onclick = onValidateClick;
    
    function showCheck() {
        let buttons = document.getElementsByClassName("metalsCB");
        let selectedString = "";
        Array.prototype.forEach.call(buttons, function(element) {
            if (element.checked){
                selectedString+=element.value+=" ";
            }
        });
        return selectedString; 
    }

    function onValidateClick() {
        let vals = showCheck();
        if (vals == "") {
            alert("Please check at least one metal!");
        } else {
            alert("You selected: "+vals);
        }
    }


});
