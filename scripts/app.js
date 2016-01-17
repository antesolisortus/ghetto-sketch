var myHeight = 800;
var myWidth = 800;
var pixelCount = 100;
var pixelBorderWidth = 0;

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
function randoColor() {
	var colString = "#";
	for (var i = 0; i < 3; i++) {
		var randHex = Math.floor((Math.random() * 256)).toString(16);
		colString = colString.concat(("00" + randHex).substr(-2));
	}
	return colString;
}

$("div.pixel").mouseover(function() {
	$(this).css("background-color", drawColor);
});

$("#container").mouseleave(function() {
	drawColor = randoColor();
	console.log(drawColor);
})

