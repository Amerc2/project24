let canvas

let platButton

let r = 0
let g = 0
let b = 0
let modum 
let airstrikefont
let modumVolSlider
let modumRateSlider

let level

function preload(){
baby = loadImage('dancingbaby2.gif')
airstrikefont = loadFont('airstrike.ttf')
modum = loadSound('ModemSound.mp3')
}

function setup(){
canvas = createCanvas(windowWidth, windowHeight)
canvas.style('z-index', '-1')
canvas.position(0, 0)


playButton = createButton('Play Audio')
playButton.position(100, 100)
playButton.mousePressed(playModum) 

modumVolSlider = createSlider(0, 1, 1, 0.01)
modumRateSlider = createSlider(0.1, 3, 1, 0.01)

amplitude = new p5.Amplitude()
}

function playModum(){ 
	if(!modum.isPlaying()){
		modum.loop()
		playButton.html('Pause Audio')
	}else{
		modum.pause()
		playButton.html('Play Again')

	} 

}

function redBackground(){
	r = 255
	g = 130
	b = 50
}

function draw(){
	background(r, g, b)


	image(baby, 200, 300, 350, 400)

level = amplitude.getLevel()
let size = map(level, 0, .5, 100, 1500)
ellipse( windowWidth/2, windowHeight/2, size, size)

	modum.setVolume(modumVolSlider.value())
	modum.rate(modumRateSlider.value())
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}