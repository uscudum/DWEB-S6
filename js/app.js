// =====================================================
// DATOS
// =====================================================
//
// Cada producto está representado mediante un objeto.
//
// Todos los productos se encuentran almacenados
// dentro del array "productos".
//
// Durante esta actividad NO deberás modificar
// los productos proporcionados.
//

const productos = [

    {
        id: 1,
        nombre: "Notebook Lenovo",
        categoria: "Notebook",
        precio: 32000,
        stock: 5
    },

    {
        id: 2,
        nombre: "Mouse Logitech",
        categoria: "Accesorio",
        precio: 1200,
        stock: 10
    },

    {
        id: 3,
        nombre: "Notebook HP",
        categoria: "Notebook",
        precio: 38500,
        stock: 0
    },

    {
        id: 4,
        nombre: "Teclado Redragon",
        categoria: "Accesorio",
        precio: 2800,
        stock: 6
    },

    {
        id: 5,
        nombre: "Monitor Samsung",
        categoria: "Monitor",
        precio: 11500,
        stock: 3
    },

    {
        id: 6,
        nombre: "Notebook Asus",
        categoria: "Notebook",
        precio: 42000,
        stock: 2
    },

    {
        id: 7,
        nombre: "Auriculares HyperX",
        categoria: "Accesorio",
        precio: 3500,
        stock: 0
    },

    {
        id: 8,
        nombre: "Monitor LG",
        categoria: "Monitor",
        precio: 9800,
        stock: 7
    }

];


// =====================================================
// ELEMENTOS DEL DOM
// =====================================================
//
// JavaScript puede acceder a elementos del HTML
// utilizando document.querySelector().
//
// Esta parte ya está resuelta.
// No deberás modificarla.
//

const catalogo =
    document.querySelector("#catalogo");

const buscador =
    document.querySelector("#buscador");

const btnTodos =
    document.querySelector("#btnTodos");

const btnDisponibles =
    document.querySelector("#btnDisponibles");

const btnNotebooks =
    document.querySelector("#btnNotebooks");

const btnCuatro =
    document.querySelector("#btnCuatro");

const cantidadProductos =
    document.querySelector("#cantidadProductos");

const sinResultados =
    document.querySelector("#sinResultados");


// =====================================================
// EJERCICIO 1
// MOSTRAR PRODUCTOS EN LA PÁGINA
// =====================================================
//
// Esta será la función principal de la actividad.
//
// Recibe un array llamado "listaProductos" y deberá
// generar una tarjeta para cada producto.
//
// Buena parte de la estructura ya está resuelta.
//
// Tu tarea consiste en completar la información
// faltante de cada producto.
//
// Recordá:
//
// producto.nombre
// producto.categoria
// producto.precio
// producto.stock
//

function mostrarProductos(listaProductos) {

    // Antes de generar las tarjetas borramos
    // el contenido anterior del catálogo.

    catalogo.innerHTML = "";


    // También actualizamos la cantidad de productos
    // que se están mostrando.

    cantidadProductos.textContent =
        listaProductos.length;


    // Si el array está vacío mostramos el mensaje
    // "No se encontraron productos".

    if (listaProductos.length === 0) {

        sinResultados.classList.remove("d-none");

    } else {

        sinResultados.classList.add("d-none");

    }


    // forEach() permite recorrer todos los elementos
    // de un array.
    //
    // En cada recorrido, "producto" representa
    // uno de los objetos del array.

    listaProductos.forEach(producto => {

        catalogo.innerHTML += `

            <div class="col-sm-6 col-lg-4">

                <div class="card h-100">

                    <div class="card-body">

                        <h5 class="card-title">
                            ${producto.nombre}
                        </h5>

                        <p class="card-text">
                            Categoría:
                            ${/* COMPLETAR */}
                        </p>

                        <p class="card-text">
                            Precio: $
                            ${/* COMPLETAR */}
                        </p>

                        <p class="card-text">
                            Stock:
                            ${/* COMPLETAR */}
                        </p>

                    </div>

                </div>

            </div>

        `;

    });

}


// =====================================================
// EJERCICIO 2
// MOSTRAR SOLAMENTE PRODUCTOS DISPONIBLES
// =====================================================
//
// Queremos obtener aquellos productos cuyo stock
// sea mayor que cero.
//
// Para esto utilizaremos filter().
//
// filter() genera un NUEVO array con los elementos
// que cumplen determinada condición.
//
// La estructura ya está proporcionada.
//
// Solamente deberás completar la condición.
//
// Recordá que:
//
// producto.stock
//
// permite acceder al stock del producto.
//

