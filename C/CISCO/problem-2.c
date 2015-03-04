#include <stdio.h>

short foo()
{
  short a,b,c;
  b=10;

  c = a + b;
 	printf("c= %d\n",c);
  return c; 
}

int main()
{
	foo();
	return 0;
}