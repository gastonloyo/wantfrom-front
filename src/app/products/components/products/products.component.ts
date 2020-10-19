import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';
import { Categoria } from 'src/app/products/clases/categoria';
import { Producto } from '../../clases/producto';
import { CatalogoService } from '../../services/catalogo.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productosDestacados: Producto[];
  target: HTMLInputElement;
  categorias:Categoria[];
  
  constructor(private catalogoService:CatalogoService) { 
 
  }
  ngOnInit(): void {
    this.getProductosDestacados();
     this.rotateCarrousel1();
     this.rotateCarrousel2();
     this.getListaCategorias();

  }
  getProductosDestacados():void{
    this.catalogoService.getProductosDestacados().subscribe(response => {
      this.productosDestacados=response;
      console.log(this.productosDestacados)}
      );
  }

  rotateCarrousel1(){
    let i = 1;
    const carouselFeatured = <HTMLScriptElement><unknown>document.getElementById('carousel-featured');
    const carouselButtons = document.querySelectorAll('.featured');
    carouselButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        let algo = e.target as Element;
        if (algo.id === 'previous') { 
          if (i !== 1) {
            i--;
           carouselFeatured.scrollLeft -= 1045;
          }
        } else {
            i++;
            carouselFeatured.scrollLeft  += 1045;
          }
      });
    });
  }
  rotateCarrousel2(){
    let i = 1;
    const carouselOfertas = <HTMLScriptElement><unknown>document.getElementById('carousel-ofertas');
    const carouselButtons = document.querySelectorAll('.ofertas');
    carouselButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        let algo = e.target as Element;
        if (algo.id === 'previousOfertas') { 
          if (i !== 1) {
            i--;
           carouselOfertas.scrollLeft -= 1045;
          }
        } else {
            i++;
            carouselOfertas.scrollLeft  += 1045;
            console.log("NEXT")
          }
      });
    });
  }

    /***** get Categories *****/
    getListaCategorias():void{
      this.catalogoService.getListaCategorias().subscribe( response =>{
       this.categorias=response;
       console.log(response) }
       )
    }

  /**** Hidde/ show functions ****/
  hiddeButtonsO(){
    const carouselButtons = document.querySelectorAll('.ofertas');
    carouselButtons[0].classList.add("mostrar");
    carouselButtons[1].classList.add("mostrar");
  
  }
  showButtonsO(){
    const carouselButtons = document.querySelectorAll('.ofertas');
    carouselButtons[0].classList.remove("mostrar");
    carouselButtons[1].classList.remove("mostrar");
  } 
  hiddeButtonsF(){
    const carouselButtons = document.querySelectorAll('.featured');
    carouselButtons[0].classList.add("mostrar");
    carouselButtons[1].classList.add("mostrar");
  }
  showButtonsF(){
    const carouselButtons = document.querySelectorAll('.featured');
    carouselButtons[0].classList.remove("mostrar");
    carouselButtons[1].classList.remove("mostrar");
  }
  /**** End of hidde/ show functions ****/
  



}
