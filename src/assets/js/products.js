const url = "https://deofis-corazon-api.herokuapp.com/api/catalogo/destacados"
fetch(url)
  .then(response => response.json())
  .then(data =>
   createElement(data)
 
  )
  .catch(error => console.log("error:", error));

  const contenedor = document.getElementById("test");

  function createElement(data){
    data.forEach(element => {
        
        const tarjeta= document.createElement('div');
       contenedor.appendChild(tarjeta);
       tarjeta.innerHTML=
       `<img src=${element.img}>
       <h3>${element.nombre}</h3>
       <p class="descrip">${element.descripcion}</p>
       <p class="precio">${"$" + element.precio}</p>
       <button class="botones">Agregar al Carrito</button>
       <button class="botones">Ver más...</button>
       `;
      
       
        
    });
      
  }

  
// function createElement(data) {
//  /// PRODUCTO UNO
//  var img = document.createElement("img");

// if (data[0].foto !== null){
//   img.src= data[0].foto;
// } else {
//   img.src= "https://s.fenicio.app/f/claruy/productos/1-samsung-galaxy-s20-blue-2-dorso_450_600_1584036230_c04.jpg";
//   img.style.width = "140px";
//   img.style.height= "165px";
// };
// document.getElementById("productoUno").appendChild( img);


// //PRODUCTO DOS
// var img = document.createElement("img");
// if (data[1].foto !== null){
//   img.src= data[1].foto;
// } else {
//   img.src= "https://cdnblob.moshi.com/uploadedfiles/photo/v3/productImages/1243/01.jpg";
//   img.style.width = "140px";
//   img.style.height= "155px";
// };
// document.getElementById("productoDos").appendChild( img);


// ///PRODUCTO TRES
// var img = document.createElement("img");
// if (data[2].foto !== null){
//   img.src= data[2].foto;
// } else {
//   img.src= "https://www.cetrogar.com.ar/media/catalog/product/T/E/TE2526.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds";
//   img.style.width = "140px";
//   img.style.height= "155px";
// };
// document.getElementById("productoTres").appendChild( img);


// //// PRODUCTO CUATRO
// var img = document.createElement("img");
// if (data[3].foto !== null){
//   img.src= data[3].foto;
// } else {
//   img.src= "https://celutronic.com/wp-content/uploads/2017/10/iphone-8-plus-256gb-lte-4g-argintiu-3gb-ram_10037677_2_1505312574.jpg";
//   img.style.width = "140px";
//   img.style.height= "155px";
// };
// document.getElementById("productoCuatro").appendChild( img);



// ////PRODUCTO CINCO
// var img = document.createElement("img");
// if (data[4].foto !== null){
//   img.src= data[4].foto;
// } else {
//   img.src= "https://www.doiteargentina.com.ar/wp-content/uploads/2019/12/stanley-termo-1litro-adventure-polar-blanco-46722-01.jpg";
//   img.style.width = "140px";
//   img.style.height= "165px";
// };
// document.getElementById("productoCinco").appendChild( img);
