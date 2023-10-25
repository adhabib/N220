const course = {
    cNumber: "N220",
    cTitle: "Intro to Media Application Development",
    seats: 20,
    enrolled: 18,
    availability: function() {
        return this.seats>this.enrolled;
    }
}

console.log(course.cNumber + " Open: " + course.availability());

course.enrolled=course.enrolled+2;
//course.enrolled+=2;

console.log(course.enrolled);

console.log(course.cNumber + " Open: " + course.availability());

//Window Object
document.getElementById('hwDetails').innerHTML = "height: " + window.innerHeight + "<br/> width: " + window.innerWidth;

function IUPUIWebsite() {
    open("http://www.iupui.edu");
}

function printPage() {
    print();
}

document.getElementById('wpDetails').innerHTML = window.location;

//Document Object

document.getElementById('dpDetails').innerHTML = document.URL;

document.getElementById('update').innerHTML = document.lastModified;

//String Object

function getGreeting() {
    let gMsg = document.getElementById('greeting').value;
    gMsg=gMsg.trim();
    let half = gMsg.charAt(gMsg.length/2);
    document.getElementById('messageInfo').innerHTML = "Your greeting is " + gMsg.length + " characters long and the middle character is " + half;
}

var coolText = document.getElementById('coolText').innerHTML;
console.log(coolText);
document.getElementById('coolText').innerHTML = coolText.toUpperCase();
console.log(coolText);
coolText = coolText.replace("pretty", "really");
console.log(coolText);

let classList = document.getElementById('classes').innerHTML;
let classArray = classList.split(", ");
console.log(classArray);

//Number Object
var myNum = 45.3245390;
document.getElementById('fixed').innerHTML = myNum.toFixed(1);
document.getElementById('precise').innerHTML = myNum.toPrecision(5);

//Math Object
let myPi = Math.PI;
console.log(myPi);

document.getElementById('round').innerHTML = Math.round(myPi);
document.getElementById('ceil').innerHTML = Math.ceil(myPi);
document.getElementById('floor').innerHTML = Math.floor(myPi);
document.getElementById('random').innerHTML = Math.random();

let rNum = Math.floor(Math.random()*10)+1;
document.getElementById('random').innerHTML = rNum;

//Date Object
let today = new Date();
document.write(today);
document.write("<br/>Date: " + today.getDate());
document.write("<br/>Month: " + today.getMonth());
document.write("<br/>Day: " + today.getDay());
document.write("<br/>Year: " + today.getFullYear());
document.write("<br/>Short Today: " + today.toDateString());