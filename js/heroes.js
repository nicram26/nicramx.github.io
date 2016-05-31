var baseBox = {
	heroes: ["Black Widow","Captain America","Cyclops","Deadpool","Emma Frost","Gambit","Hawkeye","Hulk","Iron Man","Nick Fury","Rogue","Spider-Man","Storm","Thor","Wolverine"],
	masterminds: ["Dr. Doom","Loki","Magneto","Red Skull"],
	villains: ["Brotherhood","Enemies of Asgard","HYDRA","Masters of Evil","Radiation","Skrulls","Spider-foes"],
	henchmen: ["Doombot Legion","Hand Ninjas","Savage Land Mutates","Sentinels"]
};

var darkCity = {
	heroes: ["Angel","Bishop","Blade","Cable","Colossus","Daredevil","Domino","Elektra","Forge","Ghost Rider","Iceman","Iron Fist","Jean Grey","Nightcrawler","Professor X","Punisher","Wolverine (Expansion)"],
	masterminds: ["Apocalypse","Kingpin","Mephisto","Mr. Sinister","Stryfe"],
	villains: ["Emissaries of Evil","Four Horsemen","Marauders","MLF","Streets of New York","Underworld"],
	henchmen: ["Maggia Goons","Phalanx"]
};

var secretWarsI = {
	heroes: ["Apocalyptic Kitty Pryde","Black Bolt","Black Panther","Captain Marvel","Dr. Strange","Lady Thor","Magik","Maximus","Namor, the Sub-Mariner","Old Man Logan","Proxima Midnight","Superior Iron Man","Thanos","Ultimate Spider-Man"],
	masterminds: ["Madelyn Pryor, Goblin Queen","Nimord","Wasteland Hulk","Zombie Green Goblin"],
	villains: ["Domain of Apocalypse","Limbo","Manhattan (Earth-1610)","Sentinel Territories","The Deadlands","Wasteland"],
	henchmen: ["Ghost Racers","M.O.D.O.K.s","Thor Corps"]
};

var secretWarsII = {
	heroes: ["Agent Venom","Arkon the Magnificent","Beast","Black Swan","Captain Britain","Corvus Glaive","Dr. Punisher, Soldier Supreme","Elsa Bloodstone","Phoenix Force Cyclops","Ruby Summers","Shang-Chi","Silk","Soulsword Colossus","Spider-Gwen","The Captain and the Devil","Time-Traveling Jean Grey"],
	masterminds: ["Immortal Emperor Zheng-Zu","King Hyperion","Shiklah, the Demon Bride","Spider-Queen"],
	villains: ["Deadpool's Secret Secret Wars","Guadians of Knowwhere","K'un-Lun","Monster Metropolis","Utopolis","X-Men '92"],
	henchmen: ["Khonshu Guardians","Magma Men","Spider-Infected"]
};

var paintTheTownRed = {
	heroes: ["Black Cat","Moon Knight","Scarlet Spider","Spider Woman","Symbiote Spider-Man"],
	masterminds: ["Carnage","Mysterio"],
	villains: ["Maximum Carnage","Sinister Six"],
	henchmen: []
};

var fantasticFour = {
	heroes: ["Human Torch","Invisible Woman","Mr. Fantastic","Silver Surfer","Thing"],
	masterminds: ["Galactus","Mole Man"],
	villains: ["Heralds of Galactus","Subterranea"],
	henchmen: []
};

var guardiansOfTheGalaxy = {
	heroes: ["Drax the Destroyer","Gamora","Groot","Rocket Raccoon","Star-Lord"],
	masterminds: ["Supreme Intelligence of the Kree","Thanos"],
	villains: ["Infinity Gems","Kree Starforce"],
	henchmen: []
};

var captainAmerica75th = {
	heroes: ["Agent X-13","Captain America 1941","Falcon","Steve Rogers","Winter Soldier"],
	masterminds: ["Arnim Zola","Baron Heinrich Zemo"],
	villains: ["Masters of Evil (WWII)","Zola's Creations"],
	henchmen: []
};

