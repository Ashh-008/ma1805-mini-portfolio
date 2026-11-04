/*

Based on the pixelation example from the course repo
(evolved from Andrew Sink's example and Dan Shiffman's Brightness Mirror).
The image is one I generated myself with Python.
*/

let img; // A variable to store the image in

function preload() {
  img = loadImage("notification.png"); // loads my own image
}

function setup() {
  createCanvas(500, 500);
  img.loadPixels();
  noStroke();
}

function draw() {
  background(16, 26, 61);

  // size goes up and down by itself, like a pulse
  let size = floor(map(sin(frameCount * 0.03), -1, 1, 8, 40));

  // Loop through the image, jumping by "size" each time
  for (let y = 0; y < img.height; y += size) { // Rows first
    for (let x = 0; x < img.width; x += size) {
      let index = (x + y * img.width) * 4;

      let r = img.pixels[index + 0];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let bright = (0.3 * r) + (0.59 * g) + (0.11 * b); // calc greyscale

      fill(r, g, b);

      if (bright > 100) {
        circle(x + size / 2, y + size / 2, size);
      } else {
        circle(x + size / 2, y + size / 2, size / 2);
      }
    }
  }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('pixelated', 'png');
  }
}