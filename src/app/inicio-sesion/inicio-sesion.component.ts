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
    
    let newPwd=document.getElementById("new-pasw");
    newPwd.addEventListener("focus",this.changePswIcon);
    
    let emailR=document.getElementById("email");
    emailR.addEventListener("focus",this. changeEnvelopeIcon);
    
    let emailFP=document.getElementById("emailPsw");
    emailFP.addEventListener("focus",this. changeEnvelopeIcon);
    
    /// volver a la normalidad
    userName.addEventListener("blur",this.originalUserIcon);
    password.addEventListener("blur",this.originalPswIcon);
    newPwd.addEventListener("blur",this.originalPswIcon);
    emailR.addEventListener("blur",this.originalEnvelopeIcon);
    emailFP.addEventListener("blur",this.originalEnvelopeIcon);
    
    //// OLVIDE MI CONTRASENA
    let recuperar= document.getElementById("recuperar");
    recuperar.addEventListener("click",()=> {
      // ocultar form inicio de sesion
      this.hiddeForm();
      //mostrar contenedors recuperar contrasena
      let uno=document.getElementById("contenedor-forgot-psw");
      uno.style.display="flex";
      uno.style.flexDirection="column";
      uno.style.justifyContent="space-around";
      uno.style.alignItems="center";
      
    })

    //REGISTRARSE
    let btnRegistrarse=document.getElementById("btn-registrar");
    btnRegistrarse.addEventListener("click",()=> {
    //ocultar form inicio de sesion
      this.hiddeForm();
      //mostrar form registrarse
      let uno=document.getElementById("contenedor-registrarse");
      uno.style.display="flex";
      uno.style.flexDirection="column";
      uno.style.justifyContent="space-around";
      uno.style.alignItems="center";
        })

     ///MENSAJE CTA CREADA
     let btnCrear=document.getElementById("btn-crear-cta");
     btnCrear.addEventListener("click",()=>{
       let contRegistr=document.getElementById("contenedor-registrarse");
       contRegistr.style.display="none";
       let msj=document.getElementById("msje-registro");
       msj.style.display="initial";
       msj.style.width="70%";
       let contBlanco=document.getElementById("cont-form");
       contBlanco.style.marginTop="-80px";
     })

     
    ///VOLVER ATRAS
    let arrow1=document.getElementById("back1");
    arrow1.addEventListener("click",this.return) ; 
    let arrow2=document.getElementById("back2");
    arrow2.addEventListener("click",this.return) ;


    }

  mostrarPsw(){
      let input = document.getElementById("password");
     console.log(input);

      if(input.type == 'password'){
          input.type = 'text';
      }else{
          input.type = 'password';
      }
   
     
  }

  ///// inicio metodos para el cambio de color de iconos///
  changeUserIcon(){
    let icon = document.getElementById("icono-user");
    icon.style.color="rgb(45, 123, 224)";
  }
  changePswIcon(){
    let icon = document.getElementById("icono-lock");
    icon.style.color="rgb(45, 123, 224)";
    let icon2 = document.getElementById("icono-lock-r");
    icon2.style.color="rgb(45, 123, 224)";
  }
  changeEnvelopeIcon(){
    let icon3=document.getElementById("icono-envelope");
    icon3.style.color="rgb(45, 123, 224)";
    let icon4=document.getElementById("icono-env-psw");
    icon4.style.color="rgb(45, 123, 224)";
  }
  originalUserIcon(){
    let icon = document.getElementById("icono-user");
    icon.style.color="grey"
  }
  originalPswIcon(){
    let icon = document.getElementById("icono-lock");
    icon.style.color="grey"
    let icon2 = document.getElementById("icono-lock-r");
    icon2.style.color="grey";
  }
  originalEnvelopeIcon(){
    let icon3 = document.getElementById("icono-envelope");
    icon3.style.color="grey";
    let icon4 = document.getElementById("icono-env-psw");
    icon4.style.color="grey"
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
 
  ///inicio metodo para ir atras con la flecha
  return(){
    //ocultar
    let contRegistrarse= document.getElementById("contenedor-registrarse");
    let contForgotPsw=document.getElementById("contenedor-forgot-psw");
    contRegistrarse.style.display="none";
    contForgotPsw.style.display="none";
    //mostrar inicio de sesion
    let uno=document.getElementById("is-uno");
    let dos=document.getElementById("is-dos");
    let tres=document.getElementById("is-tres");
    uno.style.display="flex";
    uno.style.flexDirection="column";
    uno.style.justifyContent="space-around";
    uno.style.alignItems="center";
    dos.style.display="flex";
    dos.style.justifyContent="space-between";
    dos.style.alignItems="center";
    tres.style.display="flex";
    tres.style.flexDirection="column";
    tres.style.justifyContent="space-between";
    tres.style.alignItems="center";
   
  }


   ///FIN metodo para ir atras 

   //////metodo mostarr psw

  //  mostrarPsw(){
  //   let campoPsw = document.getElementById("password");
  //   if(campoPsw.type == "password"){
  //       campoPsw.type = "text";
  //   }else{
  //       campoPsw.type = "password";
  //   }
  //  }

}
