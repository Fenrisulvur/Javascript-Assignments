document.addEventListener("DOMContentLoaded", function(event) { 

    document.getElementById("order").onclick = onSubmit;

    function getToppings () {
        let buttons = document.getElementsByClassName("toppings");
        let selectedString = "";
        Array.prototype.forEach.call(buttons, function(element) {
            if (element.checked){
                selectedString+=element.value+=" ";
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

    function onSubmit () {
        if (!validate()) return;
        let toppings = getToppings ();
        let userInfo = getInfo ();
        let ordertype = document.getElementById("ordertype").value;
        let size = document.querySelector('input[name="size"]:checked').value;

        result = confirm("Your Order: "+
        " \n\nToppings: "+toppings +
        " \nSize: "+size +
        " \nOrder Type: "+ordertype +
        " \n\nYour Info "+
        " \nName: "+userInfo['name']+
        " \nAddress: "+userInfo['address']+
        " \nPhone: "+userInfo['phone']+
        " \nIs this correct?");

        if (result) {
            document.getElementById("orderform").innerHTML = "<p>ORDER COMPLETE</p>"+ 
            "<p>Your Order: "+
            "</p><br/><p>Toppings: "+toppings +
            "</p><p>Size: "+size +
            "</p><p>Order Type: "+ordertype +
            "</p><p>Your Info "+
            "</p><p>Name: "+userInfo['name']+
            "</p><p>Address: "+userInfo['address']+
            "</p><p>Phone: "+userInfo['phone']+
            "</p>";
        }
    }

});