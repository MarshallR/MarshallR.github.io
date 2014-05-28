var modalone = document.getElementById('modal1'),
	content = document.getElementById('content'),
	contenttwo = document.getElementById('content2');
function main() {
	modalone.style.display = 'block';
}
function continueone() {
	modalone.style.display = 'none';
	content.style.display = 'block';
}
function continuetwo() {
	content.style.display = 'none';
	contenttwo.style.display = 'block';
}