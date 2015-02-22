#include <stdio.h>

void reverseWord(char*, char*);

int main() {

	char str[] = "Hello World";

	int len = strlen(str) - 1;

	reverseWord(str, str + len);	

	printf("%s \n",str);

	return 0;
}

void reverseWord(char* begin, char* end) {

	char temp;
	
	while (begin < end)
	{
		temp = *begin;
		*begin = *end;
		*end = temp;
		begin++;
		end--;
	}

}