const {VM} = require('vm2');
const SearchConstants = require('./search_consts');

module.exports = {
    bootVM(method) {
     let worker1 = new VM({
         timeout: 10000,
         sandbox: {Promise: null, console}
     });
     console.log(method);
     return worker1.run(SearchConstants.runUserCode(method));
   }

};
