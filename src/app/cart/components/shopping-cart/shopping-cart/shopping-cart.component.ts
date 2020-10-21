import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/products/clases/producto';
import { Observable } from 'rxjs';
import { CartService } from '../../../services/cart.service';
import { Carrito } from 'src/app/cart/clases/carrito';
import { ItemCarrito } from '../../../clases/item-carrito';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
   items: Array<ItemCarrito>;
   totalPrice:number = 0;
   totalQuantity:number = 0;
  carrito:Carrito;
  constructor(private _cartService:CartService) {
    this.carrito=new Carrito()
   }

  ngOnInit(): void {
    this._cartService.currentDataCart$.subscribe(x=>{
      if(x)
      {
        this.items = x;
        this.totalQuantity = x.length;
         this.totalPrice = x.reduce((sum, current) => sum + (current.producto.precio * current.cantidad), 0);
      }
    })
  }

  public remove(item:ItemCarrito){
    // let item:ItemCarrito=new ItemCarrito();
    this._cartService.removeElementCart(item);
  }

 closeIcon(){
  let icono=document.getElementById("close");
  icono.style.color="red"
 }
}
