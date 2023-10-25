//For Loop
for(let i=0; i<5; i++) {
    document.getElementById('for').innerHTML+=i+ " ";
}

//While Loop
let w=0;
while(w<5) {
    w++;
    document.getElementById('while').innerHTML+=w+" ";
}

//Do while loop
let d=10;
do {
    document.getElementById('doWhile').innerHTML +=d + " ";
    d--
} while(d>4);

//Problem 1
let months = ['January', 'February', 'March', 'April', 'May', 'June']

let monthText = '';
for (let m=0; m<months.length; m++) {
    monthText += months[m] + "<br/>";
}

document.getElementById('an1').innerHTML = monthText;

//Problem 2
let monthText2 = '<ol>';
for (let m=0; m<months.length; m++) {
    monthText2 += "<li>" + months[m] + "<br/>";
}
monthText2 += "</ol>"
document.getElementById('an2').innerHTML = monthText2;

//Problem 3
let slices = 9;

while (slices>=2) {
    document.getElementById('an3').innerHTML += "There are " + slices + " slices of pizza left.<br/>";
    slices--;
}

//Problem 4
let num = 15;
do {
    document.getElementById('an4').innerHTML += "Number Count: " + num + "<br/>";
    num++;
} while (num < 20);

//Problem 5
let today = new Date();
let tDate = today.getDate()-1; //10
for (let t = 50; t >= 5; t-=5) {
    document.getElementById('an5').innerHTML += "Number: " + t + "<br/>";
    if (t==tDate) {
        document.getElementById('an5').innerHTML += "That's today's date. <br/>";
        break;
    }
}

//Problem 6
let pSlices = 10;
while (pSlices >= 1) {
    document.getElementById('an6').innerHTML += "Another slice down the hatch. " + pSlices + " left.<br/>";
    pSlices--;
}
document.getElementById('an6').innerHTML += "There is only one slice left."

//Problem 7
let ticketText = '';
for (let t=10; t>=0; t--) {
    if (t == 5) {
        ticketText += "Half the tickets are gone. Buy yours NOW!<br/>";
    }
    else if (t == 0) {
        ticketText += "All tickets have been sold.";
    }
    else {
        ticketText += "Another seat is gone. Only " + t + " tickets left.<br/>";
    }
    document.getElementById('an7').innerHTML = ticketText;
}

//for in loops
const Course = {
    "cNum": "N220",
    "cTitle": "Intro to JavaScript",
    "offering": ['Fall', 'Spring', 'Summer'],
    "enrolled": 20
}

let holiday = "halloween";

for (property in Course) {
    document.getElementById('forIn').innerHTML += property + ": " + Course[property] + "<br/>";
}

for (month in months) {
    document.getElementById('forIn').innerHTML += month + ": " + months[month] + "<br/>";
}

for (h in holiday) {
    document.getElementById('forIn').innerHTML += h + ": " + holiday[h] + "<br/>";
}


//For of loop
for (h of holiday) {
    document.getElementById('forOf').innerHTML += h + "<br/>";
}

for (h of months) {
    document.getElementById('forOf').innerHTML += h + "<br/>";
}
// Doesn't work for object
for (h of Course) {
    document.getElementById('forOf').innerHTML += h + "<br/>";
}