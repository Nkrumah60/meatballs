
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let backgroundImg;
let boyRight,boyLeft,boyIdle,boy;
let cloud1,cloud2,cloud3,cloud4;
let ground
let button
let instuctions,instuctionsImg

let meatball,meatball1,meatball2, meatball3

function preload() {
  instuctionsImg = loadImage("instructions.png");
  backgroundimg = loadImage("grass.png");
  boyRight = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png");
  boyLeft = loadAnimation("left1.png","left2.png","left3.png","left4.png","left5.png","left6.png","left7.png","left8.png")
  boyIdle = loadAnimation("1.png");
  
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  instuctions = createSprite(500,300,300,300);
  instuctions.addImage("instruction",instuctionsImg);
  instuctions.scale = 0.5;
  

  button = createImg('start.png');
  button.position(450,470);
  button.size(70,70);
  button.mouseClicked(destroy);

  boy = createSprite(200,510,20,20)
  boy.addAnimation('still',boyIdle)
  boy.addAnimation('runningRight',boyRight);
  boy.addAnimation('runningLeft',boyLeft);
  boy.scale = 0.5;

  cloud1 = new Clouds(125,100,250,250); 
  cloud2 = new Clouds(350,100,250,250);
  cloud3= new Clouds(575,100,250,250);
  cloud4 = new Clouds(800,100,250,250);

  meatball = new Meatball(125,100,50,50); 
  meatball1 = new Meatball(350,100,50,50);
  meatball2= new Meatball(575,100,50,50);
  meatball3 = new Meatball(800,100,50,50)

  ground = new Ground(500,600,1000,40);

  

  imageMode(CENTER);
  rectMode(CENTER);
  
}


function draw() 
{
  background(50);
  image(backgroundimg,width/2,height/2,1000,660);

  Engine.update(engine);

  

  if(keyDown(RIGHT_ARROW)){
    boy.position.x = boy.position.x +3
    boy.changeAnimation('runningRight',boyRight);

  }

  

  if(keyDown(LEFT_ARROW)){
    boy.position.x = boy.position.x -3
    boy.changeAnimation('runningLeft',boyLeft);
  }
  
  if(meatball1.body.position.y>575 || meatball.body.position.y>575|| meatball2.body.position.y>575 || meatball3.body.position.y>575){

  meatball = new Meatball(125,100,50,50); 
  meatball1 = new Meatball(350,100,50,50);
  meatball2= new Meatball(575,100,50,50);
  meatball3 = new Meatball(800,100,70,70)


    console.log("ea")
  }

  meatball.destroy();
  meatball1.destroy();
  meatball2.destroy();
  meatball3.destroy();

  cloud1.display();
  cloud2.display();
  cloud3.display();
  cloud4.display();

  meatball.display();
  meatball3.display();
  meatball2.display();
  meatball1.display();

  ground.display();

  drawSprites();
}

function destroy(){

button.remove();
instuctions.remove();


}

function removeMeat() {
 
  
    meatball.destroy();
    
}