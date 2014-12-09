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

function painMeter(){
	var msg = "your body hurts to much to take that action.";
	if (pain <= 4){
		pain = 1 + pain
	}else if (pain === 5){
	 	textMessage(msg)
	} 
}
