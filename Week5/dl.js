let bank = 45.67;
let toy = 45.99;
let buyToy = bank>toy; //t/f

if(!buyToy) {
    document.getElementById('bank').innerHTML = "Lmao you broke af";
};

//Birthday Month
let today = new Date();
let thisMonth = today.getMonth()+1;//9

if(thisMonth==7) {
    document.getElementById('birthday').innerHTML = "Have a great birthday month!";
}
else {
    document.getElementById('birthday').innerHTML = "You're not special this month";
}

function checkAge() {
    let myAge = document.getElementById('age').value;
    let ageText;

    if (myAge<18) {
        ageText = "Sorry - you cannot vote.";
    }
    else if (myage==18) {
        ageText = "You can finally vote!";
    }
    else {
        ageText = "Congrats - you can vote.";
    }

    document.getElementById('voteAge').innerHTML = ageText;
}

//Greeting
let tHours = today.getHours();
let greeting;
tHours = 18
if(tHours<=12) {
    greeting = "Good Morning!";
}
else if (tHours>12 && tHours<=16) {
    greeting = "Good Afternoon!";
}
else if (tHours>16 && tHours<=20) {
    greeting = "Good Evening!";
}
else {
    greeting = "Good Night!";
}

document.getElementById('myTime').innerHTML = greeting;

//Student
let midterm = 78;
let final = 87;
let total = midterm+final+47+62;
let myAvg = (total/350)*100;
var studentText;

if(midterm>50 && final>72) {
    studentText = "You passed the class";
}
else {
    studentText = "Lol you failed woom woomp";
}

console.log(myAvg);

if((midterm>50 && final>72) || myAvg>80) {
    studentText += "<br/>The class is complete";
}
else {
    studentText += "<br/>The class is not complete";
}

document.getElementById('msg').innerHTML = studentText;

//Random Number
function newNum() {
    let rNum = Math.floor(Math.random()*20)+1;
    document.getElementById('rNum20').innerHTML = rNum;
}

//Dice Roll

function rollDie() {
    var dieImage = '';
    let rNum = Math.floor(Math.random()*6)+1;
    switch(rNum){
        case 1:
            dieImage = "die_face_1.png";
            break;
        case 2:
            dieImage = "die_face_2.png";
            break;
        case 3:
            dieImage = "die_face_3.png";
            break;
        case 4:
            dieImage = "die_face_4.png";
            break;
        case 5:
            dieImage = "die_face_5.png";
            break;
        case 6:
            dieImage = "die_face_6.png";
            break;
        default:
            console.log("Something went wrong");
            break;
    }
    document.getElementById('dice_1').innerHTML = '<img src="images/'+dieImage+'"/>';
    rNum = Math.floor(Math.random()*6)+1;
    switch(rNum){
        case 1:
            dieImage = "die_face_1.png";
            break;
        case 2:
            dieImage = "die_face_2.png";
            break;
        case 3:
            dieImage = "die_face_3.png";
            break;
        case 4:
            dieImage = "die_face_4.png";
            break;
        case 5:
            dieImage = "die_face_5.png";
            break;
        case 6:
            dieImage = "die_face_6.png";
            break;
        default:
            console.log("Something went wrong");
            break;
    }
    document.getElementById('dice_2').innerHTML = '<img src="images/'+dieImage+'"/>';
}

//Seasons of the year

//thisMonth holds this month
var seasonText;
switch(true) {
    case (thisMonth==12 || thisMonth<=2):
        seasontext = "It's winter!";
        break;
    case (thisMonth>=3 && thisMonth<=5):
        seasonText = "It's spring!";
        break;
    case (thisMonth>=6 && thisMonth<=8):
        seasonText = "This is summer!";
        break;
    case (thisMonth>=9 && thisMonth<=11):
        seasonText = "This is fall!";
        break;
    default:
        seasonText = "That is not an option.";
}

document.getElementById('season').innerHTML = seasonText;