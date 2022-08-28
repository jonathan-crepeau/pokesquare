// console.log('Fear is the mind killer.');

let score = 0;
let time = 10;
let roundCount = 1;

const btn = document.querySelector('.start-button');

btn.addEventListener('click', () => {
    setRounds();
    setTimer();
});

function playBall(numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++) {
        const square = $('<div class="game-square"></div>');
        assignColor(square);
        $('.squares-container').append(square);
    }
    $('.game-square').on('click', handleClick);
    setTimer();
}

function assignColor(element) {
    const number = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (number === 1) {
        $(element).css('background-color', 'red');
    } else if (number === 2) {
        $(element).css('background-color', 'blue');
    } else {
        $(element).css('background-color', 'green');
    }
}

function handleClick(event) {
    const color = $(event.target).css('background-color');
    updateScore(color);
    $(event.target).remove();
}

function updateScore(color) {
    const colorCheck = color.substring(4, color.length - 1).split(" ");
    if (colorCheck[2] === '255') {
        score++;
        $('.scoreboard').html('scoreboard: ' + score);
    } else {
        score--;
        $('.scoreboard').html('scoreboard: ' + score);
    }
}

function setTimer() {
    const timer = setInterval(function() {
        console.log(time)
        time--;
        if (time === 0) {
            clearInterval(timer);
            roundCount++;
        }
    }, 1000);
}

function setRounds() {
    $('.squares-container').empty();
    $('.round').html('round: ' + roundCount);

    if (roundCount === 1) {
        time = 30;
        playBall(50);
    } else if (roundCount === 2) {
        time = 20;
        playBall(100);
    } else if (roundCount === 3) {
        time = 10;
        playBall(150)
    } else {
        alert('[========== GAME OVER ==========]');
    }
}



// SECTION - Recursive Functions

function loop(x) {
    if (x >= 10) {
        return;
    }
    console.log(x);
    loop(x + 1);
}

function recursiveLoop(y) {
    if (y <= 0) {
        return;
    }
    console.log(y);
    recursiveLoop(y - 1);
}
