var on = false;
var r1 = 255;
var g1 = 255;
var b1 = 255;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  //sky day and night
  if (on){
    background(130,195,238);
  }
    else {
      background(20,57,156);
  }
 
 //stars
  stroke(130,195,238);
  strokeWeight(5);
  point(random(width), random(height));
  
  //sun and moon
  if (on) {
    fill(245, 248, 56); 
  }
  else {
    fill(227,229,236);
  }
  noStroke();
  ellipse(90,100,150,150);
   
  //good morning
  fill(20,57,156);
  textFont("Times New Roman");
  textSize(30);
  textStyle(ITALIC);
  text("Good morning", 250,300);
  
  //good night
  fill(130,195,238);
  textFont("Times New Roman");
  textSize(30);
  textStyle(ITALIC);
  text("Good night", 250,350);
  
  //button turn on and off  
  noStroke();
  fill(0);
  if (mouseX > 400 &&
      mouseX < 500 &&
      mouseY > 450 &&
      mouseY < 490) 
  fill(255);
  rect(395, 450, 100, 25);
  
  //rectangle moves with cursor
  fill(166, 14, 233);
  noStroke();
  rect(mouseX-15,mouseY-15,20,20);
  
  //text for button
  noStroke();
  fill(r1,g1,b1);
  textSize(20);
  text("click here",400,465);
  r1=random(255);
  g1=random(255);
  b1=random(255);
}

function mousePressed() {
  if (mouseX > 400 &&
      mouseX < 500 &&
      mouseY > 450 &&
      mouseY < 490)  {
    on = !on;
  }
}