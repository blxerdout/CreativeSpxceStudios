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