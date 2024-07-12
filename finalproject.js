let canvas

let menuBool = true
let easyBool = false
let mediumBool = false
let hardBool = false
let winBool = false
let loseBool = false

let aim
let warehouse

//let targetArray = []

// for win screen
let reword
let playButton
let playing = false

//let randImagePosX
//let randImagePosY

let score = 0

let knightX = []
let knightY = []
let knight
let knightSpeedX = []
let knightSpeedY = []

let skeletonX = []
let skeletonY = []
let skeleton
let skeletonSpeedX = []
let skeletonSpeedY= []

let badknightX = []
let badknightY = []
let badknight
let badknightSpeedX = []
let badknightSpeedY = []

let timerE = 60
let timerM = 30
let timerH = 15

function preload(){

	aim = loadFont('warzone_2/Warzone.ttf')
	reward = createVideo('RickRollshort.mp4')

//array  for images
//for(let i = 0; i<3; i++){

	//targetArray[i] = loadImage('images/' + i + '.png')
//}
	badknight = loadImage("images/0.png")
	skeleton = loadImage("images/1.png")
	knight = loadImage("images/2.png")
	warehouse = loadImage('warehouse.gif')
	hell = loadImage('images/hell.png')
	playButton = createButton('Play Reward')
	winknight = loadImage('images/winknight.jpg')


}



function setup(){

	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style('z-index', '-1')
	canvas.position(0, 0)
	//randImage = int(random(targetArray.length))
	reward.hide()
	playButton.hide()
	playButton.mousePressed(playVid)
	// knightSpeedX = random(-3, 3)
	//  knightSpeedY = random(-3, 3)
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

	if(loseBool == true){
		lose()
	}

}

function menu(){

	//menu screen

	background(0)
	fill(252, 252, 252)
	textFont(aim)
	textSize(50)
	text('Slay the Undead', 800, 200)
	text('Chose Mode To Start', 700, 500)
	textSize(30)
	text("Easy Mode(E)", 300, 800)
	text('Medium Mode(M)', 900, 800)
	text('Hard Mode(H)', 1500, 800)




}

function keyPressed(){

	//easy mode

	if(key === 'e'){
		//randImagePosX = random(windowWidth)
 		//randImagePosY = random(windowHeight)
		//print('easy')

		for(let i=0; i < 10; i++){
			knightX.push(random(60, windowWidth-60))
			knightY.push(random(60, windowHeight-60))
			knightSpeedX.push(random(-6, 6))
			knightSpeedY.push(random(-6, 6))
		}


		for(let i=0; i < 10; i++){
			skeletonX.push(random(60, windowWidth-60))
			skeletonY.push(random(60, windowHeight-60))
			skeletonSpeedX.push(random(-6, 6))
			skeletonSpeedY.push(random(-6, 6))
		}

		for(let i=0; i < 10; i++){
			badknightX.push(random(60, windowWidth-60))
			badknightY.push(random(60, windowHeight-60))
			badknightSpeedX.push(random(-6, 6))
			badknightSpeedY.push(random(-6, 6))
		}

		menuBool = false
		easyBool = true
		mediumBool = false
		hardBool = false
		winBool = false
		loseBool = false
	}



	//meduim mode

	if(key === 'm'){

		for(let i=0; i < 10; i++){
			knightX.push(random(60, windowWidth-60))
			knightY.push(random(60, windowHeight-60))
			knightSpeedX.push(random(-6, 6))
			knightSpeedY.push(random(-6, 6))
		}

		for(let i=0; i < 10; i++){
			skeletonX.push(random(60, windowWidth-60))
			skeletonY.push(random(60, windowHeight-60))
			skeletonSpeedX.push(random(-6, 6))
			skeletonSpeedY.push(random(-6, 6))
		}

		for(let i=0; i < 10; i++){
			badknightX.push(random(60, windowWidth-60))
			badknightY.push(random(60, windowHeight-60))
			badknightSpeedX.push(random(-6, 6))
			badknightSpeedY.push(random(-6, 6))
		}

		menuBool = false
		easyBool = false
		mediumBool = true
		hardBool = false
		winBool = false
		loseBool = false
	}

	//hard moode

	if(key === 'h'){

		for(let i=0; i < 10; i++){
			knightX.push(random(60, windowWidth-60))
			knightY.push(random(60, windowHeight-60))
			knightSpeedX.push(random(-6, 6))
			knightSpeedY.push(random(-6, 6))
		}

		for(let i=0; i < 10; i++){
			skeletonX.push(random(60, windowWidth-60))
			skeletonY.push(random(60, windowHeight-60))
			skeletonSpeedX.push(random(-6, 6))
			skeletonSpeedY.push(random(-6, 6))
		}

		for(let i=0; i < 10; i++){
			badknightX.push(random(60, windowWidth-60))
			badknightY.push(random(60, windowHeight-60))
			badknightSpeedX.push(random(-6, 6))
			badknightSpeedY.push(random(-6, 6))
		}

		menuBool = false
		easyBool = false
		mediumBool = false
		hardBool = true
		winBool = false
		loseBool = false
	}

	if(key === 'p'){

		knightX.splice(0, knightX.length)
		knightY.splice(0, knightY.length)

		badknightX.splice(0, badknightX.length)
		badknightY.splice(0, badknightY.length)

		skeletonX.splice(0, skeletonX.length)
		skeletonY.splice(0, skeletonY.length)

		menuBool = true
		easyBool = false
		mediumBool = false
		hardBool = false
		winBool = false
		loseBool = false

		timerE = 60
		timerM = 30
		timerH = 15	

		score = 0
	}

}

