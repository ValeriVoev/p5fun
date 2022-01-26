let bubbles = [];
let timer = 60;
let score = 0;
let min_rad = 10;
let max_rad = 25;
let fr = 60;
function setup() {
  createCanvas(800, 600);
  frameRate(fr);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(min_rad, max_rad);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  let bubs = 0;
  if (timer === 0) {
    text("SORRY! GAME OVER!", mouseX, mouseY);
  } else {
    for (let i = 0; i < bubbles.length; i++){
      if (bubbles[i].contains(mouseX, mouseY)){
        bubs = bubs + 1;
        score = score + round((min_rad + max_rad - bubbles[i].r));
        bubbles.splice(i,1)
      }
    }
    if (bubs === 0){
      bubbles.push(new Bubble(mouseX, mouseY, random(min_rad, max_rad)));
    }
  }
}

function draw() {
  background(153, 102, 255, 34);
  textSize(32);
  fill(0, 102, 153);
  stroke(0);
  textAlign(RIGHT, TOP);
  text('Bubbles left: ' + bubbles.length, width-10, 0);
  if (frameCount % fr == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  (timer === 0) ? text("GAME OVER", width-10, height*0.075) : text('Time left: ' + timer + 'sec', width-10, height*0.075);


  text('Score: ' + score, width-10, height*0.15);

  bubbles.forEach(function(bubble) {
    (bubble.contains(mouseX, mouseY)) ? bubble.changeColor(255) : bubble.changeColor(0);
    bubble.move();
    bubble.display();
  });

}
