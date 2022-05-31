const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground, ball, basketImage
var slingshot


function preload() {
  backgroundImg = loadImage("background.png");
  basketImage = loadImage("../Fruit-and-rope-main/basket.png")

}
function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(450, 399, width, 30)
  ball = new Ball(200, 200, 80)
slingshot = new Slingshot(ball.ball,{x:100,y:100})



  //Challenge1:

  //challenge 2


}
function draw() {
  background(backgroundImg);
  Engine.update(engine);
  ground.display()
  ball.display()
  slingshot.display()

  push()
  imageMode(CENTER)
  image(basketImage, 390, 330, 150, 150)
  pop()


  //text(mouseX + ',' + mouseY, 10, 15);


  


}

function mouseDragged(){
  Matter.Body.setPosition(ball.ball,{x:mouseX,y:mouseY})

}

function mouseReleased(){
  slingshot.fly()


}

function keyPressed(){
  if(keyCode === 32){
slingshot.attach(ball.ball)

  }
}





