// write an algorithm to find sum of numbers which are smaller than N and divisible by 3 or 5 

// My method is based on the mathematical formula that sum of numbers in between 1 and n which is "n*(n+1)/2"

// Let say N is 20
// the sum of numbers less than 20 and divisible by 3 are:
// 3 + 6 + 9 + 12 + 15 + 18 = (1+2+3+4+5+6)*3
// In this case, I can calculate the sum of numbers in between 1 and 6 by using "n*(n+1)/2". So this is equals to (6*7/2) * 3

// This is the same for the sum of numbers less than 20 and divisible by 5.
// 5 + 10 + 15 = (1+2+3)*5 => (3*4/2)*5

// As seen, we add 15 in both of operations, so we have to eliminate duplicates.
// In order to do that, I calculate the same for the sum of numbers less than 20 and divisible by 15.

// At the end, I add the sum of divisible by 3 and the sum of divisible by 5 than subtract the sum of divisible by 15

int addNumbers(int N);

int main() {

	int sum;

	sum = addNumbers(15);

	printf("Summation is %d: \n", sum);

	return 0;
}

int addNumbers(int N){

	int n3, n5, n15, sum;

	sum = 0;


	n3 = N / 3;
	sum += ( ( n3 * ( n3 + 1 ) ) / 2 ) * 3;

	n5 = N / 5;
	sum += ( ( n5 * ( n5 + 1 ) ) / 2 ) * 5;

	n15 = N / 15;
	sum -= ( ( n15 * ( n15 + 1 ) ) / 2 ) * 15;

	return sum;

}