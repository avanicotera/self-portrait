function setup() {
  createCanvas(600, 600);
}

function draw() {
  background('lightpink');
  scale(1.5);
  noStroke();

  fill('gold');
  rect(115, 120, 170, 230, 40);

  fill('blue');
  ellipse(200, 410, 300, 160);

  fill('peachpuff');
  rect(180, 270, 40, 60);
  ellipse(200, 190, 130, 160);

  fill('gold');
  arc(200, 175, 150, 150, PI, TWO_PI);

  fill('white');
  ellipse(175, 195, 30, 20);
  ellipse(225, 195, 30, 20);

  let dx = constrain((mouseX / 1.5 - 200) / 40, -4, 4);
  let dy = constrain((mouseY / 1.5 - 195) / 40, -2, 2);

  fill('green');
  ellipse(175 + dx, 195 + dy, 14, 14);
  ellipse(225 + dx, 195 + dy, 14, 14);

  fill('black');
  ellipse(175 + dx, 195 + dy, 6, 6);
  ellipse(225 + dx, 195 + dy, 6, 6);

  stroke('goldenrod');
  strokeWeight(3);
  line(162, 178, 188, 176);
  line(212, 176, 238, 178);

  stroke('tan');
  strokeWeight(2);
  line(200, 200, 196, 222);
  line(196, 222, 204, 222);

  stroke('red');
  strokeWeight(3);
  noFill();
  arc(200, 237, 40, 24, 0, PI);
}