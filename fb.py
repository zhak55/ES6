### 1

# 
# python 2.7:
#  
#   xrange - возвращает xrange-object, который является итерируемым объектом, 
#   реализующим стратегию lazy evaluation для неизменяемой последовательности
#   целых чисел в заданном диапазоне с шагом k, тем самым эффективно использует 
#   память, возвращая значения по требованию, в отличие от range, которая возвращает 
#   сразу всю последовательность в виде списка:
# 
#   from pympler import asf
#   obj = xrange(1, 100), range(1, 100)
#   map(asf.asizeof, obj) # [48 => iterable with LE, 4168 => list]
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
