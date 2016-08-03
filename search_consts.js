'use strict';

const BenchMark = require('./benchmark_consts');

const quickSortRec = `
  var qs = function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    var pivot = arr[0];
    var left = [];
    var right = [];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return this.qs(left).concat([pivot]).concat(this.qs(right));
  };
`;

const bubbleSortRec = `
  var bsr = function bubbleSort(arr) {
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
          var temp = arr[j-1];
          arr[j-1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  };

  bsr(arr1);
`;



module.exports = {
  getQS() {
    return quickSortRec + BenchMark.getArrayMaker() + BenchMark.getBenchMarker();
  },

  getBS() {
    return BenchMark.getArrayMaker() + bubbleSortRec;
  },

  runUserCode(method, methodName, lengthArr) {
    return method + BenchMark.getArrayMaker() + BenchMark.getBenchMarker(methodName, lengthArr);
  }

};
