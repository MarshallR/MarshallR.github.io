function getScroll() {
	var thing = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	return (window.scrollY !== undefined) ? scrollY : thing();
}
window.onscroll = function() {
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