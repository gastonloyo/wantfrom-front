import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/products/clases/producto';
@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {
  @Input() producto:Producto
  constructor() { }

  ngOnInit(): void {
  }

saveToFav(){
  let corazon=document.getElementById("fav");
  corazon.style.color="red";
  corazon.classList.add("fas");
}
}
