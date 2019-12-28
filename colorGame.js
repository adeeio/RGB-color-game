'use-strict';

const numberOfSquares = 6;
const arrOfRgb = [];
const randomColorRGB = document.getElementById("randomRGB");
const squares = document.querySelectorAll(".square");
const jumbotron = document.getElementById("jumbotron");
const tryAgain = document.getElementById('tryAgain');
const newColor = document.getElementById('newColor');
const easy = document.getElementById('easy');
const hard = document.getElementById('hard');

const randomNumber = () => { return Math.floor(Math.random() * numberOfSquares); }
const randomNum = randomNumber();

const randomRGB = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    return rgb;
}

const getColors = (numberOfSquares, arr) => {
    for (let i = 0; i < numberOfSquares; i++) {
        arr[i] = randomRGB();
    }
    return arr;
}

const colorSquares = () => {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = arrOfRgb[i];
    }
}

const correctColor = () => {
    for (let i = 0; i < arrOfRgb.length; i++) {
        if (i === randomNum) {
            randomColorRGB.innerText = arrOfRgb[i];
        }
    }
}

const clickedColor = () => {
    squares.forEach(el => {
        el.addEventListener("click", () => {
            if (el.style.backgroundColor === randomColorRGB.innerText) {
                for (let i = 0; i < squares.length; i++) {
                    squares[i].style.backgroundColor = randomColorRGB.innerText;
                    jumbotron.style.backgroundColor = randomColorRGB.innerText;
                }

            }
            else {
                el.style.backgroundColor = "black";
            }
        });
    })
}

newColor.addEventListener('click', () => {
    jumbotron.style.background = "blue";
    getColors(numberOfSquares, arrOfRgb);
    colorSquares();
    correctColor();
    clickedColor();
});

const hideBoxes = () => {
    let counter = 0;
    for (let i = 0; i < squares.length; i++) {
        if(squares[i].style.backgroundColor !== randomColorRGB.innerText){
            squares[i].style.display = "none";
            counter++;
        }
        if(counter === 3){
            break;
        }
    }
}

const showBoxes = () => {
    for(let i = 0; i < squares.length; i++){
        squares[i].style.display = "block";
    }
}


easy.addEventListener("click", () => {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    hideBoxes();
});

hard.addEventListener("click", () => {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    showBoxes();
});


getColors(numberOfSquares, arrOfRgb);
colorSquares();
correctColor();
clickedColor();


