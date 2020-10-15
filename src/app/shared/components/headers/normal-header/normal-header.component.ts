import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { CatalogoService } from 'src/app/products/services/catalogo.service';
import { Categoria } from 'src/app/products/clases/categoria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normal-header',
  templateUrl: './normal-header.component.html',
  styleUrls: ['./normal-header.component.scss']
})
export class NormalHeaderComponent implements OnInit {
  categorias:Categoria[];
  constructor (private catalogoservice:CatalogoService, private router:Router) {

   }

  ngOnInit(): void {
    this.getListaCategorias()
  }

  getListaCategorias():void{
    this.catalogoservice.getListaCategorias().subscribe( response =>{
     this.categorias=response;
     console.log(response) }
     )
  }

  buscarProducto(termino:string):void {
    this.router.navigate(['/search',termino]);
   }
}
