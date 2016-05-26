var heroes = ["Agent Venom","Angel","Apocalyptic Kitty Pryde","Arkon the Magnificent","Beast","Bishop","Black Bolt","Black Panther","Black Swan","Black Widow","Blade","Cable","Captain America","Captain Britain","Captain Marvel","Colossus","Corvus Glaive","Cyclops","Daredevil","Deadpool","Domino","Dr. Punisher, Soldier Supreme","Dr. Strange","Elektra","Elsa Bloodstone","Emma Frost","Forge","Gambit","Ghost Rider","Hawkeye","Hulk","Iceman","Iron Fist","Iron Man","Jean Grey","Lady Thor","Magik","Maximus","Namor, the Sub-Mariner","Nick Fury","Nightcrawler","Old Man Logan","Phoenix Force Cyclops","Professor X","Proxima Midnight","Punisher","Rogue","Ruby Summers","Shang-Chi","Silk","Soulsword Colossus","Spider-Gwen","Spider-Man","Storm","Superior Iron Man","Thanos","The Captain and the Devil","Thor","Time-Traveling Jean Grey","Ultimate Spider-Man","Wolverine","Wolverine (Expansion)"];

var masterminds = ["Apocalypse","Dr. Doom","Immortal Emperor Zheng-Zu","King Hyperion","Kingpin","Loki","Madelyn Pryor, Goblin Queen","Magneto","Mephisto","Mr. Sinister","Nimrod","Red Skull","Shiklah, the Demon Bride","Spider-Queen","Stryfe","Wasteland Hulk","Zombie Green Goblin"];

var alwaysLeads = ["Four Horsemen","Doombot Legion","K'un-Lun","Utopolis","Streets of New York","Enemies of Asgard","Limbo","Brotherhood","Underworld","Marauders","Sentinel Territories","HYDRA","Monster Metropolis","Spider-Infected","MLF","Wasteland","The Deadlands"];

var villians = ["Brotherhood","Deadpool's Secret Secret Wars","Domain of Apocalypse","Emissaries of Evil","Enemies of Asgard","Four Horsemen","Guardians of Knowhere","HYDRA","K'un-Lun","Limbo","Manhattan (Earth-1610)","Marauders","Masters of Evil","MLF","Monster Metropolis","Radiation","Sentinel Territories","Skrulls","Spider-foes","Streets of New York","The Deadlands","Underworld","Utopolis","Wasteland","X-Men '92"];

var henchmen =["Doombot Legion","Ghost Racers","Hand Ninjas","Khonshu Guardians","M.O.D.O.K.s","Maggia Goons","Magma Men","Phalanx","Savage Land Mutates","Sentinels","Spider-Infected","Thor Corps"];

var schemes = ["Building an Army of Annihilation","Capture Baby Hope","Corrupt the Next Generation of Heroes","Crush Them With My Bare Hands","Dark Alliance","Deadlands Hordes Charge thw Wall","Detonate the Helicarrier","Enthrone the Barons of Battleworld","Fragmented Realities","Massive Earthquake Generator","Master of Tyrants","Master the Mysteries of Kung-Fu","Midtown Bank Robbery","Negative Zone Prison Breakout","Organized Crime Wave","Pan-Dimensional Plagye","Portals to Dark Dimension","Replace Earth's Leaders with Killbots","Save Humanity","Secret Invasion of the Skrull Shapeshifters","Secret Wars","Sinister Ambitions","Smash the Two Dimensions Together","Steal the Weaponized Plutonium","Super Hero Civil War","The Fountain of Eternal Life","The God-Emperor of Battleworld","The Legacy Virus","The Mark of Khonshu","Transform Citizens Into Demons","Unleash the Power of the Cosmic Cube","X-Cutioner's Song"];

var twists = [9,8,8,5,8,8,8,8,0,8,8,8,8,8,8,10,7,5,8,8,6,8,8,8,0,8,8,8,10,8,8,8];

var numOfPlayers;
var numOfHeroes;
var numOfVillians;
var numOfHenchmen;
var numOfTwists;
var pickedScheme = [];
var heroList = [];
var villianList = [];
var henchmenList = [];
var mastermindList = [];
var indexHeroes = [];
var indexVillians = [];
var indexHenchmen = [];
var indexMasterminds = [];
var leadsHenchmen = false;
var leadsVillians = false;

function heroNum(num) {
	if(num < 5)
		numOfHeroes = 5;
	else numOfHeroes = 6;
}

function villianNum(num) {
	if(num <=2)
		numOfVillians = 2;
	else if (num > 2 && num < 5)
		numOfVillians = 3;
	else numOfVillians = 4;
	
}

