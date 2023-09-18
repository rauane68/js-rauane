function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    
    stroke("green");
    fill("green");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 25);
    }
  }
  