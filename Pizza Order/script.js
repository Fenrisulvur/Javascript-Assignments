let audio;
let id;

function pauseAudio() {
    audio.pause();
}

document.addEventListener("DOMContentLoaded", function(event) { 
    audio = document.getElementById("audio");
    

    id = setInterval(
        function(){ 
            audio.play().then(function() {
                audio.volume = 1; 
                clearInterval(id)
              }); 
        }, 1000); 
    

    


    document.getElementById("order").onclick = onSubmit;

    var toppingPrices = {
        "sausage": 1,
        "pepperoni": .50,
        "chicken": .80,
        "peppers": .30,
        "excheese": .35,
        "ham": .75,
    };

    let sizePrices = {
        "small": 8,
        "medium": 10,
        "large": 12,
        "extra-large": 15,
    };
    
    function getToppings () {
        let buttons = document.getElementsByClassName("toppings");
        let selectedString = "";
        Array.prototype.forEach.call(buttons, function(element) {
            if (element.checked){
                selectedString+=element.value+" $"+toppingPrices[element.value.trim()]+" ";
            }
        });
        return selectedString;
    }

    function validate() {
        if( document.getElementById("name").value == "" ) {
            alert( "Please provide your name!" );
            return false;
        }
        if( document.getElementById("phone").value == "" ) {
            alert( "Please provide your phone #!" );
            return false;
        }
        if( document.getElementById("address").value == "" ) {
            alert( "Please provide your address!" );
            return false;
         }
        return true
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
                price+=toppingPrices[element.value.trim()];
                console.log(""+element.value+" / "+toppingPrices[element.value.trim()]);
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
        " \nSize: "+ordersize +" = $"+sizePrices[ordersize]+
        " \nOrder Type: "+ordertype +
        " \nTotal: $"+(calculateToppingTotal()+sizePrices[ordersize])+
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
            "\nSize: "+ordersize +" = $"+sizePrices[ordersize]+
            "\nTotal: $"+(calculateToppingTotal()+sizePrices[ordersize])+
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