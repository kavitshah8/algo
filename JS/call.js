	//  Without modifying this function in any way, how can you execute it in such a way where it will output “Joe is hungry”

function speak() {

  var reply = [this.person,'is',this.feeling].join(' ');

  console.log(reply);
}

var i = {person: 'Joe', feeling: 'hungry'};

speak.call(i);