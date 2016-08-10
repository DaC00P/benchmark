// import { AppDispatcher } from '../dispatcher/dispatcher';
const AppDispatcher = require('../dispatcher/dispatcher');

module.exports = {

  storeData(resp){
    AppDispatcher.dispatch({
      actionType: "STORE_RESPONSE",
      data: resp,
      // data1: resp.data1,
      // data2: resp.data2,
      // rawData1: resp.rawData1,
      // rawData2: resp.rawData2,
      // xaxis:resp.xAxis,
    });
  },

  storeError(resp){
    AppDispatcher.dispatch({
      actionType: "ERROR",
      data: resp
    });
  }
};
