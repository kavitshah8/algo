function primeFactors(num) {
	
	while (num % 2 === 0) {
		console.log(2);
		num = num / 2;
	}

	for (var i = 3; i <= Math.sqrt(num); i++) {
		while (num % i === 0) {
			console.log(i);
			num = num / i;
		}
	}

	if (num > 2) {
		console.log(num);
	}
}

primeFactors(10);
