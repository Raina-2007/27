
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1 , bob2 , bob3 , bob4 , bob5 , Roof , rope1;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	bobDiameter = 130;
	//Create the Bodies Here.
	bob1 = new Bob (380,300);
	bob2 = new Bob (430,300);
	bob3 = new Bob (230,300);
	bob4 = new Bob (280,300);
	bob5 = new Bob (330,300);
	Roof = new roof(650,50,700,25);
	rope1 = new rope(bob1.body,Roof.body,-bobDiameter*2,0);

	Engine.run(engine);
}


function draw() {
  //rectMode(CENTER);
  background(230);
  Roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  
  
  //drawSprites();
 
}
