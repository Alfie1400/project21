
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var ball
var ground1
var ground2

function setup() {
	createCanvas(1000, 500);

	var ball_options = {
		restitution:0.9,
		friction:0,
		density:0.1
	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = Bodies.circle(250,50,20,ball_options)
	World.add(world,ball)
	ground  = new Ground(500,480,1000,10)
	ground1  = new Ground(700,430,10,100)
	ground2  = new Ground(800,430,10,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20)
	ground.display()
	ground1.display()
	ground2.display()

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:3,y:-5})
	}
}



