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
	var tickWidth = input_tickWidth;
	var interval = Math.round(((height + width) / this.ticks) * 2); // number of pixels needed between each tick horizontally, rounded
	var xOffset = (input_xOffset) * interval /2; // number of pixels offseting the origin horizontally; positive numbers move the origin to the right
	var yOffset = (input_yOffset) * interval /2; // number of pixels offseting the origin vertically; positive numbers move the origin down
	this.context = this.canvas.getContext('2d');
	this.thickness = input_thickness;
	// this.color = input_color;
	//begin drawing
	this.context.lineCap = 'square';
	this.context.lineWidth = this.thickness;
	var cWidth = this.centerWidth + xOffset;
	var cHeight = this.centerHeight + yOffset;
	var pos;
	this.context.strokeStyle = input_tickColor;
		//draw left-side horizontal ticks
		pos = cWidth;
		for (var i=0; pos>=0; i++) {
			this.context.beginPath();
			this.context.moveTo(pos, cHeight-tickWidth);
			this.context.lineTo(pos, cHeight+tickWidth);
			this.context.stroke();
			pos-=(interval/2);
		}
		//draw right-side horizontal ticks
		pos = cWidth;
		for (var i=0; pos<=width; i++) {
			this.context.beginPath();
			this.context.moveTo(pos, cHeight-tickWidth);
			this.context.lineTo(pos, cHeight+tickWidth);
			this.context.stroke();
			pos+=(interval/2);
		}
		//draw bottom-side vertical ticks
		pos = cHeight;
		for (var i=0; pos<=height; i++) {
			this.context.beginPath();
			this.context.moveTo(cWidth-tickWidth, pos);
			this.context.lineTo(cWidth+tickWidth, pos);
			this.context.stroke();
			pos+=(interval/2);
		}
		//draw top-side vertical ticks
		pos = cHeight;
		for (var i=0; pos>=0; i++) {
			this.context.beginPath();
			this.context.moveTo(cWidth-tickWidth, pos);
			this.context.lineTo(cWidth+tickWidth, pos);
			this.context.stroke();
			pos-=(interval/2);
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
}
function main() {
	window.myCanvas = new objectCanvas('c', 10, 10000, 0, 0, 2, '#000', '#bbb');
}
window.onload = main;
window.onresize = main;