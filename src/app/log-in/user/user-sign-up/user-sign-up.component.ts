import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss']
})
export class UserSignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /*** cambio de color en iconos */
    let emailR=document.getElementById("email");
    emailR.addEventListener("focus",this. changeEnvelopeIcon);
    emailR.addEventListener("blur",this.originalEnvelopeIcon);

    let newPwd=document.getElementById("new-pasw");
    newPwd.addEventListener("focus",this.changePswIcon1);
    newPwd.addEventListener("blur",this.originalPswIcon);

    let newPwdRepeat= document.getElementById("new-pasw-repeat");
    newPwdRepeat.addEventListener("focus",this.changePswIcon2);
    newPwdRepeat.addEventListener("blur",this.originalPswIcon);   

    /***** mostrar mensaje cta creada */
    
      let btnSignUp=document.getElementById("btn-sign-up");
      btnSignUp.addEventListener("click",this.showMessage)
 
   
  }

  changePswIcon1(){
    let lock1 = document.getElementById("lock1");
    lock1.style.color="rgb(45, 123, 224)";
  }
  changePswIcon2(){
    let lock2 = document.getElementById("lock2");
    lock2.style.color="rgb(45, 123, 224)";
  }
  changeEnvelopeIcon(){
    let envelope=document.getElementById("icono-envelope");
    envelope.style.color="rgb(45, 123, 224)";
  }
  originalPswIcon(){
    let lock1 = document.getElementById("lock1");
    lock1.style.color="grey"
    let lock2 = document.getElementById("lock2");
    lock2.style.color="grey";
  }
  originalEnvelopeIcon(){
    let envelope = document.getElementById("icono-envelope");
    envelope.style.color="grey";
  }

  showMessage(){
      let contRegistr=document.getElementById("contenedor-registrarse");
      contRegistr.style.display="none";
      let msj=document.getElementById("msje-registro");
      msj.style.display="initial";
      msj.style.width="70%";
      let contBlanco=document.getElementById("cont-form");
      contBlanco.style.marginTop="-80px";
  }

}
