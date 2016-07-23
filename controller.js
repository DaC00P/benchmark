const SortUtil = require('./sorts');
const SortUtil2 = require('./sorts0');

const arrayToSort = SortUtil.make(1000);

const vm  = require('vm');
const {VM} = require('vm2');
const jailed = require('jailed');


module.exports = {
  receiveCode(codeObj) {
    let method1 = eval(codeObj.algos.method1);
    let method2 = eval(codeObj.algos.method2);
    this.receiveTestCode(codeObj);
    // let testN = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
    let testN = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
    let results1 = [];
    let results2 = [];
    testN.forEach( (n) => {
      let res1 = SortUtil.benchmark(method1, n, 1000);
      let res2 = SortUtil.benchmark(method2, n, 1000);
      results1.push({x: n, y: res1});
      results2.push({x: n, y: res2});
    });
    // console.log(codeObj.algos.method1);
    // console.log(codeObj.algos.method2);
    // // console.log(method1, method2);
    // console.log(method1(arr));
    // console.log(method2(arr));

    // console.log(results1);
    // console.log(results2);
    let max = results1.concat(results2).map( res => res.y).sort( (a, b) => a - b ).pop();
    console.log(max);
    this.transform(results1, max);
    this.transform(results2, max);

    // console.log(results1);
    // console.log(results2);

    return {data1: results1, data2: results2};

  },

  transform(data, max){
    data.forEach( (point, idx) => {
      point.x = (600 / (data.length + 1)) * (idx + 1);
      point.y *= (590 / max);
    });
  },

  receiveTestCode(codeObj) {
    let method1 = codeObj.algos.method1;
    let method2 = codeObj.algos.method2;
    this.bootVM(method1, method2);
  },


  bootVM(m1, m2) {
    console.log('in the vm booter');
    console.log(m1);
    console.log(m2);


    const worker = new VM({
        timeout: 1000,
        sandbox: {console}
    });

    worker.run(`
      var arr1 = [5, 4, 3, 2, 1]
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
      };console.log(qs);

      console.log(qs(arr1));
          `);


    // "var arr = [1, 2, 3]; for (var i = 0; i < arr.length; i++) {console.log(arr[i]);};"
    // const script = new vm.Script("let i = 0; while (true) {console.log(i); i++;};", {
    //   filename: 'my-index.js', // filename for stack traces
    //   lineOffset: 1, // line number offset to be used for stack traces
    //   columnOffset: 1, // column number offset to be used for stack traces
    //   displayErrors: true,
    //   timeout: 500 // ms
    // });
    // //put the code to benchmark in the sandbox, then run it in line 79
    // const sandbox = vm.createContext({console});
    //
    //
    //
    // console.log('vm start');
    //
    //
    // try {
    //   //this is where the script will get called  to exec
    //   script.runInContext(sandbox, {timeout: 1000, displayErrors: true, });
    // }
    // catch (e) {
    //   // Exception thrown after 1000ms
    //   console.log(e);
    // }
    console.log('vm end');

  }
};
