var PLAY = 1;
var END = 0;
var gameState = PLAY;

var road, roadImage;
var player, playerImage;
var cash, diamond, jwellery, sword;
var cashImage, diamondImage, jwelleryImage, swordImage;
var cg, dg, jg, sg;
var treasureCollection = 0;
var gameOver, gameOverImage;

function preload(){
  
  roadImage = loadImage("Road.png");
  playerImage = loadAnimation("Runner-1.png","Runner-2.png");
  cashImage = loadImage("cash.png");
  diamondImage = loadImage("diamonds.png");
  jwelleryImage = loadImage("jwell.png");
  swordImage = loadImage("sword.png");
  gameOverImage = loadImage("gameOver.png");
  
}

function setup() {
  createCanvas(300,500);
  
  road = createSprite(150,250,300,500);
  road.addImage("r",roadImage);
  road.velocityY = 4;
  
  player = createSprite(150,450,20,20);
  player.addAnimation("boy",playerImage);
  player.addAnimation("boy1",gameOverImage);

  player.scale = 0.08;
  
  cg = new Group();
  jg = new Group();
  dg = new Group();
  sg = new Group();
  
  player.debug = true;
  player.setCollider("circle",0,0,40);
  
}

function draw() {
  background(0);
  player.x = World.mouseY
  
  if(gameState === PLAY){
    
    edges = createEdgeSprites();
  player.collide(edges);
  
  if(road.y > 400){
    road.y = height/2;
     
}
  
  if(cg.isTouching(player)){
    treasureCollection = treasureCollection+1;
    cg.destroyEach();
     
}
  
  if(jg.isTouching(player)){
    treasureCollection = treasureCollection+1;
    jg.destroyEach();

     
}
  
  if(dg.isTouching(player)){
    treasureCollection = treasureCollection+1;
    dg.destroyEach();
     
}
  
  if(sg.isTouching(player)){
    gameState = END;
    
}
    
  createCash();
  createDiamonds();
  createJwellery();
  createSword();
  
}

  else if(gameState === END){
    road.velocityY = 0;
    
    player.velocityY = 0;
    
    player.changeAnimation("boy1",gameOverImage);
    player.x = 150;
    player.y = 200;
    player.scale = 0.6;
    
    cg.setVelocityYEach(0);
    jg.setVelocityYEach(0);
    dg.setVelocityYEach(0);
    sg.setVelocityYEach(0);

    cg.setLifetimeEach(-1);
    jg.setLifetimeEach(-1);
    dg.setLifetimeEach(-1);
    sg.setLifetimeEach(-1);
    
}
  
  drawSprites();
  
  fill ("black");
  textSize (20);
  text("treasures "+treasureCollection,150,30);
}

function createCash(){
  if(World.frameCount % 50 === 0){
    var cash = createSprite(Math.round(random(10,280),40,10,10));
    cash.addImage("paisa",cashImage);
    cash.scale = 0.13;
    cash.velocityY = 3;
    cash.lifetime = 150;
    cg.add(cash);
     
   }
  
}

function createDiamonds(){
  if(World.frameCount % 80 === 0){
    var diamond = createSprite(Math.round(random(10,280)),40,10,10);
    diamond.addImage("heere",diamondImage);
    diamond.scale = 0.001;
    diamond.velocityY = 3;
    diamond.lifetime = 150;
    dg.add(diamond);
     
    }
}

function createJwellery(){
  if(World.frameCount % 80 === 0){
    var  jwellery = createSprite(Math.round(random(10,280)),40,10,10);      
    jwellery.addImage("heere",jwelleryImage);
    jwellery.scale = 0.1;
    jwellery.velocityY = 3;
    jwellery.lifetime = 150;
    jg.add(jwellery);
     
    }
}

function createSword(){
  if(World.frameCount % 200 === 0){
    var sword = createSprite(Math.round(random(10,280)),40,10,10);
    sword.addImage("heere",swordImage);
    sword.scale = 0.1;
    sword.velocityY = 3;
    sword.lifetime = 150;
    sg.add(sword);
     
    }
}

















