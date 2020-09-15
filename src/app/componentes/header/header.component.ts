import { Component, OnInit} from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";

import {finalize  } from "rxjs/operators";
import{Observable} from "rxjs/internal/Observable";
import { CargarScriptsService } from "../../cargar-scripts.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', ]
})
export class HeaderComponent implements OnInit {
 
  constructor(private storage : AngularFireStorage ,private _CargaScripts: CargarScriptsService) {
    _CargaScripts.Carga(["/logo"]);
  }

uploadPercent: Observable<number>;
urlImage: Observable<string>;

  uploadFile(event){
      
   const file = event.target.files[0];
    const filePath = "upload/logo";
    const ref = this.storage.ref(filePath);
   const task =this.storage.upload(filePath, file);
   this.uploadPercent = task.percentageChanges();
   task.snapshotChanges().pipe(finalize(() => this.urlImage= ref.getDownloadURL())).subscribe();

  }
  
  



  ngOnInit(): void {
  }

 

}
