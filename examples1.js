
let furby

let redVar
let greenVar
let blueVar


function preload(){
	furby = loadImage('furby.png')
}


function setup(){

	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER)
	imageMode(CENTER)
	background(random(255), random(255), random(255))
	redVar = random(0,255)
	greenVar = random(0,255)
	blueVar = random(0,255)
	for(let i=0; i<100; i++){
		fill(200, 200, 100)
		ellipse(random(windowWidth), random(windowHeight), 20, 20)
		image(furby, random(windowWidth), random(windowHeight), 40, 40)
	}
}


function draw(){

	//background(random(255), random(255), random(255))
	if(mouseIsPressed == true){
		redVar = random(0,255)
	greenVar = random(0,255)
	blueVar = random(0,255)
		
		//image(furby, 400, 300)
	}
	//background(redVar, greenVar, blueVar)
	strokeWeight(2)

	for(let i=0; i<windowWidth; i=i+10){
		line(i, 0, i, windowHeight)
	}
	for(let i=0; i<windowHeight; i=i+10){
		line(0, i, windowWidth, i)
	}
	

	//ellipse(mouseX, mouseY, 50, 50)
	//ellispe(random(), random(), 50, 50)
	textSize(40)
	text('Hello World', 100, 400)
	if(keyIsPressed == true){
		fill(200, 200, 100)
		ellispe(windowWidth/2, windowHeight/2, 100, 100 )

	}else{
		fill(100,200,100)
		rect(windowWidth/2, windowHeight/2, 100, 100)

	}
}


function mouseClicked(){

	redVar = random(0,255)
	greenVar = random(0,255)
	blueVar = random(0,255)

}
function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}


