const solution = (arr) => {
    let firstHalf = 0;
    let secondHalf = arr.reduce((a, b) => a + b);
    let smallestDiff = 2001;
    

    for(let i = 0; i < arr.length - 1; i ++) {
        firstHalf +=arr[i];
        secondHalf -=arr[i];

        let currentDiff = Math.abs(firstHalf - secondHalf);
        // console.log(firstHalf, secondHalf, currentDiff);
        if(currentDiff < smallestDiff) {
            smallestDiff = currentDiff
        }
    }

    // console.log(smallestDiff);
    return smallestDiff;
}


///////////////////////// another solution
function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var lower = [A.length];
    var upper = [A.length];
    
    lower.push(0);
    
    for(var i=0; i<A.length; i++) {
        var iRev = A.length - i - 1;
        
        if(i === 0) {
            lower[i] = 0;
        } else {
            lower[i] = lower[i-1] + A[i-1];
        }       
        
        if(iRev === A.length - 1) {
            upper[iRev] = A[iRev];
        } else {
            upper[iRev] = upper[iRev+1] + A[iRev];
        }        
    }
    
    var result = Math.abs(lower[1] - upper[1]);
    
    for(var i=2; i<lower.length; i++) {
        var diff = Math.abs(lower[i] - upper[i]);
        if(diff < result) {
            result = diff;
        }
    }
    
    return result;
}
