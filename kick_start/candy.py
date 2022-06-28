def solution():
  (N, M) = tuple(map(int, input().split()))
  C = list(map(int, input().split()))
  sum = 0
  for candy in C:
    sum += candy
  modulo = sum % M
  return modulo

case = int(input())
for i in range(case):
  print('Case #{}: {}'.format(i + 1, solution()))