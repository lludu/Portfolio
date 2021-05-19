// Step 1. Creating the Array of the Card Deck
const cardDeck = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
console.log(cardDeck);




// // Step 2. Picking a random value in the card deck array and storing it in a variable.
// let randomCard = Math.floor(Math.random() * cardDeck.length);
let randomCard = cardDeck[3];
console.log('The array position of the random card is: ' + randomCard); // randomCard is the array position
console.log('The randomly selected card is a: ' + cardDeck[randomCard]); // cardDeck[randomCard] is the value


// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }