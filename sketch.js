var path,pathImg;
var runner,runnerImg;

function preload(){
  //pre-load images
pathImg=loadImage("path.png");
runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(500,500);

  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 7;
  path.scale=2; 

  runner=createSprite(100,480,10,10);
  runner.addAnimation("runner",runnerImg);
  runner.scale=0.1;

  boundary1=createSprite(10,200,10,700);
  boundary2=createSprite(480,300,10,700);

  boundary1.visible=false;
  boundary2.visible=false;
}


function draw() {
  background("black")
 if(path.y>400){
   path.y = height/2
 }
 runner.collide(boundary1);
 runner.collide(boundary2);
 
 runner.x=mouseX
   drawSprites();
}
