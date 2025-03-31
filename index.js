let home = document.getElementById("home");
let guest = document.getElementById("guest");
let currentWinner = document.getElementById("winner");
let countHome = 0;
let countGuest = 0;

function add1ToHome () {  
    countHome += 1;
    home.textContent = countHome;
    winner();
}

function add2ToHome () {  
    countHome += 2;
    home.textContent = countHome;
    winner();
}

function add3ToHome () {  
    countHome += 3;
    home.textContent = countHome;
    winner();
}

function add1ToGuest () {  
    countGuest += 1;
    guest.textContent = countGuest;
    winner();
}

function add2ToGuest () {  
    countGuest += 2;
    guest.textContent = countGuest;
    winner();
}

function add3ToGuest () {  
    countGuest += 3;
    guest.textContent = countGuest;
    winner();
}

function reset() {
    countGuest = 0;
    countHome = 0;
    home.textContent = 0;
    guest.textContent = 0;
    guest.style.border = "none";
    home.style.border = "none";
    currentWinner.textContent = "Curent Winner: ";
}

function winner() {
    if (countGuest > countHome) {
        guest.style.border = "solid 3px #F94F6D";
        home.style.border = "none";
        currentWinner.textContent = "Curent Winner: Guest"
        
    } else if(countHome > countGuest) {
        home.style.border = "solid 3px #F94F6D";
        guest.style.border = "none";
        currentWinner.textContent = "Curent Winner: Home"
    } else {
        guest.style.border = "none";
        home.style.border = "none";
        currentWinner.textContent = "Curent Winner: "
    }
}

