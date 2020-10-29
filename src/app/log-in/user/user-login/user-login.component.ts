import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IniciarSesionRequest } from '../../clases/login-request';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL } from '../../../config/config';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  GOOGLE_AUTH_URL = GOOGLE_AUTH_URL;
  FACEBOOK_AUTH_URL = FACEBOOK_AUTH_URL;

  formLogin: FormGroup;
  formOlvidePass: FormGroup;

  usuario: IniciarSesionRequest;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.usuario = new IniciarSesionRequest();
  }

  ngOnInit(): void {

    this.crearForms();

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

  crearForms(): void {
    this.formLogin = this.fb.group({
      email: ["", [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ["", Validators.required]
    });

    this.formOlvidePass = this.fb.group({
      email: ["", [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    });
  }

  /**
   * Inicia una petición a la API para iniciar sesión, si las credenciales son válidas, nos devuelve los datos de 
   * inicio de sesión: JWT, email y rol del usuario, refresh token para iniciar sesion automaticamente y timestamp 
   * de expiración del JWT.
   */
  iniciarSesion(): void {
    if (this.formLogin.invalid) {
      return Object.values(this.formLogin.controls)
      .forEach(control => control.markAsTouched());
    }

    this.usuario.email = this.formLogin.controls.email.value;
    this.usuario.password = this.formLogin.controls.password.value;

    this.authService.login(this.usuario).subscribe(response => {
      console.log(response);
      alert('¡Sesión Iniciada!')
      this.router.navigate(['home'])
    }, err => {
      alert('Bad Credentials');
      console.log(err);
    });
  }

  enviarRecuperarPassword(): void {
    console.log(this.formOlvidePass.value);
  }

  // Getters para campos invalidos formulario login
  get emailInvalido() {
    return this.formLogin.get('email').invalid && this.formLogin.get('email').touched;
  }

  get passwordInvalida() {
    return this.formLogin.get('password').invalid && this.formLogin.get('password').touched;
  }

  // Getters para campos invalidos formulario olvide pass
  get emailInvalidoPass() {
    return this.formOlvidePass.get('email').invalid && this.formOlvidePass.get('email').touched;
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
