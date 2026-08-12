// Ejercicio 3 — Herencia
// Modelá:

// Clase base Empleado con nombre (protected), antiguedad en años (protected, cantidad de años trabajados) y calcularSueldo() que devuelve 0 (la clase base no sabe calcular sueldos reales, cada subclase decide cómo).
// Un método describir(): string en Empleado que devuelva algo como "Juan (3 años) — sueldo: $...", usando this.calcularSueldo() — este método no se reescribe en las subclases, ya funciona para cualquier tipo de empleado gracias al polimorfismo de calcularSueldo().
// EmpleadoFijo extends Empleado, agrega sueldoBase y sobreescribe calcularSueldo(): devuelve sueldoBase, más un bono por antigüedad de un 2% del sueldoBase por cada año trabajado.

class Empleado{
    protected nombre: string
    protected anios: number

    constructor(nombre: string, anios: number){
        this.nombre = nombre
        this.anios = anios
    }

    calcularSueldo(): number{
        return 0
    }
    
    describir():string{
        return `${this.nombre} (${this.anios} años) - sueldo: $${this.calcularSueldo()}`
    }
}

class EmpleadoFijo extends Empleado{
    sueldoBase: number

    constructor(nombre: string, anios: number, sueldoBase: number){
        super(nombre, anios)
        this.sueldoBase = sueldoBase
    }

    calcularSueldo(): number {
        const sueldoActual = this.sueldoBase
        const bono = (this.sueldoBase * 0.02) * this.anios
        return sueldoActual + bono
    }
}

const matu = new EmpleadoFijo("Matu", 4, 1000)

console.log(matu.calcularSueldo()); 