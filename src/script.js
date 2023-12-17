const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const score = document.getElementById("score");
const start = document.getElementById("start");
const btnStart = document.getElementById("btnStart");
const divJump = document.getElementById("divJump");
const btnJump = document.getElementById("btnJump");
const audioJump = new Audio();
audioJump.src = 'mp3/jump.mp3';
const audioRig1 = new Audio();
audioRig1.src = 'mp3/rig1.mp3';
const audioKick = new Audio();
audioKick.src = 'mp3/kick.mp3';
let count = 0;
let jumpCount = 0;

window.addEventListener("load", function (event) {
    divJump.style.display = 'none';
});

document.addEventListener("keydown", function (event) {
    jump();
});

btnStart.addEventListener("click", function (event) {
    divJump.style.display = 'block';
    start.style.display = 'none';
    cactus.className = 'cactus';
});

btnJump.addEventListener("click", function (event) {
    jump();
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
    }
    setTimeout(function () {
        dino.classList.remove("jump");
    }, 300);

    jumpCount++;
    audioJump.play();
}

let isAlive = setInterval(function () {

    if (cactus.className == 'cactus') {
        count++;
    }

    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        count = 0;
        jumpCount = 0;
        audioKick.play();
        cactus.className = 'cactusNone';
        divJump.style.display = 'none';
        start.style.display = 'block';
    }

    score.innerHTML = "Очки: " + count + " Прыжки: " + jumpCount;

    if (count === 1001) {
        audioRig1.play();
        setTimeout(function () {
            count = 0;
            jumpCount = 0;
            alert("Ты победил");
        }, 300);
    }

}, 10)

