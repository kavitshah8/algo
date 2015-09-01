function Employee(name) {
	this.name = name;
}

Employee.prototype.getName = function() {
	return this.name;
};

Employee.prototype.setName = function(name) {
	this.name = name;
};

var e1 = new Employee();
e1.setName('Tom');
console.log(e1.getName()); // Tom

var e2 = new Employee();
console.log(e2.getName()); // undefined