function mostrarDisponibles() {

    const disponibles = productos.filter(producto => {

        // COMPLETAR:
        //
        // Esta expresión debe ser verdadera cuando
        // el producto tenga stock mayor que cero.

        return /* COMPLETAR */;

    });


    // No necesitamos volver a crear las tarjetas.
    //
    // Reutilizamos la función del ejercicio anterior.

    mostrarProductos(disponibles);

}


// =====================================================
// EJERCICIO 3
// MOSTRAR SOLAMENTE NOTEBOOKS
// =====================================================
//
// Ahora deberás utilizar nuevamente filter(),
// pero con menos ayuda.
//
// Queremos obtener únicamente aquellos productos
// cuya categoría sea:
//
// "Notebook"
//
// Recordá:
//
// producto.categoria
//
// permite acceder a la categoría.
//
// Luego deberás enviar el resultado a
// mostrarProductos().
//

function mostrarNotebooks() {

    // PASO 1:
    // Crear un nuevo array utilizando filter().

    const notebooks = /* COMPLETAR */;


    // PASO 2:
    // Mostrar ese nuevo array.

    mostrarProductos(notebooks);

}


// =====================================================
// EJERCICIO 4
// MOSTRAR LOS PRIMEROS CUATRO PRODUCTOS
// =====================================================
//
// Para este ejercicio utilizaremos un nuevo método.
//
// slice() permite obtener una parte de un array.
//
// Ejemplo:
//
// const parte = array.slice(inicio, fin);
//
// Recordá:
//
// - El primer elemento de un array ocupa la posición 0.
// - El valor indicado como "fin" no se incluye.
//
// Tu tarea:
//
// 1. Obtener los primeros cuatro productos.
// 2. Guardarlos en una variable.
// 3. Mostrarlos utilizando mostrarProductos().
//

function mostrarCuatroProductos() {

    // PASO 1:
    // Obtener los primeros cuatro productos.

    const primerosCuatro = /* COMPLETAR */;


    // PASO 2:
    // Mostrar los productos obtenidos.

    /* COMPLETAR */

}


// =====================================================
// EJERCICIO 5
// BUSCAR PRODUCTOS POR NOMBRE
// =====================================================
//
// Este ejercicio requiere combinar varios conceptos.
//
// Cada vez que el usuario escriba algo en el buscador,
// esta función será ejecutada.
//
// El objetivo es mostrar solamente los productos cuyo
// nombre contenga el texto escrito.
//
// Por ejemplo:
//
// Si el usuario escribe:
//
//      note
//
// deberían aparecer:
//
//      Notebook Lenovo
//      Notebook HP
//      Notebook Asus
//
//
// PASO 1
// -------
//
// Obtener el texto escrito:
//
// buscador.value
//
//
// PASO 2
// -------
//
// Convertir el texto a minúsculas:
//
// .toLowerCase()
//
//
// PASO 3
// -------
//
// Utilizar filter() sobre productos.
//
// También tendrás que convertir producto.nombre
// a minúsculas.
//
//
// PASO 4
// -------
//
// Para comprobar si un texto contiene otro:
//
// texto.includes(textoBuscado)
//
//
// PASO 5
// -------
//
// Mostrar el array resultante utilizando
// mostrarProductos().
//

function buscarProductos() {

    // PASO 1:
    // Obtener lo que escribió el usuario
    // y convertirlo a minúsculas.

    const textoBuscado = /* COMPLETAR */;


    // PASO 2:
    // Obtener únicamente aquellos productos
    // cuyo nombre contenga el texto buscado.

    const resultados = /* COMPLETAR */;


    // PASO 3:
    // Mostrar los resultados obtenidos.

    /* COMPLETAR */

}


// =====================================================
// EVENTOS
// =====================================================
//
// Los eventos permiten ejecutar una función cuando
// el usuario realiza una determinada acción.
//
// Esta parte ya está resuelta.
//
// Observá especialmente el uso de:
//
// addEventListener()
//
// "click" -> cuando se presiona un botón.
// "input" -> cuando cambia el contenido de un input.
//

btnTodos.addEventListener("click", function () {

    mostrarProductos(productos);

});


btnDisponibles.addEventListener(
    "click",
    mostrarDisponibles
);


btnNotebooks.addEventListener(
    "click",
    mostrarNotebooks
);


btnCuatro.addEventListener(
    "click",
    mostrarCuatroProductos
);


buscador.addEventListener(
    "input",
    buscarProductos
);


// =====================================================
// CARGA INICIAL
// =====================================================
//
// Al abrir la página por primera vez queremos
// visualizar todos los productos.
//
// Por eso ejecutamos mostrarProductos()
// enviándole el array completo.
//

mostrarProductos(productos);