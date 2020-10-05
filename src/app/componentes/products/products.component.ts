import { Component, OnInit } from '@angular/core';
import { CargarScriptsService} from "./../../cargar-scripts.service";
//import {Router} from "@angular/router"
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor( private _CargaScripts: CargarScriptsService) { 
    _CargaScripts.Carga(["/products"])
  }

  ngOnInit(): void {
  }

}
