var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	
	var package_option = {
	 isStatic : true,
	 friction : 1,
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , package_option);
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	log1 = Bodies.rectangle(400,650,200,20,{isStatic:true});
	World.add(world,log1);

	log2 = Bodies.rectangle(310,591,20,100,{isStatic:true});
	log2.debug = true;
	World.add(world,log2);

	log3 = Bodies.rectangle(490,591,20,100,{isStatic:true});
	World.add(world,log3);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+","+mouseY,mouseX,mouseY);
  keyPressed();

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y  

  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(packageBody.position.x,packageBody.position.y,5,5);

  push ();
  rectMode(CENTER);
  fill("red");
  rect(log1.position.x,log1.position.y,200,20);
  rect(log2.position.x,log2.position.y,20,100);
  rect(log3.position.x,log3.position.y,20,100);
  pop ();
  
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Body.setStatic(packageBody,false);
  }
  
  
}



