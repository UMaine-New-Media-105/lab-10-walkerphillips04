let FaceX, FaceY;
let Logs = [];
function setup() {
  createCanvas(400, 400);
  FaceX = 160;
  FaceY = 350;

  let log1 = new Log(0, 35, random(-3, -7), "maroon", 30, 20, 90, 30);
  let log2 = new Log(0, 60, random(3, 7), "yellow", 30, 45, 70, 40);
  let log3 = new Log(0, 195, random(6, -7), "Darkgreen", 40, 30, 80, 35);
  let log4 = new Log(0, 250, random(3, 7), "Teal", 20, 20, 100, 45);

  Logs.push(log1, log2, log3, log4);
}

function draw() {
  background("green");
  fill("DimGrey");
  rect(0, 50, 400, 100);
  rect(0, 220, 400, 100);
 Logs.forEach((log) => {
    log.update();
    log.show();
  });
addFace(FaceX, FaceY);
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    FaceY -= 23;
  }
  if (keyCode == DOWN_ARROW) {
    FaceY += 23;
  }
  if (keyCode == RIGHT_ARROW) {
    FaceX += 23;
  }
  if (keyCode == LEFT_ARROW) {
    FaceX -= 23;
  }
}

class Log {
  constructor(x, y, addX, color, rectX, rectY, rectW, rectH) {
    this.x = x;
    this.y = y;
    this.addX = addX;
    this.color = color;
    this.rectX = rectX;
    this.rectY = rectY;
    this.rectW = rectW;
    this.rectH = rectH;
  }

  update() {
    this.x += this.addX;

    if (this.x < -this.rectW) {
      this.x = width;
    } else if (this.x > width) {
      this.x = -this.rectW;
    }
  }

  show() {
    push();
    translate(this.x, this.y);
    fill(this.color);
    rect(this.rectX, this.rectY, this.rectW, this.rectH);
    pop();
  }
}
function addFace(x, y) {
  push();
  translate(x, y);
  // Draw the face
  fill(255, 220, 165);
  strokeWeight(2);
  stroke(0);
  ellipse(25, 25, 40, 40);

  // Draw the eyes
  fill(0);
  noStroke();
  ellipse(18, 20, 5, 5);
  ellipse(32, 20, 5, 5);

  // Draw the mouth
  noFill();
  strokeWeight(3);
  stroke(2);
fill("black")
  arc(25, 35, 15, 10, 4, 3.9);
  pop();
}
