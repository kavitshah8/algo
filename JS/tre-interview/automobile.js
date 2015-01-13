var Automobile = function () {

	this.topSpeed = 100;
	this.turnRadius = 20;
};

Automobile.prototype.accelerate = function () {

	console.log("Accelerate Method of Automobile");
};

Automobile.prototype.brake = function () {

	console.log("Brake Method of Automobile");
};

Automobile.prototype.honk = function () {

	console.log("Honk Method of Automobile");
};

module.exports = function () {	

	var instance = new Automobile();
	return instance;
};
