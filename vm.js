const {VM} = require('vm2');
const SearchConstants = require('./search_consts');

module.exports = {
    bootVM(m1, m2) {
     console.log('in the vm booter');
     //modify to use m1, m2 when front end talks right

       
       let worker1 = new VM({
           timeout: 5000,
           sandbox: {Promise: null}
       });

       console.log(worker1.run(SearchConstants.getQS()));

       let worker2 = new VM({
           timeout: 5000,
           sandbox: {Promise: null}
       });

       console.log(worker2.run(SearchConstants.getBS()));

     console.log('vm end');
   }

};
