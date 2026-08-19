# Ejercicio 5 · Buscar texto dentro de objetos

Para realizar búsquedas podemos combinar:

- `filter()`
- `toLowerCase()`
- `includes()`

## Ejemplo de referencia

Supongamos que tenemos una lista de ciudades:

```javascript
const ciudades = [
    { nombre: "Montevideo" },
    { nombre: "Salto" },
    { nombre: "Maldonado" },
    { nombre: "Paysandú" }
];

const textoBuscado = "mon";

const resultados = ciudades.filter(ciudad =>
    ciudad.nombre
        .toLowerCase()
        .includes(textoBuscado.toLowerCase())
);

console.log(resultados);
```

## ¿Qué sucede?

`toLowerCase()` transforma los textos a minúsculas:

```javascript
"Montevideo".toLowerCase()
```

se transforma en:

```text
montevideo
```

Luego:

```javascript
"montevideo".includes("mon")
```

devuelve `true`.

## Desde un input

Si necesitás obtener lo que escribió un usuario:

```javascript
const buscador = document.querySelector("#buscador");

const texto = buscador.value.toLowerCase();
```

Ese texto puede utilizarse posteriormente dentro de un `filter()`.
