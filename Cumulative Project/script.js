let audio;
let id;

/*--------------   Functions      ----------------*/
function scrollTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function toggleAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    } 
}

function toggleControls() {
    let div = document.getElementById("audio-div");
    let but = document.getElementById("controlsVisible");
    if (div.className == "show"){
        div.setAttribute("class", "hide")
        but.innerHTML="Show Controls";
    }else{
        div.setAttribute("class", "show")
        but.innerHTML="Hide Controls";
    }
}

function updateVolume(e) {
    if (!isNaN(parseFloat(e.target.value)))
        audio.volume = e.target.value;
}

function updateTime(e) {
    let el = document.getElementById("time");
    let date = new Date(0);
    let time,dur;

    date.setSeconds(e.target.currentTime);
    time = date.toISOString().substr(11, 8);
    date.setSeconds(e.target.duration);
    dur = date.toISOString().substr(11, 8);

    el.innerHTML = time+ "/" +dur  

}

function alterSample() {
    let el = document.getElementById("sample");
    el.style.color = document.getElementById("color").value;
    el.style.fontSize = document.getElementById("font").value;
}

function updateSpeed(e) {
    let el = document.getElementById("anim")
    el.style["-webkit-animation-duration"] = event.target.value + "s";
    el.style["-moz-animation-duration"] = event.target.value + "s";
    el.style["-o-animation-duration"] = event.target.value + "s";
    el.style["animation-duration"] = event.target.value + "s";
}

function updateOpacity(e) {
    document.getElementById("image").style.opacity = e.target.value; 
}

function appendFirst(x,y) {
    y.appendChild(x.firstElementChild);
}

function deleteOld() {
    if (document.getElementById("ul-1").childElementCount > 0)
        document.getElementById("ul-1").firstElementChild.remove()
}

function addNew() {
    let el = document.createElement("li","This is new.");
    el.innerHTML= "ITEM "+Math.floor((Math.random()*100000));
    document.getElementById("ul-1").appendChild(el);
}

function appendLast(x,y) {
    y.appendChild(x.lastElementChild);
}

function transferList(x,y) {
    while (x.childNodes.length) {y.appendChild(x.firstChild);}
}


/*--------------   Input      ----------------*/


function mouseEnter() {
    document.getElementById("eventPara").style.backgroundColor = "red";
}

function mouseLeave() {
    document.getElementById("eventPara").style.backgroundColor = "green";
}
function mouseUp() {
    document.getElementById("eventPara").style["font-family"] = "Arial";
}

function mouseDown() {
    document.getElementById("eventPara").style["font-family"] = "Courier New";
}
function hookMouseEvents(a) {
    if (a){
        document.getElementById("eventPara").addEventListener("mouseover", mouseEnter)
        document.getElementById("eventPara").addEventListener("mouseout", mouseLeave)
        document.getElementById("eventPara").addEventListener("mouseup", mouseUp)
        document.getElementById("eventPara").addEventListener("mousedown", mouseDown)
        document.addEventListener('keypress', checkInput);
    } else {
        document.getElementById("eventPara").removeEventListener("mouseover", mouseEnter)
        document.getElementById("eventPara").removeEventListener("mouseout", mouseLeave)
        document.getElementById("eventPara").removeEventListener("mouseup", mouseUp)
        document.getElementById("eventPara").removeEventListener("mousedown", mouseDown)
        document.removeEventListener('keypress', checkInput);
    }
}

function checkInput(event) {
    var keyCode = event.hasOwnProperty('which') ? event.which : event.keyCode;
    //alert(keyCode);
    if (keyCode == 43) { //+
        let el = document.getElementById("eventPara")
        let style = window.getComputedStyle(el, null).getPropertyValue('font-size');
        let currentSize = parseFloat(style);
        el.style.fontSize = (currentSize + 1) + 'px';
    } else if (keyCode == 45) { //-
        let el = document.getElementById("eventPara")
        let style = window.getComputedStyle(el, null).getPropertyValue('font-size');
        let currentSize = parseFloat(style);
        el.style.fontSize = (currentSize -1) + 'px';
    } 
}

