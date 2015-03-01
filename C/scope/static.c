#include <stdio.h>

static int gloabl; // Default initialize to 0; int global is initialize to static

void f();
void g();

int main(){
	f();
	f();
	f();
	f();

	g();
	return 0;
}

void f(){

	// Counts the number of times a function was called
	
	static int count; // Default Initialization is 0
	printf("Count = %d \n", count);
	printf("Gloabal from f: %d \n", gloabl );
	count++;

}

void g(){

	printf("Gloabal from g: %d \n", gloabl );
}