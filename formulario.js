// Se modificó el código por completo por uno mejor estructurado y legible pero sin estilos

let users = [];

function agregarUsuario() {
    const nombre = document.getElementById('name').value;
    const edad = document.getElementById('age').value;
    const nacionalidad = document.getElementById('nationality').value;


    // Verificar condiciones (por ejemplo, edad mayor a 0)
    if (nombre.length !== 0 && edad > 18 || edad < 120) {
        const user = { nombre, edad, nacionalidad };
        users.push(user);
        mostrarUsuarios();
    } else {
        alert('Por favor, complete todos los campos correctamente.');
    }
}

function eliminarUsuario() {
    if (users.length > 0) {
        users.pop();
        mostrarUsuarios();
    } else {
        alert('No hay usuarios para eliminar.');
    }
}

function mostrarUsuarios() {
    const usuariosList = document.getElementById('usersList');
    usuariosList.innerHTML = '';
    users.forEach((user) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Nombre: ${user.nombre}, Edad: ${user.edad}, Nacionalidad: ${user.nacionalidad}`;
        usuariosList.appendChild(listItem);
    });
}

/*
// Se modificó el método para acceder a la referencia del formulario por uno más adecuado y se cambió la variable var por const
const formulario = document.forms['formulario'];

// se modifcó el nombre de la función y el método para evitar el comportamiento por default
formulario.onsubmit = function(event) {

  event.preventDefault();

  const user = {
    nombre : formulario.elements["name"].value ,
    edad : formulario.elements["age"].value ,
    nacionalidad : formulario.elements["nationality"]
}
if( datosVerificados( user )  ){
  agregarInvitado( user );
}
    
  // let n = formulario.elements[0]
  // let e = formulario.elements[1]
  // let na = formulario.elements[2]

  // const nombre = n.value
  // const edad = e.value

  // var i = na.selectedIndex
  // var nacionalidad = na.options[i].value
  // console.log(nombre, edad)
  // console.log(nacionalidad)
  const datosVerificados = ( user ) => {
    let response = true;
    if (nombre.length === 0) {
      nombre.classList.add("error")
    }
    if (edad < 18 || edad > 120) {
      edad.classList.add("error")
    }
  
  if (nombre.length > 0 
    && (edad > 18 
      && edad < 120) ) {
    agregarInvitado(user);
    }

    return response;
}

  
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
} */