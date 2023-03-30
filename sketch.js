var canvas;
var backgroundImage,background;
var bgImg;
var bird,bar
var birdImg,barImge
var form, player;
var playerCount;
var ground,groundImage
var backg

function preload() {
  backgroundImage = loadImage("./assets/bg.png");
  groundImage = loadImage("./assets/ground2.png")
  barImg = loadImage("./assets/barxtended.png")
  birdImg = loadImage("./assets/flapy.png")
  groundImage = loadImage("./assets/ground2.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  ground = createSprite(width/2-100,height/2+300)
  ground.addImage(groundImage)

  backg = createSprite(0,0,5000,5000)
  backg.addImage(backgroundImage)
  backg.velocity.x = -2
  backg.scale = 2.5

  bird = createSprite(800,height/2,50,50)
  bird.addImage(birdImg);
  bird.scale = 0.25;
  
 bargroup = new Group()
 
}

function draw() {
  background("white");
  
  if(backg.position.x<500){
    backg.position.x = 800
  }
  //image(ground, 0, height * 5, width * 6, height);
  
  
  bird.velocity.y = bird.velocity.y + 0.5
  if (keyDown(UP_ARROW)) {
        bird.velocity.y =- 3;
      }

   spawnBar1()
  
  drawSprites()
}

function spawnBar1(){
    if(frameCount % 100 === 0){
     bar = createSprite(1600,300,50,50)
     bar.position.y = Math.round(random(height/2,height/2+50))
     
     bar.addImage(barImg);
     bar.scale = 1.4;
     bar.velocity.x = -3
     bargroup.lifetime = 120
     bargroup.add(bar)
    }
}





function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
