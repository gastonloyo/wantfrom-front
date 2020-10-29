import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../products/clases/producto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get('https://api.deofisdev.online/api/productos');
  }

  getCarrito() {
    return this.http.get('https://api.deofisdev.online/api/perfil/carrito');
  }
}
