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
  desenharImagemRect();
}

function desenharImagemRect() {
  for(let col = 0; col < img.width; col+=10) {
    for(let row = 0; row < img.height; row+=10) {
      let pixel = img.get(col, row);
      fill(color(pixel));
      rect(col, row, 10, 10);
    }
  }
}