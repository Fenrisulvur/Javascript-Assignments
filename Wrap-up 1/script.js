//Toggles a <p> between its first and second class
function swapClass(id, classPrefix) {
    let el = document.getElementById(id);
    if (el.className == classPrefix+"-1") {
        el.className = classPrefix+"-2";
    } else {
        el.className = classPrefix+"-1";
    }
}

//Changes class of <p> if it contains a word searched for
function assignByWord(searchText) {
    let pTags = document.getElementsByTagName("p");
    for (var i = 0; i < pTags.length; i++) {
        if (pTags[i].textContent.search(searchText) != -1) {
            assign(pTags[i], searchText);
            break;
        }
    }
}

//Assigns the class from above function
function assign(target, searchText) {
    switch (searchText) {
        case "one":
            target.className = "one-1";
            break;
        case "two":
            target.className = "two-1";
            break;
        case "three":
            target.className = "three-1";
            break;
        case "four":
            target.className = "four-1";
            break;
        case "five":
            target.className = "five-1";
            break;
    }
}

//check if the key is 1-5 then swap the respective <p>
function checkInput(event) {
    var keyCode = event.hasOwnProperty('which') ? event.which : event.keyCode;
    //alert(keyCode);

    if (keyCode == 49) { //1
        swapClass("1","one")
    } else if (keyCode == 50) { //2
        swapClass("2","two")
    } else if (keyCode == 51) { //3
        swapClass("3","three")
    } else if (keyCode == 52) { //4
        swapClass("4","four")
    } else if (keyCode == 53) { //5
        swapClass("5","five")
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    document.addEventListener('keypress', checkInput);
    assignByWord("one");
    assignByWord("two");
    assignByWord("three");
    assignByWord("four");
    assignByWord("five");
})