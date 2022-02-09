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
playerSprite.src = "images/spritesheet.png"

let position = 0;
const background = new Image();
background.src = "images/BG.png";


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    canvasContext.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);

}


function animate(){
    canvasContext.clearRect(0,0,canvas.width, canvas.height);
    canvasContext.drawImage(background,0,0, canvas.width, canvas.height); // built in canvas method three versions.
    drawSprite(playerSprite, 0, 0, player.width, player.height, 0,0, player.width /6,player.height/6);
    requestAnimationFrame(animate);
}

animate();



