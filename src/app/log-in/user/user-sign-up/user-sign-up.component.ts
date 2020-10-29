import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss']
})
export class UserSignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   /***** mostrar mensaje cta creada */
    
      let btnSignUp=document.getElementById("btn-sign-up");
      btnSignUp.addEventListener("click",this.showMessage)
 
  }

 //// ******** show psw *********///

  mostrarPsw1(){
    let input = document.getElementById("new-pasw")as HTMLInputElement ;   
    if(input.type == "password"){
        input.type = "text";
      let icon= document.getElementById("show1")
      icon.style.visibility="hidden";
      let iconHide=document.getElementById("hide1");
      iconHide.style.visibility="visible"
    }else{
        input.type = "password";
        let icon= document.getElementById("show1")
        icon.style.visibility="visible";
        let iconHide=document.getElementById("hide1");
        iconHide.style.visibility="hidden"
    }
  }
  mostrarPsw2(){
    let input = document.getElementById("new-pasw-repeat")as HTMLInputElement ;   
    if(input.type == "password"){
        input.type = "text";
      let icon= document.getElementById("show2")
      icon.style.visibility="hidden";
      let iconHide=document.getElementById("hide2");
      iconHide.style.visibility="visible"
    }else{
        input.type = "password";
        let icon= document.getElementById("show2")
        icon.style.visibility="visible";
        let iconHide=document.getElementById("hide2");
        iconHide.style.visibility="hidden"
    }
  }
///// show message
  showMessage(){
      let contRegistr=document.getElementById("contenedor-registrarse");
      contRegistr.style.display="none";
      let msj=document.getElementById("msje-registro");
      msj.style.display="block";
      msj.style.width="70%";
      let contBlanco=document.getElementById("cont-form");
      contBlanco.style.marginTop="-380px";
  }

}
