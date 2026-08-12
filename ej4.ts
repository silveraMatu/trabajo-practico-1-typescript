// Ejercicio 4 — Polimorfismo
// Sobre la jerarquía del ejercicio 3, agregá:

// EmpleadoPorHoras extends Empleado con horasTrabajadas y valorHora, y su propia versión de calcularSueldo() (horas × valor hora, sin bono por antigüedad).
// EmpleadoPorComision extends Empleado con ventasDelMes y porcentajeComision, y su propia versión de calcularSueldo() (ventas × porcentaje).
// Armá un arreglo Empleado[] con varias instancias mezclando las tres subclases (EmpleadoFijo, EmpleadoPorHoras, EmpleadoPorComision) y recorrelo con un for, llamando calcularSueldo() en cada una sin preguntar de qué tipo es cada empleado.

// Sumá también una función (no un método de clase) calcularNomina(empleados: Empleado[]): number que devuelva el total a pagar sumando el calcularSueldo() de todos.
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
    private sueldoBase: number

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

class EmpleadoPorHoras extends Empleado{
    private horasTrabajadas: number
    private valorHora: number

    constructor(nombre: string, anios: number, horasTrabajadas: number, valorHora: number){
        super(nombre, anios)
        this.horasTrabajadas = horasTrabajadas
        this.valorHora = valorHora
    }

    calcularSueldo(): number {
        return this.valorHora * this.horasTrabajadas
    }
}
class EmpleadoPorComision extends Empleado{
    private ventasDelMes: number
    private porcentajeComision: number

    constructor(nombre: string, anios: number, ventasDelMes: number, porcentajeComision: number){
        super(nombre, anios)
        this.ventasDelMes = ventasDelMes
        this.porcentajeComision = porcentajeComision
    }

    calcularSueldo(): number {
        return this.ventasDelMes * this.porcentajeComision
    }
}

const empleados: Empleado[] = [
    new EmpleadoFijo("Carlos", 5, 500000),
    new EmpleadoPorHoras("Ana", 2, 160, 3500),
    new EmpleadoPorComision("Marcos", 1, 2000000, 0.05),
    new EmpleadoFijo("Lucía", 10, 750000),
    new EmpleadoPorHoras("Franco", 0, 120, 4000),
    new EmpleadoPorComision("Sofía", 3, 3500000, 0.08)
]

for(const emp of empleados){
    console.log(emp.calcularSueldo());
}

function calcularNomina (empleados: Empleado[]): number{
    let total = 0;

    for(const emp of empleados){
        total += emp.calcularSueldo()
    }
    return total
}

console.log(calcularNomina(empleados))