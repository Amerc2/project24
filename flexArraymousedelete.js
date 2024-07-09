
let furby

let x = []
let y = []

function preload(){
	furby = loadImage('furby.png')
}


function setup(){
createCanvas(windowWidth, windowHeight)
imageMode(CENTER)
	for(let i=0; i < 10; i++){
		x.push(random(60, windowWidth-60))
		y.push(random(60, windowHeight-60))
	}
}

function draw(){
	background(250, 40 , 100)

	for(let i=0; i < x.length; i++){
		image(furby, x[i], y[i], 60, 60)

		if(dist(mouseX, mouseY, x[i], y[i]) < 30){
			x.splice(i, 1)
			y.splice(i, 1)
		}
	}
}

function keyPressed(){
	if(key == 'a'){
		x.push(random(30, windowWidth-30))
		y.push(random(30, windowHeight-30))
		}
	}