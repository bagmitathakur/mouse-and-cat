var  catSleeping,mouseTeasing;
var catImg,mouseImg,catMovingImg,mouseTeasingImg,mouse2Img;
var bg,mouseRunning,cat2;
function preload(){
catImg=loadImage("cat1.png");
mouseImg=loadImage("mouse4.png");
bg=loadImage("garden.png");
catMovingImg=loadImage("cat2.png","cat3.png");
cat2=loadImage("cat4.png")
mouseTeasingImg=loadImage("mouse3.png");
mouse2Img=loadImage("mouse2.png");

}


function setup(){
    createCanvas(windowWidth,windowHeight);
    catSleeping=createSprite(windowWidth-70,windowHeight-70,30,40);
    catSleeping.addImage("Sleeping",catImg);
    catSleeping.scale=0.1;

    mouseRunning=createSprite(windowWidth-450,windowHeight-80,30,40);
    mouseRunning.addImage("Running",mouseImg);
  mouseRunning.scale=0.1;
    
}
function draw(){
    background(bg);
 
if(mouseRunning.x+catSleeping.x>mouseRunning.x/2+catSleeping.x/2){
  mouseRuning.addImage("mouse",mouse2Img);

  catSleeping.x=mouseRunning.x;
  
}    
  
  

    
  
    keyPressed();
    
    drawSprites();

}
function keyPressed(){
 if(keyCode===LEFT_ARROW) { 
 mouseRunning.addImage("Running",mouseTeasingImg); 
 catSleeping.addImage("Moving",catMovingImg) ;
   mouseRunning.frameDelay=25;
  catSleeping.x=catSleeping.x-10;
  
  

}}var  catSleeping,mouseTeasing;
var catImg,mouseImg,catMovingImg,mouseTeasingImg,mouse2Img;
var bg,mouseRunning;
function preload(){
catImg=loadImage("cat1.png");
mouseImg=loadImage("mouse4.png");
bg=loadImage("garden.png");
catMovingImg=loadImage("cat1.png","cat2.png","cat3.png");
mouseTeasingImg=loadImage("mouse3.png");
mouse2Img=loadImage("mouse2.png");

}


function setup(){
    createCanvas(1000,800);
    catSleeping=createSprite(789,700,30,40);
    catSleeping.addImage("Sleeping",catImg);
    catSleeping.scale=0.1;

    mouseRunning=createSprite(350,700,30,40);
    mouseRunning.addImage("Running",mouseImg);
  mouseRunning.scale=0.1;
    
}
function draw(){
    background(bg);
 
if(mouseRunning.x+catSleeping.x<mouseRunning.x/2+catSleeping.x/2){
  mouseRunning.addImage("mouse",mouse2Img);
  catSleeping.addImage("caught",cat2);
  

  
}    
  
  

    
  
    keyPressed();
    
    drawSprites();

}
function keyPressed(){
 if(keyCode===32) { 
 mouseRunning.addImage("Running",mouseTeasingImg); 
 catSleeping.addImage("Sleeping",catMovingImg) ;
   //mouseRunning.frameDelay=25;
  catSleeping.x=catSleeping.x-2;
  
  

}}