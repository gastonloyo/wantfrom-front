import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-checkout',
  templateUrl: './pre-checkout.component.html',
  styleUrls: ['./pre-checkout.component.scss']
})
export class PreCheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  localStorage(){
    let name= document.getElementById("name");
    console.log(name)
    let lastname= document.getElementById("lastname");
    let email= document.getElementById("email");
    let cellphone= document.getElementById("cellphone");
    let dni= document.getElementById("dni");
    ///lo guardo
    localStorage.setItem("nombre", name.nodeValue); 

  }

}
