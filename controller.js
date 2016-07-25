const SortUtil = require('./sorts');
const SortUtil2 = require('./sorts0');
const VM = require('./vm');

const arrayToSort = SortUtil.make(1000);

// const vm  = require('vm');
// const {VM} = require('vm2');
// const jailed = require('jailed');


module.exports = {
  receiveCode(codeObj) {
    // let method1 = eval(codeObj.algos.method1);
    // let method2 = eval(codeObj.algos.method2);
    // // let testN = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
    // let testN = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
    // let results1 = [];
    // let results2 = [];
    // testN.forEach( (n) => {
    //   let res1 = SortUtil.benchmark(method1, n, 1000);
    //   let res2 = SortUtil.benchmark(method2, n, 1000);
    //   results1.push({x: n, y: res1});
    //   results2.push({x: n, y: res2});
    // });
    //
    // let max = results1.concat(results2).map( res => res.y).sort( (a, b) => a - b ).pop();
    // console.log(max);
    // this.transform(results1, max);
    // this.transform(results2, max);

    this.receiveTestCode(codeObj);

    // return {data1: results1, data2: results2};

  },

  transform(data, max){
    data.forEach( (point, idx) => {
      point.x = (600 / (data.length + 1)) * (idx + 1);
      point.y *= (590 / max);
    });
  },

  receiveTestCode(codeObj) {
    //this is where code will be parsed
    //array of lengths to test will come in - right now it will be come in as a const. [500, 1000, 2000, 4000, 8000, 16000, 32000]
    //
    let method1 = codeObj.algos.method1;
    let method2 = codeObj.algos.method2;
    VM.bootVM(method1, method2);
  }
};
