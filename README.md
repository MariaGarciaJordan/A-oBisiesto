# Leap Year Kata

## Introducción

Leap Year o 'Año Bisiesto' es una kata clásica. Aunque las reglas son un poco más complicadas, este ejercicio revela el poder del Desarrollo Guiado por Pruebas (TDD) en pequeños pasos.

## Instrucciones

El objetivo de este ejercicio es implementar un método que compruebe si un año es bisiesto.

Las reglas son las siguientes:

- Un año no es bisiesto si no es divisible por 4.
- Un año es bisiesto si es divisible por 4.
- Un año es bisiesto si es divisible por 400.
- Un año no es bisiesto si es divisible por 100 pero no por 400.

Por ejemplo:

- 1997 no es bisiesto (no es divisible por 4).
- 1996 es bisiesto (divisible por 4).
- 1600 es bisiesto (divisible por 400).
- 1800 no es bisiesto (divisible por 4, divisible por 100, NO divisible por 400).

El método debe devolver 'true' si un año es bisiesto, y 'false' si no lo es.

## Pruebas

Este proyecto utiliza Jest para las pruebas unitarias. Para ejecutar las pruebas, sigue estos pasos:

1. Instala las dependencias del proyecto con `npm install`.
2. Ejecuta las pruebas con `npm test`.

Las pruebas verifican la correcta implementación de la función `esBisiesto`.

## Crédito

Este ejercicio es una adaptación de la kata propuesta por Coding Dojo.

