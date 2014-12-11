var metalDoor = 0

var objects = new Array
objects[4] = memo
objects[5] = medicine
objects[8] = flashlightAndShells
objects[undefined] = knowledge
objects[7] = key
objects[0] = paperAndPencil

var inv = new Array

function puzzle(nextRoomLoc){
	if (nextRoomLoc === 7){
		if (metalDoor === 0){
			msg = "The metal door is locked and you don't see a way to open it."
		}else if (metalDoor === 1 && flashlightAndShells.have === false){
			msg = "You enter the metal door to find a pitch dark room unable to see anything and disgusted by an unfamiliar smell you leave."
		}else if(metalDoor === 1 && flashlightAndShells.have === true){
			textMessage(rooms[nextRoomLoc])
			roomLoc = nextRoomLoc
		}
		textMessage(msg)
	}else if (nextRoomLoc === 10){
		if (key.have === false){
			msg = "You descend downwards only to find the door locked."
		}else if (key.have === true){
			textMessage(rooms[nextRoomLoc])
			roomLoc = nextRoomLoc
		}
		textMessage(msg)
	}else{
		textMessage(rooms[nextRoomLoc])
		roomLoc = nextRoomLoc
	}
}

function take(){
	if (roomLoc === 4){
		inv.push(objects[roomLoc].name)
		if (memo.have === false){
			msg = "You take the memo."
			memo.have = true
		}else if(memo.have === true){
			msg = "You already have taken the memo."
		}
	}else if (roomLoc === 0){
		inv.push(objects[roomLoc].name)
		if (paperAndPencil.have === false){
			msg = "You find some paper and a pencil you should use this to know where you have been, this place looks confusing."
			paperAndPencil.have = true
			document.getElementById("map").style.visibility = "visible"
			document.getElementById("clear button").style.visibility = "visible"
		}else if (paperAndPencil.have === true){
			msg = "You already have enough paper and you only need one pencil"
		}
	}else if (roomLoc === 5){
		inv.push(objects[roomLoc].name)
		if (medicine.have === false){
			msg = "You take the medicine."
			medicine.have = true 
		}else if(medicine.have === true){
			msg = "You check the medicine cabinet but find nothing."
		}
	}else if (roomLoc === 8){
		inv.push(objects[roomLoc].name)
		if(flashlightAndShells.have === false){
			msg = "You take the flashlight and shotgun shells."
			flashlightAndShells.have = true
		}else if(flashlightAndShells.have === true){
			msg = "You already took the flashlight"
		}
	}else if (roomLoc === 7){
		inv.push(objects[roomLoc].name)
		if(key.have === false){
			msg = "You take the bloodied key, but you can read writing on the side spelling basement."
			key.have = true
		}else if (key.have === true){
			msg = "You decide not looking around any further in the cage."
		}
	}else{
		msg = "There is nothing to take."
	}
	textMessage(msg)
}

function inventory(){
	msg = "Your currently have in your inventory: " + inv
	textMessage(msg)
}

function examine(){
	if (roomLoc === 5){
		msg = medicine.description
	}else if (roomLoc === 0){
		msg = paperAndPencil.description
	}else if(roomLoc === 3){
		msg = "You find old computers some broken with smashed monitors, one that still seem functional."
	}else if(roomLoc === 8){
		msg = flashlightAndShells.description
	}else if(roomLoc === 4){
		msg = memo.description
	}else if(roomLoc === 7){
		msg = key.desctiption
	}else{
		msg = "The room shows no interest."
	}
	textMessage(msg)
}

function painMeter(){
	if (pain <= 4){
		pain = 1 + pain
	}else if (pain === 5 && medicine.have === false){
		msg = "your body hurts to much to take that action.You fall to the ground from the pain if only you found medicine. Reload the page to try again."
	 	textMessage(msg)
	}else if (pain === 5){
		msg = "your body hurts to much to take that action."
		textMessage(msg)
	}
}

function computer(){
	if (roomLoc === 3 && knowledge.have === false){
		msg = "You look at the computer to find you need a password and username." 
	}else if (roomLoc === 3 && knowledge.have === true){
		msg = "You enter the password and username to gain access all you find is a door override and activate it."
		metalDoor = 1
	}
	textMessage(msg)
}

function takePainkiller(){
	if (medicine.have === true && pain === 5){
		pain = 0
		msg = "you take some medicine and your body feels better."
		textMessage(msg)
	}else{
		msg = "you dont think thats a good idea."
		textMessage(msg)
	}
}

function read(){
	if (memo.have === true){
		msg = "You read the memo to find a password and username. You dont understand what it could be used for."
		knowledge.have = true
		inv.push(objects[undefined].name)
	}else if(memo.have === false){
		msg = "You have nothing to read."
	}
	textMessage(msg)
}
