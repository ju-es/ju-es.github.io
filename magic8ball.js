function setup() {
  var magicball = createCanvas(600, 480);
  magicball.parent("magicball"); //erstellte ID
  frameRate(30);
}

var spruch = "";

background(104, 131, 139);
function ball(xBall, yBall) {
  noStroke();
  fill(61, 61, 61);
  ellipse(xBall + 200, yBall + 300, 250, 60);
  fill(0, 0, 0);
  ellipse(xBall + 250, yBall + 200, 200);
  push();
  fill(150, 150, 150);
  translate(xBall + 290, yBall + 125);
  rotate(0.5);
  ellipse(0, 0, 70, 20);
  pop();
  fill(255, 255, 255);
  ellipse(xBall + 250, yBall + 200, 120);
  fill(0, 0, 0);
  textSize(60);
  text("8", 233, 220);
}
ball(0, 0);

function mousePressed() {
  randomNumber = Math.floor(random(0, 8));

  clear();
  background(104, 131, 139);
  ball(0, 0);
  if (randomNumber === 0) {
    spruch = "Gay people\nhave rights too.\nDeal with it. ";
  } else if (randomNumber === 1) {
    spruch = "My sources said no,\nbut they also said\nHillary would win.";
  } else if (randomNumber === 2) {
    spruch = "Ask again later";
  } else if (randomNumber === 3) {
    spruch = "I have no idea...";
  } else if (randomNumber === 4) {
    spruch = "Try it! You might\nlike it!";
  } else if (randomNumber === 5) {
    spruch = "Maybe";
  } else if (randomNumber === 6) {
    spruch = "You`ve got to be\nkidding!";
  } else if (randomNumber === 7) {
    spruch = "Better not tell\nyou now";
  }
  textSize(20);
  text(spruch, 190, 350);
  console.log(spruch);
}
