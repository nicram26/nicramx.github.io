var numOfPlayers;

function updateGoodGuys() {
	var a = "";
	for(var i=0; i < heroList.length; i++) {
		if (i == 0)
			a += "<h2 class=\"current\">" + heroList[i] + "</h2> \n<div class=\"pane\"><img src=\"images/heroes/" + indexHeroes[i] + ".jpg\" width=\"400px\" height=\"300px\" /></div>";
		else a += "<h2>" + heroList[i] + "</h2> \n<div class=\"pane\"><img src=\"images/heroes/" + indexHeroes[i] + ".jpg\" width=\"400px\" height=\"300px\" /></div>";
	}
	document.getElementById("goodguys").innerHTML = a;
	$("#goodguys").tabs("#goodguys div.pane",{tabs: 'h2'});//, effect: 'slide'});
}

function updateBadGuys() {
	var b = "";
	for(var i=0; i<villainList.length; i++) {
		if(i == 0)
			b += "<h2 class=\"current\">" + villainList[i] + "</h2> \n<div class=\"pane\"><img src=\"images/villains/" + indexVillains[i] + ".jpg\" width=\"400px\" height=\"300px\" /></div>";
		else b += "<h2>" + villainList[i] + "</h2> \n<div class=\"pane\"><img src=\"images/villains/" + indexVillains[i] + ".jpg\" width=\"400px\" height=\"300px\" /></div>";
	}
	for(var j=0; j<henchmenList.length; j++) {
		b += "<h2>" + henchmenList[j] + "</h2> \n<div class=\"pane\"><img src=\"images/henchmen/" + indexHenchmen[j] + ".jpg\" width=\"400px\" height=\"300px\" /></div>";
	}
	//b += "<h2>" + mastermindList[0] + "</h2> \n<div class=\"pane\"><img src=\"images/masterminds/" + indexMasterminds[0] + ".jpg\" width=\"200px\" height=\"200px\" /></div>";
	document.getElementById("badguys").innerHTML = b;
	$("#badguys").tabs("#badguys div.pane",{tabs: 'h2'});//, effect: 'slide'});
}

function updateShowdown() {
	var c = "";
	c += "<h2 class=\"current\">" + mastermindList[0] + "</h2> \n<div class=\"pane\"><img src=\"images/masterminds/" + indexMastermind[0] + ".jpg\" width=\"400px\" height=\"300px\" /></div>"
	//c += "<h2>" + pickedScheme[0] + "</h2> \n<div class=\"pane\"></div>";
	//c += "<h2>" + numOfTwists + " Twists</h2> \n<div class=\"pane\"></div>";
	
	document.getElementById("showdown").innerHTML = c;
	$("#showdown").tabs("#showdown div.pane",{tabs: 'h2'});//, effect: 'slide'});
}

function init() {
	initialize();
	updateGoodGuys();
	updateBadGuys();
	updateShowdown();
}