import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/products/clases/categoria';
import { CatalogoService } from 'src/app/products/services/catalogo.service';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
categorias:Categoria[];
  constructor(private catalogoservice:CatalogoService) {
       

}
ngOnInit():void {
  this.getListaCategorias();

  
  
}

getListaCategorias():void{
this.catalogoservice.getListaCategorias().subscribe( response =>{
  this.categorias=response;
  console.log(response);}
  )
}

}
