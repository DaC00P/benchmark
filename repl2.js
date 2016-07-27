function makeHeap(arr){
  let last = arr.length - 1;
  function parent(idx){
    if(idx > 0 && idx <= last){return ~~((idx -1) / 2);}
  }
  function children(idx){
    let children = {l: undefined, r: undefined}
    if(2 * idx + 1 <= last){children.l = 2 * idx + 1;}
    if(2 * idx + 2 <= last){children.r = 2 * idx + 2;}
    return children
  }
  function swap(idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
  function pair(idx){
    debugger;
    if(idx < 1){return undefined}
    return children(parent(idx));
  }

  function heapStep(idx){
    let l = pair(idx).l;
    let r = pair(idx).r;
    debugger;
    let parent = parent(idx);
    // console.log(parent(3));
    // console.log(parent(idx));
    // let parent = pair(idx).p
    // console.log(l, r, parent);
    if(arr[l] < arr[r]){
      let max = arr[r];
      let maxi = r;
    } else {
      let max = arr[l];
      let maxi = l;
    }
    // console.log(parent, maxi);
    if(max > arr[parent]){swap(maxi, parent);}
  }

  // console.log(arr);
  heapStep(5)
  heapStep(3)
  // console.log(arr);

}

// const mh = makeHeap;
makeHeap([0,1,2,3,4,5]);
