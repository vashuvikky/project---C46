var bg,bgimg,edges;
var player,playerimg;


function preload() {
    bgimg = loadImage("bg.kl.jpg");
    playerimg = loadImage("player2.png");
}




function setup() {
    createCanvas(900,500);
    bg = createSprite(900,100);
    bg.addImage(bgimg);
    bg.scale = 2.7;

    
    player = createSprite(120,330);
    player.addImage(playerimg);
    player.scale = 1;
    



    

}

function draw() {
    background("black")
  bg.velocityX = -3

if(bg.x<100){
    bg.x = bg.width/2;
}
if(keyDown("UP_ARROW")){
    player.y = player.y - 4;
  
  }
  if(keyDown("DOWN_ARROW")){
    player.y = player.y + 4;
  
  }
  
    
  if(keyDown("LEFT_ARROW")){
    player.x = player.x - 4;
   
  }
  if(keyDown("RIGHT_ARROW")){
    player.x = player.x + 4;
  
  }

player.bounceOff(edges);

    drawSprites();
}