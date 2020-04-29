const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var me;
var eny;

var gameState = "onSling";
var bg;
var score = 0;

function preload() {
    bg=loadImage("sprites/bg.jpeg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    bird = new Bird(200,50);
    eny=new Pig(800,250);
    ob1=new Log(750,250,300,PI);
    ob2=new Log(970,250,300,PI);
    ob3= new Log(850,90,340,PI/2);
    canon = new SlingShot(bird.body,{x:215,y:275});
}

function draw(){
        background(bg);
        noStroke();
    Engine.update(engine);
    ground.display();
    bird.display();
    eny.display();
    ob1.display();
    ob2.display();
    ob3.display();
    canon.display();
}    

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    canon.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(bird.body,{x:215,y:275});
        canon.attach(bird.body);
        bird.trajectory = [];
    }
}
