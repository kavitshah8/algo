#include <stdio.h>

void f();

int main(){
	f();
	f();
	f();
	f();
	return 0;
}

void f(){

	// Counts the number of times a function was called
	
	static int count; // Default Initialization is 0
	printf("Count = %d \n", count);
	count++;
}