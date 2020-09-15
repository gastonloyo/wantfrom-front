
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