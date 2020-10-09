import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
    //CAMBIAR COLOR ICONOS C/ FOCUS
    let userName=document.getElementById("username");
    userName.addEventListener("focus",this.changeUserIcon)
    let password = document.getElementById("password");
    password.addEventListener("focus",this.changePswIcon);
    /// volver a la normalidad
    userName.addEventListener("blur",this.originalUserIcon);
    password.addEventListener("blur",this.originalPswIcon);
    
    //// OLVIDE MI CONTRASENA
    let recuperar= document.getElementById("recuperar");
    recuperar.addEventListener("click",()=> {
      // ocultar form inicio de sesion
      this.hiddeForm();
      //mostrar recuperar contrasena
      let forgotPsw=document.getElementById("contenedor-forgot-psw");
      forgotPsw.style.display="flex";
      forgotPsw.style.flexDirection="column";
      forgotPsw.style.justifyContent="space-around";
      forgotPsw.style.alignItems="center";
      
    })

    //REGISTRARSE
    let btnRegistrarse=document.getElementById("btn-registrar");
    btnRegistrarse.addEventListener("click",()=> {
    //ocultar form inicio de sesion
      this.hiddeForm();
      //mostrar form registrarse
      let forgotPsw=document.getElementById("contenedor-registrarse");
      forgotPsw.style.display="flex";
      forgotPsw.style.flexDirection="column";
      forgotPsw.style.justifyContent="space-around";
      forgotPsw.style.alignItems="center";
        })
}

  ///// inicio metodos para el cambio de color de iconos///
  changeUserIcon(){
    let icon = document.getElementById("icono-user");
    icon.style.color="rgb(45, 123, 224)";
  }
  changePswIcon(){
    let icon = document.getElementById("icono-lock");
    icon.style.color="rgb(45, 123, 224)";
  }
  originalUserIcon(){
    let icon = document.getElementById("icono-user");
    icon.style.color="grey"
  }
  originalPswIcon(){
    let icon = document.getElementById("icono-lock");
    icon.style.color="grey"
  }
    ///// FIN metodos para el cambio de color de iconos///

    /// metodo para ocultar el formulario de inicio de sesion
  hiddeForm(){
    let uno=document.getElementById("is-uno");
    let dos=document.getElementById("is-dos");
    let tres=document.getElementById("is-tres");
    uno.style.display="none";
    dos.style.display="none";
    tres.style.display="none";
  }
  //FIN ocultar formulario inicio de sesion
}
