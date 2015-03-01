#include <stdio.h>
#include <limits.h>
 
// Number of vertices in the graph
#define V 5
#define FALSE 0
 
int minDistance(int dist[], int sptSet[]) {
  
  int min_index;
  int min;

  min = INT_MAX;
 
  for (int v = 0; v < V; v++) {
    
    if (sptSet[v] == FALSE && dist[v] <= min) {
    
      min = dist[v];
      min_index = v;
    
    }
  
  }
 
  return min_index;
}
 
int printSolution(int dist[], int n) {

  int max;
  
  max = 0;

  printf("Vertex   Distance from Source\n");

  for (int i = 0; i < V; i++) {
    if (dist[i] > max) {
      max = dist[i];
    }
    printf("%d \t\t %d\n", i, dist[i]);
  }

  printf("The time it is received in the last city to get the message = %d \n", max);
}
 
void dijkstra(int graph[V][V], int src) {
    
  int dist[V];
 
  int sptSet[V];
 
  for (int i = 0; i < V; i++) {

    dist[i] = INT_MAX;
    sptSet[i] = 0;
  }
 
  dist[src] = 0;

  for (int count = 0; count < V-1; count++) {
    
    int u = minDistance(dist, sptSet);

    sptSet[u] = 1;

    for (int v = 0; v < V; v++) {

      if (!sptSet[v] && graph[u][v] && dist[u] != INT_MAX && (dist[u] + graph[u][v] < dist[v]) ) {
      
        dist[v] = dist[u] + graph[u][v];
      
      }
    }
  }
 
  printSolution(dist, V);
}
 
int main() {
  
  int graph[V][V] = {
                      {0, 50, 30, 100, 10},
                      {50, 0, 5, 20, 0},
                      {30, 5, 0, 50, 0},
                      {100, 20, 50, 0, 10},
                      {10, 0, 0, 10, 0}
                    };
 
  dijkstra(graph, 0);
 
  return 0;
}