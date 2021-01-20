const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Events = Matter.Events;

var particles = [];
var plinko = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var ground;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width, 20);
  
  for(var a = 0; a < width; a = a + 80){
    divisions.push(new Divisions(a, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var b = 75; b < width; b = b + 50){
    plinko.push(new Plinko(b, 75));
  }
  
  for(var c = 50; c < width-10; c = c + 50){
    plinko.push(new Plinko(c, 175));
  }

  for(var d = 75; d < width; d = d + 50){
    plinko.push(new Plinko(d, 275));
  }

  for(var e = 50; e < width; e = e + 50){
    plinko.push(new Plinko(e, 375));
  }
}

function draw() {
  background(0);   
  Engine.update(engine);

  text("Score : "+score,20,30);
  ground.display();

  for(var f = 0; f < plinko.length; f ++){
    plinko[f].display();
  }

  if(frameCount % 20 === 0){
    particles.push(new Particle(random(width/2 - 30, width/2 + 30), 10, 10));
    score ++
  }
  
  for(var g = 0; g < particles.length; g ++){
    particles[g].display();
  }

  for(var h = 0; h < divisions.length;h ++){
    divisions[h].display();    
  }
  
}
