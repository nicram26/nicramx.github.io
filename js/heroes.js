//Base Box
var hb = {
	heroes: ["Black Widow","Captain America","Cyclops","Deadpool","Emma Frost","Gambit","Hawkeye","Hulk","Iron Man","Nick Fury","Rogue","Spider-Man","Storm","Thor","Wolverine"],
	masterminds: ["Dr. Doom","Loki","Magneto","Red Skull"],
	villains: ["Brotherhood","Enemies of Asgard","HYDRA","Masters of Evil","Radiation","Skrulls","Spider-foes"],
	henchmen: ["Doombot Legion","Hand Ninjas","Savage Land Mutates","Sentinels"],
	schemes: ["Midtown Bank Robbery","Negative Zone Prison Breakout","Portals to Dark Dimension","Replace Earth's Leaders with Killbots","Secret Invasion of the Skrull Shapeshifters","Super Hero Civil War","The Legacy Virus","Unleash the Power of the Cosmic Cube"]
};

//Dark City Expanion
var dc = {
	heroes: ["Angel","Bishop","Blade","Cable","Colossus","Daredevil","Domino","Elektra","Forge","Ghost Rider","Iceman","Iron Fist","Jean Grey","Nightcrawler","Professor X","Punisher","Wolverine (Expansion)"],
	masterminds: ["Apocalypse","Kingpin","Mephisto","Mr. Sinister","Stryfe"],
	villains: ["Emissaries of Evil","Four Horsemen","Marauders","MLF","Streets of New York","Underworld"],
	henchmen: ["Maggia Goons","Phalanx"],
	schemes: ["Capture Baby Hope","Detonate the Helicarrier","Massive Earthquake Generator","Organized Crime Wave","Save Humanity","Steal the Weaponized Plutonium","Transform Citizens Into Demons","X-Cutioner's Song"]
};

//Secret Wars Volume I Expansion
var swi = {
	heroes: ["Apocalyptic Kitty Pryde","Black Bolt","Black Panther","Captain Marvel","Dr. Strange","Lady Thor","Magik","Maximus","Namor, the Sub-Mariner","Old Man Logan","Proxima Midnight","Superior Iron Man","Thanos","Ultimate Spider-Man"],
	masterminds: ["Madelyn Pryor, Goblin Queen","Nimord","Wasteland Hulk","Zombie Green Goblin"],
	villains: ["Domain of Apocalypse","Limbo","Manhattan (Earth-1610)","Sentinel Territories","The Deadlands","Wasteland"],
	henchmen: ["Ghost Racers","M.O.D.O.K.s","Thor Corps"],
	schemes: ["Building an Army of Annihilation","Corrupt the Next Generation of Heroes","Crush Them With My Bare Hands","Dark Alliance","Fragmented Realities","Master of Tyrants","Pan-Dimensional Plagye","Smash the Two Dimensions Together"]
};

//Secret Wars Volume II Expansion
var swii = {
	heroes: ["Agent Venom","Arkon the Magnificent","Beast","Black Swan","Captain Britain","Corvus Glaive","Dr. Punisher, Soldier Supreme","Elsa Bloodstone","Phoenix Force Cyclops","Ruby Summers","Shang-Chi","Silk","Soulsword Colossus","Spider-Gwen","The Captain and the Devil","Time-Traveling Jean Grey"],
	masterminds: ["Immortal Emperor Zheng-Zu","King Hyperion","Shiklah, the Demon Bride","Spider-Queen"],
	villains: ["Deadpool's Secret Secret Wars","Guadians of Knowwhere","K'un-Lun","Monster Metropolis","Utopolis","X-Men '92"],
	henchmen: ["Khonshu Guardians","Magma Men","Spider-Infected"],
	schemes: ["Deadlands Hordes Charge thw Wall","Enthrone the Barons of Battleworld","Master the Mysteries of Kung-Fu","Secret Wars","Sinister Ambitions","The Fountain of Eternal Life","The God-Emperor of Battleworld","The Mark of Khonshu"]
};

//Paint the Town Red Expansion
var pttr = {
	heroes: ["Black Cat","Moon Knight","Scarlet Spider","Spider Woman","Symbiote Spider-Man"],
	masterminds: ["Carnage","Mysterio"],
	villains: ["Maximum Carnage","Sinister Six"],
	henchmen: [],
	schemes: ["Invade the Daily Bugles News HQ","Splice Humans with Spider DNA","The Clone Saga","Weave a Web of Lies"]
};

