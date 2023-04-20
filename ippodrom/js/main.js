let play = document.querySelector('.btn_play'),
    display = document.querySelector('.display'),
    replay = document.querySelector('.btn_replay'),
    balance = document.querySelector('.balance_value');

let balanceValue = 100;

balance.innerHTML = balanceValue;

let horse1 = document.querySelector('.horse1'),
    horse2 = document.querySelector('.horse2'),
    horse3 = document.querySelector('.horse3');

let random1, random2, random3;

let radios = document.querySelectorAll('input[type="radio"]');

let checked;

function random() {
    random1 = Math.ceil(Math.random()*3);
    random2 = Math.ceil(Math.random()*3);
    while(random2 == random1) {
        random2 = Math.ceil(Math.random()*3);
    }
    random3 = Math.ceil(Math.random()*3);
    while(random3 == random2 || random3 == random1) {
        random3 = Math.ceil(Math.random()*3);
    }
}

play.addEventListener('click', () => {
    random()
    for (let radio of radios) {
		if (radio.checked) {
			checked = Number(radio.value);
		}
	}
    horse1.style.height = 120 + 60 * random1 + 'px';
    horse2.style.height = 120 + 60 * random2 + 'px';
    horse3.style.height = 120 + 60 * random3 + 'px';
    play.classList.add('button_noactive');
    setTimeout(() => {
        if(horse1.style.height > horse2.style.height && horse1.style.height > horse3.style.height) {
            display.innerHTML = 'Победила 1 лошадь:';
        } else if(horse2.style.height > horse1.style.height && horse2.style.height > horse3.style.height) {
            display.innerHTML = 'Победила 2 лошадь:';
        } else if(horse3.style.height > horse2.style.height && horse3.style.height > horse1.style.height) {
            display.innerHTML = 'Победила 3 лошадь:';
        }
    }, 1600);
    setTimeout(() => {
        if(checked == 1 && random1 == 3) {
            display.innerHTML += ' Вы победили';
            balanceValue += 30;
            balance.innerHTML = balanceValue;
        } else if(checked == 2 && random2 == 3) {
            display.innerHTML += ' Вы победили';
            balanceValue += 30;
            balance.innerHTML = balanceValue;
        } else if(checked == 3 && random3 == 3) {
            display.innerHTML += ' Вы победили';
            balanceValue += 30;
            balance.innerHTML = balanceValue;
        } else { 
            display.innerHTML += ' Вы проиграли'
            balanceValue -= 10;
            balance.innerHTML = balanceValue;
        }
    },1700);
    setTimeout(() => {
        horse1.style.height = '100px';
        horse2.style.height = '100px';
        horse3.style.height = '100px';
    }, 5000);
    setTimeout(() => {
        play.classList.remove('button_noactive');
        display.innerHTML = 'Делайте новую ставку';
    }, 6500);
    setTimeout(() => {
        if(balanceValue == 0){
            display.innerHTML = 'У вас закончились средства, пожалуйста пополните баланс';
            play.classList.add('button_noactive');
            replay.classList.remove('replay_noactive');
        }
    }, 6501);
});

replay.addEventListener('click', () => {
    balanceValue = 100;
    balance.innerHTML = balanceValue;
    replay.classList.add('replay_noactive');
    play.classList.remove('button_noactive');
})


