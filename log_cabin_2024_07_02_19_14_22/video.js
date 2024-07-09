
let canvas
let playButton

let playing = false


let t1000


function preload(){
	t1000 = createVideo(['T1000Reforming.mp4'])

}

function setup(){

	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style('z-index', '-1')
	canvas.position(0,0)

	playButton = createButton('Play Video')
	playButton.position(200, 200)
	playButton.mousePressed(playVid)

}

function playVid(){
	if(playing){
		t1000.hide()
		t1000.pause()
		playButton.html('Play Video')
	}else{
		t1000.show()
		t1000.loop()
		playButton.html('Pause Video')	
	}


}


function draw(){



}