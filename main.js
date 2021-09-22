var gameGenres = ["2D Platformer","3D Platformer","1st Person Shooter","3rd Person Shooter","Hero/Looter Shooter","Puzzle","Fighting","Beat ‘em Up","Stealth","Survival","Rhythm","Battle Royale","Action Adventure","Survival Horror","Metroidvania","Adventure","Visual Novel","Action RPG","JRPG","MMORPG","WRPG","Tactics RPG","Real Time Strategy","Roguelike","Open World RPG","Monster Tamer","Character Action","Racing","Sports","Sandbox","Musou","Walking Sim","Farming Sim","Dating Sim"];
var literaryGenres = ["Children’s","Victorian","Coming-of-Age","Epic","Folklore","Historical","Romance","Religious","Satire","Political","Thriller","Western","Erotica","Young Adult","Adventure","Pirate","Spy","High Fantasy","Hard Sci-Fi","Comedy","Noir","Crime","Grimdark","Horror","Apocalyptic","Road trip","Isekai","Space Opera","Biography","Memoir","Cyberpunk","Mystery","Pulp Fiction","Lovecraftian","Magical Realism","Low Fantasy","Science Fantasy","War","Animals/Furry","Poetry"];
var jobClasses = ["Squire","Chemist","Knight","Archer","Priest/White Mage","Wizard/Black Mage","Monk","Thief","Oracle/Mystic","Time Mage","Geomancer","Lancer/Dragoon","Mediator/Orator","Summoner","Samurai","Ninja","Calculator/Arithmetician","Dancer","Bard","Mime","Dark Knight","Onion Knight","Holy Knight","Engineer/Machinist","Heaven Knight/Skyseer","Hell Knight/Netherseer","Divine Knight","Holy Swordsman/Sword Saint","Temple Knight/Templar","Dragoner/Dragonkin","Soldier","Sky Pirate","Game Hunter","Duke","Commoner","Viscount","Elder","Prophet","Assassin","Celebrant"];
var alignments = ["Lawful Good","Neutral Good","Chaotic Good","Lawful Neutral","True Neutral","Chaotic Neutral","Lawful Evil","Neutral Evil","Chaotic Evil"];
var financialStatuses = ["Pauper", "Poor", "Coping", "Comfortable", "Wealthy", "Rich"];
var eras = ["Primitive", "Evolved", "Advanced"];
var homeTownBiomes = ["Forest", "Jungle", "Ice", "Desert", "Arid", "Tropical", "Seaside", "Oceanic"];
// colors and descendants separately

// address CORS issue for exporting canvas
const TempImage = window.Image;
const Image = function() {
        const img = new TempImage();
        img.crossOrigin = 'anonymous';
        return img;
}

function rollDice() {
	$("#tableCont").animate({opacity: 0}, 500);

	var colorR = randomInteger(0,255);
	var colorG = randomInteger(0,255);
	var colorB = randomInteger(0,255);

	var colorText = nearColor(colorR, colorG, colorB);
	var hslColor = rgbToHsl(colorR, colorG, colorB);
	var colLight = hslColor[2];

	var favoriteColorFontColor = "ghostwhite";
	if (colLight > 0.5) {
		favoriteColorFontColor = "black";
	}

	var randGameGenre = randomArrayItem(gameGenres);
	var randLitGenre = randomArrayItem(literaryGenres);
	var randJobClass = randomArrayItem(jobClasses);
	var randAlignment = randomArrayItem(alignments);
	var randFinStatus = randomArrayItem(financialStatuses);
	var randEra = randomArrayItem(eras);
	var randBiome = randomArrayItem(homeTownBiomes);

	setTimeout(() => {
		$("#biomeBG").css("background-image", "url(img/" + randBiome +".png)"); 

		$("#gameGenre").html(randGameGenre);
		$("#literaryGenre").html(randLitGenre);
		$("#jobClass").html(randJobClass);
		$("#alignment").html(randAlignment);
		$("#financialStatus").html(randFinStatus);
		$("#era").html(randEra);
		$("#homeTownBiome").html(randBiome);

		$("#descendants").html(randomInteger(0, 5));
		$("#preferredColor").css("backgroundColor", "rgba(" + colorR + "," + colorG + "," + colorB + ")");

		$("#colorName").html(colorText);
		$("#colorName").css("color", favoriteColorFontColor);
		
		$("#tableCont").animate({opacity: 1}, 1000);
	}, 550);

}

function exportImage() {
	html2canvas(document.getElementById("tableCont"), {removeContainer:true, backgroundColor: '#1e2d48', useCORS: true,allowTaint: true}).then(function(canvas) {
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
	return array[Math.floor(Math.random()*array.length)];
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