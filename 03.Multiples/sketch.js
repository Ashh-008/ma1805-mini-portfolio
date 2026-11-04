let colours; // ARRAY: the colours I use

function setup() {
  createCanvas(500, 500);
  colours = [
    color(255, 75, 62),   // red
    color(91, 140, 255),  // blue
    color(232, 236, 255)  // white
  ];
}

function draw() {
  background(16, 26, 61);

  let step = floor(frameCount / 10);

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {

      let n = (col + row + step) % 5;
      let diameter = 10;

      if (n === 0) {
        fill(colours[0]);
        diameter = 40;
      } else if (n === 1) {
        fill(colours[1]);
        diameter = 25;
      } else {
        fill(colours[2]);
        diameter = 10;
      }

      noStroke();
      circle(col * 50 + 25, row * 50 + 25, diameter);
    }
  }
}