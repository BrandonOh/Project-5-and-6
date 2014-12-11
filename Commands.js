var roomLoc = 0
var nextRoomLoc = 0
var north = 0
var south = 1
var east = 2
var west = 3
var totalPoints = 0
var pain = 0

var rooms = new Array ( roomLoc_0,
					    roomLoc_1,
					    roomLoc_2,
					    roomLoc_3,
					    roomLoc_4,
					    roomLoc_5,
					    roomLoc_6,
					    roomLoc_7,
					    roomLoc_8,
					    roomLoc_9,
					    roomLoc_10);
						   
var dir = [ // N   S   E   W 
	/* 0 */ [  1, -1, -1,  5],
	/* 1 */ [  3,  0,  2,  4],
	/* 2 */ [ -1,  8,  7,  1],
	/* 3 */ [ -1,  1,  9,  6], 
	/* 4 */ [ -1, -1,  1, -1],
	/* 5 */ [ -1, -1,  0, -1],
	/* 6 */ [ -1, -1,  3, -1],
	/* 7 */ [ -1, -1, -1,  2],
	/* 8 */ [  2, -1, -1, -1], 
	/* 9 */ [ -1, -1,  10, 3],
	/* 10*/ [ -1, -1, -1,  9]
		  ];
		  
var disableButton = new Array("myNorthBtn","mySouthBtn","myEastBtn","myWestBtn")
		  
function btnGo_click(){
	txtCommand.value = txtCommand.value.toLowerCase();
	btnAction(txtCommand.value)
}

function btnAction(input){
	var targetPointTextArea = document.getElementById("pointScreen");
	if (input === "n" || input === "north" || input === 0){
		input = north
	}else if (input === "s" || input === "south" || input === 1){
		input = south
	}else if (input === "e" || input === "east" || input === 2){
		input = east
	}else if (input === "w" || input === "west" || input === 3){
		input = west
	}else if (input === "help"){
		help()
	}else if (input === "read memo"){
		read()
	}else if (input === "examine"){
		examine()
	}else if (input === "inventory" || input === "i"){
		inventory()
	}else if (input === "take"){
		take()
	}else if (input === "use medicine"){
		useMedicine()
	}else if (input === "use computer"){
		computer()
	}else if (input === "use key"){
		electricalBreaker()
	}else if (input === "use elevator"){
		elevator()
	}else{
		textMessage("I do not understand that action " + input + ". Please type help for possible actions.")
	}
	
	nextRoomLoc = dir[roomLoc][input]
	
	if (input <= 3){
		if (nextRoomLoc >= 0 && pain <= 4){
			puzzle(nextRoomLoc)
			painMeter()
			if (rooms[nextRoomLoc].points === false){
				totalPoints += 5
				targetPointTextArea.value = "total points: " + totalPoints
				rooms[nextRoomLoc].points = true
			}
			for (var i = 0; i < disableButton.length; i++) {
				var btnDisable = 0;
				btnDisable = dir[roomLoc][i];
				if (btnDisable === -1) {
			 		document.getElementById(disableButton[i]).disabled = true;
				}else{
					document.getElementById(disableButton[i]).disabled = false;
				}
			}
		} else if (nextRoomLoc === -1){
			textMessage("There is no where to go.")
		} else if (pain === 5){
			painMeter()
		}
	}
	document.getElementById("txtCommand").value = ""
}

function textMessage(msg){
	var msg = msg
	var targetMainTextArea = document.getElementById("taMain");
	targetMainTextArea.value = msg + "\n\n" + targetMainTextArea.value
}	

function help(){
		textMessage("Commands that are valid are:\n" +
		      "To go South type: s or south\n" +
		      "To go North type: n or north\n" +
			  "To go East type: e or east\n" +
			  "To go West type: w or west\n" +
			  "To examine the room you are in type: examine\n" +
			  "To take objects in a room type: take\n" +
			  "To read something in your inventory type: read _____\n" +
			  "To use objects = use _____\n" +
			  "To check inventory type: inventory or i\n" +
			  "Commands are not case sensitive.")	
}
