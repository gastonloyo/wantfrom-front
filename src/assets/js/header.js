

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

input.addEventListener("focus", ()=> boton.style.color="rgb(16, 61, 119)")
input.addEventListener("blur",()=> boton.style.color="" )

function buscar() {
 const quieroBuscar = input.value;
 const api ="https://deofis-corazon-api.herokuapp.com/api/catalogo/buscar?termino="+quieroBuscar;
 fetch(api)
   .then(response => response.json())
   .then(data => {
     console.log(data);titulo.innerText="Resultados para: "+quieroBuscar ; renderInfo(data)  } )
   .catch(error => console.log("error:", error));

}


function renderInfo(data) {
  contenedorDestacados.style.visibility="hidden";
  resultados.innerHTML="";
  contenedorCategorias.innerHTML="";
  contenedorDestacados.innerHTML="";
     data.forEach(element => {
      const resultados = document.getElementById("resultados");
        const tarjeta= document.createElement('div');
        tarjeta.classList.add("items");
       resultados.appendChild(tarjeta);
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