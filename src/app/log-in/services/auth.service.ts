import { Injectable, Output, EventEmitter } from '@angular/core';
import { API_BASE_URL } from 'src/app/config/config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SignupRequest } from '../clases/signup.request';
import { IniciarSesionRequest } from '../clases/login-request';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlEndpoint: string;
  refreshTokenPayload = {
    refreshToken: this.getRefreshToken(),
    userEmail: this.getEmailUser()
  };

  /**
   * Estos event emmiters nos serviran para notificar a todos los subscriptores que se realizaron cambios
   * cada vez que alguien se loguee, o desloguee.
   */
  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() useremail: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.urlEndpoint = `${API_BASE_URL}/api/auth`;
  }

  /**
   * Este servicio nos provee la petición a la API para registrar un nuevo usuario.
   * @param signupRequest SignupRequest con los datos para el registro de usuario: email y password.
   */
  signup(signupRequest: SignupRequest): Observable<any> {
    return this.http.post(`${this.urlEndpoint}/signup`, signupRequest);
  }

  /**
   * Servicio que se encarga de iniciar sesión en la App, y guardar los datos de inicio de sesión en Local Storage.
   * @param usuario IniciarSesionRequest con los datos credenciales del usuario para iniciar sesión.
   */
  login(usuario: IniciarSesionRequest): Observable<any> {
    return this.http.post(`${this.urlEndpoint}/login`, usuario).pipe(
      map(( response:any ) => {
        localStorage.setItem('authToken', response.authToken);
        localStorage.setItem('userEmail', response.userEmail);
        localStorage.setItem("refreshToken", response.refreshToken);
        localStorage.setItem("rol", response.rol);
        localStorage.setItem("expiraEn", response.expiraEn);

        this.loggedIn.emit(true);
        this.useremail.emit(response.userEmail);

        return response;
      })
    );
  }

  logout(): void {
    this.http.post(`${this.urlEndpoint}/logout`, this.refreshTokenPayload);

    localStorage.clear();
  }

  getJwt(): string {
    return localStorage.getItem('authToken');
  }

  getRefreshToken(): string {
    return localStorage.getItem('refreshToken');
  }

  getEmailUser(): string {
    return localStorage.getItem('userEmail');
  }

  isLoggedIn(): boolean {
    return this.getJwt() != null;
  }

  hasRole(role: string) {
    return localStorage.getItem('rol') == role;
  }
}
