function getAway(vehicle, steal, alerted) {
    alert("You manage to get out with the painting.");
    console.log(vehicle.toUpperCase().endsWith("CAR"));
    console.log(steal.toUpperCase().endsWith("CARVE"));
    console.log(alerted);
    switch(true){
        case (vehicle.toUpperCase() == "CAR" && steal.toUpperCase() == "CARVE" && !alerted):
            alert("You chose the car as your getaway vehicle. It's a fast BMW M5, but speed does not matter since you snuck out undetected and you make out with the painting as you speed off. Good job!");
            break;
        case (vehicle.toUpperCase() == "CAR" && steal.toUpperCase() == "CARVE" && alerted):
            alert("You chose the car as your getaway vehicle. It's a fast BMW M5, perfect for escaping, and you make out with the painting as you speed off. Good job!");
            break;
        case (vehicle.toUpperCase() == "CAR" && steal.toUpperCase() == "FRAME" && !alerted):
            alert("You chose the car as your getaway vehicle and-- oh no...what do you mean the whole frame of the painting won't fit in the car?? Well this was just a waste of time wasn't it, game over. Now be a good person and put the painting back where it was, and drive off at the speed limit.");
            break;
        case (vehicle.toUpperCase() == "CAR" && steal.toUpperCase() == "FRAME" && alerted):
            alert("You chose the car as your getaway vehicle and-- oh no...what do you mean the whole frame of the painting won't fit in the car?? Well this was just a waste of time wasn't it, game over? Now you've been busted because the guards caught up to you while you were busy trying to fit a square block in a triangle shaped hole.");
            break;
        case (vehicle.toUpperCase() == "CARGO VAN" && steal.toUpperCase() == "CARVE" && !alerted):
            alert("You chose the cargo van as your getaway vehicle.It's slow, but it does not matter as you were undetected. There's plenty of space for if you decided to take the whole frame, too.");
            break;
        case (vehicle.toUpperCase() == "CARGO VAN" && steal.toUpperCase() == "CARVE" && alerted):
            alert("You chose the cargo van as your vehicle, but oh no! It's very slow and the guards caught up to you in their faster cars! Game over!");
            break;
        case (vehicle.toUpperCase() == "CARGO VAN" && steal.toUpperCase() == "FRAME" && !alerted):
            alert("You chose the cargo van as your vehicle, perfect for transporting the whole frame of the painting as it is quite large in size. Success!");
            break;
        case (vehicle.toUpperCase() == "CARGO VAN" && steal.toUpperCase() == "FRAME" && alerted):
            alert("You chose the cargo van as your vehicle, perfect for transporting the whole frame of the painting as it is quite large in size. It would be a success but...your van is slow and the guards caught up to you in their faster cars. Whoops.");
            break;
        case (vehicle.toUpperCase() == "HELICOPTER"): 
            alert("You escape in your helicopter like the cool thief you are. No one can catch you.");
            break;
        default:
            alert("Uh...you have no vehicle. Game over.");
            break;
    }
}

function backExit(vehicle, steal, alerted) {
    let speed = prompt("You're almost there! But there is a sleeping guard in the backroom you're trying to exit through. Do you tip toe, or run? sneak, run");

    if (speed.toUpperCase()=="SNEAK") {
        alert("You try to quietly tip toe through the room but your clumsy self accidentally drops the painting and the guard is alerted. Game over.")
    }
    else {
        getAway(vehicle, steal, alerted);
    }
}

function ventExit(vehicle, steal, alerted) {
    switch(true) {
        case steal.toUpperCase().endsWith("FRAME"): {
            let abandon = prompt("Oh no! You chose to steal the whole frame and exit through the vents, but the frame won't fit! The alarms have been sounded! Quick! Do you abandon the painting or try to squeeze it in anyway? abandon, squeeze");

            if (abandon.toUpperCase()=="SQUEEZE") {
                alert("You tried to squeeze through, but got busted. Game. Over.");
            }
            else {
                alert("You had to abandon the painting, but you fleed safely. Maybe next time.");
            }
            break;
        }
        case steal.toUpperCase().endsWith("CARVE"): {
            let call = prompt("Your phone starts ringing and it's your mom. She's wondering where you are for dinner! Do you pick up the phone and risk being heard? yes, no")

            if (call.toUpperCase()=="YES") {
                alert("You decide to pick up the phone and try to stay in a whisper as you explain to mom you're at the library. No one hears you. That was close!");
                getAway(vehicle, steal, alerted);
            }
            else {
                alert("You ignore the call but ultimately your mom leaves a voicemail which starts playing on speaker. She is very angry with you and the guards overhear you, and you're busted.");
            }
        }
    }
}

