plustra = { '0' : 0, '1' : 1 , '2' : 2}
print(type(plustra))

smarter = {
    "name": "Ford",
    "model": "Mustang",
    "year": 1964
}

# print(smarter.name != None)

def func(b=0, c=1, d=2):
    print(b,c,d)

func(1,1,3)
func(b="1 1 3", c=None, d=None)
func(d=3, b=1)

n = int(input("Ingrese el valor:"))

a=1
b=1
suma=1
contador=1

while(contador<=n):
    print(suma)
    contador+=1
    a = b
    b = suma
    suma = a + b