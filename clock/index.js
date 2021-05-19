const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    // grab the date in seconds
    const now = new Date();


    // make the seconds into a percentage 1-100% so you can move it from 0 to 360deg
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; //adding 90 here because by default our hands are horizontal we need to fix that
    // apply tranformation to the seconds hand
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
        // console.log(seconds);


    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = now.getHours();

    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`


    document.querySelector("h2").innerHTML = hours + ':' + (("0" + (minutes)).slice(-2)) + ':' + (("0" + (seconds)).slice(-2));
    // (hours % 12 || 12)).slice(-2)  >> hours in 01-12 format
}


//Set Clock Movement Interval
setInterval(setDate, 1000);