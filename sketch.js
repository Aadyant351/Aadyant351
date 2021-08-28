var moverect,fixerect;
function setup() {
  createCanvas(800,400);
  moverect=createSprite(400, 200, 50, 50);
  moverect.shapeColor="green";
  fixerect=createSprite(400, 200, 50, 50);
  fixerect.shapeColor="green";

}

function draw() {
  background(255,255,255);  
  moverect.x=World.mouseX
  moverect.y=World.mouseY
  if(moverect.x-fixerect.x<fixerect.width/2+moverect.width/2&& fixerect.x-moverect.x<fixerect.width/2+moverect.width/2&&moverect.y-fixerect.y<fixerect.width/2+moverect.width/2&& fixerect.y-moverect.y<fixerect.width/2+moverect.width/2)

 {
  moverect.shapeColor="red";
  
  fixerect.shapeColor="red";
 }
 else{
  moverect.shapeColor="green";
  
  fixerect.shapeColor="green";
 }
  
  drawSprites();
}