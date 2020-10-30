import { DetalleCarrito } from './detalle-carrito';
export class Carrito {
    id: number;
    fechaCreacion: string;
    items: DetalleCarrito[];
    total: number;

    public calcularTotal(): number {
        let total = 0;
        this.items.forEach(item => {
            total += total + item.calcularSubtotal();
        });
        this.total = total;
        return this.total;
    }
}