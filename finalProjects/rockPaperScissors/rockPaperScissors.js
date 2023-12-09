let cpu = ['Rock', 'Paper', 'Scissors']

table = document.getElementById("table");
position = 1;

var resultForm = document.forms.result;
var resultImg = resultForm.getElementsByTagName('img')[0];

function Rock() {
    let CompDecision = cpu[Math.floor(Math.random() * cpu.length)]; // borrowed from debug assignment
    if (CompDecision == "Paper") {
        resultImg.setAttribute("src", "https://hl-grocery-prod-master.imgix.net/products/c1a15a8d57711a402f5b6b04bcf3ba1b32350b26?fill=solid&fit=fill&fm=jpg&h=256&pad=7&q=92&trim=auto&trim-md=0&w=256");
        document.getElementById('resultText').innerHTML = "Your opponent chose paper. Womp Womp.";

        var row = table.insertRow(position);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = "Game " + position;
        cell2.innerHTML = "Player 2";
        position = ++position;
        console.log(position);
      }
      else if (CompDecision == "Scissors") {
        resultImg.setAttribute("src", "https://store.leibal.com/cdn/shop/products/gallery2_8fc513fb-8dbd-4e60-998f-56d4ae66741d.jpg?crop=center&height=256&v=1571439716&width=256");
        document.getElementById('resultText').innerHTML = "Your opponent chose scissors. You win!";

        var row = table.insertRow(position);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = "Game " + position;
        cell2.innerHTML = "Player 1";
        position = ++position;
        console.log(position);
      }
      else {
        resultImg.setAttribute("src", "https://images-cdn.ispot.tv/topic/xq/dwayne-the-rock-johnson.png");
        document.getElementById('resultText').innerHTML = "Your opponent chose rock. It's a tie!";

        var row = table.insertRow(position);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = "Game " + position;
        cell2.innerHTML = "Tie";
        position = ++position;
        console.log(position);
      }
}

function Paper() {
    let CompDecision = cpu[Math.floor(Math.random() * cpu.length)]; // borrowed from debug assignment
    if (CompDecision == "Paper") {
        resultImg.setAttribute("src", "https://hl-grocery-prod-master.imgix.net/products/c1a15a8d57711a402f5b6b04bcf3ba1b32350b26?fill=solid&fit=fill&fm=jpg&h=256&pad=7&q=92&trim=auto&trim-md=0&w=256");
        document.getElementById('resultText').innerHTML = "Your opponent chose paper. It's a tie!";

        var row = table.insertRow(position);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = "Game " + position;
        cell2.innerHTML = "Tie";
        position = ++position;
        console.log(position);
      }
      else if (CompDecision == "Scissors") {
        resultImg.setAttribute("src", "https://store.leibal.com/cdn/shop/products/gallery2_8fc513fb-8dbd-4e60-998f-56d4ae66741d.jpg?crop=center&height=256&v=1571439716&width=256");
        document.getElementById('resultText').innerHTML = "Your opponent chose scissors. Womp womp.";

        var row = table.insertRow(position);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = "Game " + position;
        cell2.innerHTML = "Player 2";
        position = ++position;
        console.log(position);
      }
      else {
        resultImg.setAttribute("src", "https://images-cdn.ispot.tv/topic/xq/dwayne-the-rock-johnson.png");
        document.getElementById('resultText').innerHTML = "Your opponent chose rock. You win!";

        var row = table.insertRow(position);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = "Game " + position;
        cell2.innerHTML = "Player 1";
        position = ++position;
        console.log(position);
      }
}

function Scissors() {
    let CompDecision = cpu[Math.floor(Math.random() * cpu.length)]; // borrowed from debug assignment
    if (CompDecision == "Paper") {
        resultImg.setAttribute("src", "https://hl-grocery-prod-master.imgix.net/products/c1a15a8d57711a402f5b6b04bcf3ba1b32350b26?fill=solid&fit=fill&fm=jpg&h=256&pad=7&q=92&trim=auto&trim-md=0&w=256");
        document.getElementById('resultText').innerHTML = "Your opponent chose paper. You win!";

        var row = table.insertRow(position);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = "Game " + position;
        cell2.innerHTML = "Player 1";
        position = ++position;
        console.log(position);
      }
      else if (CompDecision == "Scissors") {
        resultImg.setAttribute("src", "https://store.leibal.com/cdn/shop/products/gallery2_8fc513fb-8dbd-4e60-998f-56d4ae66741d.jpg?crop=center&height=256&v=1571439716&width=256");
        document.getElementById('resultText').innerHTML = "Your opponent chose scissors. It's a tie!";

        var row = table.insertRow(position);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = "Game " + position;
        cell2.innerHTML = "Tie";
        position = ++position;
        console.log(position);
      }
      else {
        resultImg.setAttribute("src", "https://images-cdn.ispot.tv/topic/xq/dwayne-the-rock-johnson.png");
        document.getElementById('resultText').innerHTML = "Your opponent chose rock. Womp womp.";

        var row = table.insertRow(position);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = "Game " + position;
        cell2.innerHTML = "Player 2";
        position = ++position;
        console.log(position);
      }
}

document.getElementById('rock').addEventListener('click', Rock, false);
document.getElementById('paper').addEventListener('click', Paper, false);
document.getElementById('scissors').addEventListener('click', Scissors, false);