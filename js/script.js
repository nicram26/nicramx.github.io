var heroesGame;
var villainsGame;

function checkGameType() {
	if(document.getElementById("myform").game[0].checked) {
		heroesGame = true;
		villainsGame = false;
	}
	else if(document.getElementById("myform").game[1].checked) {
		villainsGame = true;
		heroesGame = false;
	}
}

function checkBoxes() {
	var result = "";
	if(heroesGame) {
		for(var i=0; i<document.getElementById("myform").expansionH.length; i++) {
			if(document.getElementById("myform").expansionH[i].checked) {
				result += document.getElementById("myform").expansionH[i].value + ",";
			}
		}
	}
	if(villainsGame) {
		if(document.getElementById("myform").expansionV.checked) {
			result += document.getElementById("myform").expansionV.value + ",";
		}
	}
	result = result.substring(0,result.length-1);
	return result;
}

function updateLeft() {
	var a = "";
	var type;
	if(heroesGame)
		type = "heroes";
	else if(villainsGame)
		type = "allies";
	for(var i=0; i < picked[type].length; i++) {
		if (i == 0)
			a += "<h2 class=\"current\">" + picked[type][i] + "</h2> \n<div class=\"pane\"><img src=\"images/" + type + "/" + picked[type+'Index'][i] + ".jpg\" width=\"400px\" height=\"300px\" /></div>";
		else a += "<h2>" + picked[type][i] + "</h2> \n<div class=\"pane\"><img src=\"images/" + type + "/" + picked[type+'Index'][i] + ".jpg\" width=\"400px\" height=\"300px\" /></div>";
	}
	document.getElementById("goodguys").innerHTML = a;
	$("#goodguys").tabs("#goodguys div.pane",{tabs: 'h2'});//, effect: 'slide'});
}

function updateRight() {
	var b = "";
	var typeA;
	var typeB;
	if(heroesGame) {
		typeA = "villains";
		typeB = "henchmen";
	}
	else if(villainsGame) { 
		typeA = "adversaries";
		typeB = "backup";
	}
	for(var i=0; i<picked[typeA].length; i++) {
		if(i == 0)
			b += "<h2 class=\"current\">" + picked[typeA][i] + "</h2> \n<div class=\"pane\"><img src=\"images/" + typeA + "/" + picked[typeA+'Index'][i] + ".jpg\" width=\"400px\" height=\"300px\" /></div>";
		else b += "<h2>" + picked[typeA][i] + "</h2> \n<div class=\"pane\"><img src=\"images/" + typeA + "/" + picked[typeA+'Index'][i] + ".jpg\" width=\"400px\" height=\"300px\" /></div>";
	}
	for(var j=0; j<picked[typeB].length; j++) {
		b += "<h2>" + picked[typeB][j] + "</h2> \n<div class=\"pane\"><img src=\"images/" + typeB + "/" + picked[typeB+'Index'][j] + ".jpg\" width=\"400px\" height=\"300px\" /></div>";
	}
	document.getElementById("badguys").innerHTML = b;
	$("#badguys").tabs("#badguys div.pane",{tabs: 'h2'});//, effect: 'slide'});
}

function updateMiddle() {
	var c = "";
	var typeA;
	var typeB;
	if(heroesGame) {
		typeA = "masterminds";
		typeB = "schemes";
	}
	else if(villainsGame) {
		typeA = "commanders";
		typeB = "plots";
	}
	c += "<h2 class=\"current\">" + picked[typeA][0] + "</h2> \n<div class=\"pane\"><img src=\"images/" + typeA + "/" + picked[typeA+'Index'][0] + ".jpg\" width=\"400px\" height=\"300px\" /></div>"
	c += "<h2>" + picked[typeB][0] + "</h2> \n<div class=\"pane\"></div>";
	//c += "<h2>" + numOfTwists + " Twists</h2> \n<div class=\"pane\"></div>";
	
	document.getElementById("showdown").innerHTML = c;
	$("#showdown").tabs("#showdown div.pane",{tabs: 'h2'});//, effect: 'slide'});
}

function init() {
	checkGameType();
	var x = checkBoxes();
	if(heroesGame) {
		initializeHeroes(x);
	}
	else if(villainsGame) {
		initializeVillains(x);	
	}
	updateLeft();
	updateRight();
	updateMiddle();
}

//----------------------
//GENERAL FUNCTIONS
//----------------------

//Gets the index of the heroes from the all heroes list so an image can be got
function index(oldArr, newArr, indexArr) {
	var x;
	for(var i = 0; i < newArr.length; i++) {
		x = oldArr.indexOf(newArr[i].toString());
		indexArr.push(x+1);
	}
}

//Combines any number of objects into one object
function combineObjects() {
	var keys = [];
	var obj = {};
	keys = Object.keys(arguments[0]);
	
	for(var i = 0; i<arguments.length; i++) {
		for(var j = 0; j<keys.length; j++) {
			if(i == 0) {
				obj[keys[j]] = arguments[0][keys[j]];
			}
			else obj[keys[j]] = obj[keys[j]].concat(arguments[i][keys[j]]);
			obj[keys[j]].sort();
		}
	}
	return obj;
}

//Picks items from the current set of cards, with the keyword given, returns the index of picked items
function pickItems(key, num, picks, obj, everything) {
	var count;
	var x;
	var tempList = obj[key].slice();
	if(picks[key] == null)
		picks[key] = [];
	var value = key+"Index";
	picks[value] = [];
	for(count = 0; count < num; count++) {
		x = Math.floor(Math.random()*tempList.length);
		picks[key].push(tempList[x]);
		tempList.splice(x,1);
	}
	index(everything[key], picks[key], picks[value]);
}
