# Ejercicio 1 · Recorrer un array y modificar el DOM

En este ejercicio necesitás recorrer varios objetos y mostrar su información dentro de una página.

## Ejemplo de referencia

Supongamos que tenemos una lista de estudiantes:

```javascript
const estudiantes = [
    { nombre: "Ana", curso: "1A" },
    { nombre: "Martín", curso: "2B" }
];

const lista = document.querySelector("#lista");

lista.innerHTML = "";

estudiantes.forEach(estudiante => {

    lista.innerHTML += `
        <div>
            <h3>${estudiante.nombre}</h3>
            <p>Curso: ${estudiante.curso}</p>
        </div>
    `;

});
```

## Observá

- `forEach()` recorre todos los elementos.
- En cada vuelta, `estudiante` representa un objeto.
- Se accede a sus propiedades con `estudiante.nombre` y `estudiante.curso`.
- `innerHTML +=` permite agregar contenido al elemento seleccionado.

Usá esta misma lógica como referencia para trabajar con los objetos de la actividad.
