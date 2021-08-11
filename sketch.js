var issBg,background

function preload() {
  
  issbg = loadImage("iss.png")  
}




function setup() {
  createCanvas(400, 400);
  
  backGround = createSprite(10,10,200,200)
  backGround.addImage(issbg)
    
}

function draw() {
  background(220);
  
  drawSprites()
}