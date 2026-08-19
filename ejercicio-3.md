# Ejercicio 3 · Filtrar objetos por una propiedad

También podemos utilizar `filter()` para comparar una propiedad de cada objeto.

## Ejemplo de referencia

Tenemos una lista de películas:

```javascript
const peliculas = [
    { titulo: "Película A", genero: "Drama" },
    { titulo: "Película B", genero: "Comedia" },
    { titulo: "Película C", genero: "Drama" }
];

const dramas = peliculas.filter(pelicula =>
    pelicula.genero === "Drama"
);

console.log(dramas);
```

## Observá

Dentro de `filter()`:

```javascript
pelicula.genero === "Drama"
```

se compara la propiedad `genero` del objeto actual con el valor buscado.

El resultado de `filter()` es un nuevo array que después puede utilizarse en otra función.
