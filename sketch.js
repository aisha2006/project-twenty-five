
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var ground;
var paper,paperImage;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  dustbin1=new Dustbin(1000,500,200,300);

	  ground=new Ground(600,795,1200,5)
	  paper= new Paper(150,260,10)
	  paper.body.setScale=0.2

	  console.log(paper.body.position.x,paper.body.position.y)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
paper.display();  
ground.display();
dustbin1.display();
dustbin1.debug=true;
  

  

  keyPressed();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-1});
	}
}

