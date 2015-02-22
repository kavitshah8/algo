#include <stdio.h>

int isUniqueStr(char *);

int main(){

	int result;

	char *str = "Helo";

	result = isUniqueStr(str);

	printf("Unique = %d\n", result);

	return 0;

}

int isUniqueStr(char *str){

	int charSet[256] = {0};
	int i;

	for(i = 0; i < strlen(str); i++){

		if (charSet[ str[i] ])

			return 0;
		
		charSet[ (int)str[i] ] = 1;
	
	}

	return 1;

}