
var ground,groundImage;

var openImage;
var player,playerImage
var input,button;
var name1;
var gameState="start"
var bg,bgImage
var obImage,obImag
var bgImg;
var x1 = 0;
var x2;

var scrollSpeed = 2;
var obImage1
var playerJump;
function preload(){

  bgImg = loadImage("bgnew.png");
openImage=loadImage("start.png")

//bgImage=loadImage("start.png")
playerImage=loadAnimation("run1.png","run5.png","run6.png")
playerJump=loadImage("jump.png","jump1.png","jump2.png")


obImag=loadImage("ob1.png")
obImage=loadImage("ob2.png")
obImage1=loadImage("ob5.png")
newimg=loadImage("Zombie.png")

}


function setup() {
  createCanvas(displayWidth, displayHeight-displayHeight/7);
  
  x2 = width;
  //createCanvas(windowWidth-10, windowHeight-30);
  //background('green')

 

ground=createSprite(750,300,width,height)
ground.addImage(openImage)
ground.scale=1



/*bg=createSprite(windowWidth/2,windowHeight/2,width,height)
bg.addImage(bgImage)
bg.scale=1.65
bg.velocityX=-10
bg.x=bg.width/2
bg.visible=false*/

player=createSprite(width/4,height-height/3,100,100)
//player.addAnimation("running",playerImage)
player.addAnimation("jump",playerJump)
player.scale=0.5
player.visible=false

input=createInput("name")
button=createButton("submit")
input.position(width/2,height/2+100);
button.position(width/2+200,height/2+100)
}

function draw() {

  //background("green");
  image(bgImg, x1, 0, width, height);
  image(bgImg, x2, 0, width, height);
  
  x1 -= scrollSpeed;
  x2 -= scrollSpeed;
  
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }
  
  /*function keyPressed(){
    if (keyCode===32 ){
      player.changeAnimation("jump",playerJump)
      player.velocityY=-5
      alert("hello")
    }
      
    }
*/

  /*if(bg.x<0){
    bg.x=bg.width/2
  }*/
  button.mousePressed(()=>{
    input.hide()
    button.hide()
    var name=input.value()
    name1=name
    gameState="level1"
    
  })
 

if(gameState==="level1"){
  // background(bgImage)
ground.visible=false
//bg.visible=true
player.visible=true




SpawnObstacles()
}

drawSprites()

textSize(24)
fill("Yellow")
strokeWeight(3)
stroke("red")
text("Welcome "+name1,100,50)


}

function SpawnObstacles(){
  if (frameCount % 80 === 0){
    var obstacle = createSprite(width,(height-height/5),10,40);
    obstacle.velocityX = -6
var no =Math.round(random(1,3))
switch(no){
case 1:  obstacle.addImage(obImage)
break;
case 2: obstacle.addImage(obImag)
break;
case 3:obstacle.addImage(obImage1)
break;
default: break;

}
obstacle.lifetime = 800;


}}