var allHeroes = ["Agent Venom","Agent X-13","Angel","Apocalyptic Kitty Pryde","Arkon the Magnificent","Beast","Bishop","Black Bolt","Black Cat","Black Panther","Black Swan","Black Widow","Blade","Cable","Captain America","Captain America 1941","Captain Britain","Captain Marvel","Colossus","Corvus Glaive","Cyclops","Daredevil","Deadpool","Domino","Dr. Punisher, Soldier Supreme","Dr. Strange","Drax the Destroyer","Elektra","Elsa Bloodstone","Emma Frost","Falcon","Forge","Gambit","Gamora","Ghost Rider","Groot","Hawkeye","Hulk","Human Torch","Iceman","Invisible Woman","Iron Fist","Iron Man","Jean Grey","Lady Thor","Magik","Maximus","Moon Knight","Mr. Fantastic","Namor, the Sub-Mariner","Nick Fury","Nightcrawler","Old Man Logan","Phoenix Force Cyclops","Professor X","Proxima Midnight","Punisher","Rocket Raccoon","Rogue","Ruby Summers","Scarlet Spider","Shang-Chi","Silk","Silver Surfer","Soulsword Colossus","Spider Woman","Spider-Gwen","Spider-Man","Star-Lord","Steve Rogers","Storm","Superior Iron Man","Symbiote Spider-Man","Thanos","The Captain and the Devil","Thing","Thor","Time-Traveling Jean Grey","Ultimate Spider-Man","Winter Soldier","Wolverine","Wolverine (Expansion)"];

var allMasterminds = ["Apocalypse","Arnim Zola","Baron Heinrich Zemo","Carnage","Dr. Doom","Galactus","Immortal Emperor Zheng-Zu","King Hyperion","Kingpin","Loki","Madelyn Pryor, Goblin Queen","Magneto","Mephisto","Mole Man","Mr. Sinister","Mysterio","Nimord","Red Skull","Shiklah, the Demon Bride","Spider-Queen","Stryfe","Supreme Intelligence of the Kree","Thanos","Wasteland Hulk","Zombie Green Goblin"];

var alwaysLeads = ["Four Horsemen","Masters of Evil (WWII)","Zola's Creations","Maximum Carnage","Doombot Legion","Heralds of Galactus","K'un-Lun","Utopolis","Streets of New York","Enemies of Asgard","Limbo","Brotherhood","Underworld","Subterranea","Marauders","Sinister Six","Sentinel Territories","HYDRA","Monster Metropolis","Spider-Infected","MLF","Infinity Gems","Kree Starforce","Wasteland","The Deadlands"];

var allVillains = ["Brotherhood","Deadpool's Secret Secret Wars","Domain of Apocalypse","Emissaries of Evil","Enemies of Asgard","Four Horsemen","Guadians of Knowwhere","Heralds of Galactus","HYDRA","Infinity Gems","Kree Starforce","K'un-Lun","Limbo","Manhattan (Earth-1610)","Marauders","Masters of Evil","Masters of Evil (WWII)","Maximum Carnage","MLF","Monster Metropolis","Radiation","Sentinel Territories","Sinister Six","Skrulls","Spider-foes","Streets of New York","Subterranea","The Deadlands","Underworld","Utopolis","Wasteland","X-Men '92","Zola's Creations"];

var allHenchmen =["Doombot Legion","Ghost Racers","Hand Ninjas","Khonshu Guardians","M.O.D.O.K.s","Maggia Goons","Magma Men","Phalanx","Savage Land Mutates","Sentinels","Spider-Infected","Thor Corps"];

//for the cards allowed in the game
var fullList = {};

//number of each type required to play
var numOfPlayers;
var numOfHeroes;
var numOfVillians;
var numOfHenchmen;

//random of each type
var heroList = [];
var villainList = [];
var henchmenList = [];
var mastermindList = [];

//index of the random selections
var indexHeroes = [];
var indexVillains = [];
var indexHenchmen = [];
var indexMastermind = [];

//for if the mastermind leads henchmen or villains
var leadsHenchmen = false;
var leadsVillains = false;

