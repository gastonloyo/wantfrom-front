////corregir url por la de ver producto
const url_ver = "https://deofis-tienda-apirest.herokuapp.com/api/catalogo/destacados";

fetch(url_ver)
  .then(response => response.json())
  .then(data =>
   createElement(data)
 
  )
  .catch(error => console.log("error:", error));