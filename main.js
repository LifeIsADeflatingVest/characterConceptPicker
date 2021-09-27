var literaryOn = false; // default
var pickedGenre = "2D Platformer"; // default

var gameGenres = ["2D Platformer", "3D Platformer", "1st Person Shooter", "3rd Person Shooter", "Hero Shooter", "Puzzle", "Fighting", "Beat ’em Up", "Stealth", "Survival", "Rhythm", "Battle Royale", "Action Adventure", "Survival Horror", "Metroidvania", "Adventure", "Visual Novel", "Action RPG", "JRPG", "MMORPG", "WRPG", "Tactics RPG", "Real Time Strategy", "Roguelike", "Open World RPG", "Monster Tamer", "Character Action", "Racing", "Sports", "Sandbox", "Musou", "Walking Sim", "Farming Sim", "Dating Sim", "Looter Shooter", "Soulsborne", "Zelda-Like", "1st Person Puzzle", "Exploration", "Cart Racer", "Episodic", "Point and Click Adventure", "Choice-Driven Narrative"];
var literaryGenres = ["Children’s", "Victorian", "Coming-of-Age", "Epic", "Folklore", "Historical", "Romance", "Religious", "Satire", "Political", "Thriller", "Western", "Erotica", "Young Adult", "Adventure", "Pirate", "Spy", "High Fantasy", "Hard Sci-Fi", "Comedy", "Noir", "Crime", "Grimdark", "Horror", "Apocalyptic", "Road trip", "Isekai", "Space Opera", "Biography", "Memoir", "Cyberpunk", "Mystery", "Pulp Fiction", "Lovecraftian", "Magical Realism", "Literary", "Low Fantasy", "Science Fantasy", "War", "Animal", "Poetry", "Musical", "Battle Manga", "Seinen Manga", "Shojo Manga", "Superhero", "Theatrical"];
var jobClasses = ["Squire", "Chemist", "Knight", "Archer", "Priest/White Mage", "Wizard/Black Mage", "Monk", "Thief", "Oracle/Mystic", "Time Mage", "Geomancer", "Dragoon", "Mediator", "Summoner", "Samurai", "Ninja", "Calculator/Arithmetician", "Dancer", "Bard", "Mime", "Dark Knight", "Onion Knight", "Holy Knight", "Engineer/Machinist", "Swordsman", "Templar", "Soldier", "Sky Pirate", "Game Hunter", "Duke", "Commoner", "Viscount", "Elder", "Prophet", "Assassin", "Celebrant", "Deliveryman", "Detective", "Wrestler", "Shepherd", "Pop Idol", "Beast Tamer", "Sailor", "Jester", "Martial Artist", "Merchant"];
var alignments = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"];
var financialStatuses = ["Pauper", "Poor", "Comfortable", "Wealthy", "Rich"];
var eras = ["Primitive", "Evolved", "Advanced"];
var homeTownBiomes = ["Forest", "Jungle", "Ice", "Desert", "Arid", "Tropical", "Seaside", "Oceanic"];
var characterTraits = ["Introverted", "Extroverted", "Gullible", "Dishonest", "Prideful", "Skeptical", "Anxious", "Greedy", "Judgmental", "Selfish", "Humble", "Selfless", "Cruel", "Paranoid", "Easily Angered", "Prejudice", "Addicted", "Cursed", "Envious", "Pretending to be something they’re not", "Idealist", "Indecisive", "Lazy", "Compulsive Liar", "Inquisitive", "Shy", "Guarded", "Overzealous", "Reckless", "Sarcastic", "Unlucky", "Pious", "Questioning", "Life of the party", "Cynical", "Goofball", "Bored with life", "Charming", "Sagely"];
var relationshipStatues = ["Single", "Divorced", "Widowed", "Married", "Never been in love", "Currently in love", "Engaged", "Dating", "Separated", "Not interested", "On and off", "Hurting", "Just friends", "Partnered", "Healing", "Seeking love", "Several romance options", "Has a crush", "Love at first sight", "Just talking", "Nothing serious", "Never held hands"];
var birthMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Unknown", "Born Feb 29th"];
var arcanas = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Justice", "The Hermit", "Wheel of Fortune", "Strength", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World"];
var favoriteFinalFantasies = ["1", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "Tactics", "Doesn’t like Final Fantasy", "7 Remake"];
var personalityTypes = ["Architect", "Logician", "Commander", "Debater", "Advocate", "Mediator", "Protagonist", "Campaigner", "Logistician", "Defender", "Executive", "Consul", "Virtuoso", "Adventurer", "Entrepreneur", "Entertainer"];
var animals = ["Frog", "Bear", "Rabbit", "Gopher", "Kangaroo", "Tiger", "Donkey", "Owl", "Mole", "Badger", "Moose", "Deer", "Giraffe", "Mane Wolf", "Lemur", "Elephant", "Chameleon", "Newt", "Duck", "Deer", "Magpie", "Penguin", "Bat", "Lion", "Koala", "Ostrich", "Crocodile", "Pig", "Platypus", "Blue Whale", "Rattlesnake", "Coyote", "Mouse", "Hawk", "Goat", "Spider", "Jellyfish", "Seahorse", "Turtle", "Hippo"];
// colors and descendants separately

