function make(n){
  let arr = [];
  for (let i = 0; i < n; i++) {
    let rand = Math.floor(Math.random() * 1000000);
    arr.push(rand);
  }
  return arr;
}

function benchmark(sortFunc, length, iterations){
  let arr = make(length);
  let a = arr.slice(0);
  let t = 0;
  for (let i = 0; i < iterations; i++) {
    let t0 = new Date();
    sortFunc(a);
    let t1 = new Date();
    t += (t1 - t0);
  }
  return t;
}

function bubbleSort(arr){
 var len = arr.length;
 for (var i = len-1; i>=0; i--){
   for(var j = 1; j<=i; j++){
     if(arr[j-1]>arr[j]){
         var temp = arr[j-1];
         arr[j-1] = arr[j];
         arr[j] = temp;
      }
   }
  }
  return arr;
}

function split(arr){
  let negArr = [];
  let negMax = 0;
  let posArr = [];
  let posMax = 0;

  arr.forEach( (num) => {
    if(num < 0){negArr.push(num);} else { posArr.push(num);}
    if(num > posMax){posMax = num;}
    if(num < negMax){negMax = num;}
  });
  return {negative: negArr, negIter: Math.floor(Math.log10(-negMax)), positive: posArr, posIter: Math.floor(Math.log10(-negMax))};
}

function radixSort(arr){
  let indexArr = [0,0,0,0,0,0,0,0,0,0];
  let inputs = split(arr);
  let positive = inputs.positive;
  let negative = inputs.negative;
  let posIter = inputs.posIter;
  let negIter = inputs.negIter;

  function step(a, n){
    for (let i = 0; i < a.length; i++) {
      let dig = (a[i] / Math.pow(10, n)) % 10;
      indexArr[dig] += 1;
    }
  }

  step(positive, 0);

  console.log(indexArr);
  return(indexArr);

}
