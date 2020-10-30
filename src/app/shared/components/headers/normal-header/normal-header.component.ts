import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CatalogoService } from 'src/app/products/services/catalogo.service';
import { Categoria } from 'src/app/products/clases/categoria';
import { Router } from '@angular/router';
import { ItemCarrito } from 'src/app/cart/clases/item-carrito';
import { Carrito } from 'src/app/cart/clases/carrito';
import { CartService } from 'src/app/cart/services/cart.service';
import { Subcategoria } from 'src/app/products/clases/subcategoria';

@Component({
  selector: 'app-normal-header',
  templateUrl: './normal-header.component.html',
  styleUrls: ['./normal-header.component.scss']
})
export class NormalHeaderComponent implements OnInit {
  categorias:Categoria[];

  //para el numero del carrito
  items: Array<ItemCarrito>;
  totalPrice:number = 0;
  totalQuantity:number = 0;
  carrito:Carrito;
  
  constructor (private catalogoservice:CatalogoService, private router:Router,private _cartService:CartService) {

   }

  ngOnInit(): void {
    //to keep seeing the scroll and adjust the header opacity
    // window.addEventListener("scroll",this.headerEffect)
 
    // get category list 
    this.getListaCategorias();

    //cart counter
   this._cartService.currentDataCart$.subscribe(x=>{
    if(x) {
      this.items = x;
      this.totalQuantity = x.length;
       this.totalPrice = x.reduce((sum, current) => sum + (current.producto.precio * current.cantidad), 0); 
    }
      })
  }

   /***** GET CATEGORIES *****/
  getListaCategorias():void{
    this.catalogoservice.getListaCategorias().subscribe( response =>{
     this.categorias=response;
     console.log(response);
    }
     )
  }
              /********DROP DOWN MENUS */
//***categories */
  showCategories(){
    let categoriesList= document.getElementById("categoriesList");
    categoriesList.style.display="block";

    

    this.bgOpenMenu();    
  }
 
showsubcategories(index:number){
 let container = document.getElementById("container-sub");
 container.style.display="initial";
//  console.log(this.categorias[index].subcategorias);
 let categoriaActual=this.categorias[index];
 
 let subcatActuales=categoriaActual.subcategorias;
 console.log(subcatActuales);

 for (let x = 0; x < subcatActuales.length ; x++) {
  let itemSubcategoria= document.createElement("p")
  itemSubcategoria.classList.add("borrar")
  itemSubcategoria.innerText=subcatActuales[x].nombre;
  document.getElementById("container-sub").appendChild(itemSubcategoria);
   
 }
let borrar = document.querySelectorAll(".borrar") ;

}
hiddeSubAndCategories(){
  let containerSubcategories = document.getElementById("container-sub");
 containerSubcategories.style.display="none";
 let categoriesList= document.getElementById("categoriesList");
 categoriesList.style.display="none";
  this.hiddeBgMenu();
}
///****User options */
showUserMenu(){
  let userOptions = document.getElementById("userOptions");
  userOptions.style.display="block";
  this.bgOpenMenu();
}
hiddeUserMenu(){
  let userOptions = document.getElementById("userOptions");
  userOptions.style.display="none";
  this.hiddeBgMenu()
}

/******* Background Menu */
bgOpenMenu(){
  let bgCategories= document.getElementById("bg-menu");
  bgCategories.style.display="block";
}
hiddeBgMenu(){
  let bgCategories= document.getElementById("bg-menu");
  bgCategories.style.display="none";
}


          /**** Search bar  ****/
  buscarProducto(termino:string):void {
    this.router.navigate(['/search',termino]);
   }

  //   /// HEADER SCROLL EFFECT 
  // headerEffect(){
  //   let scrollTop= document.documentElement.scrollTop;
  //   let header= document.getElementById("header");
  //   let redes=document.getElementById("redes-header");
  //   let subcategories= document.getElementById("container-subcategories")
  //   let positionheader=1;
  //   if(scrollTop>positionheader){
  //     header.style.opacity="0.92";
  //     header.style.height="80px";
  //     redes.style.display="none";
  //     subcategories.style.top="80px"

  //   } else{
  //     header.style.opacity="1";
  //     header.style.height="115px"
  //     redes.style.display="flex";
  //     redes.style.justifyContent= "flex-end";
  //     subcategories.style.top="115px"
  //   }
  // }
   
}
