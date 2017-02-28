/*countNQueensSolutions = function(n) {
  //Keeps track of the # of valid solutions
  var count = 0;

  //Helps identify valid solutions
  var done = Math.pow(2,n) - 1;

  //Checks all possible board configurations
  var innerRecurse = function(ld, col, rd) {

    //All columns are occupied,
    //so the solution must be complete
    if (col === done) {
      count++;
      return;
    }

    //Gets a bit sequence with "1"s
    //whereever there is an open "slot"
    var poss = ~(ld | rd | col);

    //Loops as long as there is a valid
    //place to put another queen.
    while ( poss & done ) {
      var bit = poss & -poss;
      poss -= bit;
      innerRecurse((ld|bit)>>1, col|bit, (rd|bit)<<1);
    }
  };

  innerRecurse(0,0,0);

  return count;
};*/


var a, n, sum;


var matrixB = function (n) {
  var arr = [];

  for (var i=0;i<n;i++) {
     arr[i] = [];
  }

  return arr;
}


var subsetsum = function (a, n, sum) {
    m = matrixB(n);
    for ( i = 0; i < n; i++) {
        m[i][0] = 1;
    }
    for (var i = 0; i < sum; i++) {
        for ( var j = 0; j < n; j++) {
            if (m[i-1][j]) {
                m[i][j] = m[i-1][j]
            } else if (m[i-1][j - a[i]]) {
                m[i][j] = m[i-1][j - a[i]];
            }
        }
    }
    return m[n-1][sum];
}

a = [1,2,4,5,9];
n = a.length;
    
console.log(subsetsum(a, n , 15));
         
         
         
         
         
         
         
         
         
         
         
         
         
         