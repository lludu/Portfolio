var player = "Player";

var pts = 0;


//designate the random whole number between 1-10
var num = Math.ceil((Math.random() * 10));


function reset() {
    var num2 = (Math.ceil((Math.random() * 10)));
    num = num2;
    document.getElementById('d1').innerHTML = "";
    restbut();

}

// // this reset reloads the webpage instead, but then you cannot keep track of win values!
// function reset() {
//     window.location.reload();
// }


function higher() {
    if (num >= 5) {
        document.getElementById('d1').innerHTML = "Correct! The number was: " + num;
        pts++;
        points();
        banbut();

    } else {
        document.getElementById('d1').innerHTML = "Wrong! The number was: " + num + " Try Again!";
        banbut();
    }
}

function lower() {
    if (num < 5) {
        document.getElementById('d1').innerHTML = "Correct! The number was: " + num;
        pts++;
        points();
        banbut();

    } else {
        document.getElementById('d1').innerHTML = "Wrong! The number was: " + num + " Try Again!";
        banbut();
    }
}


function points() {
    if (pts === 1) {
        document.getElementById('d2').innerHTML = player + ", You Have: " + pts + " point!";
    } else {
        document.getElementById('d2').innerHTML = player + ", You Have: " + pts + " points!";
    }
}
points();

function banbut() {
    document.getElementById('highbut').disabled = true;
    document.getElementById('lowbut').disabled = true;
}

function restbut() {
    document.getElementById('highbut').disabled = false;
    document.getElementById('lowbut').disabled = false;
}