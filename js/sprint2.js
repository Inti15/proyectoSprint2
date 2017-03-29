// alert("Bienvenido");
var contenedor, tarjeta, tituloT, borrarElem,saltoLinea;
var cont = 0;//Contador auxiliar para asignar id´s dinámicamente

function cargarPagina(){
  contenedor = document.getElementById("tarjetas");
  tarjeta = document.createElement("span");
  tituloT = document.createElement("h4");
  borrarElem = document.createElement("input");
  saltoLinea = document.createElement("br");

}

function crearTarjeta(){
  // Se crean los elementos del HTML(<section id = tarjetas>) dinámicamente
  cont++;
// Se asigna valores a los elementos y se anidan al elementoPadre correspondiente
  tituloT.innerText = document.getElementById("nvaLista").value;
  tarjeta.id = "tarjeta"+cont;

  borrarElem.type = "button";
  borrarElem.value = "Borrar Lista";
  borrarElem.align = "right";

  tarjeta.appendChild(borrarElem);
  tarjeta.appendChild(tituloT);
  tarjeta.appendChild(saltoLinea);
  contenedor.appendChild(tarjeta);
  console.log(tarjeta);

  document.getElementById("nvaLista").value = "";

crearLista(cont);
}

function crearLista(cont){
  // Se crean los elementos internos de la variable tarjeta(<span>)
  var agregarItems = document.createElement("span");
  var textoItem = document.createElement("input");
  var botonItem = document.createElement("input");
  var linea = document.createElement("hr");

  textoItem.placeholder = "Ingresa tu pendiente";
  botonItem.type = "button";
  botonItem.value = "Agregar Pendiente",
  botonItem.onclick = crearItems();

  agregarItems.appendChild(textoItem);
  agregarItems.appendChild(botonItem);
  tarjeta.appendChild(agregarItems);
  tarjeta.appendChild(linea);

  crearItems(textoItem.value);
  // borrarElem.onclick = borrar(tarjeta.id);

}

function crearItems(contenido) {
  console.log(contenido);
  var lista = document.createElement("ul");
  var nvoItem = document.createElement("li");

  // lista.appendChild(nvoItem);
  // agregarItems.appendChild(lista);
}

function borrar(id) {
  console.log(id);
  alert("¿¿¿Estás seguro que quieres borar tu lista???")
  // var tarjetaAborar = document.getElementById(id);
  //   contenedor.removeChild(tarjetaAborar);


}
