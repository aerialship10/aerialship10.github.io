var img = document.getElementById("img");

setInterval(setSecs, 500);
function setSecs() {
	var date = new Date();
	var sec = date.getSeconds();
	var sec2 = sec % 2;
	
	var imgs = img.style;
	imgs.borderWidth = "20px";
	
	if (sec2 === 1) {
		imgs.borderStyle = "inset outset";
		imgs.borderColor = "green";
	} else {
		imgs.borderStyle = "outset inset";
		imgs.borderColor = "lightgrey";
	}
}

setSecs();