const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;

function setup() {
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,580,1200,20);
    ground2=new Ground(390,300,260,10);
    ground3= new Ground(900,400,200,10) ;
    box1= new Box(480,275,30,40);
    box2= new Box(450,275,30,40);
box3= new Box(420,275,30,40);
box4= new Box(390,275,30,40);
box5= new Box(360,275,30,40);
box6= new Box(330,275,30,40);
box7= new Box(300,275,30,40);
box8=new Box(450,235,30,40);
box9=new Box(420,235,30,40);
box10=new Box(390,235,30,40);
box11=new Box(360,235,30,40);
box12=new Box(330,235,30,40);
box13=new Box(420,195,30,40);
box14=new Box(390,195,30,40);
box15=new Box(360,195,30,40);
box16=new Box(390,155,30,40);


b1=new Box(960,375,30,40);
b2=new Box(930,375,30,40);
b3=new Box(900,375,30,40);
b4=new Box(870,375,30,40);
b5=new Box(840,375,30,40);
b6=new Box(930,335,30,40);
b7=new Box(900,335,30,40);
b8=new Box(870,335,30,40);
b9=new Box(930,295,30,40);
b10=new Box(900,295,30,40);
b11=new Box(870,295,30,40);
b12=new Box(900,255,30,40);
}

function draw() {
    background(56,44,44);
    Engine.update(engine) ;
    textSize(20);
    fill("yellow");
    text("Drag the hexagonal stone and release it, to lauch it towards the block",100,30);
ground.display();
ground2.display();
ground3.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();

b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
}