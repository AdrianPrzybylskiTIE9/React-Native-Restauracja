import os

path = 'F:/Szkola/PAM/React-Native-Restauracja/assets/icons'

print('icons = {')
for el in os.listdir((path)):
    print(f"'{el[:-4].replace('-',' ')}': require('../assets/icons/{el}'),")
print('}')