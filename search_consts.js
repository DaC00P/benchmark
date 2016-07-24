const BenchMark = require('./benchmark_consts');

const quickSortRec = `
  var arr1 = maker(100);
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

  qs(arr1);
`;

const bubbleSortRec = `
  var arr1 = [5, 4, 3, 2, 1];
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
    return BenchMark.getArrayMaker() + quickSortRec;
  },

  getBS() {
    return bubbleSortRec;
  }


};
