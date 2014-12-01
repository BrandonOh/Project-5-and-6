var painkiller = 0
var memo = 0
var flashlight = 0
var shotgunRounds = 0
var knowledge = 0
var invCheck = 0
var msg = ""

function btnGo_click(){
	var input = document.getElementById("txtCommand").value;
	input = input.toLowerCase();
	if (input === "n" || input === "north"){
		myNorthFunction()
	}else if (input === "s" || input === "south"){
		mySouthFunction()
	}else if (input === "e" || input === "east"){
		myEastFunction()
	}else if (input === "w" || input === "west"){
		myWestFunction()
	}else if (input === "help"){
		help()
	}else if (input === "read memo"){
		read()
	}else if (input === "examine"){
		examine()
	}else if (input === "inventory"){
		inventory()
	}else if (input === "take memo" || input === "take medicine"){
		take()
	}else if (input === "use painkiller"){
		takePainkiller()
	}else if (input === "use computer"){
		computer()
	}else{
		msg = "I do not understand that action " + input + ". Please type help for possible actions."
	}
	textMessage(msg)
	document.getElementById("txtCommand").value = ""
	msg = ""
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
			msg = "You take the medicine to find they are painkillers."
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

function help(){
		msg = "Commands that are valid are:\n\nTo go South = s or south\n\nTo go North = n or north\n\nTo go East = e or east\n\nTo go West = w or west\n\nTo examine the room you are in = examine\n\nTo take objects = take ______\n\nTo read something in your inventory = read _____\n\nTo use objects = use _____\n\nCommands are not case sensitive."	
}