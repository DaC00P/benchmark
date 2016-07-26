const {VM} = require('vm2');
const SearchConstants = require('./search_consts');

module.exports = {
    bootVM(method) {
     console.log('in the vm booter');
     //modify to use m1, m2 when front end talks right


     let worker1 = new VM({
         timeout: 10000,
         sandbox: {Promise: null, console}
     });

     return worker1.run(SearchConstants.getQS());
   }

};
