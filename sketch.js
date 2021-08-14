var garden,rabbit;
var gardenImg,rabbitImg, appleImg, leafImg;




function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
garden.velocityX = -3;





//creating boy running
rabbit = createSprite(180,340,30,30);

rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



}




function createApples() {

  apple = createSprite(random(50,350),40,10,10)
  apple.scale = 0.1;
  apple.addImage(appleImg);
  apple.velocityY = 3;
  
}


function createLeaves(){
  leaves = createSprite(random(50,350),40,10,10);
  leaves.scale = 0.1;
  leaves.addImage(leafImg);
 leaves.velocityY = 3;

}









function draw() {
  background(0);

  

  if(garden.x>200){
    garden.x = height/4;
    }

  rabbit.x = World.mouseX;


var select_sprites = Math.round(random(1,2));
if (frameCount % 80 === 0) {
  if (select_sprites === 1){
    createApples();
  }
  else {
    createLeaves();
  }
}
  
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
 
  drawSprites();
}

