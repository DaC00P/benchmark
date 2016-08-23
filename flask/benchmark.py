from time import time
from random import randint, randrange

def random_array(length, min=-1000000, max=1000000):
    """random_array(n, min=-1000000, max=1000000)
         returns ARRAY of random INTS"""
    randarr = []
    for x in range(length):
        randarr.append(randint(min, max))
    return randarr



def benchmark(test_function, array_length=100000, iterations=10, analysis=False):
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
        elapsed_time += t1-t0
        results.append(t1-t0)

    if analysis:
        pass
    else:
        ms = int(elapsed_time * 1000)
        avg = ms // iterations
        return {'total': ms, 'avg': avg}

def analyze(bm_result):
    pass

# def run(test_function):
#     benchmark(test_function, length=1000000)

def python_sort(arr):
    """python library sort"""
    arr.sort()



    pass

def run():
    pass
#TESTING FUNCTION ALIASES
RA = random_array
BM = benchmark

#SORT FUNCTION ALIASES
PS = python_sort


if __name__ == "__main__":
    print('PYTHON BENCHMARK CLI')
    print('METHODS, (ALIAS => METHOD):')
    print('RA() => ', RA.__doc__)
    print('BM() => ', BM.__doc__)
