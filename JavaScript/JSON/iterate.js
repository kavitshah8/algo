var json = {"firstName":"Kavit",
	"lastName":"Shah",
	"contactNumber":"408410----"
};

for (var key in json){

	if(json.hasOwnProperty(key)){

		console.log(json[key]);
	}
}