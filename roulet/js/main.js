let button1 = document.querySelector('.button1'),
    button2 = document.querySelector('.button2'),
    button3 = document.querySelector('.button3'),
    button4 = document.querySelector('.button4'),
    buttonOdds = document.querySelector('.button_odds'),
    buttonEven = document.querySelector('.button_even'),
    buttonGreen = document.querySelector('.button_green'),
    buttonRed = document.querySelector('.button_red'),
    buttonPlay = document.querySelector('.button_play'),
    buttonReplay = document.querySelector('.button_replay'),
    buttonAll = document.querySelector('.play_area'),
    balance = document.querySelector('.balance_value'),
    circle = document.querySelector('.circle_wrapper');

balanceValue = 100;

balance.innerHTML = balanceValue;

let playValue = {
    btn1: {
        value: 0,
        win: 3
    },
    btn2: {
        value: 0,
        win: 3
    },
    btn3: {
        value: 0,
        win: 3
    },
    btn4: {
        value: 0,
        win: 3
    },
    odds: {
        value: 0,
        win: 2
    },
    even: {
        value: 0,
        win: 2
    },
    green: {
        value: 0,
        win: 2
    },
    red: {
        value: 0,
        win: 2
    }
};

let random,
    degree;

button1.addEventListener('click', () => {
    button1.classList.toggle('button_active');
    if(playValue.btn1.value == 0) {
        playValue.btn1.value = 1;
    } else if(playValue.btn1.value == 1) {
        playValue.btn1.value = 0;
    }
    if(playValue.btn1.value == 1 || playValue.btn2.value == 1 || playValue.btn3.value == 1 || playValue.btn4.value == 1 || playValue.odds.value == 1 || playValue.even.value == 1 || playValue.green.value == 1 || playValue.red.value == 1) {
        buttonPlay.classList.remove('button_play_noactive');
    } else if (playValue.btn1.value == 0 && playValue.btn2.value == 0 && playValue.btn3.value == 0 && playValue.btn4.value == 0 && playValue.odds.value == 0 && playValue.even.value == 0 && playValue.green.value == 0 && playValue.red.value == 0) {
        buttonPlay.classList.add('button_play_noactive');
    }
});

button2.addEventListener('click', () => {
    button2.classList.toggle('button_active');
    if(playValue.btn2.value == 0) {
        playValue.btn2.value = 1;
    } else if(playValue.btn2.value == 1) {
        playValue.btn2.value = 0;
    }
    if(playValue.btn1.value == 1 || playValue.btn2.value == 1 || playValue.btn3.value == 1 || playValue.btn4.value == 1 || playValue.odds.value == 1 || playValue.even.value == 1 || playValue.green.value == 1 || playValue.red.value == 1) {
        buttonPlay.classList.remove('button_play_noactive');
    } else if (playValue.btn1.value == 0 && playValue.btn2.value == 0 && playValue.btn3.value == 0 && playValue.btn4.value == 0 && playValue.odds.value == 0 && playValue.even.value == 0 && playValue.green.value == 0 && playValue.red.value == 0) {
        buttonPlay.classList.add('button_play_noactive');
    }
});

button3.addEventListener('click', () => {
    button3.classList.toggle('button_active');
    if(playValue.btn3.value == 0) {
        playValue.btn3.value = 1;
    } else if(playValue.btn3.value == 1) {
        playValue.btn3.value = 0;
    }
    if(playValue.btn1.value == 1 || playValue.btn2.value == 1 || playValue.btn3.value == 1 || playValue.btn4.value == 1 || playValue.odds.value == 1 || playValue.even.value == 1 || playValue.green.value == 1 || playValue.red.value == 1) {
        buttonPlay.classList.remove('button_play_noactive');
    } else if (playValue.btn1.value == 0 && playValue.btn2.value == 0 && playValue.btn3.value == 0 && playValue.btn4.value == 0 && playValue.odds.value == 0 && playValue.even.value == 0 && playValue.green.value == 0 && playValue.red.value == 0) {
        buttonPlay.classList.add('button_play_noactive');
    }
});

