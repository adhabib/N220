// Add icon to existing items
var listItems = document.querySelectorAll('div ul li');
var codeBox = document.getElementById('codeBox');
var totalItems = listItems.length;
console.log(totalItems);
for (i = 0; i < totalItems; i++) {
    let img = document.createElement('img');
    img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png';
    console.log("img");
    img.classList.add("listIcon");
    listItems[i].appendChild(img);
}

//console.log(document.getElementsByTagName('li')[0].tagName);

// Trash or gray out items

function changeProp(e) {
    let target = getTarget(e);
    tParent = target.parentNode;
    console.log(tParent.tagName);
    console.log(target.tagName);
    if(target.classList == 'selected') {
        target.classList.remove("selected");
    }
    else {
        if(tParent.tagName == 'LI') {
            tParent.remove();
        }
        else if(tParent.tagName == 'UL') {
            target.classList.add("selected");
        }
    }
}

codeBox.addEventListener('click', changeProp, false);
