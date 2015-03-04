#include <stdio.h>

void SwapBytes(void *pv, size_t n)
{
    char *p = (char*)pv;
    size_t lo, hi;

    for( lo = 0, hi = n-1; hi > lo; lo++, hi--)
    {
        char tmp = p[lo];
        p[lo] = p[hi];
        p[hi] = tmp;
    }
}

int main() 
{	
  unsigned int i = 0x12345678;

  char *c = (char*)&i;

  printf("i = %x\n" , i);

  SwapBytes(&i, sizeof(i));
  printf("i = %x\n" , i);

  if (*c)    
    printf("Little endian\n");
  else
    printf("Big endian\n");

  return 0;
}