var ground;
var box1,box2,box3;
var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground = new Ground(400,680,800,20)
 paper = new Crumpedpaper(200,500,25);
 box1 = new Box(600,650,200,20);
 box2 = new Box(500,610,20,100);
 box3= new Box(700,610,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	  paper.fly();
	 }
   }


