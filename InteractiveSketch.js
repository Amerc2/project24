

let fire
let wherewolf
let mouseDist

let nightBool = false
let dayBool = true

function preload(){
  fire = loadImage('fire.png')
  wherewolf = loadImage('wherewolf.png')
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  fireX = (200)
  fireY = (300)

//day scene
 background(7, 86, 135);
    //grass
  fill(5, 92, 15)
  rect(00, 500 , windowWidth, )
  //sun
  fill(209, 183, 52)
  ellipse(0,0,300,300)
  
}

function draw() {
  if(dayBool == true){
    day()
  }

  if(nightBool == true){
    night()
    
  }
  
  strokeWeight(1)


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
  //tree 3
  strokeWeight(1)
  fill(77, 65, 9)
  rect(1000, 400, 50, 100)
  fill(11, 115, 39)
  ellipse(1025, 400, 80, 60)
  //tree 4
  strokeWeight(1)
  fill(77, 65, 9)
  rect(1200, 400, 50, 100)
  fill(11, 115, 39)
  ellipse(1225, 400, 80, 60)
   //tree 5
  strokeWeight(1)
  fill(77, 65, 9)
  rect(1400, 400, 50, 100)
  fill(11, 115, 39)
  ellipse(1425, 400, 80, 60)
     //tree 6
  strokeWeight(1)
  fill(77, 65, 9)
  rect(1600, 400, 50, 100)
  fill(11, 115, 39)
  ellipse(1625, 400, 80, 60)
   //tree 7
  strokeWeight(1)
  fill(77, 65, 9)
  rect(1800, 400, 50, 100)
  fill(11, 115, 39)
  ellipse(1825, 400, 80, 60)
  //tree 8
  strokeWeight(1)
  fill(77, 65, 9)
  rect(2000, 400, 50, 100)
  fill(11, 115, 39)
  ellipse(2025, 400, 80, 60)


}   

function keyPressed(key = 'n'){
  nightBool = true
  dayBool = false
  } 
  
function day(){
 
}


function night(){


  background(4, 15, 33)
//moon
    fill(97, 95, 90)
    ellipse(0,0,300,300)
//grass
  fill(5, 92, 15)
  rect(00, 500 , windowWidth, )
createImage(fire, 500, 300, 50, 50)


}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}




