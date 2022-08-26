// console.log('Fear is the mind killer.');

let score = 0;

const btn = document.querySelector('.start-button');

btn.addEventListener('click', () => {
    console.log('Clicked!');
    playBall(12);
});

function playBall(numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++) {
        const square = $('<div class="game-square"></div>');
        console.log('Added!');
        assignColor(square);
        $('.squares-container').append(square);
    }
    $('.game-square').on('click', handleClick);
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
    console.log('square clicked');
    const color = $(event.target).css('background-color');
    console.log(color);
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
    console.log(colorCheck);
}
