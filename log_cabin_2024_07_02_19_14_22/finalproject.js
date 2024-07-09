

let menuBool = true
let easyBool = false
let mediumBool = false
let hardBool = false
let winBool = false

let aim
let reword
let playButton
let playing = false

function preload(){

aim = loadFont('aim/Aim High.ttf')
reword = createVideo('RickRoll.mp4')

}



function setup(){

	createCanvas(windowWidth, windowHeight)


}



function draw(){

	if(menuBool == true){
		menu()
	}

	if(easyBool == true){
		easy()
	}

	if(mediumBool == true){
		medium()
	}

	if(hardBool == true){
		hard()
	}

	if(winBool == true){
		win()
	}

}

function menu(){

	//menu screen

	background(0)
	fill(252, 252, 252)
	textFont(aim)
	textSize(50)
	text('Range Trails', 980, 200)
	text('Chose Mode To Start', 930, 500)
	textSize(30)
	text("Easy Mode(E)", 500, 800)
	text('Medium Mode(M)', 1000, 800)
	text('Hard Mode(H)', 1500, 800)




}

function keyPressed(){

	//easy mode

	if(key === 'e'){
	let menuBool = false
	let easyBool = true
	let mediumBool = false
	let hardBool = false
	let winBool = false
	}else{
	let menuBool = true
	let easyBool = false
	let mediumBool = false
	let hardBool = false
	let winBool = false
	}

	//meduim mode

	if(key === 'm'){
	let menuBool = false
	let easyBool = false
	let mediumBool = true
	let hardBool = false
	let winBool = false
	}else{
	let menuBool = true
	let easyBool = false
	let mediumBool = false
	let hardBool = false
	let winBool = false
	}

	//hard moode

	if(key ==='h'){
	let menuBool = false
	let easyBool = false
	let mediumBool = false
	let hardBool = true
	let winBool = false
	}else{
	let menuBool = true
	let easyBool = false
	let mediumBool = false
	let hardBool = false
	let winBool = false
	}

}

function easy(){


}

function medium(){


}

function hard(){


}

function win(){

if(playing){
		reword.hide()
		reword.pause()
		playButton.html('Play Reword')
	}else{
		reword.show()
		reword.loop()
		playButton.html('Pause Reword')	
	}


}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}

