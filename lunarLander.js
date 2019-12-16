//Ellie hat mir beim Einbauen des Setups in die js-Datei geholfen
function setup() {
  var lunarlander = createCanvas(600, 480);
  lunarlander.parent("lunarlander"); //erstellte ID
  frameRate(30);
}

let position = { x: 0, y: 0 };
let anzeigeSH = true;
let anzeigeN = false;
let sollSinken = false;
let spruch = "";
let ende = { x: 15, y: 314 };
let positionRakete = { x: 15, y: -20 };
let speed = 0;
let gravitation = 0.1;

function Boden(xBod, yBod) {
  noStroke();
  fill(100, 100, 100);
  rect(0, yBod + 430, width, height - (yBod + 400));
  fill(70, 70, 70);
  ellipse(xBod + 100, yBod + 445, 15, 5);
  ellipse(xBod + 400, yBod + 440, 10, 5);
  ellipse(xBod + 470, yBod + 450, 25, 10);
  push();
  translate(xBod + 250, yBod + 480);
  rotate(PI);
  arc(0, 0, 30, 15, 0, PI);
  pop();
}
function Rakete(xRak, yRak) {
  strokeWeight(2);
  stroke(0, 0, 0);
  line(xRak + 235, yRak + 25, xRak + 235, yRak + 40);
  noStroke();
  fill(120, 80, 80);
  triangle(xRak + 235, yRak + 40, xRak + 220, yRak + 60, xRak + 250, yRak + 60);
  fill(255, 255, 255);
  rect(xRak + 220, yRak + 60, 30, 40);
  fill(50, 50, 50);
  ellipse(xRak + 235, yRak + 75, 12, 17);
  fill(0, 79, 79);
  quad(
    xRak + 220,
    yRak + 80,
    xRak + 210,
    yRak + 100,
    xRak + 210,
    yRak + 115,
    xRak + 220,
    yRak + 100
  );
  quad(
    xRak + 250,
    yRak + 80,
    xRak + 260,
    yRak + 100,
    xRak + 260,
    yRak + 115,
    xRak + 250,
    yRak + 100
  );
  fill(255, 255, 255);
  quad(
    xRak + 230,
    yRak + 100,
    xRak + 225,
    yRak + 115,
    xRak + 245,
    yRak + 115,
    xRak + 240,
    yRak + 100
  );
  stroke(0, 0, 0);
  line(xRak + 232, yRak + 100, xRak + 230, yRak + 110);
  line(xRak + 235, yRak + 100, xRak + 235, yRak + 110);
  line(xRak + 238, yRak + 100, xRak + 240, yRak + 110);
}
function Berge(xBer, yBer) {
  fill(150, 150, 150);
  strokeWeight(1);
  stroke(0, 0, 0);
  triangle(
    xBer + 105,
    yBer + 370,
    xBer + 70,
    yBer + 430,
    xBer + 140,
    yBer + 430
  );
  triangle(xBer + 70, yBer + 385, xBer + 45, yBer + 430, xBer + 95, yBer + 430);
  triangle(xBer + 30, yBer + 360, -5, yBer + 430, xBer + 65, yBer + 430);
  triangle(
    xBer + 435,
    yBer + 375,
    xBer + 400,
    yBer + 430,
    xBer + 470,
    yBer + 430
  );
  triangle(
    xBer + 405,
    yBer + 385,
    xBer + 380,
    yBer + 430,
    xBer + 430,
    yBer + 430
  );
  triangle(
    xBer + 530,
    yBer + 380,
    xBer + 500,
    yBer + 430,
    xBer + 560,
    yBer + 430
  );
  triangle(
    xBer + 485,
    yBer + 350,
    xBer + 440,
    yBer + 430,
    xBer + 530,
    yBer + 430
  );
  triangle(
    xBer + 570,
    yBer + 365,
    xBer + 540,
    yBer + 430,
    xBer + 600,
    yBer + 430
  );
}
function Start(xSta, ySta) {
  strokeWeight(7);
  stroke(255, 255, 50);
  fill(110, 110, 110);
  rect(xSta + 160, ySta + 160, 180, 100, 30);
  strokeWeight(3);
  stroke(0, 0, 0);
  textSize(30);
  fill(255, 255, 255);
  text("START", xSta + 200, ySta + 220);
}
function Nochmal(xNoc, yNoc) {
  strokeWeight(7);
  stroke(255, 255, 50);
  fill(110, 110, 110);
  rect(xNoc + 390, yNoc + 60, 180, 100, 30);
  strokeWeight(3);
  stroke(0, 0, 0);
  textSize(28);
  fill(255, 255, 255);
  text("NOCHMAL" + "" + "?", xNoc + 405, yNoc + 120);
}
function Flagge(xFla, yFla) {
  noStroke();
  fill(40, 40, 50);
  ellipse(xFla + 50, yFla + 446, 25, 8);
  stroke(0, 0, 0);
  strokeWeight(7);
  line(xFla + 50, yFla + 200, xFla + 50, yFla + 440);
  strokeWeight(1);
  fill(255, 255, 255);
  rect(xFla + 55, yFla + 200, 180, 100, 0, 7, 7, 0);
}
function Hilfe(xHil, yHil) {
  strokeWeight(2.5);
  rect(xHil + 520, yHil + 10, 70, 30, 10);
  noStroke();
  fill(0, 0, 0);
  textSize(15);
  text("Hilfe", xHil + 540, yHil + 30);
}
function mousePressed() {
  if (mouseX > 160 && mouseX < 340 && mouseY > 160 && mouseY < 260) {
    anzeigeSH = false;
    sollSinken = true;
  }
  if (mouseX > 520 && mouseX < 590 && mouseY > 10 && mouseY < 40) {
    spruch =
      "Willkommen zu Lunar Lander,\nsobald du den Startknopf drückst, beginnt sich die Rakete nach unten zu bewegen.\nDurch Drücken der Leertaste kannst du die Geschwindigkeit der Rakete verlangsamen.\nZiel des Spiel ist es eine möglichst sanfte Landung hinzulegen, um mit einem Speed <= 1 zu landen.\nJetzt wünsche ich dir viel Spaß beim Spielen :)";
    console.log(spruch);
  }
  if (mouseX > 390 && mouseX < 570 && mouseY > 60 && mouseY < 160) {
    anzeigeN = false;
    sollSinken = true;
    positionRakete.y = -20;
    gravitation = 0.1;
    speed = 0;
  }
}
function draw() {
  clear();
  Rakete(positionRakete.x, positionRakete.y);
  Berge(0, 0);
  Boden(0, 0);

  if (anzeigeSH === true) {
    Start(0, 0);
    Hilfe(0, 0);
  }
  if (positionRakete.y >= ende.y) {
    //Ende
    anzeigeN = true;
    sollSinken = false;
    gravitation = 0;
  }
  if (anzeigeN === true) {
    Nochmal(0, 0);
    Flagge(0, 0);
    console.log(speed);
    if (speed <= 1 && ende.y === 314) {
      fill(0, 0, 0);
      textSize(20);
      text("Gewonnen", position.x + 95, position.y + 255);
    } else {
      fill(0, 0, 0);
      textSize(20);
      text("Verloren", position.x + 105, position.y + 255);
    }
  }
  if (sollSinken === true) {
    fill(255, 255, 255);
    strokeWeight(2.5);
    rect(position.x + 520, position.y + 10, 70, 40, 10);
    noStroke();
    fill(0, 0, 0);
    textSize(15);
    text("Speed:", position.x + 535, position.y + 25);
    text(Math.floor(speed), position.x + 550, position.y + 40);
    if (keyIsDown(32)) {
      positionRakete.y = positionRakete.y + speed; //oder: positionRakete.y +=speed;
      speed = speed - gravitation;
    } else {
      positionRakete.y = positionRakete.y + speed;
      speed = speed + gravitation;
    }
  }
}
