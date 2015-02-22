#include <stdio.h>

int main(){

	char *str = "Hello";

	printf("%s \n", str);

	printf("%p \n", str);
	printf("%p \n", str+1);

	printf("%c \n", *str);
	printf("%c \n", *(str+1));
	printf("%c \n", *(++str));
	printf("%c \n", *(str++));
	printf("%c \n", *str);
	
	return 0;
}