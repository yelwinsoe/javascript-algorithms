# import math

# def isPalindromes(N):
#   if len(N) == 1:
#     return True
#   counter = {}
#   for n in N:
#     if n in counter:
#       counter[n] += 1
#     else:
#       counter[n] = 0
  
#   number_of_odd = 0
#   for c in counter.keys():
#     if counter[c]%2 == 1:
#       number_of_odd += 1
  
#   if len(N)%2 == 1:
#     if number_of_odd == 1:
#       return True
#   elif number_of_odd == 0:
#     return True

#   return False

# def solution():
#   (N, nQ) = tuple(map(int, input().split()))
#   N = input()
#   count = 0
#   for i in range(nQ):
#     (L, R) = tuple(map(int, input().split()))
#     if isPalindromes(N[L-1:R]):
#       count += 1
#   return count

# case = int(input())
# for i in range(case):
#   print('Case #{}: {}'.format(i + 1, solution()))

from collections import defaultdict

T = int(input())
for x in range(1, T + 1):
    N, Q = map(int, input().split())
    characters = input()
    counters = [defaultdict(int)]
    for character in characters:
        counter = counters[-1].copy()
        counter[character] += 1
        counters.append(counter)
    y = 0
    for i in range(Q):
        L, R = map(int, input().split())
        odd_encountered = False
        for letter, R_count in counters[R].items():
            if (R_count - counters[L - 1][letter]) % 2:
                if odd_encountered:
                    break
                odd_encountered = True
        else:
            y += 1
    print(f"Case #{x}: {y}", flush = True)