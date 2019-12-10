var stage = document.createElement("canvas");
stage.width = "200";
stage.height = "200";
stage.style.background = "rgba(0,0,0,1)";
document.body.appendChild(stage);

var cnv = stage.getContext("2d");
var w = stage.width;
var h = stage.height;
var r = 30;
var angle = 1;
var limitOpenAngle = 30;
var colorPacMan = "yellow";
var colorBackground = "black";
var opening = true;
var interval = 10;

function draw(width, height, radius, startAngle, endAngle, lineWidth, color, fill) {
    cnv.beginPath(); // Reset
    cnv.strokeStyle = color;
    cnv.lineWidth = lineWidth ;
    cnv.arc(width, height, radius, startAngle, endAngle);
    cnv.stroke();
    if (fill) {
        cnv.fillStyle = color;
        cnv.fill();
    }
}

function animate() {
    setInterval(function() {
        draw(w/2, h/2, r, 0, Math.PI*2, 22, colorBackground, true);
        draw(w/2, h/2, r-10, (Math.PI/180)*angle, -(Math.PI/180)*angle, 40, colorPacMan);
        draw(w/2, h/2.5, 2, 0, Math.PI*2, 5, colorBackground, true);
        if (opening) 
            ++angle;
        else
            --angle;

        if(angle <= 1 || angle >= limitOpenAngle) 
            opening = angle <= 1 ? true : false;  

    }, interval);
}

animate();