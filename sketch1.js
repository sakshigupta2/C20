var fixedRec, movingRec;
function setup() {
  createCanvas(1200,800);
  fixedRec = createSprite(400,100,50,80);
  movingRec = createSprite(400,800,50,80);
  fixedRec.shapeColor = "red";
  movingRec.shapeColor = "blue";
  movingRec.velocityY = -4;
  fixedRec.velocityY = 4;
}

function draw() {
  background("black");

  if (movingRec.x - fixedRec.x < movingRec.width/2 + fixedRec.width/2
    && fixedRec.x - movingRec.x < fixedRec.width/2 + movingRec.width/2){
   movingRec.velocityX = movingRec.velocityX* (-1);
   fixedRec.velocityX = fixedRec.velocityX* (-1);
    }
  if (movingRec.y - fixedRec.y < movingRec.height/2 + fixedRec.height/2
    && fixedRec.y - movingRec.y < movingRec.height/2 + fixedRec.height/2 ){
   movingRec.velocityY = movingRec.velocityY* (-1);
   fixedRec.velocityY = fixedRec.velocityY* (-1); 
  }  
  drawSprites();
}