var fixedRec, movingRec;
function setup() {
  createCanvas(1200,800);
  fixedRec = createSprite(500,500,50,80);
  movingRec = createSprite(200,500,50,80);
  fixedRec.shapeColor = "red";
  movingRec.shapeColor = "blue";
}

function draw() {
  background("black");
  movingRec.x = World.mouseX;
  movingRec.y = World.mouseY;
  if (movingRec.x - fixedRec.x < movingRec.width/2 + fixedRec.width/2
    && fixedRec.x - movingRec.x < fixedRec.width/2 + movingRec.width/2
    && movingRec.y - fixedRec.y < movingRec.height/2 + fixedRec.height/2
    && fixedRec.y - movingRec.y < movingRec.height/2 + fixedRec.height/2 ){
    fixedRec.shapeColor = "yellow";
    movingRec.shapeColor = "green"; 
  }
  else {
    fixedRec.shapeColor = "red";
    movingRec.shapeColor = "blue";
  }  
  drawSprites();
}