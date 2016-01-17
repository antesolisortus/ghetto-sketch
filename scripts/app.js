var myHeight = 800;
var myWidth = 800;
var pixelCount = 50;
var pixelBorderWidth = 1;
var newColorAtBoundary = false;
var colorGradientWhileDrawing = false;

var sketchPad = $("#container");
sketchPad.height(myHeight);
sketchPad.width(myWidth);

var pixel = $('<div class="pixel"></div>');
pixel.css("border-width", pixelBorderWidth);

var pixelHeight = (myHeight / pixelCount);
var pixelWidth  = (myWidth  / pixelCount);
pixel.height(pixelHeight);
pixel.width(pixelWidth);

for(var i = 0; i < (pixelCount * pixelCount); i++) {
	sketchPad.append(pixel.clone());
}

var drawColor = "black";
var red = Math.floor(Math.random() * 512) - 256;
var green = Math.floor(Math.random() * 512) - 256;
var blue = Math.floor(Math.random() * 512) - 256;

var redStep = Math.floor(Math.random() * 10) + 1;
var blueStep = Math.floor(Math.random() * 10) + 1;
var greenStep = Math.floor(Math.random() * 10) + 1;

function decToHex(n) {
	return ( "00" + n.toString(16) ).substr(-2);
}
function randoColor() {
	var colString = "#";
	for (var i = 0; i < 3; i++) {
		var randHex = Math.floor((Math.random() * 256))
		colString = colString.concat(decToHex(randHex));
	}
	return colString;
}
function RGBtoHex(r, g, b) {
	var colString = "#";
	colString = colString.concat(decToHex(r));
	colString = colString.concat(decToHex(g));
  colString = colString.concat(decToHex(b));
  return colString;
}
function modifyComponent(c, step) {
	var dir = 0;
	var col = Math.abs(c);
	if (c >= 0) {
		dir = 1;
		var newC = col + (step * dir);
		if (newC > 255) {
			newC = -255;
		}
		return newC;
	}
	else {
		dir = -1;
		var newC = col + (step * dir);
		if (newC <= 0) {
			newC = 1;
			return newC;
		}
		else {
			return newC * dir; 
		}
	}

}
function stepColor(r, g, b) {
	var chance = Math.random();
	if (chance < (1/3)) {
		var stepC = modifyComponent(r, redStep);
		red = stepC;
		return RGBtoHex(Math.abs(red), g, b);
	} 
	else if (chance < (2/3)) {
		var stepC = modifyComponent(g, greenStep);
		green = stepC;
		return RGBtoHex(r, Math.abs(green), b);
	}
	else {
		var stepC = modifyComponent(b, blueStep);
		blue = stepC;
		return RGBtoHex(r, g, Math.abs(b));
	}
}

$("div.pixel").mouseover(function() {
	$(this).css("background-color", drawColor);
	if (colorGradientWhileDrawing) {
		drawColor = stepColor(red, green, blue);
		console.log(red, green, blue);
	}
});

if (newColorAtBoundary) {
	$("#container").mouseleave(function() {
		drawColor = randoColor();
		console.log(drawColor);
	});
}

