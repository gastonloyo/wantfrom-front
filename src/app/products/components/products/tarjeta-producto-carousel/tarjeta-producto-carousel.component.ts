import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/products/clases/producto';
@Component({
  selector: 'app-tarjeta-producto-carousel',
  templateUrl: './tarjeta-producto-carousel.component.html',
  styleUrls: ['./tarjeta-producto-carousel.component.scss']
})
export class TarjetaProductoCarouselComponent implements OnInit {
  @Input() producto:Producto
  constructor() { }

  ngOnInit(): void {
  }

  saveToFav(){
    let corazon=document.getElementById("fav");
    corazon.style.color="red";
    corazon.classList.add("fas");
  }
}
