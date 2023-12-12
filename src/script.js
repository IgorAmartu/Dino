const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const score = document.getElementById("score");
let count = 0;
let jumpCount = 0;

document.addEventListener("keydown", function (event) {
    jump();
})

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
    }
    setTimeout(function () {
        dino.classList.remove("jump");
    }, 300);

    jumpCount++;
}

let isAlive = setInterval(function () {
    count++;
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        count = 0;
        jumpCount = 0;
        alert("Убился об кактус");
    }

    score.innerHTML = "Очки: " + count + " Прыжки: " + jumpCount;

    if (count === 3001) {
        alert("Ты победил");
    }

}, 10)

