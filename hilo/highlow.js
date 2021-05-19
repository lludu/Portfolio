// 1. create the array of the card numbers

// 2. generate a random selected card from the array and store it in a value
// 2b. generate a random card for the player

// 3. compare that value random card value with the players card

// 4. replace a element on display to show the array's value

// 5. award the player for selecting correctly

// 6. have a button to reset the game to play again, without resetting player points




// Step 1. Creating the Array of the Card Deck
const cardDeck = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
console.log(cardDeck);




// // Step 2. Picking a random value in the card deck array and storing it in a variable.
let randomCard = Math.floor(Math.random() * cardDeck.length);
console.log('The array position of the random card is: ' + randomCard); // randomCard is the array position
console.log('The randomly selected card is a: ' + cardDeck[randomCard]); // cardDeck[randomCard] is the value


//display the card on the website
//Conditional (ternary) operator use, for grammer.    
//condition ? exprIfTrue : exprIfFalse  
//where codition is an expression whose value is used as a condition. exprIfTrue the expression is validated as true.   exprIfFalse the expression is validated as false
document.getElementById('rC').innerHTML = 'The Random Card is a' + (('Ace' === cardDeck[randomCard]) ? 'n ' : ' ') + cardDeck[randomCard];






// Step 2b. Give the player their card
let playersCard = Math.floor(Math.random() * cardDeck.length);
console.log('The array position of the players card is: ' + playersCard); //playersCard is the array position
console.log('The players selected card is a: ' + cardDeck[playersCard]); // cardDeck[playersCard] is the value

//display the card on the website
document.getElementById('yC').innerHTML = 'Your Card is a' + (('Ace' === cardDeck[playersCard]) ? 'n ' : ' ') + cardDeck[playersCard];



// Declare a variable to store points
let points = 0;



// switch (cardDeck[randomCard]) {
//     case 0: // Card is an Ace
//         document.getElementById('cardImage').src = 'images/ace.png';
//         break;
//     case 1: // Card is a 2
//         document.getElementById('cardImage').src = 'images/two.png';
//         break;
//     case 2: // Card is a 3
//         document.getElementById('cardImage').src = 'images/three.png';
//         break;
//     case 3: // Card is a 4
//         document.getElementById('cardImage').src = 'images/four.png';
//         break;
//     case 4: // Card is a 5
//         document.getElementById('cardImage').src = 'images/five.png';
//         break;
//     case 5: // Card is a 6
//         document.getElementById('cardImage').src = 'images/six.png';
//         break;
//     case 6: // Card is a 7
//         document.getElementById('cardImage').src = 'images/seven.png';
//         break;
//     case 7: // Card is a 8
//         document.getElementById('cardImage').src = 'images/eight.png';
//         break;
//     case 8: // Card is a 9
//         document.getElementById('cardImage').src = 'images/nine.png';
//         break;
//     case 9: // Card is a 10
//         document.getElementById('cardImage').src = 'images/ten.png';
//         break;
//     case 10: // Card is a Jack
//         document.getElementById('cardImage').src = 'images/jack.png';
//         break;
//     case 11: // Card is a Queen
//         document.getElementById('cardImage').src = 'images/queen.png';
//         break;
//     case 12: // Card is a King
//         document.getElementById('cardImage').src = 'images/king.png';
//         break;
//     default:
//         document.getElementById('cardImage').src = 'images/card.png';
//         break;
// }



// Step 3. Compare the cards

function lower() {
    if (playersCard < randomCard) {
        console.log('Correct, Your card was lower');
        document.getElementById('message').innerHTML = "Correct, Your card was lower";
        points++;
        pts();
        disableButton();
    } else if (playersCard === randomCard) {
        disableButton();
        console.log('Your card is the same, thats a push, no points');
        document.getElementById('message').innerHTML = 'Your card is the same, thats a push, no points';
    } else {
        disableButton();
        console.log('Wrong, Your card was higher')
        document.getElementById('message').innerHTML = "Wrong, Your card was higher";
    }
}

function higher() {
    if (playersCard > randomCard) {
        console.log('Correct, Your card was higher');
        document.getElementById('message').innerHTML = "Correct, Your card was higher";
        points++;
        pts();
        disableButton();
    } else if (playersCard === randomCard) {
        disableButton();
        console.log('Your card is the same, thats a push, no points');
        document.getElementById('message').innerHTML = 'Your card is the same, thats a push, no points';
    } else {
        disableButton();
        console.log('Wrong, Your card was lower')
        document.getElementById('message').innerHTML = "Wrong, Your card was lower";
    }
}









// Award the player points
function pts() {
    if (points === 1) {
        document.getElementById('pointsDisplay').innerHTML = "You Have: " + points + " point!";
    } else {
        document.getElementById('pointsDisplay').innerHTML = "You Have: " + points + " points!";
    }
}
pts();

//Disable the buttons once they select high or low
function disableButton() {
    document.getElementById('highButton').disabled = true;
    document.getElementById('lowButton').disabled = true;
    document.getElementById("result").classList.remove("hidden");

}


//Play Again Button
function playAgainButton() {
    document.getElementById('highButton').disabled = false;
    document.getElementById('lowButton').disabled = false;
    document.getElementById("result").classList.add("hidden");
}

function reset() {
    //reset the random card
    let random2 = Math.floor(Math.random() * cardDeck.length);
    randomCard = random2;
    //reset the players card
    let player2 = Math.floor(Math.random() * cardDeck.length);
    playersCard = player2;
    playAgainButton();
    document.getElementById('yC').innerHTML = 'Your Card is a' + (('Ace' === cardDeck[playersCard]) ? 'n ' : ' ') + cardDeck[playersCard];
    document.getElementById('rC').innerHTML = 'The Random Card is a' + (('Ace' === cardDeck[randomCard]) ? 'n ' : ' ') + cardDeck[randomCard];

    //clear the console for new game and put new logs in to see values
    console.clear();
    console.log(cardDeck);
    console.log('The array position of the random card is: ' + randomCard); // randomCard is the array position
    console.log('The randomly selected card is a: ' + cardDeck[randomCard]); // cardDeck[randomCard] is the value
    console.log('The array position of the players card is: ' + playersCard); //playersCard is the array position
    console.log('The players selected card is a: ' + cardDeck[playersCard]); // cardDeck[playersCard] is the value
}







// For adding class:

// document.getElementById("yc").classList.add("hidden");
// For removing class:

// document.getElementById("div1").classList.remove("classToBeRemoved");