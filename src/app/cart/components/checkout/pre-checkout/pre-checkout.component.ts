import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-checkout',
  templateUrl: './pre-checkout.component.html',
  styleUrls: ['./pre-checkout.component.scss']
})
export class PreCheckoutComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {

  }

  saveOnlocalStorage(){
    // let name= document.getElementById("name").nodeValue;
    // let lastname= document.getElementById("lastname").nodeValue;
    // let email= document.getElementById("email").nodeValue;
    // let cellphone= document.getElementById("cellphone").nodeValue;
    // let dni= document.getElementById("dni").nodeValue;
    let name="analia";
    let lastname="juarez"
    ///lo guardo
    localStorage.setItem("nombre", name);
    localStorage.setItem("apellido", lastname);
    // localStorage.setItem("email", email);
    // localStorage.setItem("teléfono", cellphone);

  }

}
