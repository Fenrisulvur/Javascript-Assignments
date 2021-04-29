/*Create and instantiate 3 person objects containing first name,last name, age, phone.
Write code to display all of the properties of the oldest. 
Display all properties of the least last name values. use capital letters.*/

class Person{
    constructor(fn, ln, age, pho){
        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
        this.phone = pho;
    }

    get getFirstName(){return this.firstName;}
    get getLastName(){return this.lastName;}
    get getAge(){return this.age;}
    get getPhone(){return this.phone;}

    set setFirstName(x){ this.firstName = x; }
    set setLastName(x){ this.lastName = x; }
    set setAge(x){ this.age = x; }
    set setPhone(x){ this.phone = x; }
}

/*Create a car object containing make, color, number of doors, and horsepower.
Instantiate three cars from user input, validate this input. 
When done ask the user which car to print out and then print out all of the properties of that car.*/

class Car{
    constructor(make, color, doors, hp){
        this.make = make;
        this.color = color;
        this.doorCount = doors;
        this.horsepower = hp;
    }


    get getMake(){return this.make;}
    get getColor(){return this.color;}
    get getDoorCount(){return this.doorCount;}
    get getHorsepower(){return this.horsepower;}

    set setMake(x){ this.make = x; }
    set setColor(x){ this.color = x; }
    set setDoorCount(x){ this.doorCount = x; }
    set setHorsepower(x){ this.horsepower = x; }
}

function getOldest(array){
    let oldest = array[0]; 
    for(var i = 0; i <  array.length; i++){
        if(array[i].getAge > oldest.getAge){
            oldest = array[i];
        }      
    }
    return oldest;
}

function getYoungest(array){
    let youngest = array[0]; 
    for(var i = 0; i <  array.length; i++){
        if(array[i].getAge < youngest.getAge){
            youngest = array[i];    
        }    
    }
    return youngest;
}

function getInput(x,d){
    var inputVal = window.prompt(x,d);
    while (inputVal==""){
        inputVal = window.prompt(x,d);
    }
    return inputVal;
}

function getNumInput(x,d, min, max){
    var inputVal = window.prompt(x,d);
    while (inputVal=="" || isNaN(inputVal) || inputVal < min || inputVal > max){
        inputVal = window.prompt("Must be a number and between "+min+"-"+max+": "+x,d);
    }
    return inputVal;
}

function carBuilder(x){
    let make, color, doors, hp;
    make = getInput("What make is car "+x,"Ford");
    color = getInput("What color is car "+x,"Red");
    doors = getNumInput("How many doors does car "+x+" have","2",2,4);
    hp = getNumInput("How much horsepower does car "+x+" have","150",50,1500);
    return new Car(make, color, doors, hp);
}

function displayPicker(array){
    let choice = getNumInput("What car to display? pick 1-"+array.length,"1",1,array.length);
    choice = parseInt(choice)-1;
    alert ("Chosen car object: \n"
    +array[choice].getMake+"\n"
    +array[choice].getColor+"\n"
    +array[choice].getDoorCount+"\n"
    +array[choice].getHorsepower+"\n");  
    if (confirm("Display another? If cancel is chosen the cars will be deleted")) {
        displayPicker(array);
      } else {
        return
      }
}

document.addEventListener("DOMContentLoaded", function(event) {
    let p1 = new Person("John", "Doe",21,"814-424-4404");
    let p2 = new Person("Jane", "Boe",20,"814-424-8484");
    let p3 = new Person("Billy", "Chase",55,"812-428-2212");
    let pArray =[] ;
    pArray.push(p1);
    pArray.push(p2);
    pArray.push(p3);

    console.log(p1.getAge);

    document.getElementById("oldestBut").onclick = displayOldest;
    document.getElementById("youngestBut").onclick = displayYoungest;
    document.getElementById("3car").onclick = create3Cars;

    function displayOldest(){
        let oldest = getOldest(pArray);
        if(oldest!=null){
            alert ("Oldest person object: \n"
            +oldest.getFirstName+"\n"
            +oldest.getLastName+"\n"
            +oldest.getAge+"\n"
            +oldest.getPhone+"\n");
        }
    }

    function displayYoungest(){
        let oldest = getYoungest(pArray);
        if(oldest!=null){
            alert ("Youngest person object: \n"
            +oldest.getFirstName.toUpperCase()+"\n"
            +oldest.getLastName.toUpperCase()+"\n"
            +oldest.getAge+"\n"
            +oldest.getPhone+"\n");
        }
    }

    function create3Cars(){
        let carArray = []
        for(var i = 0; i < 3; i++){
            carArray.push(carBuilder(i+1))
        }
        displayPicker(carArray);
    }

});