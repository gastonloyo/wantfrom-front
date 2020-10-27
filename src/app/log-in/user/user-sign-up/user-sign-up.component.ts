import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupRequest } from '../../clases/signup.request';
import { ValidadoresService } from '../../services/validadores.service';
import { AuthService } from '../../services/auth.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss']
})
export class UserSignUpComponent implements OnInit {

  formRegistro: FormGroup;
  signupRequest: SignupRequest;

  constructor(private fb: FormBuilder,
              private router: Router,
              private validadores: ValidadoresService,
              private authService: AuthService) {
    this.signupRequest = new SignupRequest();
  }

  ngOnInit(): void {

    this.crearFormulario();

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
    
      // let btnSignUp=document.getElementById("btn-sign-up");
      // btnSignUp.addEventListener("click",this.showMessage);
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

  /**
   * Crea el formulario a través de FormBuilder, con los campos:
   *                                        -email: obligatorio, patron de email @example.com
   *                                        -password: obligatorio
   */
  crearFormulario(): void {
    this.formRegistro = this.fb.group({
      // Expresion regular para verificar que sea un email correcto.
      email: ["", [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ["", Validators.required],
      passwordRepeat: ["", Validators.required]
    }, {
      validators: this.validadores.passwordIguales('password', 'passwordRepeat')
    });
  }

  /**
   * Getter validador de email.
   * @return: true si el campo email es invalido y ha sido tocado.
   */
  get emailInvalido() {
    return this.formRegistro.get('email').invalid && this.formRegistro.get('email').touched;
  }

  /**
   * Getter validador de password.
   * @return: true si el campo password es invalido y ha sido tocado.
   */
  get passwordInvalida() {
    return this.formRegistro.get('password').invalid && this.formRegistro.get('password').touched;
  }

  /**
   * Getter validador de passwords iguales.
   * @return: true si las contraseñas NO son iguales.
   */
  get passwordNoIguales() {
    const pass1 = this.formRegistro.get('password').value;
    const pass2 = this.formRegistro.get('passwordRepeat').value;

    return (pass1 === pass2)?false : true;
  }

  /**
   * Registra la nueva cuenta. Toma los datos de los campos del formulario, y si son validos, hace una peticion 
   * POST a la API de registrar usuario para completar el registro.
   */
  registrarse(): void {


    if (this.formRegistro.invalid) {
      return Object.values(this.formRegistro.controls)
      .forEach(control => control.markAsTouched());
    }

    this.signupRequest.email = this.formRegistro.controls.email.value;
    this.signupRequest.password = this.formRegistro.controls.password.value;

    this.authService.signup(this.signupRequest).subscribe(response => {
      console.log(response);
      
      this.showMessage();
    }, err => {
      console.log(err.error);
      throwError(err);
    });


  }

}
