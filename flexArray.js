
let furby

let x = []
let y = []

function preload(){
	furby = loadImage('furby.png')
}


function setup(){
createCanvas(windowWidth, windowHeight)
imageMode(CENTER)
}

function draw(){
	background(250, 40 , 100)

	for(let i=0; i < x.length; i++){
		image(furby, x[i], y[i], 60, 60)

	}

}

function mouseClicked(){

	x.push(mouseX)
	y.push(mouseY)

	print(x)
}

function keyPressed(){
	if( key == 'x'){
		x.splice(x.length-1, 1)
		y.splice(y.length-1, 1)
	}

}