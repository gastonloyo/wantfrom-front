import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     //CAMBIAR COLOR ICONOS C/ FOCUS
     let userName=document.getElementById("username");
     userName.addEventListener("focus",this.changeUserIcon)
     
     let password = document.getElementById("password");
     password.addEventListener("focus",this.changePswIcon);
     
    
     
     let emailFP=document.getElementById("emailPsw");
     emailFP.addEventListener("focus",this. changeEnvelopeIcon);
     
     /// volver a la normalidad
     userName.addEventListener("blur",this.originalUserIcon);
     password.addEventListener("blur",this.originalPswIcon);
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
 
           
     ///VOLVER ATRAS
     let arrow1=document.getElementById("back");
     arrow1.addEventListener("click",this.return) ;  
 
  }
  mostrarPsw(){
    let input = document.getElementById("password");
  console.log("input.getAttribute(id)");

    // if(input.getAttribute == "password"){
    //     input.type = "text";
    // }else{
    //     input.type = "password";
    // }
 
   
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
  let contForgotPsw=document.getElementById("contenedor-forgot-psw");
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
