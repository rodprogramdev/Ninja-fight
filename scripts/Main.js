const canvas = document.getElementById("canvas1");
const canvasContext = canvas.getContext('2d'); // give us access to building canvas methods.
canvas.width = 800;
canvas.height = 500;

const keys = [];

const player = {
    x: 0, // x axis
    y: 0, // y axis
    width: 520,
    height:463,
    frameX: 0, // will store coordinates rectangle of frame of the image, spritesheet is compose of images
    frameY: 0,
    speed: 9, // how many pixel per frame.
    moving: false


};

const playerSprite = new Image();
playerSprite.src = "spritesheet.png"


const background = new Image();
background.src = "images/BG.png";

function animate(){
    canvasContext.drawImage(background, 0,0, canvas.width, canvas.height); // built in canvas method three versions.
    requestAnimationFrame(animate);
}

animate();
