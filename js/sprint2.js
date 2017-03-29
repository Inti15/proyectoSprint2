// alert("Bienvenido");
var contenedor, tarjeta, tituloT, borrarElem,saltoLinea, linea, textoItem, agregarItems, itemsLista;
var cont = 0;//Contador auxiliar para asignar id´s dinámicamente

function crearTarjeta(){
  // Se crean los elementos del HTML(<section id = tarjetas>) dinámicamente
  cont++;//Aumenta el contador en 1 cada que se crea una tarjeta
  contenedor = document.getElementById("tarjetas");
  tarjeta = document.createElement("span");
  tituloT = document.createElement("h4");
  borrarElem = document.createElement("input");
  saltoLinea = document.createElement("br");
// Se asigna valores a los elementos y se anidan al elementoPadre correspondiente
  tituloT.innerText = document.getElementById("nvaLista").value;
  tarjeta.id = "tarjeta"+cont;

  borrarElem.type = "button";
  borrarElem.value = "Borrar Lista";
  borrarElem.align = "right";
  borrarElem.onclick = borrar;
  // borrar(tarjeta.id);
  tarjeta.appendChild(borrarElem);
  tarjeta.appendChild(tituloT);
  tarjeta.appendChild(saltoLinea);
  contenedor.appendChild(tarjeta);
  // console.log(tarjeta);
  document.getElementById("nvaLista").value = "";
  crearLista(cont);
}

function crearLista(cont){
  // Se crean los elementos internos de la variable tarjeta(<span>)
  agregarItems = document.createElement("span");
  textoItem = document.createElement("input");
  var botonItem = document.createElement("input");
  linea = document.createElement("hr");
  // Se asigna valores a los elementos y se anidan al elementoPadre correspondiente
  textoItem.id = "texto"+cont;
  textoItem.placeholder = "Ingresa tu pendiente";
  botonItem.type = "button";
  botonItem.value = "Agregar Pendiente",
  botonItem.onclick = crearItems;
  // botonItem.setAttribute("onclick","crearItems();");
  agregarItems.appendChild(textoItem);
  agregarItems.appendChild(botonItem);
  tarjeta.appendChild(agregarItems);
  tarjeta.appendChild(linea);
  // textoItem.value ="";
  // crearItems(); ☒

}

function crearItems(contenido) {
  // console.log(contenido);
  contenido = textoItem.value;
  var itemsLista = document.createElement("span");
  var lista = document.createElement("ul");
  var nvoItem = document.createElement("li");


  nvoItem.innerText = contenido;
  lista.appendChild(nvoItem);
  itemsLista.appendChild(lista);
  agregarItems.appendChild(itemsLista);
  // agregarItems.insertBefore(itemsLista,agregarItems);
}

function borrar(id) {
   id = tarjeta.id;
   console.log(id.value);
  // alert("¿¿¿Estás seguro que quieres borar tu lista???");
  var tarjetaAborrar = document.getElementById(id);
  contenedor.removeChild(tarjetaAborrar);
}
