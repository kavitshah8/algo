#include <stdio.h>

int pow(int, int);

int main(void)
{
	int result;

	result = pow(3,4);

	printf("result = %d\n",result );

	return 0;
}

int pow(int base, int exponent)
{
	int result = 1;

	while( exponent != 0 )
	{
		if( (exponent & 1) == 1 )
		{
			result = result * base;
		}

		exponent = exponent >> 1;
		base = base * base;
	}

	return result;
}