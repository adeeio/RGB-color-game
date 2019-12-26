'use-strict';

var randomColorRGB = document.getElementById("randomRGB");
var squares = document.querySelectorAll(".square");
var rgb = randomRGB();
var randomNum = randomNumber();
const jumbotron = document.getElementById("jumbotron");
const tryAgain = document.getElementById('tryAgain');
const newColor = document.getElementById('newColor');
const easy = document.getElementById('easy');
const hard = document.getElementById('hard');
randomColorRGB.innerHTML = rgb;


function randomNumber() {
    return Math.floor(Math.random() * 6);
}

function randomRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";

    return rgb;
}

for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = randomRGB();

    if (i === randomNum) {
        squares[i].style.backgroundColor = rgb;
    }
}


squares.forEach(el => {
    el.addEventListener("click", () => {
        if (el.style.backgroundColor === rgb) {
            changeColorOfBoxes(rgb);
        }
        else {
            el.style.visibility = 'hidden';
            tryAgain.innerHTML = "Try Again!";
        }
    });
});


const changeColorOfBoxes = e => {
    squares.forEach(el => {
        el.style.visibility = 'visible';
        el.style.backgroundColor = e;
        jumbotron.style.backgroundColor = e;
        tryAgain.innerHTML = "Correct!";
        newColor.innerHTML = "Play Again?"
    });
}

const easyMode = () => {
    easy.classList.add("selected");
    hard.classList.remove('selected');
    let counter = 0;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].style.backgroundColor !== rgb) {
            squares[i].style.display = 'none';
            counter++;
        }

        if (counter === 3) {
            break;
        }
    }
}
const hardMode = () => {
    hard.classList.add("selected");
    easy.classList.remove('selected');
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.display = 'inline-block';
    }
}

newColor.addEventListener('click', () => document.location.reload(true));




easy.addEventListener('click', easyMode);
hard.addEventListener('click', hardMode);

