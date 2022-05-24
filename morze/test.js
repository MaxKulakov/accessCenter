function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
    }
    return summ / ArrayLen;
}

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
  }

var signalString = '';

var arr2 = [400, 200, 300, 850, 1000, 900];
var arr = [ 850, 1000, 900];

var avgTime = ArrayAvg(arr) - getMinOfArray(arr);

for (var i = 0; i < arr.length; i++){
    if (arr[i] < avgTime) {
        signalString += '·';
    } else {
        signalString += '−';
    }
}

console.log(signalString);
// console.log(ArrayAvg(arr2));

// console.log(ArrayAvg(arr2) - getMinOfArray(arr2));