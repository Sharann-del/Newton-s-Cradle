const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
 
	bob1 = new Bob(135,600,70,70);
	bob2 = new Bob(265,600,70,70);
    bob3 = new Bob(395,600,70,70);
    bob4 = new Bob(525,600,70,70);
	bob5 = new Bob(665,600,70,70);

	roof = new Roof(400,100,600,50);

	rope1 = new Rope(bob1.body, roof.body, -bob2.height*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -bob2.height*2, 0);
	rope3 = new Rope(bob3.body, roof.body, -bob2.height*2, 0);
	rope4 = new Rope(bob4.body, roof.body, -bob4.height*2, 0);
	rope5 = new Rope(bob5.body, roof.body, -bob5.height*2, 0);
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(230);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();

  drawSprites();
}