const SortUtil = require('./sorts');

const arrayToSort = SortUtil.make(1000);


module.exports = {
  receiveCode(codeObj) {
    let method1 = eval(codeObj.algos.method1);
    let method2 = eval(codeObj.algos.method2);
    let testN = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
    let results1 = [];
    let results2 = [];
    testN.forEach( (n) => {
      let res1 = SortUtil.benchmark(SortUtil.bubbleSort, n, 10);
      let res2 = SortUtil.benchmark(SortUtil.quickSort, n, 10);
      results1.push({x: n/100 - 50, y: res1});
      results2.push({x: n/100 - 50, y: res2});
    });
    // console.log(codeObj.algos.method1);
    // console.log(codeObj.algos.method2);
    // // console.log(method1, method2);
    // console.log(method1(arr));
    // console.log(method2(arr));

    console.log(results1);
    console.log(results2);
    let max = results1.concat(results2).map( res => res.y).sort( (a, b) => a - b ).pop();
    console.log(max);
    this.transform(results1, max);
    this.transform(results2, max);

    console.log(results1);
    console.log(results2);

    return {data1: results1, data2: results2};

  },

  transform(data, max){
    data.forEach( (point, idx) => {
      point.x = (600 / (data.length + 1)) * (idx + 1);
      point.y *= (590 / max);
    });
  },


  method2(){
    console.log('wtf');
  }
};
