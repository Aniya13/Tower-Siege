
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
function preload()
{
	bg= loadImage("sunset.jpg");
	boy= loadImage("boy.png");
    

}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(1300/2, 580, 1300, 20);
 stone = new Stone(235, 420, 30);
 box = new Box(500, 500);

 slingShot= new Slingshot(stone.body, {x:245, y:420})	
Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  image(boy, 200, 340, 200, 300);
  drawSprites();
 ground.display();
 box.display();

	 stone.display();
 slingShot.display();

}
function mouseDragged(){
	 Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
 }
function mouseReleased(){
	slingShot.fly();
}
