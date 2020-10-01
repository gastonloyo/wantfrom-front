////////////////////////CATEGORIAS /////////////////////////////

// traigo del html los elementos 
const opcionCelulares = document.getElementById("celulares");
const opcionTermos = document.getElementById("termos");
const contenedorCategorias= document.getElementById("contenedorCategorias");
const titulo = document.getElementById("titulo");

// defino la url de la api 
const url_gral_categorias= ("https://deofis-tienda-apirest.herokuapp.com/api/catalogo/filtrar/productos-por-categoria/");

const id_celulares=1;
const id_termos = 2;

// le agrego el evento a los elementos que traje

opcionCelulares.addEventListener("click",()=>{
    fetch(url_gral_categorias+id_celulares)
  .then(response => response.json())
  .then(data =>{
    titulo.innerText="Celulares"; mostrarFiltro(data)
  }
  )
  .catch(error => console.log("error:", error));

})


opcionTermos.addEventListener("click",()=>{
    fetch(url_gral_categorias+id_termos)
  .then(response => response.json())
  .then(data =>{     
      titulo.innerText="Termos";
    mostrarFiltro(data)
  }
  )
  .catch(error => console.log("error:", error));

})


/////////////////////// ORDENAR //////////////////////
//menor precio
const menorPrecio = document.getElementById("menorPrecio");
const url_menorPrecio= ("https://deofis-tienda-apirest.herokuapp.com/api/catalogo/precio-menor");

menorPrecio.addEventListener("click",()=>{
    fetch(url_menorPrecio)
  .then(response => response.json())
  .then(data =>{
    titulo.innerText=""; mostrarFiltro(data)
  }
  )
  .catch(error => console.log("error:", error));

})

// mayor precio 
const mayorPrecio = document.getElementById("mayorPrecio");
const url_mayorPrecio = "https://deofis-tienda-apirest.herokuapp.com/api/catalogo/precio-mayor";

mayorPrecio.addEventListener("click",()=>{
    fetch(url_mayorPrecio)
  .then(response => response.json())
  .then(data =>{
    titulo.innerText=""; mostrarFiltro(data)
  }
  )
  .catch(error => console.log("error:", error));

})

/////////////////// MARCAS ///////////////////////
// elementos a usar 
const samsung= document.getElementById("Samsung");
const iphone = document.getElementById("Iphone");
const stanley = document.getElementById("Stanley");
// url de la api
const id_samsung = 1;
const id_iphone=2;
const id_stanley=3;
const url_gral_marcas = "https://deofis-tienda-apirest.herokuapp.com/api/catalogo/filtrar/productos-por-marca/"

// le agrego el evento a los elementos que traje

samsung.addEventListener("click",()=>{
  fetch(url_gral_marcas+id_samsung)
.then(response => response.json())
.then(data =>{
  titulo.innerText="Marca Samsung"; mostrarFiltro(data)
}
)
.catch(error => console.log("error:", error));

})

iphone.addEventListener("click",()=>{
  fetch(url_gral_marcas+id_iphone)
.then(response => response.json())
.then(data =>{
  titulo.innerText="Marca Iphone"; mostrarFiltro(data)
}
)
.catch(error => console.log("error:", error));

})

stanley.addEventListener("click",()=>{
  fetch(url_gral_marcas+id_stanley)
.then(response => response.json())
.then(data =>{
  titulo.innerText="Marca Stanley"; mostrarFiltro(data)
}
)
.catch(error => console.log("error:", error));

})



//defino la funcion para renderizar los productos

function mostrarFiltro(data) {
    resultados.innerHTML="";
    contenedorCategorias.innerHTML="";
    contenedorDestacados.innerHTML="";
    console.log(data);
    data.productos.forEach(element => {
        const contenedorCategorias= document.getElementById("contenedorCategorias");
        const tarjeta= document.createElement('div');
        tarjeta.classList.add("items");
       contenedorCategorias.appendChild(tarjeta);
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