function easy(){
	imageMode(CORNERS)
	background(warehouse) 
//timer
	textFont(aim)
	textSize(50);
	text(timerE, 0, 50);
//print(targetArray)
	textSize(70)
	textFont(aim)
	fill(255, 247, 10)
	text('Slay the enemys! Your score is ' + score + ' points!!',200, 100)

	 if (frameCount % 60 == 0 && timerE > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
	 	timerE --;
	 }

// i need the images to be placed randomly
//image(targetArray[randImage], randImagePosX, randImagePosY, 100, 100)

//if(randImage == 2){
	//print('the knight')
//}

	 imageMode(CENTER)

	 for(let i=0; i < knightX.length; i++){
	 	image(knight, knightX[i], knightY[i], 60, 60)
	 	knightX[i] = knightX[i] + knightSpeedX[i]
	 	knightY[i] = knightY[i] + knightSpeedY[i]

	 	if(knightX[i] >= windowWidth -25 || knightX[i] <= 25){
		knightSpeedX[i] = knightSpeedX[i] * -1

		}
		if(knightY[i] >= windowHeight - 25 || knightY[i] <= 25){
		knightSpeedY[i]= knightSpeedY[i] * -1

		}

	 	if(mouseIsPressed == true && dist(mouseX, mouseY, knightX[i], knightY[i]) < 30){
	 		knightX.splice(i, 1)
	 		knightY.splice(i, 1)
	 		score --
	 	}
	 }

	 for(let i=0; i < skeletonX.length; i++){
	 	image(skeleton, skeletonX[i], skeletonY[i], 60, 60)
	 	skeletonX[i] = skeletonX[i] + skeletonSpeedX[i]
	 	skeletonY[i] = skeletonY[i] + skeletonSpeedY[i]

	 	if(skeletonX[i] >= windowWidth -25 || skeletonX[i] <= 25){
		skeletonSpeedX[i] = skeletonSpeedX[i] * -1

		}
		if(skeletonY[i] >= windowHeight - 25 || skeletonY[i] <= 25){
		skeletonSpeedY[i]= skeletonSpeedY[i] * -1

		}

	 	if(mouseIsPressed == true && dist(mouseX, mouseY, skeletonX[i], skeletonY[i]) < 30){
	 		skeletonX.splice(i, 1)
	 		skeletonY.splice(i, 1)
	 		score ++ 
	 	}
	 }

	 for(let i=0; i < badknightX.length; i++){
	 	image(badknight, badknightX[i], badknightY[i], 60, 60)
	 	badknightX[i] = badknightX[i] + badknightSpeedX[i]
	 	badknightY[i] = badknightY[i] + badknightSpeedY[i]

	 	if(badknightX[i] >= windowWidth -25 || badknightX[i] <= 25){
		badknightSpeedX[i] = badknightSpeedX[i] * -1

		}
		if(badknightY[i] >= windowHeight - 25 || badknightY[i] <= 25){
		badknightSpeedY[i]= badknightSpeedY[i] * -1

		}

	 	if(mouseIsPressed == true && dist(mouseX, mouseY, badknightX[i], badknightY[i]) < 30){
	 		badknightX.splice(i, 1)
	 		badknightY.splice(i, 1)
	 		score ++
	 	}
	 }
	 //print(timer)

	 if(score == 15){
	 	easyBool = false
	 	winBool = true
	 }

	 if (timerE == 0) {
	 	easyBool = false
	 	loseBool = true
	 }

	}

	function medium(){

		imageMode(CORNERS)
		background(warehouse)
//timer
	textFont(aim)
	textSize(50);
	text(timerM, 0, 50);
//print(targetArray)
		textSize(70)
		textFont(aim)
		fill(255, 247, 10)
		text('Slay the enemys! Your score is ' + score + ' points!!',200, 100)

		 if (frameCount % 60 == 0 && timerM > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
	 	timerM --;
	 }


// i need the images to be placed randomly
//image(targetArray[randImage], randImagePosX, randImagePosY, 100, 100)

//if(randImage == 2){
	//print('the knight')

//}

		imageMode(CENTER)

		for(let i=0; i < knightX.length; i++){
	 	image(knight, knightX[i], knightY[i], 60, 60)
	 	knightX[i] = knightX[i] + knightSpeedX[i]
	 	knightY[i] = knightY[i] + knightSpeedY[i]

	 	if(knightX[i] >= windowWidth -25 || knightX[i] <= 25){
		knightSpeedX[i] = knightSpeedX[i] * -1

		}
		if(knightY[i] >= windowHeight - 25 || knightY[i] <= 25){
		knightSpeedY[i]= knightSpeedY[i] * -1

		}

	 	if(mouseIsPressed == true && dist(mouseX, mouseY, knightX[i], knightY[i]) < 30){
	 		knightX.splice(i, 1)
	 		knightY.splice(i, 1)
	 		score --
	 	}
	 }

	 for(let i=0; i < skeletonX.length; i++){
	 	image(skeleton, skeletonX[i], skeletonY[i], 60, 60)
	 	skeletonX[i] = skeletonX[i] + skeletonSpeedX[i]
	 	skeletonY[i] = skeletonY[i] + skeletonSpeedY[i]

	 	if(skeletonX[i] >= windowWidth -25 || skeletonX[i] <= 25){
		skeletonSpeedX[i] = skeletonSpeedX[i] * -1

		}
		if(skeletonY[i] >= windowHeight - 25 || skeletonY[i] <= 25){
		skeletonSpeedY[i]= skeletonSpeedY[i] * -1

		}

	 	if(mouseIsPressed == true && dist(mouseX, mouseY, skeletonX[i], skeletonY[i]) < 30){
	 		skeletonX.splice(i, 1)
	 		skeletonY.splice(i, 1)
	 		score ++ 
	 	}
	 }

	 for(let i=0; i < badknightX.length; i++){
	 	image(badknight, badknightX[i], badknightY[i], 60, 60)
	 	badknightX[i] = badknightX[i] + badknightSpeedX[i]
	 	badknightY[i] = badknightY[i] + badknightSpeedY[i]

	 	if(badknightX[i] >= windowWidth -25 || badknightX[i] <= 25){
		badknightSpeedX[i] = badknightSpeedX[i] * -1

		}
		if(badknightY[i] >= windowHeight - 25 || badknightY[i] <= 25){
		badknightSpeedY[i]= badknightSpeedY[i] * -1

		}

	 	if(mouseIsPressed == true && dist(mouseX, mouseY, badknightX[i], badknightY[i]) < 30){
	 		badknightX.splice(i, 1)
	 		badknightY.splice(i, 1)
	 		score ++
	 	}
	 }
	 //print(timer)

	 if(score == 15){
	 	easyBool = false
	 	winBool = true
	 }

	 if (timerM == 0) {
	 	easyBool = false
	 	loseBool = true
	 }

	}

	function hard(){

		imageMode(CORNERS)
		background(hell)
//timer
	textSize(50);
	textFont(aim)
	text(timerH, 0, 50);
//print(targetArray)
		textSize(70)
		fill(255, 247, 10)
		textFont(aim)
		text('Slay the enemys! Your score is ' + score + ' points!!',200, 100)

		 if (frameCount % 60 == 0 && timerH > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
	 	timerH --;
	 }

// i need the images to be placed randomly
//image(targetArray[randImage], randImagePosX, randImagePosY, 100, 100)

//if(randImage == 2){
	//print('the knight')
//}

		imageMode(CENTER)

		for(let i=0; i < knightX.length; i++){
	 	image(knight, knightX[i], knightY[i], 60, 60)
	 	knightX[i] = knightX[i] + knightSpeedX[i]
	 	knightY[i] = knightY[i] + knightSpeedY[i]

	 	if(knightX[i] >= windowWidth -25 || knightX[i] <= 25){
		knightSpeedX[i] = knightSpeedX[i] * -1

		}
		if(knightY[i] >= windowHeight - 25 || knightY[i] <= 25){
		knightSpeedY[i]= knightSpeedY[i] * -1

		}

	 	if(mouseIsPressed == true && dist(mouseX, mouseY, knightX[i], knightY[i]) < 30){
	 		knightX.splice(i, 1)
	 		knightY.splice(i, 1)
	 		score --
	 	}
	 }

	 for(let i=0; i < skeletonX.length; i++){
	 	image(skeleton, skeletonX[i], skeletonY[i], 60, 60)
	 	skeletonX[i] = skeletonX[i] + skeletonSpeedX[i]
	 	skeletonY[i] = skeletonY[i] + skeletonSpeedY[i]

	 	if(skeletonX[i] >= windowWidth -25 || skeletonX[i] <= 25){
		skeletonSpeedX[i] = skeletonSpeedX[i] * -1

		}
		if(skeletonY[i] >= windowHeight - 25 || skeletonY[i] <= 25){
		skeletonSpeedY[i]= skeletonSpeedY[i] * -1

		}

	 	if(mouseIsPressed == true && dist(mouseX, mouseY, skeletonX[i], skeletonY[i]) < 30){
	 		skeletonX.splice(i, 1)
	 		skeletonY.splice(i, 1)
	 		score ++ 
	 	}
	 }

	 for(let i=0; i < badknightX.length; i++){
	 	image(badknight, badknightX[i], badknightY[i], 60, 60)
	 	badknightX[i] = badknightX[i] + badknightSpeedX[i]
	 	badknightY[i] = badknightY[i] + badknightSpeedY[i]

	 	if(badknightX[i] >= windowWidth -25 || badknightX[i] <= 25){
		badknightSpeedX[i] = badknightSpeedX[i] * -1

		}
		if(badknightY[i] >= windowHeight - 25 || badknightY[i] <= 25){
		badknightSpeedY[i]= badknightSpeedY[i] * -1

		}

	 	if(mouseIsPressed == true && dist(mouseX, mouseY, badknightX[i], badknightY[i]) < 30){
	 		badknightX.splice(i, 1)
	 		badknightY.splice(i, 1)
	 		score ++
	 	}
	 }
	 //print(timer)

	 if(score == 15){
	 	easyBool = false
	 	winBool = true
	 }

	  if (timerH == 0) {
	 	easyBool = false
	 	loseBool = true
	 }

	}

	function win(){

		background(winknight)
		imageMode(CORNERS)
		playButton.show()

//rick roll button
// if(playing = true){
// 		reward.hide()
// 		reward.pause()
// 		playButton.html('Play Reword')
// 	}else{
// 		reward.show()
// 		reward.loop()
// 		playButton.html('Pause Reword')	
		
// 	}

	fill(255)
	textSize(50)
	textFont(aim)
	text('YOU WIN',windowWidth/2, windowHeight/2)


	}

	function playVid(){
		background(0)
	if(playing){
		reward.hide()
		reward.pause()
		playButton.html('Play Reward')
	}else{
		reward.show()
		reward.loop()
		playButton.html('Pause Reward')	
		
	}

 	playing = !playing
	}

	function lose(){
		background(0)
		fill(255)
		textSize(70)
		text('GAME OVER', 850, windowHeight/2)
		text('PRESS (P) TO RESET', 700, 800)

	}

	function windowResized(){
		resizeCanvas(windowWidth, windowHeight)
	}