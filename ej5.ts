// Ejercicio 5 — Getters y setters
// Modelá una clase Persona:

// dni como private readonly, se recibe por constructor.
// nombre público, sin restricciones.
// edad como atributo privado, con un get edad() que la devuelva y un set edad(valor) que rechace valores negativos o mayores a 120 (lanzando un Error en ambos casos).
// email como atributo privado, con un set email(valor) que rechace (lanzando un Error) valores que no contengan "@", y un get email() que lo devuelva.
// Un get de solo lectura esMayorDeEdad que devuelva true si edad >= 18 (no guarda ese valor, lo calcula al leerlo).
// Un get de solo lectura datosPublicos que devuelva un string con nombre y esMayorDeEdad, pero sin dni ni email (son datos sensibles que no se exponen juntos con el resto).

class Persona {
    private readonly dni: number
    nombre: string
    private edad: number = 0
    private email: string = ""
    
    constructor(dni: number, nombre: string){
        this.dni = dni
        this.nombre = nombre        
    }


    // edad getter y setter
    get getEdad():number{
        return this.edad
    }

    set setEdad(edad: number){
        if(edad < 0 || edad > 120){
            console.log("Ingrese un valor válido");
        }
        this.edad = edad
    }

    // email getter y setter

    get getEmail(): string{
        return this.email
    }

    set setEmail(email: string){
        if (!email.includes("@")) throw new Error("El email debe contener '@'")
        this.email = email
    }

    readonly esMayorDeEdad = ():boolean =>{
        if(this.getEdad >= 18) return true
        return false
    }

    readonly datosPublicos = ():string=>{
        return `${this.nombre} - ${this.esMayorDeEdad()}`
    }
}