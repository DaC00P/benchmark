'use strict';

const SortUtil = require('./sorts');
const SortUtil2 = require('./sorts0');
const VM = require('./vm');

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
    let res1;
    let res2;

    for (let i = 0; i < lengthArr.length; i++) {
      try {
          let n = lengthArr[i];
          let res1 = VM.bootVM(method1, methodOneName, n);
          results1.push({x: n, y: res1});
          if(res1 > 20000){ break; }
      } catch(e) {
          break;
      }
    }

    for (let i = 0; i < lengthArr.length; i++) {
      try {
          let n = lengthArr[i];
          let res2 = VM.bootVM(method2, methodTwoName, n);
          results2.push({x: n, y: res2});
          if(res2 > 20000){ break; }
      } catch(e) {
          break;
      }
    }

    return {
      xAxis: lengthArr,
      rawData1: results1,
      rawData2: results2,
      name1: methodOneName,
      name2: methodTwoName
    };
  },
};
