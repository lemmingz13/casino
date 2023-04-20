let display = document.querySelector('.display'),
    image = document.querySelector('.play_element'),
    score1 = document.querySelector('.score1'),
    score2 = document.querySelector('.score2'),
    timer = document.querySelector('.timer_value'),
    timerArea = document.querySelector('.timer'),
    button1 = document.querySelector('.rock'),
    button2 = document.querySelector('.paper'),
    button3 = document.querySelector('.scissors'),
    playArea = document.querySelector('.play_area'),
    timerValue = 3,
    scoreValue1 = 0,
    scoreValue2 = 0;

timer.innerHTML = timerValue;
score1.innerHTML = scoreValue1;
score2.innerHTML = scoreValue2;

let timerOut,
    random;

let images = ['./img/rock.png', './img/paper.png', './img/scissors.png'];

function playAction () {
    new Promise ((res, rej) => {
        random = Math.floor(Math.random()*3);
        image.src = images[random];
        timerOut = setInterval(() => {
            timerValue--;
            timer.innerHTML = timerValue;
            if(timerValue < 0) {
                clearInterval(timerOut);
                timer.innerHTML = timerValue;
                res();
            };
        }, 500)
    }).then(() => {
        timerArea.classList.add('timer_noactive');
        setTimeout(() => {
            timerValue = 3;
            timer.innerHTML = timerValue;
            timerArea.classList.remove('timer_noactive');
            button1.classList.remove('buttons_noactive');
            button2.classList.remove('buttons_noactive');
            button3.classList.remove('buttons_noactive');
        }, 2000);
    })
}

button1.addEventListener('click', () => {
    playAction();
    button1.classList.add('buttons_noactive');
    button2.classList.add('buttons_noactive');
    button3.classList.add('buttons_noactive');
    setTimeout(() => {
        if(random == 1) {
            ++scoreValue2;
            score2.innerHTML = scoreValue2;
            playArea.classList.add('red');
            display.innerHTML = 'Проиграл, попробуй ещё раз';
        } else if(random == 2) {
            ++scoreValue1;
            score1.innerHTML = scoreValue1;
            playArea.classList.add('green');
            display.innerHTML = 'Выиграл, давай ещё раз';
        } else {
            display.innerHTML = 'Ничья, попробуй ещё раз';
        }
    }, 2500);
    setTimeout(() => {
        playArea.classList.remove('red');
        playArea.classList.remove('green');
    }, 4000);   
})

button2.addEventListener('click', () => {
    playAction();
    button1.classList.add('buttons_noactive');
    button2.classList.add('buttons_noactive');
    button3.classList.add('buttons_noactive');
    setTimeout(() => {
        if(random == 2) {
            ++scoreValue2;
            score2.innerHTML = scoreValue2;
            playArea.classList.add('red');
            display.innerHTML = 'Проиграл, попробуй ещё раз';
        } else if(random == 0) {
            ++scoreValue1;
            score1.innerHTML = scoreValue1;
            playArea.classList.add('green');
            display.innerHTML = 'Выиграл, давай ещё раз';
        } else {
            display.innerHTML = 'Ничья, попробуй ещё раз';
        }
    }, 2500);
    setTimeout(() => {
        playArea.classList.remove('red');
        playArea.classList.remove('green');
    }, 4000);   
})

button3.addEventListener('click', () => {
    playAction();
    button1.classList.add('buttons_noactive');
    button2.classList.add('buttons_noactive');
    button3.classList.add('buttons_noactive');
    setTimeout(() => {
        if(random == 0) {
            ++scoreValue2;
            score2.innerHTML = scoreValue2;
            playArea.classList.add('red');
            display.innerHTML = 'Проиграл, попробуй ещё раз';
        } else if(random == 1) {
            ++scoreValue1;
            score1.innerHTML = scoreValue1;
            playArea.classList.add('green');
            display.innerHTML = 'Выиграл, давай ещё раз';
        } else {
            display.innerHTML = 'Ничья, попробуй ещё раз';
        }
    }, 2500);
    setTimeout(() => {
        playArea.classList.remove('red');
        playArea.classList.remove('green');
    }, 4000);   
})
 