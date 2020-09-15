const url = "https://deofis-corazon-api.herokuapp.com/api/catalogo/destacados"
fetch(url)
  .then(response => response.json())
  .then(data =>
   createElement(data)
 
  )
  .catch(error => console.log("error:", error));

  
function createElement(data) {
 /// PRODUCTO UNO
 var img = document.createElement("img");

if (data[0].foto !== null){
  img.src= data[0].foto;
} else {
  img.src= "https://s.fenicio.app/f/claruy/productos/1-samsung-galaxy-s20-blue-2-dorso_450_600_1584036230_c04.jpg";
  img.style.width = "140px";
  img.style.height= "165px";
};
document.getElementById("productoUno").appendChild( img);

  var nombre = document.createElement("h3");
  nombre.innerText =data[0].nombre;
  document.getElementById("productoUno").appendChild(nombre);


  var descripcion = document.createElement("p");
  descripcion.innerText =data[0].descripcion;
  document.getElementById("productoUno").appendChild(descripcion);
  descripcion.classList.add("descrip");

  var pcio = document.createElement("p");
pcio.innerText="$" + data[0].precio;
document.getElementById("productoUno").appendChild( pcio);
pcio.classList.add("precio");

var carrito =document.createElement("button");
carrito.innerText = "Agregar al Carrito";
document.getElementById("productoUno").appendChild(carrito);
carrito.classList.add("botones");

var verm =document.createElement("button");
verm.innerText = "Ver más...";
document.getElementById("productoUno").appendChild(verm);
verm.classList.add("botones");




//PRODUCTO DOS
var img = document.createElement("img");
if (data[1].foto !== null){
  img.src= data[1].foto;
} else {
  img.src= "https://cdnblob.moshi.com/uploadedfiles/photo/v3/productImages/1243/01.jpg";
  img.style.width = "140px";
  img.style.height= "155px";
};
document.getElementById("productoDos").appendChild( img);

  var nombre = document.createElement("h3");
  nombre.innerText =data[1].nombre;
  document.getElementById("productoDos").appendChild(nombre);


  var descripcion = document.createElement("p");
  descripcion.innerText =data[1].descripcion;
  document.getElementById("productoDos").appendChild(descripcion);
  descripcion.classList.add("descrip");

  var pcio = document.createElement("p");
pcio.innerText="$" + data[1].precio;
document.getElementById("productoDos").appendChild( pcio);
pcio.classList.add("precio");

var carrito =document.createElement("button");
carrito.innerText = "Agregar al Carrito";
document.getElementById("productoDos").appendChild(carrito);
carrito.classList.add("botones");

var verm =document.createElement("button");
verm.innerText = "Ver más...";
document.getElementById("productoDos").appendChild(verm);
verm.classList.add("botones");


///PRODUCTO TRES
var img = document.createElement("img");
if (data[2].foto !== null){
  img.src= data[2].foto;
} else {
  img.src= "https://www.cetrogar.com.ar/media/catalog/product/T/E/TE2526.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds";
  img.style.width = "140px";
  img.style.height= "155px";
};
document.getElementById("productoTres").appendChild( img);

var nombre = document.createElement("h3");
nombre.innerText =data[2].nombre;
document.getElementById("productoTres").appendChild(nombre);


var descripcion = document.createElement("p");
descripcion.innerText =data[2].descripcion;
document.getElementById("productoTres").appendChild(descripcion);
descripcion.classList.add("descrip");

var pcio = document.createElement("p");
pcio.innerText="$" + data[2].precio;
document.getElementById("productoTres").appendChild( pcio);
pcio.classList.add("precio");

var carrito =document.createElement("button");
carrito.innerText = "Agregar al Carrito";
document.getElementById("productoTres").appendChild(carrito);
carrito.classList.add("botones");

var verm =document.createElement("button");
verm.innerText = "Ver más...";
document.getElementById("productoTres").appendChild(verm);
verm.classList.add("botones");


//// PRODUCTO CUATRO
var img = document.createElement("img");
if (data[3].foto !== null){
  img.src= data[3].foto;
} else {
  img.src= "https://celutronic.com/wp-content/uploads/2017/10/iphone-8-plus-256gb-lte-4g-argintiu-3gb-ram_10037677_2_1505312574.jpg";
  img.style.width = "140px";
  img.style.height= "155px";
};
document.getElementById("productoCuatro").appendChild( img);

var nombre = document.createElement("h3");
nombre.innerText =data[3].nombre;
document.getElementById("productoCuatro").appendChild(nombre);


var descripcion = document.createElement("p");
descripcion.innerText =data[3].descripcion;
document.getElementById("productoCuatro").appendChild(descripcion);
descripcion.classList.add("descrip");

var pcio = document.createElement("p");
pcio.innerText="$" + data[3].precio;
document.getElementById("productoCuatro").appendChild( pcio);
pcio.classList.add("precio");

var carrito =document.createElement("button");
carrito.innerText = "Agregar al Carrito";
document.getElementById("productoCuatro").appendChild(carrito);
carrito.classList.add("botones");

var verm =document.createElement("button");
verm.innerText = "Ver más...";
document.getElementById("productoCuatro").appendChild(verm);
verm.classList.add("botones");


////PRODUCTO CINCO
var img = document.createElement("img");
if (data[4].foto !== null){
  img.src= data[4].foto;
} else {
  img.src= "https://www.doiteargentina.com.ar/wp-content/uploads/2019/12/stanley-termo-1litro-adventure-polar-blanco-46722-01.jpg";
  img.style.width = "140px";
  img.style.height= "165px";
};
document.getElementById("productoCinco").appendChild( img);

var nombre = document.createElement("h3");
nombre.innerText =data[4].nombre;
document.getElementById("productoCinco").appendChild(nombre);


var descripcion = document.createElement("p");
descripcion.innerText =data[4].descripcion;
document.getElementById("productoCinco").appendChild(descripcion);
descripcion.classList.add("descrip");

var pcio = document.createElement("p");
pcio.innerText="$" + data[4].precio;
document.getElementById("productoCinco").appendChild( pcio);
pcio.classList.add("precio");

var carrito =document.createElement("button");
carrito.innerText = "Agregar al Carrito";
document.getElementById("productoCinco").appendChild(carrito);
carrito.classList.add("botones");

var verm =document.createElement("button");
verm.innerText = "Ver más...";
document.getElementById("productoCinco").appendChild(verm);
verm.classList.add("botones");

 ////////////// INTENTO CON FOREACH//////////
//  function createElement(data) {
//   const datos = data;
//     datos.forEach( element=> {
//         const nombre = document.createElement("h3");
//         nombre.innerText = element.nombre;
//         const tarjeta = document.createElement("div");
//         tarjeta.appendChild(nombre);
//     });
// }
        
//////////// INTENTO CON CICLO FOR ///////
    
//     for ( i=0; i<=4; i++){
// var nombre = document.createElement("h3");
// nombre.innerText =data[i].nombre;
// document.getElementById("productoUno").appendChild(nombre);


// var descripcion = document.createElement("p");
// descripcion.innerText =data[i].descripcion;
// document.getElementById("productoUno").appendChild(descripcion);


//     }
        ////////INTENTO CON WHILE/////
     
 
  // while (i <=4) {
  //   var i = 0;
  //    var nombre = document.createElement("h3");
  //   nombre.innerText =data[i].nombre;
  //   document.getElementById("productoCinco").appendChild(nombre);
    
    
  //   var descripcion = document.createElement("p");
  //   descripcion.innerText =data[i].descripcion;
  //   document.getElementById("productoCinco").appendChild(descripcion);
    

  //     i++;
              
  //         }
  }



