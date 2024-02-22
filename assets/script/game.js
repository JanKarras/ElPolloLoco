let canvas;
let ctx;
let world;
let keyboard = new Keyboard();

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log("My Char is ", world.charactar);
}