
let imgs = []

let randomButton

let canvas

let namesArray = ['jon' , 'mon', ' dylan', 'ethan']

let name
let randImage

function preload(){
	for(let i = 0; i<3; i++){
		imgs[i] = loadImage('images/' + i + '.jpg')
	}
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style('z-index', '-1')
	canvas.position(0, 0)

	randomButton = createButton('Random img and name')
	randomButton.mousePressed(randImageName)
print(imgs)
imageMode(CENTER)
}

function randImageName(){
	 randImage = int(random(imgs.length))
	 name = int(random(namesArray.length))
}

function draw(){
background(255)
image(imgs[randImage], windowWidth/2, windowHeight/2)
textSize(200)
fill(200, 30, 100)
text(namesArray[name], 400, 300)

}