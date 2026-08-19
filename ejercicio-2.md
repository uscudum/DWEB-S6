# Ejercicio 2 · Filtrar elementos según una condición

`filter()` permite crear un nuevo array que contiene únicamente los elementos que cumplen una condición.

## Ejemplo de referencia

Supongamos que tenemos edades:

```javascript
const edades = [12, 19, 25, 15, 32];

const mayores = edades.filter(edad => {

    return edad >= 18;

});

console.log(mayores);
```

El nuevo array contendrá únicamente las edades que cumplen la condición.

También puede utilizarse con objetos:

```javascript
const libros = [
    { titulo: "Libro A", paginas: 120 },
    { titulo: "Libro B", paginas: 350 },
    { titulo: "Libro C", paginas: 90 }
];

const librosLargos = libros.filter(libro => {

    return libro.paginas > 200;

});
```

## Observá

La expresión colocada después de `return` debe producir `true` o `false`.

Si produce `true`, el elemento permanece en el nuevo array.
