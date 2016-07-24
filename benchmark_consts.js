const SearchConstants = require('./search_consts');

module.exports = {
  make(n){
    let arr = [];
    for (let i = 0; i < n; i++) {
      let rand = Math.floor(Math.random() * 1000000);
      arr.push(rand);
    }
    return arr;
  },

  benchmark(sortFunc, length, iterations){
    let arr = this.make(length);
    let t = 0;
    for (let i = 0; i < iterations; i++) {
      let a = arr.slice(0);
      let t0 = new Date();
      sortFunc(a);
      let t1 = new Date();
      t += (t1 - t0);
    }
    return t;
  }
};
