import { Component, OnInit } from '@angular/core';

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
  i :number =1;
  translateX:number = 0;
  constructor(private catalogoService:CatalogoService) { 
 
  }
  ngOnInit(): void {
    this.getProductosDestacados();

    
     this.mover();
      


  }
  getProductosDestacados():void{
    this.catalogoService.getProductosDestacados().subscribe(response => {
      this.productosDestacados=response;
      console.log(this.productosDestacados)}
      );
  }

  mover(){
    const carouselImages = <HTMLScriptElement><unknown>document.getElementById('carrousel');
    const carouselButtons = document.querySelectorAll('.button');
    //const numberOfImages = this.productosDestacados.length;
   console.log(carouselImages);
    carouselButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        let algo = e.target as Element;
        
        if (algo.id === 'previous') { 
          if (this.i !== 1) {
            this.i--;

           carouselImages.scrollLeft -= 1055;
          }
        } else {
            this.i++;
            carouselImages.scrollLeft  += 1055;
          }
      });
  
    });
  }

  
  



}
