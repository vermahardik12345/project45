var bg;
var gamestate="wait";
var start,startimg;
var working,workingimg;
var gnameimg,gname;
var controlimg;
var play;
var ground,img;
function preload(){
bg=loadImage("imgs/b.png")
startimg=loadImage("imgs/START.png");
gnameimg=loadImage("imgs/GAME NAME.png");
storyimg=loadImage("imgs/STROY.png");
workingimg=loadImage("imgs/WORKING.png");
controlimg=loadImage("imgs/controls.png");
playimg=loadImage("imgs/play.png");
//img=loadImage("imgs/back.jpg")
};
function setup(){
 createCanvas(windowWidth,windowHeight);
 
 start=createSprite(windowWidth/2,500);
 start.addImage(startimg);
 start.scale=0.1;

gname=createSprite(windowWidth/2,windowHeight/2+50);
gname.addImage(gnameimg);
gname.scale=0.2;

working=createSprite(800,500);
working.addImage(workingimg);
working.scale=0.3;

play=createSprite(1000,500);
play.addImage(playimg);
play.scale=0.2;
//ground=createSprite(0,0,windowWidth,windowHeight);
//ground.addImage(img);
//ground.x=ground.width/2;
 
}
function draw(){

  
 
  if(gamestate==="wait"){
    background(bg);
    working.visible=false;
    play.visible=false;
    //ground.visible=false;
    if(mousePressedOver(start)){
    gamestate="story";
     } 
    
   
    

  } 
  if(gamestate==="story"){
    background(storyimg);
    gname.visible=false;
    start.visible=false;
    working.visible=true;
    if(mousePressedOver(working)){
     gamestate="controls";
      } 
  }
  if(gamestate==="controls"){
background(controlimg);
working.visible=false;
play.visible=true;
if(mousePressedOver(play)){
  gamestate="play";
   } 
  }
  if(gamestate==="play"){
    background("white");
  // ground.visible=true;
   play.visible=false;
  }
  drawSprites();
}