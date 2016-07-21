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
      results1.push({x: n/10 - 50, y: res1});
      results2.push({x: n/10 - 50, y: res2});
    });
    // console.log(codeObj.algos.method1);
    // console.log(codeObj.algos.method2);
    // // console.log(method1, method2);
    // console.log(method1(arr));
    // console.log(method2(arr));
    console.log(results1);
    console.log(results2);
    const data1 = this.transform(results1);
    const data2 = this.transform(results2);

    return {data1: results1, data2: results2};

  },

  transform(data){
    data.forEach( (point, idx) => {
      point.x = (600 / data.length + 1) * (idx + 1);
      point.y *= (600 / data.slice(-1).y);
    });
  },


  method2(){
    console.log('wtf');
  }
};
