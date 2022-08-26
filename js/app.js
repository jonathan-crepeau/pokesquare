// console.log('Fear is the mind killer.');

let score = 0;

btn = document.querySelector('button');

btn.addEventListener('click', () => {
    // console.log('This is working.');
    createSquares(8);
});

const createSquares = (numberOfSquares) => {
    for (let i = 0; i < numberOfSquares; i++) {
        const square = $('<div class="gameSquare"></div>');
        applyRandomColor(square);
        $('.squares').append(square);
    }
    $('.gameSquare').on('click', handlePoke);
}

const applyRandomColor = (square) => {
    const randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (randomNumber === 1) {
        square.css('background-color', 'red')
    } else if (randomNumber === 2) {
        square.css('background-color', 'blue')
    } else {
        square.css('background-color', 'green')
    }
}

function handlePoke(event) {
    // (event.target).style.opacity = 0;

    $(event.target).css('opacity', 0);
    const color = $(event.target).css('background-color');
    console.log(color);
    checkColor(color);
}

const checkColor = (color) => {
    const colorNumber = color.substring(4, color.length - 1).split(" ");
    console.log(colorNumber);
    console.log(colorNumber[2]);
    if (colorNumber[2] === '255') {
        score += 1;
        console.log(score);
        $('h1').text('Scoreboard: ' + score);
    } else {
        score -= 1;
        console.log(score);
        $('h1').text('Scoreboard: ' + score);
    }
}