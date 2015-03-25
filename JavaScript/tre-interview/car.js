var automobile = require('./automobile');

var Car = function () {

	this.topSpeed = 120;
};

Car.prototype = automobile();

Car.prototype.skid = function () {

	console.log("Skid Method of Car");
};

Car.prototype.brake = function () {
	
	this.skid();
	// This will create lots of instances of automobile if we are using car brake often
	// Better way might be to use apply method
	var automobileInstance = automobile();
	automobileInstance.brake();

	console.log("Brake Method of Car");
};

module.exports = function () {	

	var instance = new Car();
	return instance;
};