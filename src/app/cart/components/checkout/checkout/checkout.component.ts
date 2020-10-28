import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showInputAdress(){
    let newAdress= document.getElementById("newAdress12");
    newAdress.style.display="inherit";
    let ourAdress= document.getElementById("ourAdress");
    ourAdress.style.display="none";
  }
  showAdress(){
    let ourAdress= document.getElementById("ourAdress");
    ourAdress.style.display="inherit";
    let newAdress= document.getElementById("newAdress12");
    newAdress.style.display="none";
    let cash= document.getElementById("cash-box");
    cash.style.display="inherit";
  }
  
}
