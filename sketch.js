var drawing = []
var currentpath = []
var button;
function setup(){
    canvas = createCanvas(1200,800);
    canvas.mousePressed(start)
    button = createButton('Clear Drawing')
    button.mousePressed(clearDrawing)
}

function draw(){
background("white");
if (mouseIsPressed){
    var point = {x:mouseX, y:mouseY}
    currentpath.push(point)
}

strokeWeight(4);
noFill();
stroke("black")
for (var i = 0; i < drawing.length; i++){
    var path = drawing[i]
beginShape()
for (j = 0; j < path.length; j++){
    vertex(path[j].x,path[j].y)
}
endShape()
}

}

function start(){
currentpath = []
drawing.push(currentpath)
}

function clearDrawing(){
  drawing = []
}