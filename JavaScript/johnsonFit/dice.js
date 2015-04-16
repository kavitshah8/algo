function sum(str) {

  if(typeof str === 'string') {

    var splitter = str.indexOf('d');

    var dice = parseInt(str.slice(0, splitter), 10);
    var validDiceRange = buildBoundsDetector(1,1000);    

    var sides = parseInt(str.slice(splitter+1, str.length), 10);
    var validSidesRange = buildBoundsDetector(2, 100);

    if (!validDiceRange(dice)) {
      console.log('Number of Dices are out of range. Please provide number of dices in the range [1, 1000]');
      return 0;
    } 

    if (!validSidesRange(sides)) {
      console.log('Number of sides of a dice are out of range. Please provide number of sides of a dice in the range [2, 100]');
      return 0;
    }

    var sum = 0;

    for(var i = 0; i < dice; i++) {
      sum += Math.floor(sides * Math.random());
    }

    return sum;
  }

  console.log('Please pass string as a function argument to sum function');
  return 0;
}

function buildBoundsDetector(lowerBound, upperBound) {  // returns function
  // implement me!
  return function(num) {
    if ( (num >= lowerBound) && (num <= upperBound) ) {
      return true;
    } else {
      return false;
    }
  };
}

console.log(sum('1d6'));
console.log(sum('3d18'));
console.log(sum('300d1800'));
console.log(sum('3000d18'));
console.log(sum(321));