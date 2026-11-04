// variables for colours and positions 
let bubbleColour;
let warmColour;
let centreX = 250;
let centreY = 220;

function setup() {
  createCanvas(500, 500);
  noStroke();   // no outlines, to keep it soft
  noLoop();     

  bubbleColour = color(200, 212, 225);   // quiet blue-grey
  warmColour = color(255, 200, 80);      // warm yellow
}

function draw() {
  background(245, 242, 235);

  fill(bubbleColour);
  rect(100, 120, 300, 200, 40);
  triangle(150, 310, 230, 310, 140, 375);

  fill(255, 200, 80, 50);
  ellipse(centreX, centreY, 140, 140);
  fill(255, 200, 80, 90);
  ellipse(centreX, centreY, 100, 100);

  fill(warmColour);
  ellipse(centreX, centreY, 60, 60);

  fill(120, 130, 145);
  textSize(16);
  textAlign(CENTER);
  text('happy, quietly', 250, 450);
}