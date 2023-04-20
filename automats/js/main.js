let btnPlay = document.querySelector('.btn_play'),
    btnReplay = document.querySelector('.btn_replay'),
    balance = document.querySelector('.balance_value'),
    area1 = document.querySelector('.area1'),
    area2 = document.querySelector('.area2'),
    area3 = document.querySelector('.area3');

let balanceValue = 100;

balance.innerHTML = balanceValue;

let random1, random2, random3, 
a = 0, 
b = 0, 
c = 0;
let i = 0,
k = 0,
j = 0;

btnPlay.addEventListener('click', () => {
    random1 = Math.ceil(Math.random() * 3);
    random2 = Math.ceil(Math.random() * 3);
    random3 = Math.ceil(Math.random() * 3);
    btnPlay.classList.add('btn_noactive');
    let interval = setInterval(() => {
        ++i;
        if(i == random1 + 10) {
            clearInterval(interval)
        }
        a += 100;
        if(a > 200) {
            a = 0;
        }
        area1.style.bottom = `${a}px`;
    }, 200);
    let interval2 = setInterval(() => {
        ++k;
        if(k == random2 + 10) {
            clearInterval(interval2)
        }
        b += 100;
        if(b > 200) {
            b = 0;
        }
        area2.style.bottom = `${b}px`;
    }, 300);
    let interval3 = setInterval(() => {
        ++j;
        if(j == random3 + 10) {
            clearInterval(interval3)
        }
        c += 100;
        if(c > 200) {
            c = 0;
        }
        area3.style.bottom = `${c}px`;
    }, 100);
    setTimeout(() => {
        btnReplay.classList.remove('btn_noactive');
        if(random1 == random2 && random1 == random3) {
            balanceValue += 20;
            balance.innerHTML = balanceValue;
        } else if(random1 == random2 || random1 == random3 || random2 == random3) {
            balanceValue += 2;
            balance.innerHTML = balanceValue;
        } else {
            balanceValue -= 15;
            balance.innerHTML = balanceValue;
        }
        if(balanceValue < 10) {
            alert('На балансе не достаточно средств, вы проиграли')
            btnReplay.classList.add('btn_noactive');
            btnPlay.classList.add('btn_noactive');
        }
    }, 4000);
});

btnReplay.addEventListener('click', () => {
    btnReplay.classList.add('btn_noactive');
    btnPlay.classList.remove('btn_noactive');
    a = 0, 
    b = 0, 
    c = 0;
    i = 0,
    k = 0,
    j = 0;
    area1.style.bottom = `${a}px`;
    area2.style.bottom = `${b}px`;
    area3.style.bottom = `${c}px`;
})