
let furby

function preload(){
	furby = loadImage('furby.png')
}


function setup(){

	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER)
	imageMode(CENTER)
}


function draw(){


	if(mouseIsPressed == true){
		background(255, 0, 0)
		image(furby, 400, 300)
	}else{
		background(0,0,255)

	}
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
