//base for elements: document.getElementById('').innerHTML += 
// Dating
let ticketNum = 3; ticketCost = 14.00;
document.getElementById('ticketNum').innerHTML += ticketNum;
document.getElementById('ticketCost').innerHTML += ticketCost;
document.getElementById('ttCost').innerHTML += ticketCost*3;

// Shopping
let shirt = 35; pants = 75; shoes = 60;
let bank = 235.87;
document.getElementById('bank').innerHTML += bank - shirt - pants - shoes;
let afford = true;
document.getElementById('addJacket').innerHTML += !afford;

// Pizza
let slices = 32; slicesPer = 2.5;
document.getElementById('profPizza').innerHTML += Math.floor(slices/slicesPer) + " students can be fed. ";
document.getElementById('profPizza').innerHTML += slices - 12*slicesPer + " slices would be left for Professor Rector."

// Monty's Mega Bar
let adultMeal = 12; childMeal = 6; drink = 1.5;
document.getElementById('Monty').innerHTML += "$";
document.getElementById('Monty').innerHTML += adultMeal*2 + childMeal + drink*3;

// Average Earned Tips
let week1 = 202.45; week2 = 134.97; week3 = 256.63; week4 = 178.22; tipTotal = week1+week2+week3+week4;
document.getElementById('tips').innerHTML += "$" + tipTotal/4;
