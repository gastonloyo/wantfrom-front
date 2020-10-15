import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {
  images:any[]=[
    {
      name:'imagen 1',
      img:'../../../../assets/imagenes/publi1.jpg',
    },
    {
      name:'imagen 2',
      img:'../../../../assets/imagenes/publi2.jpg',
    },
    {
      name:'imagen 3',
      img:'../../../../assets/imagenes/publi3.jpg',
    }
  ]
  constructor() {
    
   }

  ngOnInit(): void {
   
  }

  hideSlide(){
    let slider= document.getElementById("slider");
    console.log(slider);
    
  }
 
}
