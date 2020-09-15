function cerrarPublicidad() {
    let cerrar = document.getElementById("cruz");
    let banner = document.getElementById("banner");
    cerrar.style.display="none";
    banner.style.display="none";
    
}

let cerrar = document.getElementById("cruz");
cerrar.addEventListener("click", cerrarPublicidad);