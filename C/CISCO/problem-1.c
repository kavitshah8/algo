#include <stdio.h>

void SwapBytes(void *i, size_t n)
{
    char *p = (char*)i;
    
    size_t low_bit, high_bit;

    for( low_bit = 0, high_bit = n-1; high_bit > low_bit; low_bit++, high_bit--)
    {
      char tmp = p[low_bit];
      p[low_bit] = p[high_bit];
      p[high_bit] = tmp;
    }
}

int main() 
{	
  unsigned int i = 0x12345678;

  int a = 0x1;
  
  char *c = (char*)&a;

  printf("i = %x\n" , i);

  SwapBytes(&i, sizeof(i));

  printf("i = %x\n" , i);

  if (*c)    
    printf("Little endian\n");
  else
    printf("Big endian\n");

  return 0;
}