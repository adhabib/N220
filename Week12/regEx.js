let stringText = document.getElementById('string');
let zipText = document.getElementById('zip');
let ccText = document.getElementById('ccard');
let phoneText = document.getElementById('phone');

//Regular Expression: / /

//String
function validateString(){
    let vs1 = /ralph/i;
    //i: case insensitive
    let vs2 = /^(cat)/;//beginning
    let vs3 = /dog$/;

    document.getElementById('stringAns').innerText = vs3.test(stringText.value);
}

stringText.addEventListener('blur', validateString);

function validateZip() {
    let vz1 =/^[0-9]{5}$/;
    let vz2 = /^\d{5}$/; //same as above
    let vz3 = /^([0-9]{5})(([- ]?)[0-9]{4})?$/;
    document.getElementById('zipAns').innerText = vz3.test(zipText.value);
}

zipText.addEventListener('blur', validateZip);

//Credit Card

function validateCC() {
    let vc1 = /^(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})$/;
    document.getElementById('ccAns').innerText = vc1.test(ccText.value);
}

ccText.addEventListener('blur', validateCC);

//Months 01-12
let monthRegExp = /0[1-9]|1[012]/;

//Date 1-31
let dateRegExp = /[1-9]|[12][0-9]|3[01]/;

//Year 20th and 21st Century
let yearRegExp = /(19|20)\d{2}/;

//Phone Number

function validatePhone(){
    let vp1 = /^([(]?)(\d{3})([)-.]?)([ ]?)(\d{3})([-.]?)(\d{4})$/;
    document.getElementById('phoneAns').innerText = vp1.test(phoneText.value);
}

phoneText.addEventListener('blur', validatePhone);