// address CORS issue for exporting canvas
const TempImage = window.Image;
const Image = function () {
	const img = new TempImage();
	img.crossOrigin = 'anonymous';
	return img;
}

//settings buttons
$(document).ready(function () {
	// when booting, hide genre categories
	$("#showingLiterary").hide();
	$("#showingGame").hide();

	$("#gameButt").click(function () {
		if (literaryOn) {
			literaryOn = false;
			//$("#showingGame").show(); // inactive, as the tr is hidden
			//$("#showingLiterary").hide(); // inactive, as the tr is hidden

			$("#gameButt").removeClass("switchOff");
			$("#gameButt").addClass("switchOn");
			$("#literaryButt").removeClass("switchOn");
			$("#literaryButt").addClass("switchOff");
			$('#genreForm').empty();
			$.each(gameGenres, function (i, p) {
				$('#genreForm').append($('<option></option>').val(p).html(p));
			});
		}
	});
});
$(document).ready(function () {
	$("#literaryButt").click(function () {
		if (!literaryOn) {
			literaryOn = true;
			//$("#showingGame").hide(); // inactive, as the tr is hidden
			//$("#showingLiterary").show(); // inactive, as the tr is hidden

			$("#gameButt").removeClass("switchOn");
			$("#gameButt").addClass("switchOff");
			$("#literaryButt").removeClass("switchOff");
			$("#literaryButt").addClass("switchOn");
			$('#genreForm').empty();
			$.each(literaryGenres, function (i, p) {
				$('#genreForm').append($('<option></option>').val(p).html(p));
			});
		}
	});
});
$(document).ready(function () {
	$('#genreForm').empty();
	$.each(gameGenres, function (i, p) {
		$('#genreForm').append($('<option></option>').val(p).html(p));
	});
	$('#genreForm').change(function () {
		//Use $option (with the "$") to see that the variable is a jQuery object
		var $option = $(this).find('option:selected');
		//Added with the EDIT
		var value = $option.val();//to get content of "value" attrib

		//var text = $option.text();//to get <option>Text</option> content
		pickedGenre = value;

	});
});

// generate
function rollDice() {
	$("#tableCont").animate({ opacity: 0 }, 500);

	var colorR = randomInteger(0, 255);
	var colorG = randomInteger(0, 255);
	var colorB = randomInteger(0, 255);

	var colorText = nearColor(colorR, colorG, colorB);
	var hslColor = rgbToHsl(colorR, colorG, colorB);
	var colLight = hslColor[2];

	var favoriteColorFontColor = "ghostwhite";
	if (colLight > 0.5) {
		favoriteColorFontColor = "black";
	}

	var randGameGenre = randomArrayItem(gameGenres); // inactive, as the tr is hidden
	var randLitGenre = randomArrayItem(literaryGenres); //inactive, as the tr is hidden

	var randJobClass = randomArrayItem(jobClasses);
	var randAlignment = randomArrayItem(alignments);
	var randFinStatus = randomArrayItem(financialStatuses);
	var randEra = randomArrayItem(eras);
	var randBiome = randomArrayItem(homeTownBiomes);
	var randTrait = randomArrayItem(characterTraits);
	var randStatus = randomArrayItem(relationshipStatues);
	var randBirths = randomArrayItem(birthMonths);
	var randArcana = randomArrayItem(arcanas);
	var randFFF = randomArrayItem(favoriteFinalFantasies);
	var randPersonality = randomArrayItem(personalityTypes);
	var randAnimal = randomArrayItem(animals);

	checkVisibilityByGenre();

	setTimeout(() => {
		$("#biomeBG").css("background-image", "url(img/" + randBiome + ".png)");
		$("#eraBG").css("background-image", "url(img/" + randEra + ".png)");
		$("#financialBG").css("background-image", "url(img/" + randFinStatus + ".png)");

		$("#gameGenre").html(randGameGenre);
		$("#literaryGenre").html(randLitGenre);
		$("#jobClass").html(randJobClass);
		$("#alignment").html(randAlignment);
		$("#financialStatus").html(randFinStatus);
		$("#era").html(randEra);
		$("#homeTownBiome").html(randBiome);
		$("#characterTrait").html(randTrait);
		$("#relationshipStatus").html(randStatus);
		$("#birthMonth").html(randBirths);
		$("#arcana").html(randArcana);
		$("#fff").html(randFFF);
		$("#personality").html(randPersonality);
		$("#animal").html(randAnimal);

		if ((randStatus == "Never held hands") || (randStatus == "Never been in love")) {
			$("#descendants").html(0);
		}
		else {
			$("#descendants").html(randomInteger(0, 5));
		}

		$("#preferredColor").css("backgroundColor", "rgba(" + colorR + "," + colorG + "," + colorB + ")");

		$("#colorName").html(colorText);
		$("#colorName").css("color", favoriteColorFontColor);

		$("#tableCont").animate({ opacity: 1 }, 1000);
	}, 550);

}

