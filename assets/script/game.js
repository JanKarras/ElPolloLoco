let canvas;
let keyboard = new Keyboard();

function endScreen(end){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    let img = new Image()
    if (end == 'lose')
        img.src = "assets/img/9_intro_outro_screens/game_over/oh no you lost!.png"
    else
        img.src = 'assets/img/9_intro_outro_screens/game_over/game over.png'
    img.onload = function(){
        ctx.drawImage(img, 0, 0, 720, 480);
    }
    document.getElementById('button').classList.remove('displayNone')
    document.getElementById('instructions').classList.add('displayNone')
    document.getElementById('button').innerHTML = 'Restart';
}

function startGame(){
    document.getElementById('button').classList.add('displayNone')
    document.getElementById('instructions').classList.remove('displayNone')
    initLevel();
    world = new World(canvas, keyboard);
    setInterval(() => {
        if(world.character.energy <= 0){
            setTimeout(() =>{
                endScreen('lose');
            }, 7 * 60)
        } else if (world.gameWon == true){
            setTimeout(() =>{
                endScreen('win');
            }, 3 * 200)
        }
    }, 60)
    console.log(world.character);
}

function init(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    let img = new Image()
    img.src = "assets/img/9_intro_outro_screens/start/startscreen_1.png"
    img.onload = function(){
        ctx.drawImage(img, 0, 0, 720, 480);
    }
    startGame()
}

window.addEventListener("keydown", (e) =>{
    if (e.keyCode == 68)
        keyboard.RIGHT = true;
    if (e.keyCode == 65)
        keyboard.LEFT = true;
    if (e.keyCode == 87)
        keyboard.UP = true;
    if (e.keyCode == 83)
        keyboard.DOWN = true;
    if (e.keyCode == 32)
        keyboard.SPACE = true;
    if (e.keyCode == 69)
        keyboard.E = true;
})

window.addEventListener("keyup", (e) =>{
    if (e.keyCode == 68)
        keyboard.RIGHT = false;
    if (e.keyCode == 65)
        keyboard.LEFT = false;
    if (e.keyCode == 87)
        keyboard.UP = false;
    if (e.keyCode == 83)
        keyboard.DOWN = false;
    if (e.keyCode == 32)
        keyboard.SPACE = false;
    if (e.keyCode == 69)
        keyboard.E = false;
})