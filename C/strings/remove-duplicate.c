#include <stdio.h>

#define NO_OF_CHARS 256

void removeDuplicate(char *str);

int main(){

	char str[] = "Hello";

	// char *str = "Hello"; Gives Segmentation Fault

	removeDuplicate(str);

	return 0;
}

void removeDuplicate(char *str){
	
	int bin_hash[NO_OF_CHARS] = {0};
  
  int ip_ind = 0, res_ind = 0; 
  
  char temp;    
 
  /* In place removal of duplicate characters*/ 
  while(*(str + ip_ind))
  {
    temp = *(str + ip_ind);
    if(bin_hash[temp] == 0)
    {
        bin_hash[temp] = 1;
        *(str + res_ind) = *(str + ip_ind);
        res_ind++;         
    }
    ip_ind++;
  }      
 
  *(str+res_ind) = '\0';   
   
  printf("%s \n",str);

}