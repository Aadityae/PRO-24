
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var land;
var hammer,stone,rubber,sand1,sand2,sand3,sand4,sand5,sand6,iron;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

     land = new Ground(700,680,1400,20)  
     hammer = new Hammer(40,40)
	 stone = new Stone(700,450,70,70)
     rubber = new Rubber(500,300)
	 sand1 = new Sand(600,450)
	 sand2 = new Sand(600,450)
	 sand3 = new Sand(600,450)
	 sand4 = new Sand(600,450)
	 sand5 = new Sand(600,450)
	 sand6 = new Sand(600,450)
	 iron = new Iron(400,300,90,40)
	Engine.run(engine);
  
console.log(stone)

}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
 
land.display()
hammer.display()
stone.display()
rubber.display()
sand1.display()
sand2.display()
sand3.display()
sand4.display()
sand5.display()
sand6.display()
iron.display()
}



