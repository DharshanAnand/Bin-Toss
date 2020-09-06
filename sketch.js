
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var binsheet1;
function preload(){

  // binsheet1=loadImage("dustbingreen.png");
   
}

function setup() {
	createCanvas(1000, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(600,height,1200,20);
	paper = new Paper(150,150,40);
	binsheet1=new Bin(800,100,160,20);
   binsheetr= new Bin1(890,160,20,100);
   binsheetl= new Bin1(710,100,20,100); 
}


function draw() { 
  rectMode(CENTER);
  background("white");
  

  ground.display();
  paper.display();
  binsheet1.display();
  binsheetr.display();
  binsheetl.display();
  //keyPressed();
  drawSprites();

 
}
function keyPressed(){
   if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85})

   }
}



