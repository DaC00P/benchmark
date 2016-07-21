// import { AppDispatcher } from '../dispatcher/dispatcher';
const AppDispatcher = require('../dispatcher/dispatcher');

module.exports = {

  storeData(resp){
    AppDispatcher.dispatch({
      actionType: "STORE_RESPONSE",
      data1: resp.data1,
      data2: resp.data2
    });
  }
};
