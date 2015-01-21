var name = 'Kavit';

var obj = {

	name: 'Teju',

	prop: {

		name: 'Yugam',

		getName: function () {

			return this.name;
		}
	}

};

// In JavaScript context of this depends on how a function is invoked, not how it’s defined.

console.log(obj.prop.getName()); // Yugam

var test = obj.prop.getName;
console.log(test()); // Kavit in browser, but undefined in node environment

console.log(test.call(obj.prop)); // changing the scope of this with call