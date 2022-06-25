# At least 7 characters.
# At least one uppercase English alphabet letter.
# At least one lowercase English alphabet letter.
# At least one digit.
# At least one special character. There are four special characters: #, @, *, and &.

def newPassword(password):
  hasUppercase = False
  hasLowercase = False
  hasDigit = False
  hasSpecialCharacter = False

  for c in password:
    if c > 'A' and c < 'Z':
      hasUppercase = True
    if c > 'a' and c < 'z':
      hasLowercase = True
    if c > '0' and c < '9':
      hasDigit = True
    if c == '#' or c == '@' or c == '*' or c == '&':
      hasSpecialCharacter = True

  if hasUppercase == False:
    password += 'A'
  if hasLowercase == False:
    password += 'a'
  if hasDigit == False:
    password += '1'
  if hasSpecialCharacter == False:
    password += '#'

  while (len(password) < 7):
    password += '1'

  return password

case = int(input())
for i in range(case):
  input()
  print('Case #{}: {}'.format(i + 1, newPassword(input())))