let cWinnings = 50;
let newWinnings = 0;

document.getElementById('cWinnings').innerHTML = "Current Winnings: " + cWinnings;

function chanceRoll() {
    document.getElementById('cWinnings').innerHTML = "Current Winnings: " + cWinnings;
    let wText;
    let rNum = Math.floor(Math.random()*6)+1;
    switch(rNum){
        case 1:
            document.getElementById('wText').innerHTML = "You rolled a " + rNum + "!" + "<br/>It is good to be number " + rNum + "!" + " You doubled your winnings!";
            console.log(rNum);
            //outcome double winnings
            cWinnings = cWinnings*2;
            document.getElementById('newWinnings').innerHTML = "New Winnings: " + cWinnings;
            break;
        case 2:
            document.getElementById('wText').innerHTML = "You rolled a " + rNum + "!" + "<br/>Second best is not good enough. You lose 20 points.";
            console.log(rNum);
            //outcome subtract 20
            cWinnings = cWinnings-20;
            document.getElementById('newWinnings').innerHTML = "New Winnings: " + cWinnings;
            break;
        case 3:
            document.getElementById('wText').innerHTML = "You rolled a " + rNum + "!" + "<br/>Three is not a lucky number at all. You lose all your winnings!";
            console.log(rNum);
            //outcome lose all winnings
            cWinnings = 0;
            document.getElementById('newWinnings').innerHTML = "New Winnings: " + cWinnings;
            break;
        case 4:
            document.getElementById('wText').innerHTML = "You rolled a " + rNum + "!" + "<br/>Four is lucky like a four-leafed clover. You won 400 points!";
            console.log(rNum);
            //outcome add 400 points to winnings
            cWinnings = cWinnings+400;
            document.getElementById('newWinnings').innerHTML = "New Winnings: " + cWinnings;
            break;
        case 5:
            document.getElementById('wText').innerHTML = "You rolled a " + rNum + "!" + "<br/>Five Alive! You are still in the game, but there is no change in your winnings.";
            console.log(rNum);
            //outcome nothing
            document.getElementById('newWinnings').innerHTML = "New Winnings: " + cWinnings;
            break;
        case 6:
            //popup asking for number
            document.getElementById('wText').innerHTML = "You rolled a " + rNum + "!";
            console.log(rNum);
            //outcome prompt
            let userNum = prompt("Choose a number between 1 and 50.");
            tNum = 33;
            if (userNum==tNum) {
                document.getElementById('wText').innerHTML += "<br/>You are lucky indeed! You just multiplied your winnings by your chosen number!"; 
                cWinnings = cWinnings*tNum;
                document.getElementById('newWinnings').innerHTML = "New Winnings: " + cWinnings;
            }
            else if (userNum<25) {
                document.getElementById('wText').innerHTML += "<br/>You picked a rather low number, but you win those points."; 
                cWinnings += Number(userNum);
                document.getElementById('newWinnings').innerHTML = "New Winnings: " + cWinnings;
            }
            else {
                document.getElementById('wText').innerHTML += "<br/>Good choice - but not what I was hoping for."; 
                cWinnings -= Number(userNum);
                document.getElementById('newWinnings').innerHTML = "New Winnings: " + cWinnings;
            }
            break;
        default:
            console.log("Something went wrong");
            break;
        }
    
}