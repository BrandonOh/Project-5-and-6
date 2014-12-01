var roomLoc = 0
var room1_Points = 0
var room2_Points = 0
var room3_Points = 0
var room4_Points = 0
var room5_Points = 0
var room6_Points = 0
var room7_Points = 0
var room8_Points = 0
var room9_Points = 0
var pain = 0
var totalPoints = 0
var metalDoorOpen = 0

function myNorthFunction(){
	var targetPointTextArea = document.getElementById("pointScreen");
	if(roomLoc === 0 && pain <= 4){
		roomLoc = 1
		enable(false,false,false,false)
		storyProgression()
		painMeter()
		if(room1_Points === 0){
			totalPoints += 5
			room1_Points = 1
			targetPointTextArea.value = "total points: " + totalPoints
		}
	}else if(roomLoc === 1 && pain <= 4){
		roomLoc = 3
		enable(true,false,false,false)
		storyProgression()
		painMeter()
		if(room3_Points === 0){
			totalPoints += 5
			room3_Points = 1
			targetPointTextArea.value = "total points: " + totalPoints
		}
	}else if(roomLoc === 8 && pain <= 4){
		roomLoc = 2
		enable(true,false,false,false)
		storyProgression()
		painMeter()
	}else if(pain === 5){
		painMeter()
	}else{
		wrongWay()
	}
}
function mySouthFunction() {
	var targetPointTextArea = document.getElementById("pointScreen");
	if(roomLoc === 3 && pain <= 4){
		roomLoc = 1
		enable(false,false,false,false)
		storyProgression()
		painMeter()
	}else if(roomLoc === 1 && pain <= 4){
		roomLoc = 0
		enable(false,true,true,false)
		storyProgression()
		painMeter()
	}else if(roomLoc === 2 && pain <= 4){
		roomLoc = 8
		enable(false,true,true,true)
		storyProgression()
		painMeter()
		if(room8_Points === 0){
			totalPoints += 5
			room8_Points = 1
			targetPointTextArea.value = "total points: " + totalPoints
		}
	}else if(pain === 5){
		painMeter()	
	}else{
		wrongWay()
	}
}
function myEastFunction(){
	var targetPointTextArea = document.getElementById("pointScreen");
	if(roomLoc === 1 && pain <= 4){
		roomLoc = 2
		enable(true,false,false,false)
		storyProgression()
		painMeter()
		if(room2_Points === 0){
			totalPoints += 5
			room2_Points = 1
			targetPointTextArea.value = "total points: " + totalPoints
		}
	}else if(roomLoc === 5 && pain <= 4){
		roomLoc = 0
		enable(false,true,true,false)
		storyProgression()
		painMeter()
	}else if(roomLoc === 2 && pain <= 4){
		if (metalDoorOpen === 0){
		msg = "you cannot enter the room. The door is sealed shut."
		textMessage(msg)
		}else if(metalDoorOpen === 1){
			roomLoc = 7
			enable(true,true,true,false)
			storyProgression()
			painMeter()
			if(room7_Points === 0){
				totalPoints += 5
				room7_Points = 1
				targetPointTextArea.value = "total points: " + totalPoints		
			}
		}
	}else if(roomLoc === 3 && pain <= 4){
		roomLoc = 9
		enable(true,true,true,false)
		storyProgression()
		painMeter()
		if(room9_Points === 0){
			totalPoints += 5
			room9_Points = 1
			targetPointTextArea.value = "total points: " + totalPoints
		}
	}else if(roomLoc === 6 && pain <= 4){
		roomLoc = 3
		enable(true,false,false,false)
		storyProgression()
		painMeter()
	}else if(roomLoc === 4 && pain <= 4){
		roomLoc = 1
		enable(false,false,false,false)
		storyProgression()
		painMeter()
	}else if(pain === 5){
		painMeter()
	}else{
		wrongWay()
	}
}
function myWestFunction(){
	var targetPointTextArea = document.getElementById("pointScreen");
	if(roomLoc === 1 && pain <= 4){
		roomLoc = 4
		enable(true,true,false,true)
		storyProgression()
		painMeter()
		if(room4_Points === 0){
			totalPoints += 5
			room4_Points = 1
			targetPointTextArea.value = "total points: " + totalPoints
		}
	}else if(roomLoc === 7 && pain <= 4){
		roomLoc = 2
		enable(true,false,false,false)
		storyProgression()
		painMeter()
	}else if(roomLoc === 0 && pain <= 4){
		roomLoc = 5
		enable(true,true,false,true)
		storyProgression()
		painMeter()
		if(room5_Points === 0){
			totalPoints += 5
			room5_Points = 1
			targetPointTextArea.value = "total points: " + totalPoints
		}
	}else if(roomLoc === 3 && pain <= 4){
		roomLoc = 6
		enable(true,true,false,true)
		storyProgression()
		painMeter()
		if(room6_Points === 0){
			totalPoints += 5
			room6_Points = 1
			targetPointTextArea.value = "total points: " + totalPoints
		}
	}else if(roomLoc === 2 && pain <= 4){
		roomLoc = 1
		enable(false,false,false,false)
		storyProgression()
		painMeter()
	}else if(roomLoc === 9 && pain <= 4){
		roomLoc = 3
		enable(true,false,false,false)
		storyProgression()
		painMeter()
	}else if(pain === 5){
		painMeter()
	}else{
		wrongWay()
	}
}

function enable(N,S,E,W) {
	document.getElementById("mySouthBtn").disabled = S
	document.getElementById("myNorthBtn").disabled = N
	document.getElementById("myEastBtn").disabled = E
	document.getElementById("myWestBtn").disabled = W
}

function painMeter(){
	var msg = "your body hurts to much to take that action.";
	if (pain <= 4){
		pain = 1 + pain
	}else if (pain === 5){
	 	textMessage(msg)
	} 
}

function wrongWay(){
	var msg = "There is no door that way."
	textMessage(msg)
}
