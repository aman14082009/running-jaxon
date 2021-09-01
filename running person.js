var track, trackImage, boy, boyRunning, leftInvisibleBY, rightInvisibleBY; 


function preload(){
  //pre-load images
  trackImage = loadImage("path.png");
  boyRunning = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200,100,400);
  track.addImage("moving", trackImage);
  track.scale = 1.2;
  track.velocityY = -8;

  boy = createSprite(200,250,20,20);
  boy.addAnimation("running", boyRunning);
  boy.scale = 0.08;
  

  leftInvisibleBY = createSprite(10,200,10,200);
  leftInvisibleBY.visible = false;

  rightInvisibleBY = createSprite(390,200,10,200); 
  rightInvisibleBY.visible = false;
}

function draw() {
  if (track.y < 0) {
    track.y = track.width / 2;
  }

  boy.x = World.mouseX;

  boy.collide(leftInvisibleBY);
  boy.collide(rightInvisibleBY);
  
  background("White");
  drawSprites();

}
