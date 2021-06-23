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
  desenharImagemBorrada();
}

function desenharImagemBorrada() {
  for(let col = 0; col < img.width; col+=3) {
    for(let row = 0; row < img.height; row+=3) {
      let x = col, y = row;
      let pixel = img.get(x, y);

      push();

      translate(x, y);
      noFill();
      strokeWeight(random(3));
      stroke(color(pixel));

      curve(x, y,
        random(5), random(5),
        x - random(5, 10), y - random(5, 10),
        random(5), random(5)
      );

      pop();
    }
  }
}