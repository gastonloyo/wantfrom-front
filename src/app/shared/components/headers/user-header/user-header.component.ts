import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/products/services/catalogo.service';
import { Categoria } from 'src/app/products/clases/categoria';
import { Router } from '@angular/router';
import { ItemCarrito } from 'src/app/cart/clases/item-carrito';
import { Carrito } from 'src/app/cart/clases/carrito';
import { CartService } from 'src/app/cart/services/cart.service';
@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  categorias:Categoria[];

//para el numero del carrito
  items: Array<ItemCarrito>;
  totalPrice:number = 0;
  totalQuantity:number = 0;
  carrito:Carrito;
  
  constructor(private catalogoservice:CatalogoService, private router:Router,private _cartService:CartService) { 
    this.carrito=new Carrito();
  }

  ngOnInit(): void {
    this.getListaCategorias();

    //para el numero del carrito
   this._cartService.currentDataCart$.subscribe(x=>{
    if(x) {
      this.items = x;
      this.totalQuantity = x.length;
       this.totalPrice = x.reduce((sum, current) => sum + (current.producto.precio * current.cantidad), 0); 
    }
})
  }

  
  /***** get Categories *****/
  getListaCategorias():void{
    this.catalogoservice.getListaCategorias().subscribe( response =>{
     this.categorias=response;
     console.log(response) }
     )
  }

              /********DROP DOWN MENUS */
//***categories */
  showCategories(){
    let categoriesList= document.getElementById("categoriesList");
    categoriesList.style.display="block";

    this.bgOpenMenu();    
  }
 
showSubcategories(){
 let containerSubcategories = document.getElementById("container-subcategories");
 containerSubcategories.style.display="initial";
 let categoriesList= document.getElementById("categoriesList");
 categoriesList.style.borderBottomRightRadius="0px";
}
hiddeSubAndCategories(){
  let containerSubcategories = document.getElementById("container-subcategories");
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
  }
