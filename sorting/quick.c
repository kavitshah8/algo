/*
	Algorithm: Quick sort / Partition - exchange sort
	Avg case running time: O(n*log(n))
	Worst case running time: O(n*n)

	Related questions:
	Q1) An array contains some random positive and negative numbers.
			Arrange array elements such that all positive elements are on left side, don't care about negative elements. 
		 	Number of operations allowed - O(n) 
	A1) Append 0 to the array and set it as the pivot and run descending quicksort. 
			All values greater than 0 will end up on the left side after 1 iteration.
*/

#include <stdio.h>
#include <time.h>

#define SIZE 10

void initializeArray(int arr[]);
void printArray(int arr[]);
void sort(int arr[], int, int);
int partition(int arr[], int, int);

int main(){

	int arr[SIZE];

	srand(time(NULL));
	
	initializeArray(arr);

	printf("Unsorted Array \n");
	printArray(arr);

	sort(arr, 0, SIZE-1);
	
	printf("Sorted Array \n");
	printArray(arr);

	return 0;
}

void initializeArray(int arr[]){

	int i;

	for (i = 0; i < SIZE; i++){
		arr[i] = rand() % SIZE;
	}

}

void printArray(int arr[]){
	
	int i;

	for (i = 0; i < SIZE; i++){
		printf("arr[%d] = %d\n", i, arr[i]);
	}	

}

// Ascending quick sort
void sort(int arr[], int l, int r){

	int m;

	if (l < r){
		m = partition(arr, l, r);
		sort(arr, l, m-1);
		sort(arr, m+1, r);
	} 
}

int partition(int arr[], int l, int r){
	
	int i, j;
	int pivot, t;

	// saves the pivot for swapping
	pivot = arr[l];

	// stores starting and ending indxes
	i = l;
	j = r + 1;

	while (1){

		// finds the first element bigger than pivot from left side
		do{
			++i;
		}while (arr[i] <= pivot && i <= r);
		
		// finds the first element smaller than pivot from right side
		do{
			--j;
		}while (arr[j] > pivot);
		
		if (i >= j){
			break;
		}

		// swaps values
		t = arr[i];
		arr[i] = arr[j];
		arr[j] = t;
	}

	// swaps pivot
	arr[l] = arr[j];
	arr[j] = pivot;

	return j;
}
