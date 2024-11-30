function preload() {
  //dataset da mettere
}

let backgroundColor = '#06011e';
let circleColor = '#f8ffb8';
let circleSize = 130;

function setup() {
  totalWidth = windowWidth - 17;
  totalHeight = circleSize * 10;
  createCanvas(totalWidth, totalHeight);
  noLoop ();
}

function draw() {
  background(backgroundColor);
  drawGliph();
}

function drawGliph() {
  //Paese
  fill("white");
  noStroke ();
  textSize (30);
  text ('Afghanistan:', 100, 200);

  //raggi
  let xR = 750;
  let yR = 750;
  let radiusR = 130;
  let numRays = 14; //numero di raggi
  let angleStepR = TWO_PI / numRays; //angolo tra ogni raggio
  let rayLengths = [];
  for (let i = 0; i < numRays; i++) {
    rayLengths.push(random(150, 400));
  }
  for (let i = 0; i < numRays; i++) {
    let angle = i * angleStepR;
    let rayLength = rayLengths[i];
    // Coordinate di inizio
    let x1 = xR + cos(angle) * radiusR;
    let y1 = yR + sin(angle) * radiusR;
    let x2 = xR + cos(angle) * rayLength;
    let y2 = yR + sin(angle) * rayLength;
    stroke("white");
    strokeWeight(3);
    line(x1, y1, x2, y2);
  }

  //cerchio
  fill(circleColor);
  noStroke();
  ellipse(750, 750, 100, 100);
  
  //orbita 1
  push();
  noFill ();
  stroke(255, 255, 255, 70);
  strokeWeight(2);
  drawingContext.setLineDash([10, 10]);
  ellipse (750, 750, 500, 500);
  pop();

  //orbita 2
  push();
  noFill ();
  stroke(255, 255, 255, 70);
  strokeWeight(2);
  drawingContext.setLineDash([10, 10]);
  ellipse (750, 750, 800, 800);
  pop();

  //archi di aree
  noFill();
  stroke("white");
  strokeWeight(2);
  // Bottom-left
  arc(600, 1100, 700, 200, HALF_PI, PI);
}