/*--------------   OnLoad      ----------------*/
document.addEventListener("DOMContentLoaded", function(event) {
    //Variables
    let ul1 = document.getElementById("ul-1"); 
    let ul2 = document.getElementById("ul-2");
    let hookEv = true;
    
    audio = document.getElementById("audio");
    audio.volume = .5;

    //Event Listeners
    hookMouseEvents(hookEv)
    audio.addEventListener("timeupdate", updateTime)

    document.getElementById("volume").addEventListener("input", updateVolume)
    document.getElementById("color").addEventListener("input", alterSample)
    document.getElementById("font").addEventListener("input", alterSample)
    document.getElementById("speed").addEventListener("input", updateSpeed)
    document.getElementById("opacity").addEventListener("input", updateOpacity)
    
    document.getElementById("controlsVisible").addEventListener("click", toggleControls)
    document.getElementById("btn").addEventListener("click", scrollTop)
    document.getElementById("order").onclick = onSubmit;

    document.getElementById("appendFirst").onclick = function() {appendFirst(ul1,ul2)};
    document.getElementById("appendLast").onclick = function() {appendLast(ul1,ul2)};
    document.getElementById("transfer").onclick = function() {transferList(ul1,ul2)};
    document.getElementById("add").onclick = addNew;
    document.getElementById("delete").onclick = deleteOld;
    
    document.getElementById("appendFirst2").onclick = function() {appendFirst(ul2,ul1)};
    document.getElementById("appendLast2").onclick = function() {appendLast(ul2,ul1)};
    document.getElementById("transfer2").onclick = function() {transferList(ul2,ul1)};

    document.getElementById("hookToggle").addEventListener("mousedown", function(){ 
        hookEv = !hookEv; 
        hookMouseEvents(hookEv);
    });
  
    document.getElementById("nested").onclick = function(e) { 
        alert("PizzaData{\n"+JSON.stringify(PizzaData, null, 2)+"\n}"); 
        e.stopPropagation();
    };
    
    var form = document.getElementById("pizza form");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

    let topbtn = document.getElementById("btn");
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topbtn.style.display = "block";
      } else {
        topbtn.style.display = "none";
      }
    }

    /*
    id = setInterval( 
        function(){ 
            audio.play().then(function() {
                audio.volume = 1; 
                clearInterval(id)
              }); 
        }, 1000); */

    /*--------------   OnLoad - Pizza Form     ----------------*/
    //Nested Data
    let PizzaData = {
        toppingPrices : {
            "sausage": 1,
            "pepperoni": .50,
            "chicken": .80,
            "peppers": .30,
            "excheese": .35,
            "ham": .75,
        },
        sizePrices : {
            "small": 8,
            "medium": 10,
            "large": 12,
            "extra-large": 15,
        }
    }

    //Functions
    function getToppings () {
        let buttons = document.getElementsByClassName("toppings");
        let selectedString = "";
        Array.prototype.forEach.call(buttons, function(element) {
            if (element.checked){
                selectedString+=element.value+" $"+PizzaData['toppingPrices'][element.value.trim()]+" ";
            }
        });
        return selectedString;
    }

    function phonenumber(inputtxt)
    {
        if(inputtxt.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im))
        {
            return true;
        }
        else
        {
            alert("Not a valid Phone Number");
            return false;
        }
    }

    function validate() {
        let pass = true;
        if( document.getElementById("name").value == "" ) {
            //alert( "Please provide your name!" );
            document.getElementById("error-name").innerHTML = "Please provide your name!"
            pass = false;
        } else 
            document.getElementById("error-name").innerHTML =""

        if( document.getElementById("phone").value == "" ) {
            //alert( "Please provide your phone #!" );
            document.getElementById("error-phone").innerHTML = "Please provide your phone #!"
            pass = false;
        } else if( !phonenumber(document.getElementById("phone").value) ) {
            document.getElementById("error-phone").innerHTML = "Invalid phone #!"
            pass = false;
        } 
        else 
            document.getElementById("error-phone").innerHTML =""

        if( document.getElementById("address").value == "" ) {
            //alert( "Please provide your address!" );
            document.getElementById("error-addr").innerHTML = "Please provide your address!"
            pass = false;
         } else 
            document.getElementById("error-addr").innerHTML =""

        return pass
    }

    function getInfo () {
        let userInfo = [];
        userInfo['name'] = document.getElementById("name").value ;
        userInfo['phone'] = document.getElementById("phone").value;
        userInfo['address'] = document.getElementById("address").value;
        return userInfo
    }

    function calculateToppingTotal () {
        let buttons = document.getElementsByClassName("toppings");
        let price = 0;
        Array.prototype.forEach.call(buttons, function(element) {
            if (element.checked){
                price+=PizzaData['toppingPrices'][element.value.trim()];
                console.log(""+element.value+" / "+PizzaData['toppingPrices'][element.value.trim()]);
            }
        });
        return price;
    }

    function setbg(color)
    {
        document.getElementById("orderArea").style.background=color
    }

    function GetDate(){
        var currentdate = new Date(); 
        var datetime = "" + currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() + " @ "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();
        return datetime;
    }

    function GetDelivery(orderType){
        if(orderType != "delivery")
            return "";
        var currentdate = new Date();
        currentdate.setMinutes(currentdate.getMinutes() + 30); 
        currentdate = new Date(currentdate);

        var datetime = "\nDelivery time Estimate: " + currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() + " @ "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();
        return  datetime+"\n";
    }

    function onSubmit () {
        if (!validate()) return;
        let toppings = getToppings ();
        let userInfo = getInfo ();
        let ordersize = document.getElementById("ordersize").value;
        let ordertype = document.querySelector('input[name="size"]:checked').value;

        result = confirm("Your Order: "+
        " \n\nToppings: "+toppings+" = $"+calculateToppingTotal()+
        " \nSize: "+ordersize +" = $"+PizzaData['sizePrices'][ordersize]+
        " \nOrder Type: "+ordertype +
        " \nTotal: $"+(calculateToppingTotal()+PizzaData['sizePrices'][ordersize])+
        " \n\nYour Info "+
        " \nName: "+userInfo['name']+
        " \nAddress: "+userInfo['address']+
        " \nPhone: "+userInfo['phone']+
        " \nIs this correct?");

        if (result) {
            document.getElementById("orderData").value = 
            "ORDER COMPLETE"+ 
            "\nYour Order: "+
            "\nToppings: "+toppings+" = $"+calculateToppingTotal()+
            "\nSize: "+ordersize +" = $"+PizzaData['sizePrices'][ordersize]+
            "\nTotal: $"+(calculateToppingTotal()+PizzaData['sizePrices'][ordersize])+
            "\n\nOrder Type: "+ordertype +
            "\nOrder Date: "+GetDate()+
            GetDelivery(ordertype)+
            "\nYour Info "+
            "\nName: "+userInfo['name']+
            "\nAddress: "+userInfo['address']+
            "\nPhone: "+userInfo['phone']+
            "";
        }
    }

});