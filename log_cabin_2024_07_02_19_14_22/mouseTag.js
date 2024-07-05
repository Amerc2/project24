
let wamog

//postion of wamog
let wamogX
let wamogY

// wamog speed
let xSpeed = 3
let ySpeed = 3

let score = 0

let mouseDist

let startBool = true
let winBool = false

function preload(){
	wamog = loadImage('wamog.png')

}

function setup(){
	createCanvas(windowWidth, windowHeight)

	wamogX = windowWidth/2
	wamogY = windowHeight/2

	imageMode(CENTER)
}

function draw(){
if(startBool == true){
	startGame()
	}
	if(winBool == true){
		winGame()
	}
}

//the function for our game
function startGame(){
	background(255)

	textSize(70)
	text('Catch Wamai! Your score is ' + score + ' points!!',10, 100)

	image(wamog, wamogX, wamogY,50, 50)

	mouseDist = dist(mouseX, mouseY, wamogX, wamogY)


	wamogX = wamogX + xSpeed
	wamogY = wamogY + ySpeed

	if(wamogX >= windowWidth -25 || wamogX <= 25){
		xSpeed = xSpeed * -1

	}
	if(wamogY >= windowHeight - 25 || wamogY <= 25){
		ySpeed = ySpeed * -1

	}
	if(mouseDist < 25){
		score ++
		wamogX = random(26, windowWidth -26)
		wamogY = random(26, windowHeight -26)

		xSpeed = xSpeed * 1.5
		ySpeed = ySpeed * 1.5
	}
	if(score == 50){
		startBool = false
		winBool = true
	}
}

//function for our win screen 
function winGame(){
	textSize(70)
	text('you got him!',10, 155)
	image( wamog, windowWidth/2, windowHeight/2)
}

function windowResized(){
	resizeCanvas(windowWidth/2, windowHeight/2)
}

