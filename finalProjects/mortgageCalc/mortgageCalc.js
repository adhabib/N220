function convertPercent() {
    let percent = parseFloat(document.getElementById('interest').value);
    percent = percent.toFixed(2);
    let rate = percent / 100;
    let values = [percent, rate];
    console.log(values)
    return values;
}

function calculateMortgage() {
    let l = parseInt(document.getElementById('loan').value);
    let c = convertPercent()[1] / 12;
    let n = parseInt(document.getElementById('years').value)*12;
    console.log(c);
    let grandTotal;
    dividend = (1+c)**n;
    dividend = c*dividend;
    divisor = [(1+c)**n] - 1;
    grandTotal = dividend/divisor;
    grandTotal = l*grandTotal;
    grandTotal = Math.round(100*grandTotal)/100;
    console.log(dividend);
    console.log(divisor);
    console.log(grandTotal);
    document.getElementById("calculation").innerHTML = "You monthly payment is " + "$" + grandTotal;
}

document.getElementsByTagName("form")[0].addEventListener("submit", function(event) {
    event.preventDefault();
    calculateMortgage();
});
