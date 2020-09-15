import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "../../cargar-scripts.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(private _CargaScripts: CargarScriptsService) {
    _CargaScripts.Carga(["/banner"]);
   }

  ngOnInit(): void {
  }

}
