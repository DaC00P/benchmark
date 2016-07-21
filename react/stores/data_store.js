import { Store } from 'flux/utils'
// import { AppDispatcher } from '../dispatcher/dispatcher';
const AppDispatcher = require('../dispatcher/dispatcher');

// let _data1 = [{x: 50, y: 50}, {x: 150, y: 150}, {x: 250, y: 250}, {x: 350, y: 350}, {x: 450, y: 450}, {x: 550, y: 550}];
let _data1 = [];
let _data2 = [];

const DataStore = new Store(AppDispatcher);

DataStore.get = function(n){
  if(n === 1){return _data1.slice(0);}
  if(n === 2){return _data2.slice(0);}
}

DataStore.store = function(data1, data2){
  _data1 = data1;
  _data2 = data2;
}

DataStore.__onDispatch = function(payload){
  // debugger;
  switch(payload.actionType){
    case "STORE_RESPONSE":
      DataStore.store(payload.data1, payload.data2);
      this.__emitChange();
      break;
  }
}

// export default DataStore;
module.exports = DataStore;
