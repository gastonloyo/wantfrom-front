import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/products/services/catalogo.service';
import { Categoria } from 'src/app/products/clases/categoria';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  categorias:Categoria[];

  constructor(private catalogoservice:CatalogoService, private router:Router) {

   }

  ngOnInit(): void {
 //to keep seeing the scroll and adjust the header opacity
 window.addEventListener("scroll",this.headerEffect)
 
 // get category list 
 this.getListaCategorias();

  }


   /***** GET CATEGORIES *****/
  getListaCategorias():void{
    this.catalogoservice.getListaCategorias().subscribe( response =>{
     this.categorias=response;
     console.log(response) }
     )
  }
    /////end get categories///

  /// HEADER SCROLL EFFECT 
  headerEffect(){
    let scrollTop= document.documentElement.scrollTop;
    let header= document.getElementById("header");
    let redes=document.getElementById("redes-header");
    let positionheader=1;
    if(scrollTop>positionheader){
      header.style.opacity="0.92";
      header.style.height="80px"
      redes.style.display="none"

    } else{
      header.style.opacity="1";
      header.style.height="115px"
      redes.style.display="flex";
      redes.style.justifyContent= "flex-end";
    }
  }
/// end header scroll effect///

  
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
