// Ejercicio 1 — Abstracción
// Modelá una clase Producto para un sistema de ventas. Pensá qué datos y comportamiento importan para vender, y qué datos sobran aunque existan en la realidad (por ejemplo, el color exacto del embalaje).

// Atributos: nombre, precio, categoria (ej: "electrónica", "almacén"), stock (cantidad disponible).
// Método describir() que devuelva un string tipo "Teclado ($electrónica): $10000 — 5 unidades".
// Método hayStock(cantidad: number): boolean que diga si se puede vender esa cantidad sin quedar en negativo.
// Método venderUnidades(cantidad: number): si hayStock(cantidad) es true, descuenta del stock; si no, no vende nada (decidí vos si avisa con un mensaje o lanza un Error — cualquiera de las dos es válida, pero justificalo).
// Método aplicarDescuento(porcentaje: number): number que devuelva el precio final sin modificar el precio original del producto (el descuento es una simulación, no un cambio permanente).

enum CATEGORIA{
    ELECTRONICA= "electrónica",
    ALMACEN= "almacén"
}

class Producto{
    nombre: String
    precio: number
    categoria: CATEGORIA
    stock: number

    constructor(nombre: string, precio: number, categoria: CATEGORIA, stock: number){
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
        this.stock = stock
    }

    describir(): string{
        return `${this.nombre} (${this.categoria}): ${this.precio} - ${this.stock} unidades.`;
    }

    hayStock(cantidad: number): boolean{
        if((this.stock - cantidad) < 0 )
            return false
        return true
    }

    venderUnidades(cantidad: number): number | void{
        const hayStock = this.hayStock(cantidad)
        if(hayStock){
           this.stock = this.stock - cantidad
           return this.stock
        }
        console.log("No hay unidades disponibles");
    }

    aplicarDescuento(porcentaje: number):number{
        return (100 - porcentaje) * 100 / this.precio
    }
}

const producto = new Producto("compu", 100, CATEGORIA.ELECTRONICA, 5)

console.log(producto.describir()); 
console.log(producto.hayStock(6));
console.log("quedan", producto.venderUnidades(1));
console.log(producto.aplicarDescuento(90));