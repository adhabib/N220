function convertPercent() {
    let percent = parseFloat(document.getElementById('intRate').value);
    percent = percent.toFixed(2);
    let rate = percent / 100;
    let values = [percent, rate];
    return values;
}

function calcInterest() {
    let p = parseFloat(document.getElementById('principle').value);
    let rate = convertPercent()[1];
    let t = parseFloat(document.getElementById('time').value);
    let grandTotal = rate*t;
    grandTotal = grandTotal + 1;
    grandTotal = grandTotal*p;
    grandTotal = Math.round(grandTotal);

    totalInt = grandTotal-p;

    document.getElementById('answer').innerHTML = "With a beginning principal of $" + p + " and with a growth rate of " + convertPercent()[0] + "% for " + t + " years, your total interest will be $" + totalInt + " with a grand total of $" + grandTotal;
}

