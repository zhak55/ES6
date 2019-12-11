# The generator of the Fibonacci numbers
# @param  {N|int}: number 
# @return {Object|generator}

def fibonacci(N):
    if N < 0:
        raise ValueError('N >= 0 but got %i' % N)
    previous, current = 0, 1
    for i in range(0, N):
        yield current
        current, previous = current + previous, current
