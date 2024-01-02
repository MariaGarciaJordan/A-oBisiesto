function esBisiesto(año) {
    if (año % 4 !== 0) {
        
        return false;
    } else if (año % 100 !== 0) {
       
        return true;
    } else if (año % 400 !== 0) {

        return false;
    } else {

        return true;
    }
}


console.log(esBisiesto(1997)); 
console.log(esBisiesto(1996)); 
console.log(esBisiesto(1600)); 
console.log(esBisiesto(1800)); 
