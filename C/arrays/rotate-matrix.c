#include <stdio.h>
#include <time.h>

void print_matrix (int n, int arr[][n]);
void rotate_matrix (int n, int arr[][n]);
void initialize_matrix (int n, int arr[][n]);

int main()
{
	int i, j;

	int size = 0;

	srand(time(NULL));

	printf("Enter the size of square matrix = ");
	scanf("%d",&size);

	int arr[size][size];

	initialize_matrix(size, arr);

	print_matrix(size, arr);

	rotate_matrix(size, arr);

	print_matrix(size, arr);

	return 0;
}

void initialize_matrix (int size, int arr[][size])
{
	int i, j;
	for(i = 0; i < size; i++)
	{
		for(j = 0; j < size; j++)
		{
			arr[i][j] = rand();
		}
	}
}

void print_matrix(int size, int arr[][size])
{
	int i, j;

	for(i = 0; i < size; i++)
	{
		for(j = 0; j < size; j++)
		{
			printf("arr[%d][%d] = %d \t",i, j, arr[i][j]);
		}
		printf("\n");
	}

	printf("\n");

}

void rotate_matrix(int size, int arr[][size])
{
	int i, j;

	for(i = 0; i < size/2; i++)
	{
		int first = i;
		int last = size - i - 1;

		for(j = first; j < last; j++)
		{
			int offSet = j - first;

			int temp = arr[first][j];

			arr[first][j] = arr[last - offSet][first];

			arr[last - offSet][first] = arr[last][last - offSet];

			arr[last][last - offSet] = arr[j][last];

			arr[j][last] = temp;						

		}
	}	
}