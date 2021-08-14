
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score , ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas (600,200);
  monkey=createSprite (50,140,20,40);
  monkey.addAnimation ("running",monkey_running);
  monkey.scale=0.11;
  ground = createSprite(300,190,600,20);
  //ground.addImage("ground",groundImage);
  //ground.x = ground.width /2;
  

 
  
  
}


function draw() {
background(180);
  if (keyDown("space")){
    monkey.velocityY=-14;
  }
  monkey.velocityY= monkey.velocityY +0.8;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  spawnObstacles();
  spawnBananas() ;
  monkey.collide(ground);
  drawSprites();
  
}

function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(400,165,10,40);
   obstacle.velocityX = -(4+3*score/100);
   obstacle.addImage(obstacleImage);
    //generate random obstacles
    var rand = Math.round(random(1,6));
    
      
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
   // obstaclesGroup.add(obstacle);
 }
}

function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(10,60));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 134;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
      banana.scale=0.10;
    //adding cloud to the group
   //cloudsGroup.add(cloud);
    }
}







