
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var startX,startY

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,height/4,width/7,20)
 
	startX=width/2
	startY=height/4+500

	bob1= new Bob(startX-100,startY,50)
	bob2= new Bob(startX-50,startY,50)
	bob3= new Bob(startX,startY,50)
	bob4= new Bob(startX+50,startY,50)
	bob5= new Bob(startX+100,startY,50)

	chain1= new Chain(bob1,roof,-100,0)
	chain2= new Chain(bob2,roof,-50,0)
	chain3= new Chain(bob3,roof,0,0)
	chain4= new Chain(bob4,roof,+50,0)
	chain5= new Chain(bob5,roof,+100,0)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()



















  drawSprites();
 
}



