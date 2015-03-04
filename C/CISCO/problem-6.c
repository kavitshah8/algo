#include <fstream>

using namespace std;

int main()
{
	fstream fp;

	fp.open("data.bin", ios::in | ios::binary);
	
	fp.close();

	return 0;
}