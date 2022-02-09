const canvas = document.getElementById("canvas1");
const canvasContext = canvas.getContext('2d'); // give us access to building canvas methods.
canvas.width = 800;
canvas.height = 500;

const keys = [];

const player = {
    x: 100, // x axis
    y: 380, // y axis
    width: 548, // 5204 * 10
    height:548,
    frameX: 0, // will store coordinates rectangle of frame of the image, spritesheet is compose of images
    frameY: 0,
    speed: 9, // how many pixel per frame.
    moving: false


};

const playerSprite = new Image();
playerSprite.src = "images/spritesheet2.png"

let position = 0;
const background = new Image();
background.src = "images/BG.png";


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    canvasContext.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);

}


/*
setInterval(function(){
    canvasContext.clearRect(0,0,canvas.width, canvas.height);
    canvasContext.drawImage(background,0,0, canvas.width, canvas.height); // built in canvas method three versions.
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x,player.y, player.width /6,player.height/6);
    requestAnimationFrame(animate);
    movePlayer();
    frameHandler();
}, 300);*/


window.addEventListener("keydown",function(e){
     keys[e.keyCode] = true;// attribute // callback function (e) has a built in object
     console.log(keys);
     player.moving = true;
});

window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
    player.moving = false;
});

function movePlayer(){
    if (keys[38] && player.y > 100){

        player.y -= player.speed;
        player.frameY = 1;
        player.moving = true;
        // player.height = 488.3;
        // player.width = 410;
    }
/*

    if (keys[37] && player.x  > 0){

        player.x -= player.speed;
        player.frameX = 2;
        player.moving = true;
        // player.height = 490;
        // player.width = 348;
    }

    if (keys[40] && player.y < canvas.height ){

        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
        
    }*/

    if (keys[39]  && player.x < canvas.width){

        player.x += player.speed;
        player.frameX = 2;
        player.moving = true;
        
    }
}


function frameHandler(){
    if(player.frameX < 9 && player.moving) player.frameX++;
    else player.frameX = 0;
}

/*
function animate(){
    canvasContext.clearRect(0,0,canvas.width, canvas.height);
    canvasContext.drawImage(background,0,0, canvas.width, canvas.height); // built in canvas method three versions.
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x,player.y, player.width /6,player.height/6);
    requestAnimationFrame(animate);
    movePlayer();
    frameHandler();
}

animate();*/

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps){
    fpsInterval = 1000/fps; // 1000 milisicenods
    then = Date.now();
    startTime = then;
    animate();
}

function animate(){
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if(elapsed > fpsInterval){
        then = now - (elapsed % fpsInterval);
        canvasContext.clearRect(0,0,canvas.width, canvas.height);
        canvasContext.drawImage(background,0,0, canvas.width, canvas.height); // built in canvas method three versions.
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x,player.y, player.width /6,player.height/6);
        requestAnimationFrame(animate);
        movePlayer();
        frameHandler();
    }
}

startAnimating(10);