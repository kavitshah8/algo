#include <stdio.h>

void reverseSentence(char*);
void reverse(char*, char*);

int main(){
	char str[] = "Hello";
	reverse(str, str+4);	
	printf(" %s\n",str);
	return 0;
}

void reverseSentence(char* s){
	// while(s){
		printf(" %s\n",s);
		// s++;
	// }
}

void reverse(char* begin, char* end){
	char temp;
	while (begin < end){
		temp = *begin;
		*begin++ = *end;
		*end-- = temp;
	}
}