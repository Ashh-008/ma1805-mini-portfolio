let bubblesSoFar = 0;         
const maxBubbles = 45;        
const quietBlue = [200, 212, 225];   

function setup() {
  createCanvas(600, 600);
  background(245, 242, 235);
  noStroke();
  frameRate(8);                // slow, so each bubble arrives gently
}

function draw() {
  if (bubblesSoFar >= maxBubbles) {
    return;
  }

  const bubbleWidth = random(60, 140);
  const bubbleHeight = bubbleWidth * 0.66;
  const x = random(bubbleWidth / 2, width - bubbleWidth / 2);
  const y = random(bubbleHeight / 2, height - bubbleHeight);

  fill(quietBlue[0], quietBlue[1], quietBlue[2], 150);
  rect(x - bubbleWidth / 2, y - bubbleHeight / 2, bubbleWidth, bubbleHeight, bubbleWidth * 0.14);
  triangle(
    x - bubbleWidth * 0.3, y + bubbleHeight / 2 - 1,
    x - bubbleWidth * 0.1, y + bubbleHeight / 2 - 1,
    x - bubbleWidth * 0.35, y + bubbleHeight / 2 + bubbleHeight * 0.25
  );

  const joyColour = lerpColor(color(255, 200, 80), color(240, 140, 90), random(1));

  fill(red(joyColour), green(joyColour), blue(joyColour), 50);
  ellipse(x, y, bubbleWidth * 0.5);
  fill(red(joyColour), green(joyColour), blue(joyColour), 90);
  ellipse(x, y, bubbleWidth * 0.36);
  fill(joyColour);
  ellipse(x, y, bubbleWidth * 0.22);

  bubblesSoFar++;              
}

// click to clear the canvas and let a new crowd gather
function mousePressed() {
  bubblesSoFar = 0;
  background(245, 242, 235);
}