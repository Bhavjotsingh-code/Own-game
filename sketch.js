

var gameState="start";
var a1,a2,a3,a4;
var next1;
var score=0;
function preload(){
easyI=loadImage("e.png")
mediumI=loadImage("m.png")
hardI=loadImage("h.png")
diffI=loadImage("d.png")
}
function setup(){
 // var background=createSprite(200,200,50,50);
//background.setAnimation("court_1");
createCanvas(400,400)

 difficulty=createSprite(200,100,50,50);
difficulty.addImage(diffI);

 easy=createSprite(300,125,50,50);
 easy.addImage(easyI);


 medium=createSprite(200,225,50,50);
 medium.addImage(mediumI);

 hard=createSprite(100,325,50,50);
 hard.addImage(hardI);


}


function draw() {
  background("black")
  text("Score :" + score ,50,50);
  
   drawSprites();
  console.log(gameState);
  if(mousePressedOver(easy)){
    gameState="easy";
  }
  if(mousePressedOver(medium)){
    gameState="medium";
 }
 if(mousePressedOver(hard)){
    gameState="hard";
  }
  if(gameState==="easy"){
    //background.setAnimation("easy1");
    easy.x=-50
    easy.y=-50
    medium.x=-50
    medium.y=-50
    hard.x=-50
    hard.y=-50
    difficulty.destroy();
   
    
   textSize(25);
  fill("green");
text("David’s parents have three sons: Snap, Crackle, and what’s the name of the third son?",30,100,380,200);
 
  a1=createSprite(100,250,100,30)
  text('Snap',70,260)
  a1.shapeColor="yellow"
  a2=createSprite(250,250,100,30)
 text('David',220,260)
  a2.shapeColor="yellow"
  a3=createSprite(100,300,100,30)
 text('Crackle',60,310)
 a3.shapeColor="yellow"
  a4=createSprite(250,300,100,30)
  text('None',220,310)
  a4.shapeColor="yellow"
  next1=createSprite(300,350,100,30)
  text('Next',270,360)
  next1.shapeColor="lightblue"
}
if(mousePressedOver(a1)||mousePressedOver(a3)||mousePressedOver(a4)){
back1=createSprite(200,200,400,400);
back1.shapeColor="black"
  a1.destroy();
  a2.destroy();
  a3.destroy();
  a4.destroy();
 
  gameState="wanswer"
  
}
if(mousePressedOver(a2)){
  back1=createSprite(200,200,400,400);
  back1.shapeColor="black"
    a1.destroy();
    a2.destroy();
    a3.destroy();
    a4.destroy();
    gameState="ranswer"
}
if (gameState=="wanswer"){
  text("Wrong answer",150,200)
  a1.x=-50
  a1.y=-50
  a1.shapeColor="black"
  score=score+1
}
if (gameState=="ranswer"){
  text("Right answer",150,200)
  a1.x=-50
  a1.y=-50
  a1.shapeColor="black"
}
if(mousePressedOver(next1)){
  back1=createSprite(200,200,400,400);
  back1.shapeColor="black"
    a1.destroy();
    a2.destroy();
    a3.destroy();
    a4.destroy();
   
    gameState="easy"
    
  }
  
 
 
 
 
 
  if(gameState==="medium"){
    //background.setAnimation("medium1");
    easy.x=-50
    easy.y=-50
    medium.x=-50
    medium.y=-50
    hard.x=-50
    hard.y=-50
    difficulty.destroy();
  }
  if(gameState==="hard"){
     //background.setAnimation("hard1");
     easy.x=-50
     easy.y=-50
     medium.x=-50
     medium.y=-50
     hard.x=-50
     hard.y=-50
     difficulty.destroy();
  }
  
}
