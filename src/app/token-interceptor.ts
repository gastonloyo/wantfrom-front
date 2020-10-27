import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { AuthService } from './log-in/services/auth.service';
import { AuthResponse } from './log-in/clases/auth-response';

/**
 * Esta clase se encarga de interceptar las requests (peticiones) que se harán al servidor por el lado 
 * del cliente (nuestra app angular), para enriquecer cada request con el JWT de autenticación que 
 * recibimos al iniciar sesión por lado del servidor (api de login).
 * 
 * Este interceptor sirve para evitar agregar HttpHeaders (encabezados) a cada request que se quiera realizar
 * al servidor, es decir, en cada servicio que consuma alguna API de nuestro propio backend.
 * 
 * También sirve para, en caso de expirado el JWT, hacer una petición automáticamente a la API que se 
 * encarga de refrescar el token, es decir, generar un nuevo JWT para continuar utilizando recursos 
 * restringidos.
 */


 @Injectable()
 export class TokenInterceptor implements HttpInterceptor {

    isTokenRefreshing = false;
    refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject(null);

     constructor(private authService: AuthService) {}

     /**
      * Se encarga de interceptar la request antes de enviarla al servidor. Si hay un JWT (en local storage)
      * agrega el token al header de la request. En caso de expirar el JWT, se encargá de refrescar el token.
      * @param request HttpRequest petición actual
      * @param next HttpHandler para manejar siguiente peticion
      */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.indexOf('refresh') !== -1 || request.url.indexOf('login') !== -1) {
            return next.handle(request);
        }

        const jwtToken = this.authService.getJwt();

        if (jwtToken) {
            return next.handle(this.addToken(request, jwtToken)).pipe(catchError(error => {
                if (error instanceof HttpErrorResponse && (error.status === 403 || error.status === 500)) {
                    return this.handleAuthErrors(request, next);
                } else {
                    return throwError(error);
                }
            }));
        }
        return next.handle(request);
    }

    /**
     * Maneja errores de autenticación si la sesión expiró, es decir, se encarga de crear un nuevo JWT a
     * partir del refresh token existente.
     * @param request HttpRequest
     * @param next HttpHandler
     */
    private handleAuthErrors(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.isTokenRefreshing) {
            this.isTokenRefreshing = true;
            this.refreshTokenSubject.next(null);

            return this.authService.refreshToken().pipe(
                switchMap( (refreshTokenResponse: AuthResponse) => {
                    this.isTokenRefreshing = false;
                    this.refreshTokenSubject.next(refreshTokenResponse.authToken);

                    return next.handle(this.addToken(request, refreshTokenResponse.authToken));
                })
            );
        } else {
            return this.refreshTokenSubject.pipe(
                filter(result => result !== null),
                take(1),
                switchMap((res) => {
                    return next.handle(this.addToken(request, this.authService.getJwt()));
                })
            );
        }
    }

    /**
     * Este método se encarga de agregar a la cabezera de la request el JWT de autenticación que recibimos por
     * parte del servidor al iniciar sesión.
     * @param request HttpRequest
     * @param jwtToken string con el JWT a agregar.
     */
    addToken(request: HttpRequest<any>, jwtToken: any): HttpRequest<any> {
        return request.clone({
            headers: request.headers.set('Authorization', 'Bearer ' + jwtToken)
        });
    }
 }