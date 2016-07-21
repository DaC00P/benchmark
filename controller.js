const SortUtil = require('./sorts');

const arrayToSort = SortUtil.make(1000);


module.exports = {



  receiveCode(codeObj) {
    eval(codeObj.algos.method1);
  },



  method2(){
    console.log('wtf');
  }
};
