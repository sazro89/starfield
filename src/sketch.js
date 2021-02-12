class Star {
  constructor(){
    this.x = random(-width/2, width/2);
    this.y = random(-height/2, height/2);
    this.z = random(0, 800);

    this.pz = this.z;
  }

  update() {
    this.z -= speed;
    if (this.z < 1) {
      this.x = random(-width/2, width/2);
      this.y = random(-height/2, height/2);
      this.z = 800;
      this.pz = this.z;
    }
  }

  show() {
    fill(255);
    noStroke();

    this.r = map(this.z, 0, width, 8, 0);
    this.sx = map(this.x / this.z, 0, 1, 0, width);
    this.sy = map(this.y / this.z, 0, 1, 0, height);
    ellipse(this.sx, this.sy, this.r, this.r);

    this.px = map(this.x / this.z, 0, 1, 0, width);
    this.py = map(this.y / this.z, 0, 1, 0, height);

    stroke(255);
    line(this.px, this.py, this.sx, this.sy);

  }
}

let stars = [];
let speed;

function setup() {
  // put setup code here
  createCanvas(1300, 750);

  for (let x = 0; x < 600; x++) {
    stars[x] = new Star;
  }
}

function draw() {
  // put drawing code here
  speed = map(mouseX, 0, width, 0, 20);
  background(0);
  translate(width/2, height/2);
  for (let x = 0; x < 600; x++) {
    stars[x].update();
    stars[x].show();
  }
}