function frontExit(vehicle, steal, alerted) {
    let dog = prompt("You make your way to the front lobby, but you hear a dog growling. Do you give it a treat or try to defend yourself? treat, defend")

    if (dog.toUpperCase()=="DEFEND") {
        alert("The dog sprints at you but you manage to time your kick perfectly, and you lightly kick him the other way without harming him. However he is intimidated now, and you're free to escape.");
        getAway(vehicle, steal, alerted);
    }
    else {
        alert("You choose to be as humane as possible and tame it with a treat, and the dog slowly approaches you. However it accidentally bites your hand instead of the treat, and you lie down in pain. A guard discovers you. You're busted.");
    }
}

function carve(vehicle, steal, alerted) {
    let exit = prompt("You carve out the painting and roll it into your duffel bag. Do you escape through the vent or back?");

    if (exit.toUpperCase()=="BACK"){
        backExit(vehicle, steal, alerted);
    }
    else {
        ventExit(vehicle, steal, alerted);
    }
}

function frame(vehicle, steal, alerted) {
    let exit = prompt("You decide to take the easy way and take the frame of the whole painting off the wall, but now you have to carry it the whole way. Do you escape through the vent or the front? vent, front")

    if (exit.toUpperCase()=="VENT") {
        ventExit(vehicle, steal, alerted);
    }
    else {
        frontExit(vehicle, steal, alerted);
    }
}

function hide(vehicle, alerted) {
    let steal = prompt("You wait for the guard to pass by. Once he's gone, you have a quiet path to the painting. Do you carve the painting out or take the whole frame? carve, frame");
    
    if (steal.toUpperCase()=="CARVE"){
        carve(vehicle, steal, alerted);
    }
    else {
        frame(vehicle, steal, alerted);
    }
}

function run(vehicle) {
    let sprint = prompt("You choose to bail. Do you take the front or back exit? front, back");
    
    if (sprint.toUpperCase()=="BACK") {
        alert("Uh...the front exit was right there in front of you...anyway you try to run all the way to the back exit and a guard wacks you in the shin with a baton and you writhe in pain. Busted.")
    }
    else {
        alert("You choose to bail through the front exit and abandon the mission. Next time the security might be beefed up, and on the lookout for someone matching your description.")
    }
}

function grab(vehicle, alerted) {
    let steal = prompt("The alarm is sounding and you have to quickly choose how to steal the painting. Do you carve it out or do you grab the whole frame? carve, frame")

    getAway(vehicle, steal, alerted);
}

function attack(vehicle, alerted) {
    let choice = prompt("You wack the guard and knock him out. As you make your way to the painting, another guard spots the knocked out guard and sets the alarm off. Do you run or grab the painting anyway? run, grab");
    alerted = true;
    if (choice.toUpperCase()=="RUN") {
        run(vehicle);
    }
    else {
        grab(vehicle, alerted);
    }
}

function startGame() {
    let alerted = false;
    let player = prompt("Welcome to my choose-your-own adventure game. Please start by entering your name.");
    alert("Welcome, " + player + "! Today we are going on an art heist. Are you ready? Click okay to begin.");
    let vehicle = prompt("To begin your adventure, you need to select getaway vehicle. Please select your vehicle of choice: car, helicopter, cargo van");
    let atk = prompt("You are walking through the main lobby, when you hear a guard approaching. Do you hide, or attack? hide, attack");

    if (atk.toUpperCase()=="HIDE") {
        hide(vehicle, alerted);
    }
    else {
        attack(vehicle, alerted);
    }
}