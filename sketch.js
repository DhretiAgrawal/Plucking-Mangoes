const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boyImage  ; 
var mango , mango2 , mango3 , mango4;  
var tree , stone;
var sling , gameState;
function preload() {
boyImage = loadImage("boy.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  tree = new Tree(400,50,20,20);
  mango = new Mango(400,500,50,50);
  mango2 = new Mango(300,100,50,50);
  mango3 = new Mango(200,500,50,50);
  mango4 = new Mango(200,500,50,50);
  mango5 = new Mango(200,500,50,50);
  sling = new Sling(Sling.sling,50,200);
  stone = new Stone(100,200);
}

function draw() {
  background(0);
  Engine.update(engine);  
  image(boyImage,50, 200,200,200);
  tree.display();
  mango2.display();
  mango.display();
  mango3.display();
  mango4.display();
  mango5.display();
  sling.display();
  stone.display();

  detectollision(stone,mango);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);


}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(boy.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
 // gameState = "launched";
}

function detectollision(stone,mango){
  mangoBodyPosition=mango.body.position;
  stoneBodyPosition=stone.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y , mangoBodyPosition.x , mangoBodyPosition.y)
    if(distance<=mango.r+stone.r){
      Matter.Body.setStatic(mango.body,false);
    }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body , {x:235 , y:420})
    sling.attach(stone.body);
  }
}




