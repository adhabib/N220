function calcChange() {
    let total = parseFloat(document.getElementById('money').value);
    let dollars = Math.floor(total / 100);
    console.log(dollars);
    let remainder = total % 100;
    console.log(remainder);
    let quarters = Math.floor(remainder / 25);
    console.log(quarters);
    remainder = remainder % 25;
    console.log(remainder);
    let dimes = Math.floor(remainder / 10);
    console.log(dimes);
    remainder = remainder % 10;
    console.log(remainder);
    let nickels = Math.floor(remainder / 5);
    console.log(nickels);
    pennies = remainder % 5
    console.log(pennies);
    document.getElementById('change').innerHTML = "Dollars: " + dollars + "<br/>" + "Quarters: " + quarters + "<br/>" +  "Dimes: " + dimes + "<br/>" + "Nickels: " + nickels + "<br/>" + "Pennies: " + pennies; 
}

document.getElementsByTagName("form")[0].addEventListener("submit", function (event) {
    event.preventDefault();
    calcChange();
});