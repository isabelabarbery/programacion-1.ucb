// Función que convierte un número decimal a una base específica
function aBase(numero, base) {
    let resultado = "";
    let digitos = "0123456789ABCDEF";

    if (numero ===0) return "0";

    while (numero > 0) {
        let residuo = numero % base ; 
        resultado = digitos[residuo] + resultado;
        numero = Math.floor(numero/base);
    }

    return resultado;
}

//Función que convierte un número decimal a binario, octal y hexadecimal

function convertirDecimal(numero) {
    console.log("Binario:",aBase(numero,2));
    console.log("Octal:", aBase(numero, 8));
    console.log("Hexadecimal:",aBase(numero,16));
}