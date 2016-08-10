const {VM} = require('vm2');
const SearchConstants = require('./search_consts');

module.exports = {
    bootVM(method, methodName, lengthArr) {
     let worker1 = new VM({
         timeout: 45000,
         sandbox: {Promise: null}
     });
     return worker1.run(SearchConstants.runUserCode(method, methodName, lengthArr));
   }

};
