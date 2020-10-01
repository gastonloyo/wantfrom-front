////////////////////// CAMBIO DE LOGO //////////////////////////

function cambiarImagen() {
  
    let nuevo_logo = document.getElementById("nuevo_logo");
    let logo = document.getElementById("logo_header");
    logo.replaceWith(nuevo_logo);
   nuevo_logo.style.display="initial";
   nuevo_logo.style.width="100px";
   nuevo_logo.style.height="60px"
    
}

const botonCargar= document.getElementById("cambiar");
botonCargar.addEventListener("click" , cambiarImagen);


function mostrarInputs() {
    let subir = document.getElementById("boton_subir");
    let cambiar = document.getElementById("cambiar");
    let salir = document.getElementById("salir");
    salir.style.visibility="visible"
    subir.style.visibility="visible";
    cambiar.style.visibility="visible"
    alert("Para cambiar tu logo te recomendamos subirlo con fondo transparente!");

}


let imagen = document.getElementById("logo_header");
imagen.addEventListener("click" , mostrarInputs);




function cerrarVentana() {
    let salir = document.getElementById("salir");
    let subir = document.getElementById("boton_subir");
    let cambiar = document.getElementById("cambiar");
    subir.style.visibility="hidden";
    salir.style.visibility="hidden";
    cambiar.style.visibility="hidden";
}
let salir = document.getElementById("salir");
salir.addEventListener("click", cerrarVentana )



////////////////////////////////BUSCADOR ////////////////////////////////////////

// elementos a utilizar 
const input = document.getElementById("buscador");
const boton = document.getElementById("lupa");
const resultados = document.getElementById("resultados");

// le agrego el evento para q ejecute la funcion buscar
boton.addEventListener("click", buscar);
input.addEventListener("keyup", ()=>{
  if(event.which===13 || event.keycode==13){
  buscar();
  }
})


function buscar() {
 const quieroBuscar = input.value;
 const api ="https://deofis-corazon-api.herokuapp.com/api/catalogo/buscar?termino="+quieroBuscar;
 fetch(api)
   .then(response => response.json())
   .then(data => {
     console.log(data); renderInfo(data)  } )
   .catch(error => console.log("error:", error));

}


function renderInfo(data) {
    
    //  data.forEach(element => {
    //   const resultados = document.getElementById("resultados");
    //     const tarjeta= document.createElement('div');
    //     tarjeta.classList.add("items");
    //    resultados.appendChild(tarjeta);
    //    tarjeta.innerHTML=
    //    `<img src=${element.img}>
    //    <h3>${element.nombre}</h3>
    //    <p class="descrip">${element.descripcion}</p>
    //    <p class="precio">${"$" + element.precio}</p>
    //    <button class="botones">Agregar al Carrito</button>
    //    <button class="botones">Ver más...</button>
    //    `;       
    //  });
    
}