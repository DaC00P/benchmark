'use strict';

const SortUtil = require('./sorts');
const SortUtil2 = require('./sorts0');
const VM = require('./vm');

//list of available VMs, we use vm2
// const vm  = require('vm');
// const {VM} = require('vm2');
// const jailed = require('jailed');

module.exports = {
  receiveCode(codeObj) {
    let method1 = codeObj.algos.method1;
    let method2 = codeObj.algos.method2;
    let methodOneName = codeObj.algos.name1;
    let methodTwoName = codeObj.algos.name2;
    let lengthArr = codeObj.algos.lengthArr;
    return this.testCode(method1, methodOneName, method2, methodTwoName, lengthArr);
  },

  testCode(method1, methodOneName, method2, methodTwoName, lengthArr) {
    let results1 = [];
    let results2 = [];

    lengthArr.forEach( (n) => {
      let res1 = VM.bootVM(method1, methodOneName, n);
      let res2 = VM.bootVM(method2, methodTwoName, n);
      results1.push({x: n, y: res1});
      results2.push({x: n, y: res2});
    });

    let max = results1.concat(results2).map( res => res.y).sort( (a, b) => a - b ).pop();

    let data1 = this.transform(results1, max);
    let data2 = this.transform(results2, max);
    return {
      data1: data1,
      data2: data2,
      xAxis: lengthArr,
      rawData1: results1,
      rawData2: results2,
      name1: methodOneName,
      name2: methodTowName
    };
  },

  transform(data, max){
    let transformed = [];
    data.forEach( (point, idx) => {
      let obj = { x: (600 / (data.length + 1)) * (idx + 1), y: point.y * 590/max };
      transformed.push(obj);
    });
    return transformed;
  }
};
