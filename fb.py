### 1

# 
# python 2.7
# range
# xrange - возвращает object-xrange, который является итерируемым объектом, 
# реализующим стратегию lazy evaluation
#

### 2 

# The generator of the Fibonacci numbers
# @param  {N|int}: number 
# @return {Object|generator}

def fibonacci_generator(n):
    if n < 0:
        raise ValueError('n >= 0 but got %i' % n)
    previous, current = 0, 1
    for i in range(0, n):
        yield current
        current, previous = current + previous, current
