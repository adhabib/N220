let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

function drawRect() {
    let h = document.getElementById('height').value;
    let w = document.getElementById('width').value;
    h = h*10;
    w = w*10;

    context.clearRect(10, 10, canvas.width, canvas.height);
    context.beginPath();
    context.rect(10, 10, w, h);
    context.fillStyle = "red";
    context.fill();
}

document.getElementsByTagName("form")[0].addEventListener("submit", function (event) {
    event.preventDefault();
    drawRect();
});