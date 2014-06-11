function objectCanvas(input_canvasid, input_ticks, input_tickWidth, input_xOffset, input_yOffset, input_thickness, input_axisColor, input_tickColor, input_functions) { 
	this.canvas = document.getElementById(input_canvasid);
	this.canvasWidth = function() {
			var str = window.getComputedStyle(this.canvas, null).getPropertyValue('width');
			return str.substr(0, str.length-2);
		}
	this.canvasHeight = function() {
			var str = window.getComputedStyle(this.canvas, null).getPropertyValue('height');
			return str.substr(0, str.length-2);
		}
	this.canvas.width = this.canvasWidth();
	this.canvas.height = this.canvasHeight();
	var height = this.canvasHeight();
	var width = this.canvasWidth();
	this.centerWidth = Math.round(this.canvasWidth() / 2);
	this.centerHeight = Math.round(this.canvasHeight() / 2);
	this.ticks = input_ticks; // number of ticks wanted on either side of the origin horizontally and vertically, when the origin is absolutely centered
	var tickWidth = input_tickWidth / 2;
	this.tickinterval = Math.round(width / this.ticks) / 2; // number of pixels needed between each tick horizontally, rounded
	var interval = this.tickinterval;
	var xOffset = (input_xOffset) * interval; // number of pixels offseting the origin horizontally; positive numbers move the origin to the right
	var yOffset = (input_yOffset) * interval; // number of pixels offseting the origin vertically; positive numbers move the origin down
	this.context = this.canvas.getContext('2d');
	this.thickness = input_thickness;
	// this.color = input_color;
	//begin drawing
	this.context.lineCap = 'butt';
	this.context.lineWidth = this.thickness;
	var cWidth = this.centerWidth + xOffset;
	var cHeight = this.centerHeight + yOffset;
	var pos;
	this.context.strokeStyle = input_tickColor;
		//draw left-side horizontal ticks
		pos = cWidth - (interval);
		for (var i=1; pos>=0; i++) {
			this.context.beginPath();
			this.context.moveTo(pos, cHeight-tickWidth);
			this.context.lineTo(pos, cHeight+tickWidth);
			this.context.stroke();
			pos-=(interval);
		}
		//draw right-side horizontal ticks
		pos = cWidth + (interval);
		for (var i=1; pos<=width; i++) {
			this.context.beginPath();
			this.context.moveTo(pos, cHeight-tickWidth);
			this.context.lineTo(pos, cHeight+tickWidth);
			this.context.stroke();
			pos+=(interval);
		}
		//draw bottom-side vertical ticks
		pos = cHeight + (interval);
		for (var i=0; pos<=height; i++) {
			this.context.beginPath();
			this.context.moveTo(cWidth-tickWidth, pos);
			this.context.lineTo(cWidth+tickWidth, pos);
			this.context.stroke();
			pos+=(interval);
		}
		//draw top-side vertical ticks
		pos = cHeight - (interval);
		for (var i=0; pos>=0; i++) {
			this.context.beginPath();
			this.context.moveTo(cWidth-tickWidth, pos);
			this.context.lineTo(cWidth+tickWidth, pos);
			this.context.stroke();
			pos-=(interval);
		}
	this.context.strokeStyle = input_axisColor;
		//draw horizontal axis
		this.context.beginPath();
		this.context.moveTo(0, cHeight);
		this.context.lineTo(width, cHeight);
		this.context.stroke();
		//draw vertical axis
		this.context.beginPath();
		this.context.moveTo(cWidth, 0);
		this.context.lineTo(cWidth, height);
		this.context.stroke();
	//start graphing functions
	graphInterval = interval / 1000;
		//take function input
		var functions=[];
		functions = input_functions;
		// run through each function
		for(var i=0;i<functions.length;i++) {
			// interpret function
			// var current_function = functions[i];//get function
			// pullfunction = /function\s*\((\s*[a-z|A-Z]*\s*\,*\s*)*\)/;
			// var argument = pullfunction.exec(current_function);
			// argument = argument[1];
			// argument.replace(/\s*/g, "");
			// if (argument=='x') {
				// alert('horizontal graph ' + argument);
			// }
			// else if (argument=='y') {
				// alert('vertical graph ' + argument);
			// }
			// else {
				// alert('put other thing here ' + argument)
			// }
		}
	this.funny = functions;
}	
function main() {
	var tick = document.getElementById('form_tick').value;
	var tickWidth = document.getElementById('form_tickWidth').value;
	var xOffset = document.getElementById('form_xOffset').value;
	var yOffset = document.getElementById('form_yOffset').value;
	var thickness = document.getElementById('form_thickness').value;
	var axisColor = document.getElementById('form_axisColor').value;
	var tickColor = document.getElementById('form_tickColor').value;
	if (tick == "") tick = 20;
	if (tickWidth == "") tickWidth = 10000;
	if (xOffset == "") xOffset = 0;
	if (yOffset == "") yOffsey = 0;
	if (thickness == "") thickness = 1;
	if (axisColor == "") axisColor = '#000';
	if (tickColor == "") tickColor = '#bbb';
	window.myCanvas = new objectCanvas('c', tick, tickWidth, xOffset, yOffset, thickness, axisColor, tickColor,[
		function(y) {
			return x;
		},
		function(b) {
			return  2*x;
		},
		function ( x )  {
			return  10*x;
		}
	]);
	document.getElementById('out_width').innerHTML = myCanvas.canvasWidth();
	document.getElementById('out_height').innerHTML = myCanvas.canvasHeight();
	document.getElementById('out_interval').innerHTML = myCanvas.tickinterval;
}
window.onload = main;
window.onresize = main;