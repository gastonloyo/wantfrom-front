import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/products/services/catalogo.service';
import { Categoria } from 'src/app/products/clases/categoria';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  categorias:Categoria[];

  constructor(private catalogoservice:CatalogoService, private router:Router) { 

  }

  ngOnInit(): void {
    this.getListaCategorias()
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
