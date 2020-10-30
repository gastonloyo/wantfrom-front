import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_BASE_URL } from '../../config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  urlEndpoint: string;
  totalItems: number;
  @Output() totalItemsEmmiter: EventEmitter<number> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.urlEndpoint = `${API_BASE_URL}/api`;
  }

  /**
   * Obtiene el carrito del perfil de la sesión actual.
   * @return Observable con el objeto JSON convertido a Carrito.
   */
  getCarrito(): Observable<any> {
    return this.http.get(`${this.urlEndpoint}/perfil/carrito`);
  }

  /**
   * Agrega un nuevo item al carrito, en caso de que el producto ya se encuentre
   * en el carrito, suma en uno la cantidad del item.
   * @param productoId id del producto a agregar al carrito.
   * @return Observable con el objeto carrito.
   */
  agregarProducto(productoId: string): Observable<any> {
    const params = new HttpParams().set('productoId', productoId);

    ++this.totalItems;
    this.totalItemsEmmiter.emit(this.totalItems);
    
    return this.http.post(`${this.urlEndpoint}/carrito/producto/agregar`, null, {params: params});
  }

  /**
   * Elimina un item del carrito y devuelve el mismo actualizado.
   * @param productoId number id del producto (item) que remover del carrito.
   */
  eliminarItem(productoId: string): Observable<any> {
    let parametros = new HttpParams();
    parametros = parametros.append('productoId', productoId);

    --this.totalItems;
    this.totalItemsEmmiter.emit(this.totalItems);

    return this.http.delete(`${this.urlEndpoint}/carrito/producto/quitar`, {params: parametros});
  }

  /**
   * Actualiza la cantidad de productos de un item, y devuelve el carrito actualizado.
   * @param cantidad number cantidad nueva del item.
   * @param productoId number id del producto al cual se debe cambiar la cantidad del item.
   */
  actualizarCantidad(cantidad: string, productoId: string): Observable<any> {
    const parametros = new HttpParams().set('productoId', productoId).set('cantidad', cantidad);

    return this.http.put(`${this.urlEndpoint}/carrito/producto/actualizar`, null, {params: parametros});
  }

  getTotalItems(): number {
    let total;
    this.getCarrito().subscribe(resp => {
      total = resp.carrito.items.length;
    });

    return total;
  }
}
