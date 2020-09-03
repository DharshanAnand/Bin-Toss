
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1000, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(600,height,1200,20);
	paper = new Paper(150,150,40);
	binsheet1=new Bin(900,280,160,20);
	binsheet2=new Bin(970,245,20,90);
	binsheet3=new Bin(810,245,20,90);
}


function draw() {
  rectMode(CENTER);
  background("white");


  ground.display();
  paper.display();
  binsheet1.display();
  binsheet2.display();
  binsheet3.display();
  //keyPressed();
  drawSprites();

 
}
function keyPressed(){
   if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85})

   }
}



