import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";

import {finalize  } from "rxjs/operators";
import{Observable} from "rxjs/internal/Observable";
import { CatalogoService } from 'src/app/products/services/catalogo.service';
import { Categoria } from 'src/app/products/clases/categoria';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', ]
})
export class HeaderComponent implements OnInit {
 categorias:Categoria[];


  constructor( private catalogoservice:CatalogoService, private router:Router) {
   
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
