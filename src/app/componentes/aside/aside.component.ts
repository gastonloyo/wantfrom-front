import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "../../cargar-scripts.service";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  constructor(private _CargaScripts: CargarScriptsService) {
    _CargaScripts.Carga(["/sidebar"]);
   }

  ngOnInit(): void {
  }

}
