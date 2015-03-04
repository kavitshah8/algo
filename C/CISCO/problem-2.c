// #include <stdio.h>

// short foo()
// {
//   short a,b,c;
//   b=10;

//   c = a + b;
//  	printf("c= %d\n",c);
//   return c; 
// }

// int main()
// {
// 	foo();
// 	return 0;
// }

#include <stdio.h>
int main() 
{
   unsigned int i = 1;
   char *c = (char*)&i;
   if (*c)    
       printf("Little endian");
   else
       printf("Big endian");
   getchar();
   return 0;
}