// document.getElementById('d1').innerHTML = "Display 1: Function is working";
// document.getElementById('d2').innerHTML = "Display 2: Function is working";
// document.getElementById('d3').innerHTML = "Display 3: Function is working";
// document.getElementById('d4').innerHTML = "Display 4: Function is working";
// document.getElementById('d5').innerHTML = "Display 5: Function is working";
// document.getElementById('d6').innerHTML = "Display 6: Function is working";
// document.getElementById('d7').innerHTML = "Display 7: Function is working";
// document.getElementById('d8').innerHTML = "Display 8: Function is working";
// document.getElementById('d9').innerHTML = "Display 9: Function is working";


// Formula for F -> C 
// (32°F − 32) × 5/9 = 0°C
// example    console.log((82-32) * (5/9))  82 F = 27.7 celsius

// Formula for C -> F
// (32°C × 9/5) + 32 = 89.6°F
// example   console.log((82 * (9/5) + 32))  82 celsius = 179.6 F


function cely () {
    var cel = document.getElementById('e-temp').value
    var cCel = Math.round(((cel - 32) * (5/9)));
    document.getElementById('d-temp').value = cCel + " °C";
}

function fahr () {
    var fah = document.getElementById('e-temp').value
    var cfah = Math.round(((fah * (9/5) + 32)));
    document.getElementById('d-temp').value = cfah + " °F";
}
