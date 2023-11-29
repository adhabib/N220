var passForm = document.forms[0];

var passBtn = passForm.getElementsByTagName('img')[0];

var pass = document.getElementById('pass');

function showPassword(){
var imgSrc = passBtn.getAttribute('src');
var hidePassImg = imgSrc.indexOf('hide');
console.log(hidePassImg);
hidePassImg =hidePassImg>0;
    if (hidePassImg){
        passBtn.setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/showPassIcon.png");
        document.getElementById('pass').setAttribute('type', 'text');
    }
    else {
        passBtn.setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/hidePassIcon.png");
        document.getElementById('pass').setAttribute('type', 'password');
    }
}

passBtn.addEventListener('click', showPassword, false);
