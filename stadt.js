function setup() {
  var stadt = createCanvas(600, 480);
  stadt.parent("stadt"); //erstellte ID
  frameRate(30);
}

background(15, 15, 100);
var x = 0;
var y = 0;
var scale = 0.5;
//Mond
noStroke();
fill(205, 205, 0);
ellipse(x + 280 * scale, y + 50 * scale, 50 * scale);
fill(15, 15, 100);
ellipse(x + 295 * scale, y + 45 * scale, 50 * scale);

fill(41, 41, 41);
rect(0, y + 360 * scale, width, height - (y + 360 * scale));

function haus(x, y, width, height, r, g, b) {
  fill(r, g, b);
  rect(x, y, width, height);
}

haus(10 * scale, 280 * scale, 90 * scale, 80 * scale, 0, 0, 0);
haus(170 * scale, 180 * scale, 70 * scale, 180 * scale, 0, 0, 0);
rect(x + 189 * scale, y + 165 * scale, 30 * scale, 15 * scale);

fill(255, 255, 255);
rect(x + 170 * scale, y + 180 * scale, 70 * scale, 20 * scale);
rect(x + 189 * scale, y + 165 * scale, 31 * scale, 2 * scale);
haus(260 * scale, 160 * scale, 120 * scale, 200 * scale, 30, 30, 30);
haus(380 * scale, 180 * scale, 90 * scale, 180 * scale, 0, 0, 0);
triangle(
  x + 400 * scale,
  y + 180 * scale,
  x + 440 * scale,
  y + 180 * scale,
  x + 420 * scale,
  y + 135 * scale
);
haus(480 * scale, 220 * scale, 210 * scale, 140 * scale, 30, 30, 30);
haus(550 * scale, 130 * scale, 70 * scale, 230 * scale, 0, 0, 0); //MITTE
haus(680 * scale, 120 * scale, 100 * scale, 240 * scale, 0, 0, 0);
haus(680 * scale, 50 * scale, 20 * scale, 310 * scale); //hoher turm
stroke(450);
line(681 * scale, 10 * scale, 681 * scale, 50 * scale, 0, 0, 0);
noStroke();
haus(700 * scale, 100 * scale, 25 * scale, 260 * scale, 30, 30, 30);
haus(755 * scale, 100 * scale, 25 * scale, 260 * scale, 30, 30, 30);
haus(780 * scale, 140 * scale, 45 * scale, 220 * scale, 0, 0, 0);
haus(830 * scale, 200 * scale, 30 * scale, 160 * scale, 0, 0, 0);
haus(835 * scale, 240 * scale, 100 * scale, 120 * scale, 0, 0, 0);
haus(900 * scale, 120 * scale, 70 * scale, 240 * scale);
stroke(450);
line(935 * scale, 80 * scale, 935 * scale, 119 * scale);
noStroke();
haus(965 * scale, 160 * scale, 45 * scale, 200 * scale, 0, 0, 0);
haus(1000 * scale, 215 * scale, 65 * scale, 145 * scale, 0, 0, 0);
haus(1030 * scale, 240 * scale, 90 * scale, 120 * scale, 0, 0, 0);
haus(1080 * scale, 215 * scale, 65 * scale, 145 * scale, 0, 0, 0);
haus(1110 * scale, 250 * scale, 60 * scale, 110 * scale, 30, 30, 30);
haus(1170 * scale, 280 * scale, 75 * scale, 80 * scale, 0, 0, 0);
fill(30, 30, 30);
rect(1180 * scale, 260 * scale, 45 * scale, 25 * scale);
fill(255, 255, 255);
stroke(140);
line(x + 420 * scale, y + 135 * scale, 400 * scale, 180 * scale);
line(x + 420 * scale, y + 135 * scale, 440 * scale, 180 * scale);
line(x + 400 * scale, y + 180 * scale, 440 * scale, 180 * scale);
line(x + 420 * scale, y + 135 * scale, 410 * scale, 180 * scale);
line(x + 413 * scale, y + 150 * scale, 427 * scale, 150 * scale);
line(x + 432 * scale, y + 165 * scale, 406 * scale, 165 * scale);
function fenster(x, y) {
  rect(x, y, 5 * scale, 10 * scale);
}
fenster(20 * scale, 290 * scale);
fenster(35 * scale, 290 * scale);
fenster(50 * scale, 290 * scale);
fenster(65 * scale, 290 * scale);
fenster(80 * scale, 290 * scale);
fenster(180 * scale, 225 * scale);
fenster(190 * scale, 225 * scale);
fenster(180 * scale, 250 * scale);
fenster(210 * scale, 280 * scale);
fenster(225 * scale, 310 * scale);
fenster(215 * scale, 310 * scale);
fenster(200 * scale, 340 * scale);
fenster(280 * scale, 180 * scale);
fenster(355 * scale, 180 * scale);
fenster(355 * scale, 330 * scale);
fenster(295 * scale, 230 * scale);
fenster(330 * scale, 260 * scale);
fenster(320 * scale, 300 * scale);

