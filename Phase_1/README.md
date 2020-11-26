**Phase_1**
**DM 109 Fall 2020: Project Phase_1**

## Description ##
This repository contains assignments Project Phase_01 submitted to DM course offered in Fall 2020 at PafKiet.

##----------Complexity: o(n3)-----------##

Because we use three loops and the time complexity is O(n^3).


##--------Introduction-----------##

Warshall algorithm is for finding the shortest parth between all the pairs of vertices in a waited graph. At the beginning of the algorithm we input  a N*N matrix yhtough input and in this input type = "text" generate a 100* 100 matrix randomly and in this 100 * 100 matrix we get a matrix according to the input we get from input type="text" for example(i.e. 4 <= N <= 100). Now separate a commas and space from the matrix 100 * 100 matrix and store it in var. Then implement this algorithm.



##----------Perfgormance.now()-----------##
We used this function on each value of input matrix from 100 * 100 matrix(i.e. 4 <= N <= 100) on this algorithm. We noticed that if we input 4 so we get the performance or time which is something -0.11 and now we increase our input from 4 --> 4+1. So this function gives a time on this algorithm is -1.12 so every time we increment a user input value, so time is also increasing. At the end, this algorithm is not working after the input of 25. last input of 25 * 25 matrix we have performance.now() value is -5.22


##------Best Used-------##

This Algorithm is best used when we are not directly identified whether it is transitive or not. It is implemented on dense graph. It iterates continuously when new elements will not identified according to the given input. This Algorithm is not working to finding a transitive closer on the above wale of 25.
