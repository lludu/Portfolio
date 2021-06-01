

function cNamePressed () {
    document.getElementById('cName').innerHTML = companyName.value;
}

function cMessagePressed () {
    document.getElementById('cMessage').innerHTML = companyMessage.value;
}

function urNamePressed () {
    document.getElementById('urName').innerHTML = yourName.value;
}

function urJobPressed () {
    document.getElementById('urJob').innerHTML = yourJob.value;
}

function urEmailPressed () {
    document.getElementById('urEmail').innerHTML = "Email: " + yourEmail.value;
}

function urPhonePressed () {
    document.getElementById('urPhone').innerHTML = "Phone: " + yourPhone.value;
}


function typeRClick () {
    document.getElementById('cName').className = "card-text mb-0 font-weight-bold text-right";
    document.getElementById('cMessage').className = "card-text text-muted muted text-right";
    document.getElementById('urName').className = "card-title mb-0 font-weight-bold text-right";
    document.getElementById('urJob').className = "card-text text-right";
    document.getElementById('urEmail').className = "card-text smol text-right";
    document.getElementById('urPhone').className = "card-text smol text-right";
}

function typeCClick () {
    document.getElementById('cName').className = "card-text mb-0 font-weight-bold text-center";
    document.getElementById('cMessage').className = "card-text text-muted muted text-center";
    document.getElementById('urName').className = "card-title mb-0 font-weight-bold text-center";
    document.getElementById('urJob').className = "card-text text-center";
    document.getElementById('urEmail').className = "card-text smol text-center";
    document.getElementById('urPhone').className = "card-text smol text-center";
}

function typeLClick () {
    document.getElementById('cName').className = "card-text mb-0 font-weight-bold text-left";
    document.getElementById('cMessage').className = "card-text text-muted muted text-left";
    document.getElementById('urName').className = "card-title mb-0 font-weight-bold text-left";
    document.getElementById('urJob').className = "card-text text-left";
    document.getElementById('urEmail').className = "card-text smol text-left";
    document.getElementById('urPhone').className = "card-text smol text-left";
}


// Recoloring background

// Here we establish some variables, setting up a variable that contains the color we'll set the color well to when we first load up, and then setting up a load handler to do the main startup work once the page is fully loaded.

var backColor;
var defaultColor = "#F8F9FA";

window.addEventListener("load", startup, false);

// Once the page is loaded, our load event handler, startup(), is called:

function startup() {
  backColor = document.querySelector("#backColor");
  backColor.value = defaultColor;
  backColor.addEventListener("input", updateFirst, false);
  backColor.addEventListener("change", updateAll, false);
  backColor.select();

  typeColor = document.querySelector("#typeColor");
  typeColor.value = defaultColorType;
  typeColor.addEventListener("input", updateFirstType, false);
  typeColor.addEventListener("change", updateAllType, false);
  typeColor.select();
}


// reacting to color change

function updateFirst(event) {
    var cardybg = document.getElementsByClassName("cardy");
  
    if (cardybg) {
      cardy.style.background = event.target.value;
    }
  }


  function updateAll(event) {
    document.getElementsByClassName("cardy").forEach(function(cardybg) {
      cardybg.style.background = event.target.value;
    });
  }




// Recoloring text

var typeColor;
var defaultColorType = "#3d3d3d";

window.addEventListener("load", startup, false);

// reacting to color change

function updateFirstType(event) {
    var typeC = document.getElementsByClassName("cardy");
  
    if (typeC) {
      cardy.style.color = event.target.value;
    }
  }


  function updateAllType(event) {
    document.getElementsByClassName("cardy").forEach(function(typeC) {
      typeC.style.color = event.target.value;
    });
  }



  function formSubmit() {
      if (!yourName.value || !yourPhone.value || !yourEmail.value) {
          alert("Please complete all required sections");
      }
  }

  function formReset() {
      window.location.reload();
  }