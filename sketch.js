function preload() {
  //dataset da mettere
}

let backgroundColor = '#06011e';
let circleColor = '#f8ffb8'
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
    strokeWeight(2);
    line(x1, y1, x2, y2);
  }

  //cerchio
  fill(circleColor);
  noStroke();
  circle(750, 750, 100, 100);
  
  //orbita 1
  let x = 750;
  let y = 750;
  let radius = 200;
  let numDashes = 50; //numero segmenti
  let angleStep = TWO_PI / numDashes; //angolo tra ogni segmento
  for (let i = 0; i < numDashes; i++) {
    //angolo per ogni segmento
    let angle1 = i * angleStep;
    let angle2 = (i + 0.5) * angleStep; //distanza tra segmenti
    //coordinate di inizio e fine per ogni segmento
    let x1 = x + cos(angle1) * radius;
    let y1 = y + sin(angle1) * radius;
    let x2 = x + cos(angle2) * radius;
    let y2 = y + sin(angle2) * radius;
    noFill();
    stroke("white");
    strokeWeight(2);
    line(x1, y1, x2, y2);
  }

  //orbita 2
  let X = 750;
  let Y = 750;
  let radius2 = 400;
  let numDashes2 = 50; //numero segmenti
  let angleStep2 = TWO_PI / numDashes2; //angolo tra ogni segmento
  for (let i = 0; i < numDashes2; i++) {
    //angolo per ogni segmento
    let angle1 = i * angleStep2;
    let angle2 = (i + 0.5) * angleStep2; //distanza tra segmenti
    //coordinate di inizio e fine per ogni segmento
    let x1 = X + cos(angle1) * radius2;
    let y1 = Y + sin(angle1) * radius2;
    let x2 = X + cos(angle2) * radius2;
    let y2 = Y + sin(angle2) * radius2;
    noFill();
    stroke("white");
    strokeWeight(2);
    line(x1, y1, x2, y2);
  }
}