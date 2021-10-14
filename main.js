const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: 'axe',
    attack: console.log ('Scorpion' + ' - Fight...')
}

const player2 = {
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: 'axe',
    attack: console.log ('Sub-Zero' + ' - Fight...')
}

const $player1 = document.createElement('div');
$player1.classList.add('player1');

const $progressbar = document.createElement('div');
$progressbar.classList.add('progressbar');
$player1.appendChild($progressbar);

const $life = document.createElement('div');
$life.classList.add('life');
$progressbar.appendChild($life);

const $name = document.createElement('div');
$name.classList.add('name');
$progressbar.appendChild($name);
$name.innerText = 'Scorpion'

const $character = document.createElement('div');
$character.classList.add('character');
$player1.appendChild($character);

const $img = document.createElement('img');
$img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
$character.appendChild($img)

const $arenas = document.querySelector('.arenas');
$arenas.appendChild($player1);

function f(name, lastname, health) {
    
    console.log(name + ' ' + lastname + ' ' + health);
    
}

f('Player1', 'Scorpion', 50 );
f('Player2', 'Sub-Zero', 80 );

function createPlayer(name, lastname,) {
    
    console.log (name + ' ' + lastname)
    
}

createPlayer('Player1', 'axe');
createPlayer('Player2', 'axe');