button4.addEventListener('click', () => {
    button4.classList.toggle('button_active');
    if(playValue.btn4.value == 0) {
        playValue.btn4.value = 1;
    } else if(playValue.btn4.value == 1) {
        playValue.btn4.value = 0;
    }
    if(playValue.btn1.value == 1 || playValue.btn2.value == 1 || playValue.btn3.value == 1 || playValue.btn4.value == 1 || playValue.odds.value == 1 || playValue.even.value == 1 || playValue.green.value == 1 || playValue.red.value == 1) {
        buttonPlay.classList.remove('button_play_noactive');
    } else if (playValue.btn1.value == 0 && playValue.btn2.value == 0 && playValue.btn3.value == 0 && playValue.btn4.value == 0 && playValue.odds.value == 0 && playValue.even.value == 0 && playValue.green.value == 0 && playValue.red.value == 0) {
        buttonPlay.classList.add('button_play_noactive');
    }
});

buttonOdds.addEventListener('click', () => {
    buttonOdds.classList.toggle('button_active');
    if(playValue.odds.value == 0) {
        playValue.odds.value = 1;
    } else if(playValue.odds.value == 1) {
        playValue.odds.value = 0;
    }
    if(playValue.btn1.value == 1 || playValue.btn2.value == 1 || playValue.btn3.value == 1 || playValue.btn4.value == 1 || playValue.odds.value == 1 || playValue.even.value == 1 || playValue.green.value == 1 || playValue.red.value == 1) {
        buttonPlay.classList.remove('button_play_noactive');
    } else if (playValue.btn1.value == 0 && playValue.btn2.value == 0 && playValue.btn3.value == 0 && playValue.btn4.value == 0 && playValue.odds.value == 0 && playValue.even.value == 0 && playValue.green.value == 0 && playValue.red.value == 0) {
        buttonPlay.classList.add('button_play_noactive');
    }
});

buttonEven.addEventListener('click', () => {
    buttonEven.classList.toggle('button_active');
    if(playValue.even.value == 0) {
        playValue.even.value = 1;
    } else if(playValue.even.value == 1) {
        playValue.even.value = 0;
    }
    if(playValue.btn1.value == 1 || playValue.btn2.value == 1 || playValue.btn3.value == 1 || playValue.btn4.value == 1 || playValue.odds.value == 1 || playValue.even.value == 1 || playValue.green.value == 1 || playValue.red.value == 1) {
        buttonPlay.classList.remove('button_play_noactive');
    } else if (playValue.btn1.value == 0 && playValue.btn2.value == 0 && playValue.btn3.value == 0 && playValue.btn4.value == 0 && playValue.odds.value == 0 && playValue.even.value == 0 && playValue.green.value == 0 && playValue.red.value == 0) {
        buttonPlay.classList.add('button_play_noactive');
    }
});

buttonGreen.addEventListener('click', () => {
    buttonGreen.classList.toggle('button_active');
    if(playValue.green.value == 0) {
        playValue.green.value = 1;
    } else if(playValue.green.value == 1) {
        playValue.green.value = 0;
    }
    if(playValue.btn1.value == 1 || playValue.btn2.value == 1 || playValue.btn3.value == 1 || playValue.btn4.value == 1 || playValue.odds.value == 1 || playValue.even.value == 1 || playValue.green.value == 1 || playValue.red.value == 1) {
        buttonPlay.classList.remove('button_play_noactive');
    } else if (playValue.btn1.value == 0 && playValue.btn2.value == 0 && playValue.btn3.value == 0 && playValue.btn4.value == 0 && playValue.odds.value == 0 && playValue.even.value == 0 && playValue.green.value == 0 && playValue.red.value == 0) {
        buttonPlay.classList.add('button_play_noactive');
    }
});

buttonRed.addEventListener('click', () => {
    buttonRed.classList.toggle('button_active');
    if(playValue.red.value == 0) {
        playValue.red.value = 1;
    } else if(playValue.red.value == 1) {
        playValue.red.value = 0;
    }
    if(playValue.btn1.value == 1 || playValue.btn2.value == 1 || playValue.btn3.value == 1 || playValue.btn4.value == 1 || playValue.odds.value == 1 || playValue.even.value == 1 || playValue.green.value == 1 || playValue.red.value == 1) {
        buttonPlay.classList.remove('button_play_noactive');
    } else if (playValue.btn1.value == 0 && playValue.btn2.value == 0 && playValue.btn3.value == 0 && playValue.btn4.value == 0 && playValue.odds.value == 0 && playValue.even.value == 0 && playValue.green.value == 0 && playValue.red.value == 0) {
        buttonPlay.classList.add('button_play_noactive');
    }
});

