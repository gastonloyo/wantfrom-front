import { Component, OnInit } from '@angular/core';
import { CargarScriptsService} from "./../../../cargar-scripts.service";

@Component({
  selector: 'app-vermas',
  templateUrl: './vermas.component.html',
  styleUrls: ['./vermas.component.scss']
})
export class VermasComponent implements OnInit {

  constructor(private _CargaScripts: CargarScriptsService) { 
    _CargaScripts.Carga(["/ver_mas/descripcion_prod"])
  }

  ngOnInit(): void {
  }

}
