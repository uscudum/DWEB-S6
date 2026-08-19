# Ejercicio 4 · Obtener una parte de un array

El método `slice()` permite obtener una parte de un array sin modificar el array original.

## Ejemplo de referencia

```javascript
const colores = [
    "Rojo",
    "Azul",
    "Verde",
    "Amarillo",
    "Negro"
];

const primerosTres = colores.slice(0, 3);

console.log(primerosTres);
```

El resultado será un nuevo array con los elementos ubicados en las posiciones 0, 1 y 2.

## Recordá

La forma general es:

```javascript
array.slice(inicio, fin);
```

- `inicio` indica desde qué posición comenzar.
- `fin` indica dónde detenerse.
- El elemento ubicado en la posición `fin` **no se incluye**.

Los arrays comienzan en la posición `0`.
