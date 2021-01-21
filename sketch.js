const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function preload() {
    

}

function setup(){
    var canvas = createCanvas(600,850);
    engine = Engine.create();
    world = engine.world;

    ground = new Line(600,height,1200,20)
    ground1 = new Line(100,700,20,300)
    ground2 = new Line(200,700,20,300)
    ground3 = new Line(300,700,20,300)
    ground4 = new Line(400,700,20,300)
    ground5 = new Line(500,700,20,300)


  circle1 = new Circle(200,50)    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();

   circle1.display();

}

