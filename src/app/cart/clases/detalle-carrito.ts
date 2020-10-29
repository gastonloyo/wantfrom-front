import { Producto } from '../../products/clases/producto';
export class DetalleCarrito {
    id: number;
    producto: Producto;
    cantidad: number;
    subtotal: number;

    public calcularSubtotal(): number {
        let subtotal = this.cantidad * this.producto.precio;
        this.subtotal = subtotal;
        
        return this.subtotal;
    }
}