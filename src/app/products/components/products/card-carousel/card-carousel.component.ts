import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MockCartService } from 'src/app/cart/services/mock-cart.service';
import { ItemCarrito } from 'src/app/cart/clases/item-carrito';
import { Producto } from 'src/app/products/clases/producto';
import { CatalogoService } from 'src/app/products/services/catalogo.service';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit {
  @Input() producto:Producto
  constructor(private catalogoservice:CatalogoService,private _cartService:MockCartService) { }
  infoProducto:Producto;
  ngOnInit(): void {
    this.infoProducto=new Producto();
  }

  saveToFav(){
  let corazon=document.getElementById("fav");
  corazon.style.color="red";
  corazon.classList.add("fas");
}
  addCart(infoProducto:Producto){
    let item:ItemCarrito=new ItemCarrito();
    item.cantidad=1;
    item.producto=infoProducto;
    this._cartService.changeCart(item);
 }
}
