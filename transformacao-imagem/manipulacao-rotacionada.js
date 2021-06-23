let img;

function preload() {
  img = loadImage('./imagem-parque.jpg')
}

function setup() {
  criarCanvas();
  noLoop();
}

function criarCanvas() {
  let canvas = createCanvas(img.width, img.height);
  let canvasX = (windowWidth - img.width)/2;
  let canvasY = (windowHeight - img.height)/2;
  canvas.position(canvasX, canvasY);
}

function draw() {
  desenharImagemRotacionada();
}

function desenharImagemRotacionada() {
  for(let col = 0; col < img.width; col+=2) {
    for(let row = 0; row < img.height; row+=2) {
      let x = col, y = row;
      let pixel = img.get(x, y);

      push();

      translate(x, y);
      rotate(radians(random(360))); //traçados para direcoes aleatoreas

      noFill();
      stroke(color(pixel));
      strokeWeight(random([4,5,6,7,8]));

      curve(x, y, 
        sin(x) * random(6), cos(x) * sin(x) * random(9),
        random(2), random(8),
        cos(y) * sin(y) * random(4), cos(y) * sin(y));

      pop();
    }
  }
}