//Combines any number of objects into one object
function combineObjects() {
	var keys = [];
	keys = Object.keys(arguments[0]);
	
	for(var i = 0; i<arguments.length; i++) {
		for(var j = 0; j<keys.length; j++) {
			if(i == 0) {
				fullList[keys[j]] = arguments[0][keys[j]];
			}
			else fullList[keys[j]] = fullList[keys[j]].concat(arguments[i][keys[j]]);
			fullList[keys[j]].sort();
		}
	}	
}

//Setups the number of heroes, villain groups, and henchmen
function initialSetup(num) {
	if(num == 2) {
		numOfHeroes = 5;
		numOfVillains = 2;
		numOfHenchmen = 1;	
	}
	else if(num == 3) {
		numOfHeroes = 5;
		numOfVillains = 3;
		numOfHenchmen = 1;	
	}
	else if(num == 4) {
		numOfHeroes = 5;
		numOfVillains = 3;
		numOfHenchmen = 2;	
	}
	else if(num == 5) {
		numOfHeroes = 6;
		numOfVillains = 4;
		numOfHenchmen = 2;
	}
}

//Sets the heroes for the game
function pickHeroes(num) {
	var count;
	var x;
	var b;
	var tempList = fullList['heroes'].slice();
	for(count = 0; count < num; count++) {
		x = Math.floor(Math.random()*tempList.length);	
		heroList.push(tempList[x]);
		tempList.splice(x,1);
	}
	index(allHeroes, heroList, indexHeroes);
}

//Sets the villain groups for the game
function pickVillains(num) {
	var count;
	var x;
	var tempList = fullList['villains'].slice();
	if (leadsVillains == true) {
		villainList.push(alwaysLeads[indexMastermind[0]-1]);
		tempList.splice(allVillains.indexOf(villainList[0]),1)
	}
	for(count = 0; count < num; count++) {
		x = Math.floor(Math.random()*tempList.length);
		villainList.push(tempList[x]);
		tempList.splice(x,1);
	}
	index(allVillains, villainList, indexVillains);
}

//Sets the henchmen for the game
function pickHenchmen(num) {
	var count;
	var x;
	var tempList = fullList['henchmen'].slice();
	if (leadsHenchmen == true) {
		henchmenList.push(alwaysLeads[indexMastermind[0]-1]);
		tempList.splice(allHenchmen.indexOf(henchmenList[0]),1)
	}
	for(count = 0; count < num; count++) {
		x = Math.floor(Math.random()*tempList.length);
		henchmenList.push(tempList[x]);
		tempList.splice(x,1);
	}
	index(allHenchmen, henchmenList, indexHenchmen);	
}

//Sets the mastermind for the game
function pickMastermind() {
	var tempList = fullList['masterminds'].slice();
	var x = Math.floor(Math.random()*tempList.length);
	mastermindList.push(tempList[x]);
	indexMastermind.push(x+1);
	
	if(allHenchmen.indexOf(alwaysLeads[x]) > -1) {
		leadsHenchmen = true;
		numOfHenchmen -= 1;	
	}
	if(allVillains.indexOf(alwaysLeads[x]) > -1) {
		leadsVillains = true;
		numOfVillains -= 1;	
	} 
}

//Gets the index of the heroes from the all heroes list so an image can be got
function index(oldArr, newArr, indexArr) {
	var x;
	for(var i = 0; i < newArr.length; i++) {
		x = oldArr.indexOf(newArr[i].toString());
		indexArr.push(x+1);
	}
}

//Initialize
function initialize() {
	resetAll();
	numOfPlayers = prompt("Please enter the number of players");
	initialSetup(numOfPlayers);
	combineObjects(baseBox,darkCity,secretWarsI,secretWarsII,paintTheTownRed,fantasticFour,guardiansOfTheGalaxy,captainAmerica75th);
	pickHeroes(numOfHeroes);
	pickMastermind();
	pickVillains(numOfVillains);
	pickHenchmen(numOfHenchmen);
}

function resetAll() {
	numOfPlayers = 0;
	numOfHeroes = 0;
	numOfVillains = 0;
	numOfHenchmen = 0;
	heroList = [];
	villainList = [];
	henchmenList = [];
	mastermindList = [];
	indexHeroes = [];
	indexVillains = [];
	indexHenchmen = [];
	indexMastermind = [];
	leadsHenchmen = false;
	leadsVillains = false;	
}