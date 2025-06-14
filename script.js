let balloonX = 300;
let balloonY = 138;
let dirX = 2;
let dirY = 1.5;
let currentVersion = "static";

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvas-container");
  frameRate(60);
  noLoop(); // Start with static
  drawStatic();
}

function loadStatic() {
  currentVersion = "static";
  noLoop();
  drawStatic();
}

function loadAnimated() {
  currentVersion = "animated";
  loop();
}

function loadInteractive() {
  currentVersion = "interactive";
  loop();
}

function draw() {
  if (currentVersion === "animated") {
    drawAnimated();
  } else if (currentVersion === "interactive") {
    drawInteractive();
  }
}

function keyPressed() {
  if (currentVersion === "interactive") {
    const moveAmt = 20; // Increased from 5 to 20
    if (keyCode === LEFT_ARROW) balloonX -= moveAmt;
    if (keyCode === RIGHT_ARROW) balloonX += moveAmt;
    if (keyCode === UP_ARROW) balloonY -= moveAmt;
    if (keyCode === DOWN_ARROW) balloonY += moveAmt;
  }
}

function drawStatic() {
  background(215, 200, 150);
  drawBackground();
  drawBalloon(300, 138);
}

function drawAnimated() {
  background(215, 200, 150);
  drawBackground();

  balloonX += dirX;
  balloonY += dirY;

  if (balloonX < 100 || balloonX > 500) dirX *= -1;
  if (balloonY < 100 || balloonY > 300) dirY *= -1;

  drawBalloon(balloonX, balloonY);
}

function drawInteractive() {
  background(215, 200, 150);
  drawBackground();
  drawBalloon(balloonX, balloonY);
}

function drawBalloon(x, y) {
  fill(190, 40, 30);
  ellipse(x, y, 125, 125); // balloon

  stroke(60);
  line(x - 10, y + 62, x - 10, y + 102);
  line(x + 10, y + 62, x - 10, y + 102);
  line(x - 10, y + 62, x + 10, y + 102);
  line(x + 10, y + 62, x + 10, y + 192);
  line(x + 10, y + 62, x + 10, y + 102);
  line(x - 10, y + 102, x + 10, y + 102);
  fill(50);
  ellipse(x, y + 112, 28, 28); // basket
}

function drawBackground() {
  noStroke();
  for (let i = 0; i < height; i++) {
    fill(200 + i * 0.1, 190 + i * 0.1, 150 + i * 0.05);
    rect(0, i, width, 1);
  }

  fill(255, 220, 100);
  push();
  noStroke();
  translate(100, -50);
  rotate(HALF_PI);
  rect(90, 30, 400, 200, 70);
  pop();

  fill(180, 100, 100);
  rect(-30, 250, 100, 200);
  rect(20, 350, 100, 100);

  fill(255, 230, 50);
  rect(70, 250, 120, 100);

  fill(60, 100, 60);
  rect(120, 350, 60, 100);

  fill(40, 40, 40);
  rect(150, 350, 100, 100);

  fill(200, 150, 200);
  rect(250, 350, 27, 140);

  fill(240, 200, 100);
  rect(450, 160, 150, 440);

  fill(255, 30, 30);
  triangle(120, 350, 120, 320, 150, 350);

  fill(100, 100, 200);
  triangle(249, 350, 277, 320, 277, 350);

  fill(255, 240, 80);
  rect(360, 260, 90, 80);

  fill(20, 20, 20);
  rect(410, 180, 40, 40);

  fill(60, 100, 60);
  rect(450, 340, 70, 100);

  fill(255, 240, 80);
  rect(450, 220, 42, 40);

  fill(200, 60, 60);
  rect(390, 440, 60, 160);

  push();
  scale(-1, 1);
  translate(-1050, -160);
  fill(200, 100, 80);
  triangle(450, 160, 600, 320, 10, 320);
  pop();

  stroke(60);
  fill(60, 100, 60);
  rect(-1, 450, 251, 160);

  noStroke();
  fill(60, 100, 60);
  triangle(360, 600, 250, 450, 250, 600);
}
