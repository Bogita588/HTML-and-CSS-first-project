let count = 0;

document.getElementById("decreaseBtn").onclick= function(){
    count -=1;
    document.getElementById("countLabel").innerHTML= count;
}

document.getElementById("resetBtn").onclick= function(){
    count =0;
    document.getElementById("countLabel").innerHTML= count;
}
document.getElementById("increaseBtn").onclick= function(){
    count +=1;
    document.getElementById("countLabel").innerHTML= count;
}

let num = Number(prompt("Pick a number"));
if (num < 10){
    console.log("small");

}else if (num < 100){
    console.log("medium");
}else{
    console.log("Large");
}
// switch example
switch (prompt ("What is the weather like?")){
    case"rainy":
    console.log("Remember to carry an umbrella");
    break;
    case "Sunny":
        console.log("Come in a vest");
        break;
    case"cloudy": 
        console.log("Come armed, with, a jacket");
        break;
}
// functions

startExample();

function startExample(){
    let userName= "Bogita";
    let age= 22;

    happyBirthday(userName, age);
}

function happyBirthday(userName, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", userName);
    console.log("Happy birthday to you!");
    console.log("You are", age, "years old!");
    
}

 // function to find area of rectangle

 let area;
 let width;
 let height;
 
 width = window.prompt("Enter width");
 height= window.prompt("Enter height");

 area= getArea(width, height);
 console.log("The area is ", area);

 function getArea(width, height){
return width* height;

 }