buttonPlay.addEventListener('click', () => {
    random = Math.ceil(Math.random() * 4);
    if(random == 1) {
        degree = 1125;
    } else if(random == 2) {
        degree = 1215;
    } else if(random == 3) {
        degree = 1305;
    } else if(random == 4) {
        degree = 1395;
    } 
    circle.style.transform = `rotate(${degree}deg)`;
    // circle.classList.add('circle_active');
    buttonAll.classList.add('button_all_noactive');
    setTimeout(() => {
        buttonReplay.classList.remove('button_play_noactive');
    }, 3200);
    buttonPlay.classList.add('button_play_noactive');
    setTimeout(() => {
        if(random == 1) {
            if(playValue.btn1.value == 1){
                balanceValue += playValue.btn1.win * 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.odds.value == 1){
                balanceValue += playValue.odds.win * 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.green.value == 1){
                balanceValue += playValue.green.win * 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.btn2.value == 1){
                balanceValue -= 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.btn3.value == 1){
                balanceValue -= 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.btn4.value == 1){
                balanceValue -= 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.even.value == 1){
                balanceValue -= 20;
                balance.innerHTML = balanceValue;
            }
            if(playValue.red.value == 1){
                balanceValue -= 20;
                balance.innerHTML = balanceValue;
            }
        };
        if(random == 2) {
            if(playValue.btn4.value == 1){
                balanceValue += playValue.btn4.win * 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.even.value == 1){
                balanceValue += playValue.even.win * 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.red.value == 1){
                balanceValue += playValue.red.win * 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.btn1.value == 1){
                balanceValue -= 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.btn2.value == 1){
                balanceValue -= 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.btn3.value == 1){
                balanceValue -= 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.odds.value == 1){
                balanceValue -= 20;
                balance.innerHTML = balanceValue;
            }
            if(playValue.green.value == 1){
                balanceValue -= 20;
                balance.innerHTML = balanceValue;
            }
        };
        if(random == 3) {
            if(playValue.btn2.value == 1){
                balanceValue += playValue.btn1.win * 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.even.value == 1){
                balanceValue += playValue.even.win * 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.green.value == 1){
                balanceValue += playValue.green.win * 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.btn1.value == 1){
                balanceValue -= 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.btn3.value == 1){
                balanceValue -= 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.btn4.value == 1){
                balanceValue -= 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.odds.value == 1){
                balanceValue -= 20;
                balance.innerHTML = balanceValue;
            }
            if(playValue.red.value == 1){
                balanceValue -= 20;
                balance.innerHTML = balanceValue;
            }
        };
        if(random == 4) {
            if(playValue.btn3.value == 1){
                balanceValue += playValue.btn1.win * 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.odds.value == 1){
                balanceValue += playValue.odds.win * 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.red.value == 1){
                balanceValue += playValue.red.win * 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.btn1.value == 1){
                balanceValue -= 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.btn2.value == 1){
                balanceValue -= 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.btn4.value == 1){
                balanceValue -= 10;
                balance.innerHTML = balanceValue;
            }
            if(playValue.even.value == 1){
                balanceValue -= 20;
                balance.innerHTML = balanceValue;
            }
            if(playValue.green.value == 1){
                balanceValue -= 20;
                balance.innerHTML = balanceValue;
            }
        }
        if(balanceValue < 20) {
            alert('На балансе не достаточно средств, вы проиграли');
            buttonReplay.classList.add('button_play_noactive');
            buttonPlay.classList.add('button_play_noactive');
        }
    }, 3500);
});

buttonReplay.addEventListener('click', () => {
    // circle.classList.remove('circle_active');
    circle.style.transform = 'rotate(45deg)';
    buttonReplay.classList.add('button_play_noactive');
    setTimeout(() => {
        buttonAll.classList.remove('button_all_noactive');
    }, 3200);
    button1.classList.remove('button_active');
    button2.classList.remove('button_active');
    button3.classList.remove('button_active');
    button4.classList.remove('button_active');
    buttonOdds.classList.remove('button_active');
    buttonEven.classList.remove('button_active');
    buttonGreen.classList.remove('button_active');
    buttonRed.classList.remove('button_active');
    playValue.btn1.value = 0,
    playValue.btn2.value = 0,
    playValue.btn3.value = 0,
    playValue.btn4.value = 0,
    playValue.odds.value = 0,
    playValue.even.value = 0,
    playValue.green.value = 0,
    playValue.red.value = 0;
})
