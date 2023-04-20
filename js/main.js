let style = document.createElement('style');      //styles
style.innerHTML = 'body {background: #f4f6f7; font-family: "Montserrat"; user-select: none;}';
style.innerHTML += '.container {margin: 0 auto; width: 90%; display: flex; align-items: center; flex-direction: column;}';
style.innerHTML += '.menu {padding: 20px 0; text-align: center; background: #1f2e4d; color: white; font-size: 36px; font-weight: 800; border-radius: 0 0 20px 20px; position: sticky; top: 0; width: 100%; box-shadow: 0px 5px 8px 5px rgba(34, 60, 80, 0.07);}';
style.innerHTML += '.main_text {margin-top: 30px;}';
style.innerHTML += '.h1 {text-align: center; font-size: 24px; padding: 10px; font-weight: 600;}';
style.innerHTML += '.main_text_content {font-size: 18px; font-weight: 500; line-height: 20px; text-align: center; padding: 10px 30px;}';
style.innerHTML += '.games_wrapper {margin: 30px 0; flex-grow: 1; display: flex; flex-direction: column; align-items: center;}';
style.innerHTML += '.game {display: flex; margin: 20px 0;}';
style.innerHTML += '.image {width: 200px; height: 200px; border-radius: 10px; box-shadow: 0px 5px 8px 9px rgba(34, 60, 80, 0.24);}';
style.innerHTML += '.game_container {max-width: 450px; padding: 0 25px}';
style.innerHTML += '.h2 {font-size: 18px; font-weight: 500; padding: 10px 0 10px 0;}';
style.innerHTML += '.game_title {font-size: 16px; margin-bottom: 20px;}';
style.innerHTML += '.button {font-size: 16px; font-weight: 600; color: white; background: #1f2e4d; padding: 8px; border-radius: 10px;}';
style.innerHTML += '.button:hover {opacity: 0.7; box-shadow: 0px 5px 8px 5px rgba(34, 60, 80, 0.07);}';
style.innerHTML += '.footer {width: 100%; padding: 20px 0; text-align: center; background: #1f2e4d; color: white; font-size: 18px; font-weight: 800; border-radius: 20px 20px 0 0;}';
style.innerHTML += '.logo {width: 40px; height: 40px; position: absolute; left: 40px; top: 17px;}';
document.head.append(style);

let container = document.createElement('div');   //container
container.className = 'container';
root.append(container);

let menu = document.createElement('div');       //menu
menu.className = 'menu';
menu.innerHTML = 'ONLINE KAZINO "LEMON"';
container.append(menu);

let logo = document.createElement('img');
logo.className = 'logo';
logo.src = './img/logo.png';
menu.prepend(logo);

let mainText = document.createElement('div');     //main text
mainText.className = 'main_text';
container.append(mainText);

let mainTextH1 = document.createElement('h1');    //h1
mainTextH1.className = 'h1';
mainTextH1.innerHTML = 'Онлайн казино';
mainText.append(mainTextH1);
let mainTextP = document.createElement('p');      //p
mainTextP.className = 'main_text_content';
mainTextP.innerHTML = 'Привет, Друг. Рад приветствовать тебя в своём онлайн казино "Lemon", самом честном и справедливом казино в мире. Ассортимент игр данного казино крайне мал, но зато ты можешь быть уверен в том, что все исходы отталкиваются только от метода random, и тебе придётся рассчитывать лишь на свою удачу. Не медли, жми на заинтересовавшую тебя игру и вперёд в мир азарта.';
mainText.append(mainTextP);

let gamesWrapper = document.createElement('div');     //games wrapper
gamesWrapper.className = 'games_wrapper';
container.append(gamesWrapper);

let game1 = document.createElement('div');             //game 1, 2, 3, 4
game1.className = 'game';
gamesWrapper.append(game1);

let game2 = document.createElement('div');
game2.className = 'game';
gamesWrapper.append(game2);

let game3 = document.createElement('div');
game3.className = 'game';
gamesWrapper.append(game3);

