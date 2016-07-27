module.exports = {
  heapSort(){
    return `<p>Heap Sort:</p>
    <p>Type: Comparrison Sort - Unstable</p>
    <p>Time Complexity(w/a/b):<br/>
      \tO(nlog(n)) - O(nlog(n)) - O(nlog(n))</p>
    <p>Space Complexity (worst):<br/>
      \tO(1)</p>`
  },
  radixSort(){
    return `<p>Radix Sort:</p>
    <p>Type: Non-Comparrison Sort - Stable</p>
    <p>Time Complexity(w/a/b):<br/>
      \tO(nk) - O(nk) - O(nk)</p>
    <p>Space Complexity:<br/>
      \tO(n + k)</p>`
  },
  mergeSortIter(){
    return `<p>Merge Sort (iter):</p>
    <p>Type: Comparrison Sort</p>
    <p>Time Complexity(w/a/b):<br/>
      \tO(nlog(n)) - O(nlog(n)) - O(nlog(n))</p>
    <p>Space Complexity:<br/>
      \tO(n)</p>`
  },
  quickSortRec(){
    return `<p>Heap Sort:</p>


    <p>Type: Comparrison Sort</p>
    <p>Time Complexity(w/a/b):<br/>
      \tO(n^2) - O(nlog(n)) - O(nlog(n))</p>
    <p>Space Complexity:<br/>
      \tO(log(n))</p>`
  },
  bubbleSort(){
    return `<p>Heap Sort:</p>

    
    <p>Type: Comparrison Sort</p>
    <p>Time Complexity(w/a/b):<br/>
      \tO(n) - O(n^2) - O(n^2)</p>
    <p>Space Complexity:<br/>
      \tO(1)</p>`
  },
  jsSort(){
    return `<p>Javascript Sort:</p>
    <p>Type: JS Sort</p>
    <p>Array.prototype.sort!!</p>`
  }


}
