//Let vs var
let x = 10;

if (x==10) {
    let x=20;
    document.getElementById('s1').innerHTML = "<p>X where x=20: " + x + "</p>";
}

document.getElementById('s1').innerHTML += "<p>Default X: " + x + "</p>";

var y = 10;

if (y==10) {
    var y=20;
    document.getElementById('s1').innerHTML += "<p>Y where y=20: " + y + "</p>";
}

document.getElementById('s1').innerHTML += "<p>Default Y: " + y + "</p>";

let z = true;

function fnScope() {
    if(z) {
        let z = false;
        console.log(z);
    }
}
fnScope();
console.log(z);

//Default Parameters

function multiplication(a,b=2) {
    return a*b;
}

document.getElementById('s2').innerHTML = "<p>" + multiplication(5) + "<br/>" + multiplication(5,8) + "</p>";

// let t1 = "Hello, world"
// code is awesome
// javascript is my bag

let t2 = `Hello, world 
javascript is awesome 
it's cold outside`;

document.getElementById('s8').innerHTML = t2

//Template Literals
var firstName = "Gary";
var lastName = "Smith";
//"My name is " + firstName + " " + lastName + "."

document.getElementById('s3').innerHTML = `<p> My name is ${firstName} ${lastName}. </p>`;

//Arrow Functions

function fullName(f,l) {
    return `${f} ${l}`;
}

document.getElementById('s4').innerHTML = `Traditional Function: ${fullName(firstName, lastName)}`;

//One line function
fullName1 = (f,l)=>`${f} ${l}`;

document.getElementById('s4').innerHTML += `<p>One-line Arrow Function: ${fullName1(firstName, lastName)}</p>`

//Multiline Arrow Function
fullName2 = (f,l)=> {
    console.log(f,l);
    return `${f} ${l}`;
}

document.getElementById('s4').innerHTML += `<p>Multiline Arrow Function: ${fullName2(firstName, lastName)}</p>`;

//Classes
class Book{
    constructor(title, author, pubDate) {
        this.title=title;
        this.author = author;
        this.pubDate = pubDate;
    }
}

const jsBook = new Book("Javascript and You", "Code Master", 2020);

document.getElementById('s5').innerHTML = `<p>Title: ${jsBook.title} by ${jsBook.author}<br/>Published in ${jsBook.pubDate}</p>`;

//Array Destructuring
const course = ["N220", "Intro to Javascript"];
let [courseNum, courseTitle] = course;

document.getElementById('s7_array').innerHTML = `<p>${courseNum}: ${courseTitle}</p>`;

let [t,fn,mn,ln] = ['Mr', 'Greg', 'Todd', 'Smith', 'Jr'];

document.getElementById(`s7_array`).innerHTML += `<p>${t} ${fn} ${ln}</p>`;

let g=4;
let h=9;
// let temp = g; g=h; h=temp;
[g,h] = [h,g] // swap values
console.log(g,h);