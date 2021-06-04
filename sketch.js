var backgroundimg;
var monster,monsterimg,monster2,monster2img,monster3,monster3img,monster4,monster4img;
var gun,gunimg,gun2img;

function preload() {
  backgroundimg=loadImage("1244577.png");

  monsterimg=loadImage("zombie.png");
  monster2img=loadImage("skeleton.png");
  monster3img=loadImage("ghost.png");
  monster4img=loadImage("vampire.png");

  gunimg=loadImage("scope.png");
  gun2img=loadImage("scope 2.png");

}

function setup() { 
  createCanvas(1000,600)
  
  gun=createSprite(500,450,10,10);
  gun.addImage(gun2img);
  gun.scale=0.1;  
}

function draw() {
 background(backgroundimg);
  

 gun.x=mouseX
 gun.y=mouseY
 drawSprites();
}