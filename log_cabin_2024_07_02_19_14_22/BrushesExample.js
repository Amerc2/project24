
let furby
let vigel
let wamog
let wamogBrushbool = false
let ellipseBrushBool = false

function preload(){
	furby = loadImage('furby.png')
	vigel = loadImage('vigel.png')
	wamog = loadImage('wamog.png')
}
function setup(){
	createCanvas(windowWidth, windowHeight)
	background(255)
	imageMode(CENTER)
}

function draw(){

	//vigelBrush()
	//furbyBrush()
	if(ellipseBrushBool == true){
	ellipseBrush()}

	if(wamogBrushbool == true){
	wamogBrush()}

}

function furbyBrush(){
	image(furby, mouseX, mouseY, 50, 50)

}
function vigelBrush(){
	image(vigel, mouseX, mouseY, 50, 50)

}
function wamogBrush(){

image(wamog, mouseX, mouseY, 50, 50)

}

function ellipseBrush(){
	fill(random(255),random(255), random(255))
	ellipse(mouseX, mouseY, 50, 50)

}

function keyPressed(){
	if(key == 'q'){
		ellipseBrushBool = false
		wamogBrushbool = true

	}
	if(key =='w'){
		ellipseBrushBool = true
		wamogBrushbool = false


	}
}

function mouseDragged(){
		if(ellipseBrushBool == true){
	ellipseBrush()
	}

	if(wamogBrushbool == true){
	wamogBrush()
	}
		}



function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}
