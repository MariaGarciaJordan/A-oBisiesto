function esBisiesto(año) {
    if (año % 4 !== 0) {
        // Un año no es bisiesto si no es divisible por 4
        return false;
    } else if (año % 100 !== 0) {
        // Un año es bisiesto si es divisible por 4 pero no por 100
        return true;
    } else if (año % 400 !== 0) {
        // Un año no es bisiesto si es divisible por 100 pero no por 400
        return false;
    } else {
        // Un año es bisiesto si es divisible por 400
        return true;
    }
}


console.log(esBisiesto(1997)); // Debería imprimir 'false'
console.log(esBisiesto(1996)); // Debería imprimir 'true'
console.log(esBisiesto(1600)); // Debería imprimir 'true'
console.log(esBisiesto(1800)); // Debería imprimir 'false'
