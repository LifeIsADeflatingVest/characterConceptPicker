var gameGenres = ["2D Platformer","3D Platformer","1st Person Shooter","3rd Person Shooter","Hero/Looter Shooter","Puzzle","Fighting","Beat ‘em Up","Stealth","Survival","Rhythm","Battle Royale","Action Adventure","Survival Horror","Metroidvania","Adventure","Visual Novel","Action RPG","JRPG","MMORPG","WRPG","Tactics RPG","Real Time Strategy","Roguelike","Open World RPG","Monster Tamer","Character Action","Racing","Sports","Sandbox","Musou","Walking Sim","Farming Sim","Dating Sim"];
var literaryGenres = ["Children’s","Victorian","Coming-of-Age","Epic","Folklore","Historical","Romance","Religious","Satire","Political","Thriller","Western","Erotica","Young Adult","Adventure","Pirate","Spy","High Fantasy","Hard Sci-Fi","Comedy","Noir","Crime","Grimdark","Horror","Apocalyptic","Road trip","Isekai","Space Opera","Biography","Memoir","Cyberpunk","Mystery","Pulp Fiction","Lovecraftian","Magical Realism","Low Fantasy","Science Fantasy","War","Animals/Furry","Poetry"];
var jobClasses = ["Squire","Chemist","Knight","Archer","Priest/White Mage","Wizard/Black Mage","Monk","Thief","Oracle/Mystic","Time Mage","Geomancer","Lancer/Dragoon","Mediator/Orator","Summoner","Samurai","Ninja","Calculator/Arithmetician","Dancer","Bard","Mime","Dark Knight","Onion Knight","Holy Knight","Engineer/Machinist","Heaven Knight/Skyseer","Hell Knight/Netherseer","Divine Knight","Holy Swordsman/Sword Saint","Temple Knight/Templar","Dragoner/Dragonkin","Soldier","Sky Pirate","Game Hunter","Duke","Commoner","Viscount","Elder","Prophet","Assassin","Celebrant"];
var alignments = ["Lawful Good","Neutral Good","Chaotic Good","Lawful Neutral","True Neutral","Chaotic Neutral","Lawful Evil","Neutral Evil","Chaotic Evil"];
var financialStatuses = ["Pauper", "Poor", "Coping", "Comfortable", "Wealthy", "Rich"];
var eras = ["Primitive", "Evolved", "Advanced"];
var homeTownBiomes = ["Forest", "Jungle", "Ice", "Desert", "Arid", "Tropical", "Seaside", "Oceanic"];
// colors and descendants separately

function rollDice() {
	$("#tableCont").animate({opacity: 0}, 500);

	var colorR = randomInteger(0,255);
	var colorG = randomInteger(0,255);
	var colorB = randomInteger(0,255);
	var randGameGenre = randomArrayItem(gameGenres);
	var randLitGenre = randomArrayItem(literaryGenres);
	var randJobClass = randomArrayItem(jobClasses);
	var randAlignment = randomArrayItem(alignments);
	var randFinStatus = randomArrayItem(financialStatuses);
	var randEra = randomArrayItem(eras);
	var randBiome = randomArrayItem(homeTownBiomes);

	setTimeout(() => {
		switch (randBiome) {
			case "Oceanic":
				$("#homeTownBiome").parent().css("background-image", "repeating-linear-gradient(45deg, #606dbc,#606dbc 10px,#465298 10px,#465298 20px)"); 
				$("#homeTownBiome").css("color", "ghostwhite");
				break;
			case "Seaside":
				$("#homeTownBiome").parent().css("background-image", "repeating-linear-gradient(45deg, #DFCC6C,#DFCC6C 10px,#6CDADF 10px,#6CDADF 20px)"); 
				$("#homeTownBiome").css("color", "darkblue");
				break;
			case "Tropical":
				$("#homeTownBiome").parent().css("background-image", "repeating-linear-gradient(45deg, #6CDFD0,#6CDFD0 10px,#9CD6F8 10px,#9CD6F8 20px)"); 
				$("#homeTownBiome").css("color", "darkgreen");
				break;
			case "Arid":
				$("#homeTownBiome").parent().css("background-image", "repeating-linear-gradient(45deg, #ADD678,#ADD678 10px,#C1AC59 10px,#C1AC59 20px)"); 
				$("#homeTownBiome").css("color", "black");
				break;				
			case "Desert":
				$("#homeTownBiome").parent().css("background-image", "repeating-linear-gradient(45deg, #F3EE8B, #F3EE8B 10px,#FBF2C9 10px,#FBF2C9 20px)"); 
				$("#homeTownBiome").css("color", "black");
				break;
			case "Ice":
				$("#homeTownBiome").parent().css("background-image", "repeating-linear-gradient(45deg, #C9F9FB, #C9F9FB 10px,#EEF5F9 10px,#EEF5F9 20px)"); 
				$("#homeTownBiome").css("color", "darkblue");
				break;	
			case "Jungle":
				$("#homeTownBiome").parent().css("background-image", "repeating-linear-gradient(45deg, #1B671B, #1B671B 10px,#8D664D 10px,#8D664D 20px)"); 
				$("#homeTownBiome").css("color", "cornsilk");
				break;
			case "Forest":
				$("#homeTownBiome").parent().css("background-image", "repeating-linear-gradient(45deg, #4D8D59,#4D8D59 10px,#599424 10px,#599424 20px)"); 
				$("#homeTownBiome").css("color", "cornsilk");
				break;				
		}
		
		$("#gameGenre").html(randGameGenre);
		$("#literaryGenre").html(randLitGenre);
		$("#jobClass").html(randJobClass);
		$("#alignment").html(randAlignment);
		$("#financialStatus").html(randFinStatus);
		$("#era").html(randEra);
		$("#homeTownBiome").html(randBiome);

		$("#descendants").html(randomInteger(0, 5));
		$("#preferredColor").css("backgroundColor", "rgba(" + colorR + "," + colorG + "," + colorB + ")");
		
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