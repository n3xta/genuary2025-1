function setup() {
  createCanvas(600, 600);
  noLoop();
  strokeCap(SQUARE);

}

function draw() {
  let y = 0;
  let rowHeightNumbers = [10, 50, 60, 100, 200];

  while (y < height) {
    let heightIndex = Math.floor(Math.random() * rowHeightNumbers.length)
    let rowHeight = rowHeightNumbers[heightIndex]; // discrete random selection in JS is so verbose

    let x = 0;
    let blockWidthNumbers = [2, 5, 10, 20, 50, 250, 400, 600];
    while (x < width) {
      let widthIndex = Math.floor(Math.random() * blockWidthNumbers.length)
      let blockWidth = blockWidthNumbers[widthIndex];

      let lineWidthNumbers = [0, 2, 3, 4, 5, 10, 15];
      let lineIndex = Math.floor(Math.random() * lineWidthNumbers.length)
      let lineWidth = lineWidthNumbers[lineIndex];
      let lineSpacing = random(1, 30);
      let startX = x;
      stroke(random(10,50));
      strokeWeight(lineWidth);
      while (startX < x + blockWidth) {
        line(startX, y, startX, y + rowHeight); 
        startX += lineSpacing;
      }

      x += blockWidth;
    }

    stroke(255);
    strokeWeight(5);
    line(0, y + rowHeight, width, y + rowHeight);
    y += rowHeight;
  }

  //sketchFilter();
  filter(BLUR, 1);
  stroke(50, 50, 50, 15);
  strokeWeight(0.5);
  for (let j = 0; j < 2000; j++) {
    point(random(width), random(height));
  }
}

function sketchFilter() {
  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    let offset = random(-10, 10);
    pixels[i] += constrain(pixels[i] + offset, 0, 255);
    pixels[i + 1] += constrain(pixels[i + 1] + offset, 0, 255);
    pixels[i + 2] += constrain(pixels[i + 2] + offset, 0, 255);
    console.log('filtering');
  }
  updatePixels();
  console.log('filter applied');
}