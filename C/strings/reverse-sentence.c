#include <stdio.h>

void reverseSentence(char*);
void reverseWord(char*, char*);

int main()
{

	char str[] = "Hello";

	reverseWord(str, str+4);	
	printf(" %s\n",str);

	return 0;
}

void reverseSentence(char* s)
{
	// while(s){
		printf(" %s\n",s);
		// s++;
	// }
}

void reverseWord(char* begin, char* end)
{
	char temp;
	while (begin < end)
	{
		temp = *begin;
		*begin = *end;
		*end = temp;
		begin++;
		end--;
		// *begin++ = *end;
		// *end-- = temp;
	}
}