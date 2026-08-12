// Ejercicio 2 — Encapsulamiento
// Modelá una clase CuentaBancaria:

// titular (nombre del dueño de la cuenta), fijo desde que se crea.
// saldo como private, arranca en el monto inicial que se le pase por constructor (no siempre 0).
// Un historial de movimientos privado (arreglo interno) que registre cada depósito y retiro (podés guardar strings tipo "depósito: +2000" o un objeto con tipo y monto — elegí vos la forma, pero tiene que quedar fuera del alcance de quien usa la clase).
// depositar(monto): rechaza (lanzá un Error) montos menores o iguales a 0 además de sumar al saldo.
// retirar(monto): rechaza si el monto pedido supera el saldo disponible, y también si el monto es menor o igual a 0.
// consultarSaldo(): number que devuelva el saldo actual.
// obtenerHistorial(): string[] (o el tipo que hayas elegido) que devuelva el historial — pero sin exponer el arreglo interno real (si quien llama modifica lo que le devolviste, el historial de la cuenta no se tiene que alterar).
// Nadie de afuera puede tocar saldo ni el historial directamente, solo a través de esos métodos.

class CuentaBancaria{
    readonly titular: string
    private saldo: number
    private historial: string[]

    constructor(titular: string, saldo: number, historial: string[]){
        this.titular = titular
        this.saldo = saldo
        this.historial = historial
    }
    
    depositar(monto: number): void{
        if(monto <= 0) console.log("El monto no puede ser igual o menor a 0");
        this.saldo = this.saldo + monto
        this.historial.push(`Ingreso + $${monto}`)
    }

    retirar(monto: number):void {
        if(monto > this.saldo) console.log("El saldo a retirar no puede superar el saldo disponible disponible");
        if(monto <= 0) console.log("El monto no puede ser igual o menor a 0");
        this.saldo = this.saldo - monto
        this.historial.push(`Retiro - $${monto}`)
    }

    consultarSaldo():number{
        return this.saldo
    }

    obtenerHistorial():string[]{
        return [...this.historial] //retorna una copia del arreglo
    }
}