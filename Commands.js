var roomLoc = 0
var nextRoomLoc = 0
var north = 0
var south = 1
var east = 2
var west = 3
var totalPoints = 0

var rooms = new Array ( roomLoc_0,
					    roomLoc_1,
					    roomLoc_2,
					    roomLoc_3,
					    roomLoc_4,
					    roomLoc_5,
					    roomLoc_6,
					    roomLoc_7,
					    roomLoc_8,
					    roomLoc_9);
						   
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
	/* 9 */ [ -1, -1, -1,  3]
		  ];
		  
var disableButton = new Array("myNorthBtn","mySouthBtn","myEastBtn","myWestBtn")
		  
function btnGo_click(){
	txtCommand.value = txtCommand.value.toLowerCase();
	btnAction(txtCommand.value)
}

function btnAction(input){
	var targetPointTextArea = document.getElementById("pointScreen");
	if (input === "n" || input === "north"){
		input = north
	}else if (input === "s" || input === "south"){
		input = south
	}else if (input === "e" || input === "east"){
		input = east
	}else if (input === "w" || input === "west"){
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
		takePainkiller()
	}else if (input === "use computer"){
		computer()
	}else{
		msg = "I do not understand that action " + input + ". Please type help for possible actions."
	}
	nextRoomLoc = dir[roomLoc][input]
	
	if (input <= 3){
		if (nextRoomLoc >= 0){
			textMessage(rooms[nextRoomLoc])
			roomLoc = nextRoomLoc
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
	}
	}
}

function computer(){
	if (roomLoc === 3 && knowledge === 0){
		msg = "You look at the computer to find you need a password and username." 
	}else if (roomLoc === 3 && knowledge === 1){
		msg = "You enter the password and username to gain access all you find is a door override and activate it."
		metalDoorOpen = 1
	}
}

function takePainkiller(){
	if (painkiller === 1 && pain === 5){
		pain = 0
		msg = "you take a painkiller and your body feels better."
	}else{
		msg = "you dont think thats a good idea."
	}
}

function take(){
	if (roomLoc === 4){
		if (memo === 0){
			msg = "You take the memo."
			memo = 1
		}else if(memo === 1){
			msg = "You already have taken the memo."
		}
	}else if (roomLoc === 5){
		if (painkiller === 0){
			msg = "You take the medicine."
			painkiller = 1 
		}else if(painkiller === 1){
			msg = "You check the medicine cabinet but find nothing."
		}
	}else if (roomLoc === 8){
		if(flashlight === 0){
			msg = "You take the flashlight."
			flashlight = 1
		}else if(flashlight === 1){
			msg = "You already took the flashlight"
		}
	}else{
		msg = "There is nothing to take."
	}
}

function examine(){
	if (roomLoc === 5){
		msg = "A basic medical bay, you search around and you see medicine in the cabinets." 
	}else if(roomLoc === 3){
		msg = "You find old computers some broken with smashed monitors, one that still seem functional."
	}else if(roomLoc === 8){
		msg = "You look around to find a flashlight inside the drawer and a few rounds 20 gauge rounds."
	}else if(roomLoc === 4){
		msg = "You check around the lounge only to find a bulletin board with a memo pinned to it."
	}else{
		msg = "The room shows no interest."
	}
	textMessage(msg)
}

function inventory(){
	var memoCheck = 0
	var painkillerCheck = 0
	var shotgunRoundsCheck = 0
	var flashlightCheck = 0
	for (var inv = 0; inv < 10; inv = inv + 1){ 
		if (memo === 1 && memoCheck === 0){
			msg = "You have a Memo" + msg
			memoCheck = 1
		}else if (flashlight === 1 && flashlightCheck === 0){
			msg = "You have a Flashlight" + msg
			flashlightCheck = 1
		}else if (shotgunRounds === 1 && shotgunRoundsCheck === 0){
			msg = "You have Shotgun Rounds" + msg
			shotgunRoundsCheck = 1
		}else if (painkiller === 1 && painkillerCheck === 0){
			if (memo === 1){
				msg = "You have a bottle of Painkillers\n\n" + msg
				painkillerCheck = 1
			}else{
				msg = "You have a bottle of Painkillers" + msg
				painkillerCheck = 1
			}
		}else if (painkiller === 0 && memo === 0 && invCheck === 0){
			msg = "You have picked up nothing"
			invCheck = 1
		}
	}
	memoCheck = 0
	painkilllerCheck = 0
	invCheck = 0
}

function read(){
	if (memo === 1){
		msg = "You read the memo to find a password and username. You dont understand what it could be used for."
		knowledge = 1
	}else if(memo === 0){
		msg = "You have nothing to read."
	}
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
