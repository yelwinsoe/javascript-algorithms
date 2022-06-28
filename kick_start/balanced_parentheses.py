import math

def solution():
  (L, R) = tuple(map(int, input().split()))
  n = min(L, R)
  return int((n*(n+1))/2)

case = int(input())
for i in range(case):
  print('Case #{}: {}'.format(i + 1, solution()))



#   ()
#  (  )
# (    )