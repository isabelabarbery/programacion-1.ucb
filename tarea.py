# Convertir un número decimal a binario, octal y hexadecimal.
numero = int(input("Escribe un número en decimal: "))

binario = bin(numero)
octal = oct(numero)
hexadecimal = hex(numero)

print("En binario es:", binario.replace("0b", ""))
print("En octal es:", octal.replace("0o", ""))
print("En hexadecimal es:", hexadecimal.replace("0x", "").upper())


# Sumar dos números binarios y mostrar el resultado en decimal

b1 = input("Escribe el primer número binario: ")
b2 = input("Escribe el segundo número binario: ")

n1 = int(b1, 2)
n2 = int(b2, 2)
suma = n1 + n2

print("La suma en decimal es:", suma)

# Convertir un número hexadecimal a binario y viceversa

# De hexadecimal a binario
hex_num = input("Escribe un número hexadecimal: ")
dec_num = int(hex_num, 16)  
bin_num = bin(dec_num)[2:]  
print("En binario es:", bin_num)

# De binario a hexadecimal
bin_num2 = input("Escribe un número binario: ")
dec_num2 = int(bin_num2, 2)   
hex_num2 = hex(dec_num2)[2:]  
print("En hexadecimal es:", hex_num2.upper())

# Operaciones con números binarios

b1 = input("Primer número binario: ")
b2 = input("Segundo número binario: ")

n1 = int(b1, 2)
n2 = int(b2, 2)

print("Suma:", bin(n1 + n2)[2:])
print("Resta:", bin(n1 - n2)[2:])
print("Multiplicación:", bin(n1 * n2)[2:])
print("División:", bin(n1 // n2)[2:])  

# Tabla de multiplicar con while

num = int(input("Número para la tabla: "))
i = 1

while i <= 10:
    print(num, "x", i, "=", num * i)
    i += 1

# Suma de pares entre 1 y 50

suma = 0
for i in range(1, 51):
    if i % 2 == 0:
        suma += i

print("La suma de pares entre 1 y 50 es:", suma)

# Suma de primos entre 1 y 100

def es_primo(num):
    if num < 2:
        return False
    for j in range(2, int(num ** 0.5) + 1):
        if num % j == 0:
            return False
    return True

suma = 0
for i in range(1, 101):
    if es_primo(i):
        suma += i

print("La suma de primos entre 1 y 100 es:", suma)


