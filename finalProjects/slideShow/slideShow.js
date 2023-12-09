let images = ['https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=3039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
'https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=2605&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
'https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
'https://images.unsplash.com/photo-1485550409059-9afb054cada4?q=80&w=2598&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
'https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'];

var resultForm = document.forms[0];
var resultImg = resultForm.getElementsByTagName("img")[0];
let auto = false;
let i = 0;
uh = 1;

function nextImage() {
    if (i > 9) {
        i = 0;
    }
    i = ++i;
    console.log(i);
    resultImg.setAttribute('src', images[i]);
}

function imageInterval() {
    let seek = document.getElementById('interval').value;
    console.log(seek);
    if (seek == "3" || seek == "5" || seek == "7" || seek == "10") {
        interval = parseInt(seek)*1000;
        console.log(interval);
        myVar = setInterval(nextImage, interval);
    }
    else if (seek == "off") {
        clearInterval(myVar);
        console.log(interval);
    }
}

document.getElementById("button").addEventListener("click", nextImage);