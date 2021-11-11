var box ;
function setup() {
  createCanvas(windowWidth,height);
  box = createSprite(200,100,20,40)
}

function draw() 
{
  background("blue");
drawSprites()
if (keyDown("right")){
box.x +=2
}
if (keyDown("left")){
  box.x -=2
}
if (keyDown("up")){
  box.y -=2
}
if (keyDown("down")){
  box.y +=2
}
}




