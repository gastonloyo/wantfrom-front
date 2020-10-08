import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/products/clases/producto';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.scss']
})
export class TarjetaProductoComponent implements OnInit {

  @Input() producto:Producto
  constructor() { }

  ngOnInit(): void {
  }

}
