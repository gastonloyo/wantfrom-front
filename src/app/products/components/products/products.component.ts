import { Component, OnInit } from '@angular/core';
import { Producto } from '../../clases/producto';
import { CatalogoService } from '../../services/catalogo.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productosDestacados: Producto[]
  constructor(private catalogoService:CatalogoService) { 
    
  }

  ngOnInit(): void {
    this.getProductosDestacados();
  }
  getProductosDestacados():void{
    this.catalogoService.getProductosDestacados().subscribe(response => {
      this.productosDestacados=response;
      console.log(this.productosDestacados)}
      );
  }

}