fenster(450 * scale, 200 * scale);
fenster(438 * scale, 200 * scale);
fenster(425 * scale, 200 * scale);
fenster(413 * scale, 200 * scale);
fenster(400 * scale, 200 * scale);
fenster(388 * scale, 200 * scale);
fenster(450 * scale, 225 * scale);
fenster(438 * scale, 225 * scale);
fenster(425 * scale, 225 * scale);
fenster(413 * scale, 225 * scale);
fenster(400 * scale, 225 * scale);
fenster(388 * scale, 225 * scale);
fenster(450 * scale, 250 * scale);
fenster(438 * scale, 250 * scale);
fenster(425 * scale, 250 * scale);
fenster(413 * scale, 250 * scale);
fenster(400 * scale, 250 * scale);
fenster(388 * scale, 250 * scale);
fenster(450 * scale, 275 * scale);
fenster(438 * scale, 275 * scale);
fenster(425 * scale, 275 * scale);
fenster(413 * scale, 275 * scale);
fenster(400 * scale, 275 * scale);
fenster(388 * scale, 275 * scale);
fenster(450 * scale, 300 * scale);
fenster(438 * scale, 300 * scale);
fenster(425 * scale, 300 * scale);
fenster(413 * scale, 300 * scale);
fenster(400 * scale, 300 * scale);
fenster(388 * scale, 300 * scale);
fenster(450 * scale, 325 * scale);
fenster(438 * scale, 325 * scale);
fenster(425 * scale, 325 * scale);
fenster(413 * scale, 325 * scale);
fenster(400 * scale, 325 * scale);
fenster(388 * scale, 325 * scale);
fenster(535 * scale, 240 * scale);
fenster(520 * scale, 240 * scale);
fenster(490 * scale, 240 * scale);
fenster(525 * scale, 260 * scale);
fenster(500 * scale, 280 * scale);
fenster(490 * scale, 310 * scale);
fenster(535 * scale, 330 * scale);
fenster(520 * scale, 330 * scale);
fenster(560 * scale, 150 * scale);
fenster(565 * scale, 180 * scale);
fenster(560 * scale, 315 * scale);
fenster(600 * scale, 315 * scale);
fenster(575 * scale, 335 * scale);
fenster(583 * scale, 235 * scale);
fenster(595 * scale, 235 * scale);
fenster(630 * scale, 265 * scale);
fenster(645 * scale, 290 * scale);
fenster(653 * scale, 310 * scale);
fenster(660 * scale, 290 * scale);
fenster(660 * scale, 240 * scale);
fenster(630 * scale, 335 * scale);
fenster(740 * scale, 160 * scale);
fenster(730 * scale, 230 * scale);
fenster(735 * scale, 285 * scale);
fenster(810 * scale, 200 * scale);
fenster(795 * scale, 170 * scale);
fenster(810 * scale, 240 * scale);
fenster(785 * scale, 220 * scale);
fenster(795 * scale, 315 * scale);
fenster(810 * scale, 315 * scale);
fenster(845 * scale, 225 * scale);
fenster(835 * scale, 265 * scale);
fenster(850 * scale, 265 * scale);
fenster(885 * scale, 265 * scale);
fenster(885 * scale, 285 * scale);
fenster(845 * scale, 305 * scale);
fenster(875 * scale, 330 * scale);
fenster(860 * scale, 330 * scale);
fenster(910 * scale, 145 * scale);
fenster(930 * scale, 145 * scale);
fenster(940 * scale, 170 * scale);
fenster(955 * scale, 170 * scale);
fenster(955 * scale, 215 * scale);
fenster(920 * scale, 215 * scale);
fenster(920 * scale, 235 * scale);
fenster(940 * scale, 295 * scale);
fenster(920 * scale, 325 * scale);
fenster(955 * scale, 325 * scale);
fenster(1015 * scale, 325 * scale);
fenster(1030 * scale, 280 * scale);
fenster(1015 * scale, 280 * scale);
fenster(1045 * scale, 245 * scale);
fenster(1095 * scale, 230 * scale);
fenster(1125 * scale, 230 * scale);
fenster(1102 * scale, 270 * scale);
fenster(1090 * scale, 325 * scale);
fenster(1200 * scale, 325 * scale);
fenster(1185 * scale, 325 * scale);
fenster(1185 * scale, 300 * scale);
fenster(1200 * scale, 300 * scale);
fenster(1230 * scale, 300 * scale);
fenster(1215 * scale, 343 * scale);
fenster(1185 * scale, 343 * scale);
fenster(1150 * scale, 270 * scale);
fenster(1130 * scale, 300 * scale);
fenster(1150 * scale, 330 * scale);
