//1
document.getElementById('title').innerHTML = "DOM Manipulation";
//2
document.getElementById('container').style.backgroundColor = "lightblue";
//3
el = document.createElement('li');
el.innerHTML = "Item 7";
document.getElementsByTagName('ul')[0].appendChild(el);
//4
document.getElementsByTagName('li')[0].style.color = "crimson";
//5
document.getElementsByTagName('li')[2].style.backgroundColor = "pink";
//6
document.getElementsByTagName('li')[4].style.backgroundColor = "yellow";
//7
document.getElementsByTagName('li')[6].style.backgroundColor = "lightGray";
document.getElementsByTagName('li')[6].style.color = "royalBlue";
//8
elName = document.createElement('li');
elName.innerHTML = "Adeel";
document.getElementsByTagName('ul')[0].appendChild(elName);
//9
document.getElementsByTagName('li')[3].remove();
//10
var i = document.createElement("I");
var text = document.createTextNode("Hello");
i.appendChild(text);
document.getElementById('btn').appendChild(i);

document.getElementById('btn').style.backgroundColor = "rebeccapurple";
document.getElementById('btn').style.color = "white";
document.getElementById('btn').style.border = "thick dotted black";