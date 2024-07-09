
let capture

function setup(){

	 createCanvas(windowWidth, windowHeight)

	 capture = createCapture(VIDEO)
	 capture.size(320, 240)
	 capture.html()
}



function draw(){


image(capture,mouseX, mouseY, mouseX, mouseY)
ellipse(mouseX, mouseY, 50, 50)

}
