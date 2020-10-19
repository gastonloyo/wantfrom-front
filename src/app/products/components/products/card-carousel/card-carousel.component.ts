import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/products/clases/producto';
@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit {
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
