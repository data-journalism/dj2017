
function setup() {
     createCanvas(480, 400);
     smooth();
}
function draw() {
     background(204);
     translate(110, 110); //?
     
     stroke(0);
     strokeWeight(70);
     line(mouseX, mouseY-35, mouseX, mouseY-65);  // Body
     noStroke();
     fill(255);
     ellipse(mouseX-17.5, mouseY-65, 35, 35);  // Left eye dome
     ellipse(mouseX+17.5, mouseY-65, 35, 35);   // Right eye dome
     arc(mouseX, mouseY-65, 70, 70, 0, PI);   // Chin
     fill(0);
     ellipse(mouseX-14, mouseY-65, 8, 8); // Left eye
     ellipse(mouseX+14, mouseY-65, 8, 8);  // Right eye
     quad(mouseX, mouseY-58, mouseX+4, mouseY-51, mouseX, mouseY-44, mouseX-4, mouseY-51);  // Beak
}