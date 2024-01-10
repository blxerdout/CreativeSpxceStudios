'use strict';


console.log("hello world")
console.log("People Soft")
 var test = typeof(true)
 console.log(test)

 
 var car = {};
 car.milage = 98765;
 car.color = "red";
 console.log(car)
 car.turnTheKey = function() {
    console.log("The engine is running")
 }
 car.theLightsOn = function() {
    console.log("The lights are on")
 }
 console.log(car);
 car.turnTheKey();
car.theLightsOn()

var videoGame = {};
videoGame.genre = "Fighting Games";
videoGame.platform = "Playstation 5";
console.log(videoGame)
videoGame.powerOn = function() {
   console.log("Playstation 5 powered on")
}
videoGame.powerOff = function() {
   console.log("Playstation 5 powered off")
}
console.log(videoGame)
videoGame.powerOn();
videoGame.powerOff()

//creating an object
var virtualPet = {
   sleepy: true,
   nap: function() {
       this.sleepy = false
   }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

var newHouse = {};
newHouse.address = "1000 Main Street New York NY, 12345";
newHouse.layout = "2 Story single Family"
newHouse.price = "$200,000"
console.log(newHouse)

newHouse.homeForsale = function() {
   console.log("This home is forsale.")
}

newHouse.homeSold = function () {
   console.log("This home has been sold.")
}
console.log(newHouse)
newHouse.homeForsale()