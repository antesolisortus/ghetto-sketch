var myHeight = 800;
var myWidth = 800;
var pixelCount = 200;
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
	console.log(i);
}