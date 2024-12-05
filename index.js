let homeCount = document.getElementById("home-cnt")
let guestCount = document.getElementById("guest-cnt")
let reSet= document.getElementById("reset")

let count = 0

function plusone(){
    count += 1
    homeCount.textContent = count
}

function plustwo(){
    count += 2
    homeCount.textContent = count
}


function plusthree(){
    count += 3
    homeCount.textContent = count
}

let count2 = 0

function plusone2(){
    count2 += 1
    guestCount.textContent = count2
}

function plustwo2(){
    count2 += 2
    guestCount.textContent = count2
}


function plusthree2(){
    count2 += 3
    guestCount.textContent = count2
}


function resetin(){
    count = 0;
    count2 = 0;
    homeCount.textContent = count;
    guestCount.textContent = count2;
}