function checkVisibilityByGenre() {
	if (!literaryOn) { // games
		switch (pickedGenre) {
			case "Action Adventure":
				$("#ffTR").show();
				$("#arcTR").hide();
				break;
			case "Metroidvania":
				$("#ffTR").show();
				$("#arcTR").show();
				break;
			case "Adventure":
				$("#ffTR").show();
				$("#arcTR").show();
				break;
			case "Visual Novel":
				$("#ffTR").hide();
				$("#arcTR").show();
				break;
			case "Action RPG":
				$("#ffTR").show();
				$("#arcTR").show();
				break;
			case "JRPG":
				$("#ffTR").show();
				$("#arcTR").show();
				break;
			case "MMORPG":
				$("#ffTR").show();
				$("#arcTR").show();
				break;
			case "WRPG":
				$("#ffTR").show();
				$("#arcTR").show();
				break;
			case "Tactics RPG":
				$("#ffTR").show();
				$("#arcTR").show();
				break;
			case "Roguelike":
				$("#ffTR").show();
				$("#arcTR").show();
				break;
			case "Open World RPG":
				$("#ffTR").show();
				$("#arcTR").show();
				break;
			case "Musou":
				$("#ffTR").hide();
				$("#arcTR").show();
				break;
			case "Soulsborne":
				$("#ffTR").show();
				$("#arcTR").show();
				break;
			case "Zelda-Like":
				$("#ffTR").show();
				$("#arcTR").show();
				break;
			case "Point and Click Adventure":
				$("#ffTR").show();
				$("#arcTR").show();
				break;
			case "Choice-Driven Narrative":
				$("#ffTR").show();
				$("#arcTR").show();
				break;
			default:
				$("#ffTR").hide();
				$("#arcTR").hide();
				break;
		}
	}
	else { // literary
		$("#ffTR").hide(); // in literary, always hide FF

		switch (pickedGenre) {
			case "Victorian":
				$("#arcTR").show();
				break;
			case "Epic":
				$("#arcTR").show();
				break;	
			case "Folklore":
				$("#arcTR").show();
				break;	
			case "Adventure":
				$("#arcTR").show();
				break;	
			case "High Fantasy":
				$("#arcTR").show();
				break;	
			case "Noir":
				$("#arcTR").show();
				break;
			case "Grimdark":
				$("#arcTR").show();
				break;	
			case "Horror":
				$("#arcTR").show();
				break;	
			case "Apocalyptic":
				$("#arcTR").show();
				break;		
			case "Isekai":
				$("#arcTR").show();
				break;	
			case "Space Opera":
				$("#arcTR").show();
				break;	
			case "Cyberpunk":
				$("#arcTR").show();
				break;	
			case "Mystery":
				$("#arcTR").show();
				break;	
			case "Pulp Fiction":
				$("#arcTR").show();
				break;	
			case "Lovecraftian":
				$("#arcTR").show();
				break;	
			case "Magical Realism":
				$("#arcTR").show();
				break;	
			case "Low Fantasy":
				$("#arcTR").show();
				break;	
			case "Science Fantasy":
				$("#arcTR").show();
				break;	
			case "Battle Manga":
				$("#arcTR").show();
				break;	
			case "Seinen Manga":
				$("#arcTR").show();
				break;
			case "Shojo Manga":
				$("#arcTR").show();
				break;
			case "Superhero":
				$("#arcTR").show();
				break;
			default:
				$("#arcTR").hide();
				break;
		}
	}
}

function exportImage() {
	html2canvas(document.getElementById("tableCont"), { removeContainer: true, backgroundColor: '#1e2d48', useCORS: true, allowTaint: true }).then(function (canvas) {
		var now = new Date();
		saveAs(canvas.toDataURL(), 'characterConceptPicker ' + now + '.png');
	});
	function saveAs(uri, filename) {
		var link = document.createElement('a');
		if (typeof link.download === 'string') {
			link.href = uri;
			link.download = filename;
			//Firefox requires the link to be in the body
			document.body.appendChild(link);
			//simulate click
			link.click();
			//remove the link when done
			document.body.removeChild(link);
		}
		else {
			window.open(uri);
		}
	}
}
function randomArrayItem(array) {
	return array[Math.floor(Math.random() * array.length)];
}
function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function nearColor(cl1, cl2, cl3) {
	var theColor = rgbToHex(cl1, cl2, cl3)

	function componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}

	function rgbToHex(r, g, b) {
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}

	var n_match = ntc.name(theColor);
	/*
	n_rgb = n_match[0]; // RGB value of closest match
	n_exactmatch = n_match[2]; // True if exact color match
	*/

	return n_match[1]; // Text string: Color name
}
function rgbToHsl(r, g, b) {
	r /= 255, g /= 255, b /= 255;
	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;

	if (max == min) {
		h = s = 0; // achromatic
	} else {
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}
		h /= 6;
	}

	return [h, s, l];
}
