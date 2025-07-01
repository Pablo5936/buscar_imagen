const IMG = document.getElementById('imagen')
const NOMBRE = document.getElementById('nombreImagen')
const DESCRIPCION = document.getElementById('descripcionImagen')
const BUSQUEDA = document.getElementById('busqueda')
const nombres = [
  'Barcelona',
  'Estambul',
  'Kuala Lumpur',
  'Londres',
  'New York',
  'Oporto',
  'Paris',
  'Rio de Janeiro',
  'Sidney'
]

let posicion = -1

function mostrarImagen() {
  const imagen = RUTA + IMAGENES[posicion].archivo
  DESCRIPCION.innerHTML = IMAGENES[posicion].descripción
  IMG.src = imagen
  IMG.title = IMAGENES[posicion].tooltip
  NOMBRE.innerHTML = IMAGENES[posicion].nombre
  NOMBRE.style.fontSize = '2.5em'
  NOMBRE.style.color = '#B8860B'
  IMG.style.borderRadius = '10px'
}

function avanza() {
  if (posicion < IMAGENES.length - 1) {
    posicion++
    mostrarImagen()
  } else {
    alert('Es la última imagen')
  }
}

function retrocede() {
  if (posicion > 0) {
    posicion--
    mostrarImagen()
  } else {
    alert('Es la primera imagen')
  }
}

function recargar() {
  location.reload()
}

function buscar(elemento) {
  let encontrado = false
  let elementos = IMAGENES.length
  let busqueda = BUSQUEDA.value.trim().toLowerCase()
  let i = 0
  let indice = -1
  while (i < elementos && !encontrado) {
    if (busqueda == IMAGENES[i].nombre.toLocaleLowerCase()) {
      indice = i
      encontrado = true
    }
    i++
  }
  if (encontrado) {
    posicion = indice
    mostrarImagen()
  } else {
    alert('No se encontró la imagen')
    return indice
  }
}