let game4 = document.createElement('div');
game4.className = 'game';
gamesWrapper.append(game4);                          ///////

let imgRoulet = document.createElement('img'),
    imgRock = document.createElement('img');
    imgIppodrom = document.createElement('img'),
    imgAutomats = document.createElement('img');

imgRoulet.className = 'image';
imgRock.className = 'image';
imgIppodrom.className = 'image';
imgAutomats.className = 'image';

imgRoulet.src = './img/roulet.jpg';
imgRock.src = './img/rock.jpg';
imgIppodrom.src = './img/ippodrome.jpg';
imgAutomats.src = './img/automats.jpg';

let gameContainer1 = document.createElement('div');
let gameContainer2 = document.createElement('div');
let gameContainer3 = document.createElement('div');
let gameContainer4 = document.createElement('div');

gameContainer1.className = 'game_container'; 
gameContainer2.className = 'game_container';  
gameContainer3.className = 'game_container';  
gameContainer4.className = 'game_container'; 

let gameH21 = document.createElement('h2');
let gameH22 = document.createElement('h2');
let gameH23 = document.createElement('h2');
let gameH24 = document.createElement('h2');

gameH21.className = 'h2';
gameH22.className = 'h2';
gameH23.className = 'h2';
gameH24.className = 'h2';

gameH21.innerHTML = 'Рулетка';
gameH22.innerHTML = 'Камень, ножницы, бумага';
gameH23.innerHTML = 'Скачки';
gameH24.innerHTML = 'Игровые автоматы';

let gameP1 = document.createElement('p');
let gameP2 = document.createElement('p');
let gameP3 = document.createElement('p');
let gameP4 = document.createElement('p');

gameP1.className = 'game_title';
gameP2.className = 'game_title';
gameP3.className = 'game_title';
gameP4.className = 'game_title';

gameP1.innerHTML = 'Правила просты: можно поставить на конкретное число, на чётное или нечётное или же цвет числа. Если событие выпадает, банк увеличивается, если же нет, банк уменьшается.';
gameP2.innerHTML = 'Выбирай один из трёх вариантов и надейся на удачу. Классическая игра из детства, правила не изменились.';
gameP3.innerHTML = 'Правила этой игры просты до безобразия: просто поставь на любую лошадь и лови удачу за хвост.';
gameP4.innerHTML = 'Старые добрые игровые автоматы с вишенками и клубничками. Для того чтобы сорвать максимальный куш, надо чтобы на экране совпали три одинаковых ягодки, при выпадении двух одинаковых ягод, куш будет меньше, а если же нет, то часть банка придётся потерять.';

let button1 = document.createElement('a');
let button2 = document.createElement('a');
let button3 = document.createElement('a');
let button4 = document.createElement('a');

button1.innerHTML = 'Играть';
button2.innerHTML = 'Играть';
button3.innerHTML = 'Играть';
button4.innerHTML = 'Играть';

button1.href = './roulet/index.html';
button2.href = './rockScissorsPaper/index.html';
button3.href = './ippodrom/index.html';
button4.href = './automats/index.html';

button1.className = 'button';
button2.className = 'button';
button3.className = 'button';
button4.className = 'button';

game1.append(imgRoulet);
game2.append(imgRock);
game3.append(imgIppodrom);
game4.append(imgAutomats);

game1.append(gameContainer1);
game2.append(gameContainer2);
game3.append(gameContainer3);
game4.append(gameContainer4);

gameContainer1.append(gameH21);
gameContainer2.append(gameH22);
gameContainer3.append(gameH23);
gameContainer4.append(gameH24);
gameContainer1.append(gameP1);
gameContainer2.append(gameP2);
gameContainer3.append(gameP3);
gameContainer4.append(gameP4);
gameContainer1.append(button1);
gameContainer2.append(button2);
gameContainer3.append(button3);
gameContainer4.append(button4);

let footer = document.createElement('div');     //footer
footer.className = 'footer';
container.append(footer);
footer.innerHTML = 'Made by Vital Hatalski'

