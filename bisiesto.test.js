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

test('1996 es un año bisiesto', () => {
    expect(esBisiesto(1996)).toBe(true);
});

test('1997 no es un año bisiesto', () => {
    expect(esBisiesto(1997)).toBe(false);
});

test('1600 es un año bisiesto', () => {
    expect(esBisiesto(1600)).toBe(true);
});

test('1800 no es un año bisiesto', () => {
    expect(esBisiesto(1800)).toBe(false);
});
