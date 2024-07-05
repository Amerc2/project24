function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(7, 86, 135);
  strokeWeight(1)
  //sun
  fill(209, 183, 52)
  ellipse(0,0,300,300)
  //grass
  fill(5, 92, 15)
  rect(00, 500 , 1000, 500)
  //cabin
  fill(64, 56, 17)
  rect(250, 275, 500,300)
   //triangle roof
  strokeWeight(1)
  triangle(240, 275, 760, 275 ,500, 100 )
  //logs
  strokeWeight(10)
  line(460, 130, 540, 130)
  line(410, 160, 590, 160)
  line(370, 190, 630, 190)
  line(330, 220, 670, 220)
  line(280, 250, 720, 250)
  line(250, 280, 750, 280)
  line(250, 310, 750, 310)
  line(250, 340, 750, 340)
  line(250, 370, 750, 370)
  line(250, 400, 750, 400)
  line(250, 430, 750, 430)
  line(250, 460, 750, 460) 
  line(250, 490, 750, 490)
  line(250, 520, 475, 520)
  line(250, 550, 475, 550)
  line(500, 520, 750, 520)
  line(500, 550, 750, 550)
  //door nob dot
  fill(120, 100, 6)
  strokeWeight(2)
  rect(475, 500, 50,70)
  strokeWeight(20)
  point(490, 540)
  //tree
  strokeWeight(1)
  fill(77, 65, 9)
  rect(100, 400, 50, 100)
  fill(11, 115, 39)
  ellipse(125, 400, 80, 60)
  //tree 2
  strokeWeight(1)
  fill(77, 65, 9)
  rect(800, 400, 50, 100)
  fill(11, 115, 39)
  ellipse(825, 400, 80, 60)
  
 
}