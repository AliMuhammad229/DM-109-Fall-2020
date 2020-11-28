**Phase_Final**

###PROJECT MEMBERS###
StdID | Name
------------ | -------------
**64413** | **Ali Muhammad**
64071 | Talha Ahmed
64271 | Ashar Khan


Final Phase DM 109 Fall 2020: Project Final Phase

## Description ##

This repository contains assignments Project Final Phase submitted to DM course offered in Fall 2020 at PafKiet.

##----------Time Complexity-----------##

Because we use three loops and the time complexity is O(n^3).

##--------Introduction-----------##

Warshall algorithm is for finding the shortest parth between all the pairs of vertices in a waited graph. At the beginning of the algorithm we input a N * N matrix thtough input and in this input type = "text" generate a 100 100 matrix randomly and in this 100 * 100 matrix we get a matrix according to the input we get from input type="text" for example(i.e. 4 <= N <= 100). Now separate a commas and space from the matrix 100 * 100 matrix and store it in var. Then implement this algorithm.

##--------Plot Warshall Algorithm's time v/s N user input-----------##

We used a JS library called https://www.chartjs.org/ chart.js. We used this library to plot a graph on warshall algorithm's performance v/s the N userinput. We put the values of user input, for example(i.e. 4 <= N <= 100) on X-axis and put the values of performance on each user input on Y-axis. We clearly see that when we increment in our userinput on each iteration the performance will increasing according to the increase in user input value. This algorithm works till 25 * 25 matrix.


##--------Used Case-----------##

Warshall Algorithm. Warshall algorithm is used to find all pair shortest path problem from a given weighted graph. As a result of this algorithm, it will generate a matrix, which will represent the minimum distance from any node to all other nodes in the graph.

##----------Perfgormance.now()-----------##

We used this function on each value of input matrix from 100 * 100 matrix(i.e. 4 <= N <= 100) on this algorithm. We noticed that if we input 4 so we get the performance or time which is something 0.11 and now we increase our input from 4 --> 4+1. So this function gives a time on this algorithm is 1.12 so every time we increment a user input value, so time is also increasing. At the end, this algorithm is not working after the input of 25. last input of 25 * 25 matrix we have performance.now() value is 5.22.

##------Best Used-------##

This Algorithm is best used when we are not directly identified whether it is transitive or not. It is implemented on dense graph. It iterates continuously when new elements will not identified according to the given input. This Algorithm is not working to finding a transitive closer on the above wale of 25.

