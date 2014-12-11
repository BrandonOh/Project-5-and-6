function init(){
	msg= "You awake dazed and confused, you look around to see that you are laying on a pile of glass infront a huge shattered glass tube. You feel pain as you see parts of glass in you body. Though the pain is bad you find the strength to get up and search for a way out."
	textMessage(msg)
	
	canvas = document.getElementById('map');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
    
	document.getElementById("map").style.visibility = "hidden"
	document.getElementById("clear button").style.visibility = "hidden"
}

function Locations() {
	this.id = 0
	this.name = ""
	this.desc = ""
	this.item = false
	this.points = false
	this.toString = function(){
		var returnDesc = ""
		returnDesc = this.desc
		return returnDesc
	}
}

function Item() {
  this.id = 0
  this.name = ""
  this.desc = ""
  this.have = false
}

var roomLoc_0 = new Locations()
roomLoc_0.id = 0
roomLoc_0.name = "Starting Room"
roomLoc_0.desc = "Your re-enter the room you were dazed and confused in, only to find nothing interesting."
roomLoc_0.item = false
roomLoc_0.points = false

var roomLoc_1 = new Locations()
roomLoc_1.id = 1
roomLoc_1.name = "Four Door Room"
roomLoc_1.desc = "You enter a room with four doors going in different directions."
roomLoc_1.item = false
roomLoc_1.points = false

var roomLoc_2 = new Locations()
roomLoc_2.id = 2
roomLoc_2.name = "Metal Door Room"
roomLoc_2.desc = "You enter the room to find a metal door to the east and normal doors to the south and west."
roomLoc_2.item = false
roomLoc_2.points = false

var roomLoc_3 = new Locations()
roomLoc_3.id = 3
roomLoc_3.name = "Computer Room"
roomLoc_3.desc = "You go through the door to find a room full of computers."
roomLoc_3.item = false
roomLoc_3.points = false

var roomLoc_4 = new Locations()
roomLoc_4.id = 4
roomLoc_4.name = "Lounge Room"
roomLoc_4.desc = "You enter a lounge room absent of life."
roomLoc_4.item = true
roomLoc_4.points = false

var roomLoc_5 = new Locations()
roomLoc_5.id = 5
roomLoc_5.name = "Medical Room"
roomLoc_5.desc = "You find a medical room full of cabinets and surgery tools."
roomLoc_5.item = true
roomLoc_5.points = false

var roomLoc_6 = new Locations()
roomLoc_6.id = 6
roomLoc_6.name = "Elevator Room"
roomLoc_6.desc = "You find an elevator that seems to go to up. You enter only to find that it has no running through it."
roomLoc_6.item = false
roomLoc_6.points = false

var roomLoc_7 = new Locations()
roomLoc_7.id = 7
roomLoc_7.name = "Cage Room"
roomLoc_7.desc = "You use the flashlight in your inventory to light the room. Disgusted you find dismembered bodies scattered around the room with a single open cage in the corner."
roomLoc_7.item = false
roomLoc_7.points = false

var roomLoc_8 = new Locations()
roomLoc_8.id = 8
roomLoc_8.name = "Managers Room"
roomLoc_8.desc = "You enter what seems to be the managers room nothing seems out of place."
roomLoc_8.item = true
roomLoc_8.points = false

var roomLoc_9 = new Locations()
roomLoc_9.id = 9
roomLoc_9.name = "Stair Room"
roomLoc_9.desc = "You find stairs, but to your despair they descend."
roomLoc_9.item = false
roomLoc_9.points = false

var roomLoc_10 = new Locations()
roomLoc_10.id = 10
roomLoc_10.name = "Generator Room"
roomLoc_10.desc = "You use the key to enter through the door. You find the room full of generators and lockers."
roomLoc_10.item = false
roomLoc_10.points = false

var flashlightAndShells = new Item()
flashlightAndShells.id = 8
flashlightAndShells.name = "Flashlight and Shotgun Shells"
flashlightAndShells.description = "You look around to find a flashlight inside the drawer and a few 20 gauge rounds."
flashlightAndShells.have = false

var paperAndPencil = new Item()
paperAndPencil.id = 0
paperAndPencil.name = "Paper and Pencil"
paperAndPencil.description = "You look around and see some desks, papers and pencils. You also see the shattered remains of the test tubes you were encased in but you ignore it fearing you might be put back in."
paperAndPencil.have = false

var medicine = new Item()
medicine.id = 5
medicine.name = "Medicine"
medicine.description = "A basic medical bay, you search around and you see medicine in the cabinets." 
medicine.have = false

var memo = new Item()
memo.id = 4
memo.name = "Memo"
memo.description = "You check around the lounge only to find a bulletin board with a memo pinned to it."
memo.have = false

var knowledge = new Item()
knowledge.id = undefined
knowledge.name = "Knowledge"
knowledge.description = "You read the memo to find a password and username. You dont understand what it could be used for."
knowledge.have = false

var key = new Item()
key.id = 7
key.name = "Basement Key"
key.description = "You take a look around the room disgusted to find a key in a pile of meat in the cage."
key.have = false

var shotgun = new Item()
shotgun.id = 10
shotgun.name = "Shotgun"
shotgun.description = "You find a shotgun in the locker, it seems to only hold two shells luckily thats all you have."
shotgun.have = false