//Fantastic Four Expansion
var ff = {
	heroes: ["Human Torch","Invisible Woman","Mr. Fantastic","Silver Surfer","Thing"],
	masterminds: ["Galactus","Mole Man"],
	villains: ["Heralds of Galactus","Subterranea"],
	henchmen: [],
	schemes: ["Bathe Earth in Cosmic Rays","Flood the Planet with Melted Glaciers","Invincible Force Field","Pull Reality into the Negative Zone"]
};

//Guardians of the Galaxy Expansion
var gotg = {
	heroes: ["Drax the Destroyer","Gamora","Groot","Rocket Raccoon","Star-Lord"],
	masterminds: ["Supreme Intelligence of the Kree","Thanos"],
	villains: ["Infinity Gems","Kree Starforce"],
	henchmen: [],
	schemes: ["Forge the Infinity Gauntlet","Intergalactic Kree Nega-Bomb","The Kree-Skrull War","Unite the Shards"]
};

//Captain America 75th Anniversary Expansion
var ca75 = {
	heroes: ["Agent X-13","Captain America 1941","Falcon","Steve Rogers","Winter Soldier"],
	masterminds: ["Arnim Zola","Baron Heinrich Zemo"],
	villains: ["Masters of Evil (WWII)","Zola's Creations"],
	henchmen: [],
	schemes: ["Brainwash the Miltary","Change the Outcome of WWII","Go Back in Time to Slay Heroes' Ancestors","The Unbreaking Enigma Code"]
};

var allTypes = {};

function setupAllH() {
	allTypes = combineObjects(hb,dc,swi,swii,pttr,ff,gotg,ca75);
	var keys = Object.keys(allTypes);
	for(var i=0; i<keys.length; i++) {
		picked[keys[i]] = [];
	}
	allTypes['mastermindsLeads'] = ["Four Horsemen","Masters of Evil (WWII)","Zola's Creations","Maximum Carnage","Doombot Legion","Heralds of Galactus","K'un-Lun","Utopolis","Streets of New York","Enemies of Asgard","Limbo","Brotherhood","Underworld","Subterranea","Marauders","Sinister Six","Sentinel Territories","HYDRA","Monster Metropolis","Spider-Infected","MLF","Kree Starforce","Infinity Gems","Wasteland","The Deadlands"];	
}

//for the cards allowed in the game
var fullList = {};
//for the cards picked for the game
var picked = {};

//number of each type required to play
var numOfPlayers;
var numOfHeroes;
var numOfVillians;
var numOfHenchmen;

//for if the mastermind leads henchmen or villains
var leadsHenchmen = false;
var leadsVillains = false;

//Setups the number of heroes, villain groups, and henchmen
function heroesSetup(num) {
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

//Checks to see if the mastermind leads a villain or a henchmen group
function leadsTypeH(key, picks, everything) {
	var x = picks[key+'Index'][0] - 1;
	if(everything['henchmen'].indexOf(everything[key+'Leads'][x]) > -1) {
		leadsHenchmen = true;
		leadsVillains = false;
		numOfHenchmen -= 1;
		picks['henchmen'].push(everything[key+'Leads'][x]); 
		for (var i=0; i<fullList['henchmen'].length; i++) {
			if (fullList['henchmen'][i] === everything[key+'Leads'][x])
        		fullList['henchmen'].splice(i, 1); 
		}	
	}
	else if(everything['villains'].indexOf(everything[key+'Leads'][x]) > - 1) {
		leadsVillains = true;
		leadsHenchmen = false;
		numOfVillains -= 1;
		picks['villains'].push(everything[key+'Leads'][x]);
		for (var j=0; j<fullList['villains'].length; j++) {
			if (fullList['villains'][j] === everything[key+'Leads'][x])
        		fullList['villains'].splice(j, 1); 
		}
	}
}

//Initialize
function initializeHeroes(sets) {
	setupAllH();
	numOfPlayers = document.getElementById("myform").players.value;
	heroesSetup(numOfPlayers);
	if(sets != "")
		fullList = eval("combineObjects(hb," + sets + ")");
	else fullList = combineObjects(hb);
	pickItems('masterminds', 1, picked, fullList, allTypes);
	leadsTypeH('masterminds', picked, allTypes);
	pickItems('schemes', 1, picked, fullList, allTypes);
	pickItems('heroes', numOfHeroes, picked, fullList, allTypes);
	pickItems('villains', numOfVillains, picked, fullList, allTypes);
	pickItems('henchmen', numOfHenchmen, picked, fullList, allTypes);
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
	fullList = {};
	picked = {};
	leadsHenchmen = false;
	leadsVillains = false;	
}