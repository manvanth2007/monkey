
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png")
  obstacleImage = loadImage("obstacle.png")
  
}



function setup() {
  createCanvas=(400,200)

  monkey=createSprite(80,135,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width /2;
  console.log(ground.x)
  
  
  
  
}


function draw() {
background("lightgreen");
  
  var SurvivalTime=0
  stroke("white");
  textSize=20;
  fill("white");
  
  
  stroke("black");
  textSize=80;
  fill("balck");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival:"+survivalTime,300,30)
  
  
  
    if (ground.x < 0){
    ground.x = ground.width/2;
  }
  monkey.collide(ground);
  
  monkey.velocityY=monkey.velocityY+0.8;
  
   if(keyDown("space")&& monkey.y >= 160) {
    monkey.velocityY = -10;
}
  
 
spawnObstacle();
 spawnBanana();

  drawSprites();
}


function spawnBanana(){
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    banana=createSprite(300,200,20,20);
    banana.addImage(bananaImage)
    banana.y=Math.round(random(150,300))
    banana.scale=0.1;
   banana.velocityX=-3;}
}

function spawnObstacle(){
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    obstacle=createSprite(600,330,20,20);
   obstacle.addImage(obstacleImage);
    //obstacle.y=Math.round(random(10,60))
    obstacle.scale=0.1
  obstacle.velocityX=-3;}
}


