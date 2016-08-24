import statistics
from collections import deque
from time import time
from random import randint, randrange

def random_array(length, min=0, max=10):
    """random_array(n, min=-1000000, max=1000000)
         returns ARRAY of random INTS"""
    randarr = []
    for x in range(length):
        randarr.append(randint(min, max))
    return randarr

def benchmark(test_function, array_length=100000, iterations=10, analytics=False):
    """benchmark(algo, length=100000, iterations=10):
         returns INT total run time in ms"""
    random = random_array(array_length)
    elapsed_time = 0
    results = []
    for n in range(iterations):
        arr = random.copy()
        t0 = time()
        test_function(arr)
        t1 = time()
        elapsed_time += float(t1-t0)
        results.append(float(t1-t0) * 1000)

    ms = int(elapsed_time * 1000)
    avg = ms // iterations
    benchmark_results = {'total': ms, 'avg': avg}
    if analytics:
        print(results)
        analysis = analyze(results)
        benchmark_results['std'] = analysis['std']
        benchmark_results['adj_avg'] = analysis['adj_avg']
    return benchmark_results

def analyze(bm_result):
    """drops outliers and calculates adjusted avg and stdev"""
    bm_result.sort()
    drop = len(bm_result) // 20
    arr = bm_result[drop:-drop]
    avg = statistics.mean(arr)
    std = statistics.stdev(arr)
    return {'std': std, 'adj_avg': avg}
# def run(test_function):
#     benchmark(test_function, length=1000000)

def python_sort(arr):
    """python library sort"""
    arr.sort()

def bubble_sort(arr, done=False):
    """bubble_sort(arr, done=False)
         Sorts array. Iterative. Time: O(N^2), space: O(1)"""
    while done == False:
        done = True
        for idx, num in enumerate(arr[0:-1]):
            if num > arr[idx+1]:
                arr[idx], arr[idx+1] = arr[idx+1], arr[idx]
                done = False
    return arr

def merge_sort(arr):
    """Sorts array. Recursive. O(NlogN) time, O(N) space"""
    def merge(arr1, arr2):
        arr1, arr2 = deque(arr1), deque(arr2)
        merged = []
        while len(arr1) > 0 and len(arr2) > 0:
            if(arr1[0] < arr2[0]):
                merged.append(arr1.popleft())
            else:
                merged.append(arr2.popleft())
        return merged + list(arr1) + list(arr2)
    if len(arr) < 2:
        return arr
    mid = len(arr) // 2
    left = arr[0:mid]
    right = arr[mid:]
    return merge(merge_sort(left), merge_sort(right))

def radix_sort(arr):
    pass

def


def run():
    pass
#TESTING FUNCTION ALIASES
ra = random_array
bm = benchmark

#SORT FUNCTION ALIASES
ps = python_sort
bs = bubble_sort
ms = merge_sort


if __name__ == "__main__":
    print('PYTHON BENCHMARK CLI', '\n')
    print('SORTS, (ALIAS => METHOD):')
    print('ps() => ', ps.__doc__)
    print('ms() => ', ms.__doc__)
    print('bs() => ', bs.__doc__, '\n')
    print('METHODS, (ALIAS => METHOD):')
    print('ra() => ', ra.__doc__)
    print('bm() => ', bm.__doc__)
