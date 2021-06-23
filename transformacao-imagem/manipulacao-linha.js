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
  desenharImagemLinha();
}

function desenharImagemLinha() {
  for(let col = 0; col < img.width; col+=5) {
    for(let row = 0; row < img.height; row+=1) {
      let pixel = img.get(col, row);
      
      stroke(color(pixel));
      point(col, row);
    }
  }
}