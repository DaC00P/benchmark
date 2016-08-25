'use strict';
const VM = require('./vm');

module.exports = {
  // receiveCode(codeObj) {
  //   let lengthArr = codeObj.lengthArr;
  //   let method = codeObj.algos.method1;
  //   let method2 = codeObj.algos.method2;
  //   let name = codeObj.algos.name1;
  //   let methodTwoName = codeObj.algos.name2;
  //   return this.testCode(method1, methodOneName, method2, methodTwoName, lengthArr);
  // },
  receiveCode(codeObj) {
    const lengthArr = codeObj.lengthArr;
    const requestData = codeObj.request_data;
    const method = requestData.method;
    const name = requestData.name;
    return this.testCode(method, name, lengthArr);
  },

  testCode(method, name, lengthArr) {
    let results = [];
    let res;

    for (let i = 0; i < lengthArr.length; i++) {
      try {
          let n = lengthArr[i];
          let res = VM.bootVM(method, name, n);
          results.push({x: n, y: res});
          if(res > 20000){ break; }
      } catch(e) {
          break;
      }
    }

    return {
      xAxis: lengthArr,
      rawData: results,
      name: name
    };
  },

  // testCode(method1, name, method2, methodTwoName, lengthArr) {
  //   let results1 = [];
  //   let results2 = [];
  //   let res1;
  //   let res2;
  //
  //   for (let i = 0; i < lengthArr.length; i++) {
  //     try {
  //         let n = lengthArr[i];
  //         let res1 = VM.bootVM(method1, name, n);
  //         results1.push({x: n, y: res1});
  //         if(res1 > 20000){ break; }
  //     } catch(e) {
  //         break;
  //     }
  //   }
  //
  //   for (let i = 0; i < lengthArr.length; i++) {
  //     try {
  //         let n = lengthArr[i];
  //         let res2 = VM.bootVM(method2, methodTwoName, n);
  //         results2.push({x: n, y: res2});
  //         if(res2 > 20000){ break; }
  //     } catch(e) {
  //         break;
  //     }
  //   }
  //
  //   return {
  //     xAxis: lengthArr,
  //     rawData1: results1,
  //     rawData2: results2,
  //     name1: name,
  //     name2: methodTwoName
  //   };
  // },
};
