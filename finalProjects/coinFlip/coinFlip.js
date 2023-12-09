let heads = 0;
let tails = 0;

table = document.getElementById("table");
position = 1;

var resultForm = document.forms.result;
var resultImg = resultForm.getElementsByTagName("img")[0];

// https://stackoverflow.com/questions/1186414/whats-the-algorithm-to-calculate-aspect-ratio
function ratio (a, b) {
    if (b == 0){
        return a;
    }
    return ratio (b, a%b)
}

function flipCoin() {
  let flip = Math.floor(Math.random() * 2) + 1;
  console.log(flip);
  if (flip == 1) {
    document.getElementById("resultText").innerHTML = "Heads!";
    heads = ++heads;
    resultImg.setAttribute(
      "src",
      "https://images.vexels.com/media/users/3/264569/isolated/lists/4bb56e7b0bbeb38727930f688fd1334b-quarter-illustration-head.png"
    );
    var row = table.insertRow(position);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = position;
    cell2.innerHTML = "Heads";
    position = ++position;
    console.log(position);
  } else if (flip == 2) {
    document.getElementById("resultText").innerHTML = "Tails!";
    tails = ++tails;
    resultImg.setAttribute(
      "src",
      "https://images.vexels.com/media/users/3/264570/isolated/lists/14210011cda8a72ecf54ebf67b607dc5-quarter-dollar-illustration-tail.png"
    );
    var row = table.insertRow(position);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = position;
    cell2.innerHTML = "Tails";
    position = ++position;
    console.log(position);
  }
  document.getElementById('ratio').innerHTML = "Current ratio of heads to tails: " + heads/ratio(heads, tails) + ":" + tails/ratio(heads, tails) + ", Heads count " + heads + ", tails count " + tails;
}

document.getElementsByTagName("form")[0].addEventListener("submit", function (event) {
    event.preventDefault();
    flipCoin();
  });
