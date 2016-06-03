var vb = {
	allies: ["Bullseye","Dr. Octopus","Electro","Enchantress","Green Goblin","Juggernaut","Kingpin","Kraven","Loki","Magneto","Mysterio","Mystique","Sabretooth","Ultron","Venom"],
	commanders: ["Dr. Strange","Nick Fury","Odin","Professor X"],
	adversaries: ["Avengers","Defenders","Marvel Knights","Spider-Friends","Uncanny Avengers","Uncanny X-Men","X-Men First Class"],
	backup: ["Asgardian Warriors","Cops","Multiple Man","S.H.I.E.L.D Assault Squad"],
	plots: ["Build an Underground Mega-Vault Prison","Cage Villains in Power-Suppressing Cells","Crown Thor King of Asgard","Crush Hydra","Graduation at Xavier's X-Academy","Infiltrate the Lair with Spies","Mass Produce War Machine Armor","Resurrect Heroes with the Norn Stones"]
};

var fi = {
	allies: ["Greithoth, Breaker of Wills","Kuurth, Breaker of Stone","Nerkkod, Breaker of Oceans","Nul, Breaker of Worlds","Skadi","Skirn, Breaker of Men"],
	commanders: ["Uru-Enchanted Iron Man"],
	adversaries: ["The Mighty"],
	backup: [],
	plots: ["Fear Itself","Last Stand at Avengers Tower","The Traitor"]
};

var allAllies = ["Bullseye","Dr. Octopus","Electro","Enchantress","Green Goblin","Greithoth, Breaker of Wills","Juggernaut","Kingpin","Kraven","Kuurth, Breaker of Stone","Loki","Magneto","Mysterio","Mystique","Nerkkod, Breaker of Oceans","Nul, Breaker of Worlds","Sabretooth","Skadi","Skirn, Breaker of Men","Ultron","Venom"];

var allCommanders = ["Dr. Strange","Nick Fury","Odin","Professor X","Uru-Enchanted Iron Man"];

var allAdversaries = ["Avengers","Defenders","Marvel Knights","Spider-Friends","The Mighty","Uncanny Avengers","Uncanny X-Men","X-Men First Class"];

var allBackup = ["Asgardian Warriors","Cops","Multiple Man","S.H.I.E.L.D Assault Squad"];

var allTypes = {};

function setupAllV() {
	allTypes = combineObjects(vb,fi);
	var keys = Object.keys(allTypes);
	for(var i=0; i<keys.length; i++) {
		picked[keys[i]] = [];	
	}
	allTypes['commandersLeads'] = ["Defenders","Avengers","Asgardian Warriors","X-Men First Class","The Mighty"];	
}

//for the cards allowed in the game
var fullList = {};

//number of each type required to play
var numOfAllies;
var numOfAdversaries;
var numOfBackup;

//random of each type
var allyList = [];
var adversaryList = [];
var backupList = [];
var commanderList = [];

//index of the random selections
var indexAllies = [];
var indexAdversaries = [];
var indexBackup = [];
var indexCommander = [];

//for if the mastermind leads henchmen or villains
var leadsBackup = false;
var leadsAdversaries = false;

//Setups the number of heroes, villain groups, and henchmen
function villainsSetup(num) {
	if(num == 2) {
		numOfAllies = 5;
		numOfAdversaries = 2;
		numOfBackup = 1;	
	}
	else if(num == 3) {
		numOfAllies = 5;
		numOfAdversaries = 3;
		numOfBackup = 1;	
	}
	else if(num == 4) {
		numOfAllies = 5;
		numOfAdversaries = 3;
		numOfBackup = 2;	
	}
	else if(num == 5) {
		numOfAllies = 6;
		numOfAdversaries = 4;
		numOfBackup = 2;
	}
}

//Checks to see if the commander leads a adversary or a backup adversary
function leadsTypeV(key, picks, everything) {
	var x = picks[key+'Index'][0] - 1;
	if(everything['backup'].indexOf(everything[key+'Leads'][x]) > -1) {
		leadsBackup = true;
		leadsAdversaries = false;
		numOfBackup -= 1;
		picks['backup'].push(everything[key+'Leads'][x]); 
		for (var i=0; i<fullList['backup'].length; i++) {
			if (fullList['backup'][i] == everything[key+'Leads'][x])
        		fullList['backup'].splice(i, 1); 
		}	
	}
	else if(everything['adversaries'].indexOf(everything[key+'Leads'][x]) > - 1) {
		leadsAdversaries = true;
		leadsBackup = false;
		numOfAdversaries -= 1;
		picks['adversaries'].push(everything[key+'Leads'][x]);
		for (var j=0; j<fullList['adversaries'].length; j++) {
			if (fullList['adversaries'][j] == everything[key+'Leads'][x])
        		fullList['adversaries'].splice(j, 1); 
		}
	}
}

//Initialize
function initializeVillains(sets,players) {
	setupAllV();
	villainsSetup(players);
	if(sets != "")
		fullList = eval("combineObjects(vb," + sets + ")");
	else fullList = combineObjects(vb);
	pickItems('commanders', 1, picked, fullList, allTypes);
	leadsTypeV('commanders', picked, allTypes);
	pickItems('plots', 1, picked, fullList, allTypes);
	pickItems('allies', numOfAllies, picked, fullList, allTypes);
	pickItems('adversaries', numOfAdversaries, picked, fullList, allTypes);
	pickItems('backup', numOfBackup, picked, fullList, allTypes);
}

function resetAll() {
	numOfAllies = 0;
	numOfAdversaries = 0;
	numOfBackup = 0;
	allyList = [];
	adversaryList = [];
	backupList = [];
	commanderList = [];
	indexAllies = [];
	indexAdversaries = [];
	indexBackup = [];
	indexCommanders = [];
	fullList = {};
	picked = {};
	leadsBackup = false;
	leadsAdversaries = false;	
}