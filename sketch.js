
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 var survivalTime=0; 
monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  foodGroup=new Group();
  obstaclesGroup=new Group();
  score=0
}


function draw() {
background(225);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
if(keyDown("space") ){
  monkey.velocity=-12;
}
  monkey.velocityY=monkey.velocityY+0.8;
monkey.collide(ground);
             
drawSprites();
stroke("white");
  textSize(20);
  fill("white");
  text("score"+500,50)
if(obstaclesGroup.isTouching(monkey)){
  monkey.velocityY=0;
  ground.velocityX=0
  obstaclesGroup.setVelocityXEach(0)
  obstaclesGroup.setLifetimeEach(-1)
  FoodGroup.setLifetimeEach(-1)
  FoodGroup.setVelocityXEach(-1)
}
stroke("black");
textSize(20);
fill("black")
survivalTime=Math.ceil(frameCount/frameRate())
text("SurvivalTime:"+survivalTime,100,50);
}
function spawnFood(){
  if(framecount%80===0){
    banana=createSprite(600,250,40,10);
    banana.y=random(120,200);
    banana.velocityX=-5;
    banana.lifetime=300;
    monkey.depth=banana.depth+1;
    bananna.addImage(bananaImage);
    banana.scale=0.5;
    FoodGroup.add(banana);
  }
}





