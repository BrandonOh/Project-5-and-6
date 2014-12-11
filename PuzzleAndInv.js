var metalDoor = false
var elevatorPower = false

var objects = new Array
objects[4] = memo
objects[5] = medicine
objects[8] = flashlight
objects[undefined] = knowledge
objects[7] = key
objects[0] = paperAndPencil

var inv = new Array

function puzzle(nextRoomLoc){
	if (nextRoomLoc === 7){
		if (metalDoor === false){
			msg = "The metal door is locked and you don't see a way to open it."
			textMessage(msg)
		}else if (metalDoor === true && flashlight.have === false){
			msg = "You enter the metal door to find a pitch dark room unable to see anything and disgusted by an unfamiliar smell you leave."
			textMessage(msg)
		}else if(metalDoor === true && flashlight.have === true){
			textMessage(rooms[nextRoomLoc])
			roomLoc = nextRoomLoc
		}
	}else if (nextRoomLoc === 10){
		if (key.have === false){
			msg = "You descend downwards only to find the door locked."
			textMessage(msg)
		}else if (key.have === true){
			textMessage(rooms[nextRoomLoc])
			roomLoc = nextRoomLoc
		}
	}else{
		textMessage(rooms[nextRoomLoc])
		roomLoc = nextRoomLoc
	}
}

function take(){
	if (roomLoc === 4){
		if (memo.have === false){
			inv.push(objects[roomLoc].name)
			msg = "You take the memo."
			memo.have = true
		}else if(memo.have === true){
			msg = "You already have taken the memo."
		}
	}else if (roomLoc === 0){
		if (paperAndPencil.have === false){
			msg = "You find some paper and a pencil you should use this to know where you have been, this place looks confusing."
			paperAndPencil.have = true
			inv.push(objects[roomLoc].name)
			document.getElementById("map").style.visibility = "visible"
			document.getElementById("clear button").style.visibility = "visible"
		}else if (paperAndPencil.have === true){
			msg = "You already have enough paper and you only need one pencil"
		}
	}else if (roomLoc === 5){
		if (medicine.have === false){
			msg = "You take the medicine."
			medicine.have = true 
			inv.push(objects[roomLoc].name)
		}else if(medicine.have === true){
			msg = "You check the medicine cabinet but find nothing."
		}
	}else if (roomLoc === 8){
		if(flashlight.have === false){
			inv.push(objects[roomLoc].name)
			msg = "You take the flashlight."
			flashlight.have = true
		}else if(flashlight.have === true){
			msg = "You already took the flashlight"
		}
	}else if (roomLoc === 7){
		if(key.have === false){
			inv.push(objects[roomLoc].name)
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
	if (roomLoc === 0){
		msg = paperAndPencil.desc
	}else if(roomLoc === 3){
		msg = "You find old computers some broken with smashed monitors, one that still seem functional."
	}else if(roomLoc === 4){
		msg = memo.desc
	}else if(roomLoc === 5){
		msg = medicine.desc
	}else if(roomLoc === 7){
		msg = key.desc
	}else if(roomLoc === 8){
		msg = flashlight.desc
	}else if(roomLoc === 10){
		msg = "You examine the electrical breakers in the room and notice that its missing a fuse to connect the power."
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
		metalDoor = true
	}else{
		msg = "There are no computers around you to use."
	}
	textMessage(msg)
}

function electricalBreaker(){
	if (roomLoc === 10 && key.have === true){
		msg = "You insert the key carefully to connect the metal to create a current you hear the elevator power on."
		elevatorPower = true
	}else{
		msg = "HaHaHa you must think your really funny using a command that you probably looked in the code for or already played and beat this game you must feel like a real hotshot."	
	}
	textMessage(msg)
}

function useMedicine(){
	if (medicine.have === true && pain === 5){
		pain = 0
		msg = "You take some medicine and your body feels better."
		textMessage(msg)
	}else if(medicine.have === true && pain < 5){
		msg = "You dont think thats a good idea."
		textMessage(msg)
	}else {
		msg = "You have no medicine to take."
		textMessage(msg)
	}
}

function elevator(){
	if (elevatorPower === false){
		msg = "You enter only to find that it has no power running through it."
	}else if(elevatorPower === true){
		msg = "You enter the elevator and see a button that spells surface. You press the button and hear the elevator ascending...but as it ascends gas fills the elevator. The last thing you see before passing out are the shoes of scientist surrounding you saying how you wont escape that cage again. TO BE CONTINUED...MAYBE"
		document.getElementById("myNorthBtn").disabled = true;
		document.getElementById("mySouthBtn").disabled = true;
		document.getElementById("myEastBtn").disabled = true;
		document.getElementById("myWestBtn").disabled = true;
		document.getElementById("myGoBtn").disabled = true;
	}
	textMessage(msg)
}

function read(){
	if (memo.have === true){
		msg = "You read the memo to find a password and username. You dont understand what it could be used for. You also see that its Dans birthday today good for him!"
		knowledge.have = true
		inv.push(objects[undefined].name)
	}else if(memo.have === false){
		msg = "You have nothing to read."
	}
	textMessage(msg)
}