function henchmenNum(num) {
	if(num <= 3)
		numOfHenchmen = 1;
	else numOfHenchmen = 2;
}

function randomHeroes(num) {
	var count;
	var x;
	var b;
	var tempList = heroes.slice();
	for(count = 0; count < num; count++) {
		x = Math.floor(Math.random()*tempList.length);	
		heroList.push(tempList[x]);
		tempList.splice(x,1);
	}
	originalIndex(heroes, heroList, indexHeroes);
}

function randomMastermind() {
	var tempList = masterminds.slice();
	var x = Math.floor(Math.random()*tempList.length);
	mastermindList.push(tempList[x]);
	indexMasterminds.push(x+1);
	
	if(henchmen.indexOf(alwaysLeads[x]) > -1) {
		leadsHenchmen = true;
		numOfHenchmen -= 1;	
	}
	if(villians.indexOf(alwaysLeads[x]) > -1) {
		leadsVillians = true;
		numOfVillians -= 1;	
	}
}

function randomScheme() {
	var x = Math.floor(Math.random()*schemes.length);
	pickedScheme.push(schemes[x]);
	numOfTwists = twists[x];	
}

function randomVillians(num) {
	var count;
	var x;
	var tempList = villians.slice();
	if (leadsVillians == true) {
		villianList.push(alwaysLeads[indexMasterminds[0]-1]);
		tempList.splice(villians.indexOf(villianList[0]),1)
	}
	for(count = 0; count < num; count++) {
		x = Math.floor(Math.random()*tempList.length);
		villianList.push(tempList[x]);
		tempList.splice(x,1);
	}
	originalIndex(villians, villianList, indexVillians);
}

function randomHenchmen(num) {
	var count;
	var x;
	var tempList = henchmen.slice();
	if (leadsHenchmen == true) {
		henchmenList.push(alwaysLeads[indexMasterminds[0]-1]);
		tempList.splice(henchmen.indexOf(henchmenList[0]),1)
	}
	for(count = 0; count < num; count++) {
		x = Math.floor(Math.random()*tempList.length);
		henchmenList.push(tempList[x]);
		tempList.splice(x,1);
	}
	originalIndex(henchmen, henchmenList, indexHenchmen);
}

function originalIndex(oldArr, newArr, indexArr) {
	var x;
	for(var i = 0; i < newArr.length; i++) {
		x = oldArr.indexOf(newArr[i].toString());
		indexArr.push(x+1);
	}
}

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
	for(var i=0; i<villianList.length; i++) {
		if(i == 0)
			b += "<h2 class=\"current\">" + villianList[i] + "</h2> \n<div class=\"pane\"><img src=\"images/villians/" + indexVillians[i] + ".jpg\" width=\"400px\" height=\"300px\" /></div>";
		else b += "<h2>" + villianList[i] + "</h2> \n<div class=\"pane\"><img src=\"images/villians/" + indexVillians[i] + ".jpg\" width=\"400px\" height=\"300px\" /></div>";
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
	c += "<h2 class=\"current\">" + mastermindList[0] + "</h2> \n<div class=\"pane\"><img src=\"images/masterminds/" + indexMasterminds[0] + ".jpg\" width=\"400px\" height=\"300px\" /></div>"
	c += "<h2>The scheme is: " + pickedScheme[0] + "</h2> \n<div class=\"pane\"></div>";
	c += "<h2>You will need " + numOfTwists + " Twists</h2> \n<div class=\"pane\"></div>";
	
	document.getElementById("showdown").innerHTML = c;
	$("#showdown").tabs("#showdown div.pane",{tabs: 'h2'});//, effect: 'slide'});
}

function numberOfTypes(num) {
	heroNum(num);
	villianNum(num);
	henchmenNum(num);	
}

function generateTypes() {
	randomHeroes(numOfHeroes);
	randomMastermind();
	randomVillians(numOfVillians);
	randomHenchmen(numOfHenchmen);
	randomScheme();
}

function initialize() {
	numOfPlayers = 0;
	numOfHeroes = 0;
	numOfVillians = 0;
	numOfHenchmen = 0;
	numOfTwists = 0;
	pickedScheme = [];
	heroList = [];
	villianList = [];
	henchmenList = [];
	mastermindList = [];
	indexHeroes = [];
	indexVillians = [];
	indexHenchmen = [];
	indexMasterminds = [];
	leadsHenchmen = false;
	leadsVillians = false;	
}

function init() {
	initialize();
	numOfPlayers = prompt("Please enter the number of players");
	numberOfTypes(numOfPlayers);
	//numberOfTypes('5');
	generateTypes();
	updateGoodGuys();
	updateBadGuys();
	updateShowdown();
}