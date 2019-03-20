var findCircleNum = function(M) {
    var result = 0;
    var visited = [];
    var stack = [];

    for (var i = 0; i < M.length; i++) {

        if (!visited[i]) {
          result++;
          visited[i] = 1;
          stack.push(i);

          while (true) {
            if (stack.length === 0)
              break;

            var q = stack.pop();

            for (var j = 0; j < M.length; j++) {
              if (M[q][j] === 1 && !visited[j]) { 
                visited[j] = 1;
                stack.push(j); 

              } // if
            }  //for
          } // while
        } // if 
    }// for
    return result; 
  }
