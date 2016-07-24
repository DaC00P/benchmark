
module.exports = {

  make(n){
    let arr = [];
    for (let i = 0; i < n; i++) {
      let rand = Math.floor(Math.random() * 1000000);
      arr.push(rand);
    }
    return arr;
  },

  benchmark(sortFunc, length, iterations){
    let arr = module.exports.make(length);
    let t = 0;
    for (let i = 0; i < iterations; i++) {
      let a = arr.slice(0);
      let t0 = new Date();
      sortFunc(a);
      let t1 = new Date();
      t += (t1 - t0);
    }
    return t;
  },

  bubbleSort(arr){
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
  },

  quickSort(arr){
    if (arr.length <= 1) { return arr; }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return module.exports.quickSort(left).
      concat([pivot]).
      concat(module.exports.quickSort(right));
  },

  split(arr){
    let negArr = [];
    let negMax = 0;
    let posArr = [];
    let posMax = 0;

    arr.forEach( (num) => {
      if(num < 0){negArr.push(num);} else { posArr.push(num);}
      if(num > posMax){posMax = num;}
      if(num < negMax){negMax = num;}
    });
    return {negative: negArr, negIter: Math.floor(Math.log10(-negMax)), positive: posArr, posIter: Math.floor(Math.log10(-negMax))};
  },

  radixSort(arr){
    let indexArr = [0,0,0,0,0,0,0,0,0,0];
    let inputs = split(arr);
    let positive = inputs.positive;
    let negative = inputs.negative;
    let posIter = inputs.posIter;
    let negIter = inputs.negIter;

    function step(a, n){
      for (let i = 0; i < a.length; i++) {
        let dig = (a[i] / Math.pow(10, n)) % 10;
        indexArr[dig] += 1;
      }
    }

    step(positive, 0);

    console.log(indexArr);
    return(indexArr);
  }

};
