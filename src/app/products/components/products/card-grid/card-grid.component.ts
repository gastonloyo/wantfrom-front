import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ItemCarrito } from 'src/app/products/clases/item-carrito';
import { Producto } from 'src/app/products/clases/producto';
import { CatalogoService } from 'src/app/products/services/catalogo.service';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})

export class CardGridComponent implements OnInit {
  @Input() producto:Producto
  constructor(private catalogoservice:CatalogoService,private _cartService:CartService) { }
  infoProducto:Producto;

  ngOnInit(): void {
    this.infoProducto=new Producto();
  }

saveToFav(){
  let corazon=document.getElementById("fav");
  corazon.style.color="red";
  corazon.classList.add("fas");
}
addCart(producto:Producto){
  let item:ItemCarrito=new ItemCarrito();
  item.cantidad=1;
  item.producto=producto;
  console.log(item.producto);
  this._cartService.changeCart(item);
}

}
