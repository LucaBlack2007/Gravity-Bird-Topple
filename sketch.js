const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig, pig1;
var log, log1, log3, log4;
var bird;

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    bird = new Bird(100,100);

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    box5 = new Box(810, 160, 70, 70);
 
    log = new Log(810, 300, 100, PI / 2);
    log1 = new Log(810, 180, 300, PI / 2); 

    pig = new Pig(810, 350);

    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);  

    box1.display();
    box2.display();

    ground.display();

    pig.display();

    log.display();
    box5.display();
    box3.display();
    box4.display();

    log1.display();


    bird.display();


}