
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundIMG;
var dIMG;
var dS;

function preload()
{
backgroundIMG = loadImage("sprites/background.png");	
//dIMG = loadImage("sprited/dustbingreen.png");
}

function setup() {
	createCanvas(1500,500);


	engine = Engine.create();
	world = engine.world;

	//ds = createSprite(1250,height-105,10,10);
//	ds.addImage(dIMG);
	//Create the Bodies Here.
	
//bar1 = new Bars(1200,450,100,10);
//bar2 = new Bars(1150,400,10,100);
//bar3 = new Bars(1250,400,10,100);




dustbinobj = new Dustbin(1200,405,100,100);
	paperObject = new Paper(650,200,40);
	groundBody = new Ground(width/2,height-35,width,20);
	LeftDustbinwall = new leftWall(1200,450,90,10);
	RightDustbinWall = new rightWall(1160,400,10,100);
	BottomDustbinWall = new bottomWall(1240,400,10,100);
	
	Engine.run(engine);
  
}


function draw() {

  background(backgroundIMG);
  rectMode(CENTER);

 

  dustbinobj.display();
groundBody.display();

paperObject.display();

//bar1.display();
//bar2.display();
//bar3.display();
LeftDustbinwall.display();
RightDustbinWall.display();
BottomDustbinWall.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:70,y:-55});
	}
}

