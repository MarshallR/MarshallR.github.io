//tool functions
function choose(arr) {return arr[Math.floor(Math.random()*arr.length)];}

//navbar functionality
function getScroll() {
	var thing = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	return (window.scrollY !== undefined) ? scrollY : thing();
}
function navbar() {
	if (getScroll() >= 90) {
		window.topper = document.getElementById('navp').style;
		topper.width = "100%";
		topper.position = "fixed";
		topper.top = "0";
		document.getElementById('bodyspace').style.marginTop = '85px';
	}
	if (getScroll() < 90) {
		window.topper = document.getElementById('navp').style;
		topper.position = "static";
		topper.top = "";
		document.getElementById('bodyspace').style.marginTop = '50px';
	}
}

//'webbersite' text
function webname() {
	document.getElementById('j-web').innerHTML = choose(['a Webbersite', 'a Website', 'a Webthing', 'an Interwebs Site', 'an Amazing Creation', 'an Interblog', 'a Webtube', 'a Holdup', 'a Piece of Crap', 'a Line of Text']);
}

//funny button function

//activate
window.onscroll = navbar;
window.onload = webname;