# Trabajos Prácticos — TypeScript

Este repositorio contiene las resoluciones de los ejercicios prácticos de TypeScript, enfocados en **Programación Orientada a Objetos (POO)**, encapsulamiento, herencia y polimorfismo.

---

## 🛠️ Tecnologías utilizadas

* **Language:** TypeScript
* **Runtime:** Node.js
* **Package Manager:** pnpm
* **Execution Engine:** `tsx` (TypeScript Execute)

---

## 📁 Estructura del Proyecto y Contenido

```text
.
├── ej1.ts              # Ejercicio 1
├── ej2.ts              # Ejercicio 2
├── ej3.ts              # Ejercicio 3
├── ej4.ts              # Ejercicio 4 (Polimorfismo en Empleados)
├── ej5.ts              # Ejercicio 5
├── package.json        # Configuración de dependencias y scripts
├── tsconfig.json       # Configuración del compilador de TypeScript
└── pnpm-lock.yaml      # Control de versiones exactas de paquetes
```
### Conceptos aplicados:
* **Encapsulamiento e Inmutabilidad:** Protección de propiedades (`private` / `protected`) y retorno de copias de arreglos para evitar la modificación directa del estado interno.
* **Herencia y Polimorfismo:** Creación de clases base (`Empleado`) y subclases (`EmpleadoFijo`, `EmpleadoPorHoras`, `EmpleadoPorComision`) con sobrescritura de métodos para procesar colecciones de forma unificada.

---

## 🚀 Instalación y Ejecución

1. **Instalar dependencias:**
   ```bash
   pnpm install
  

### Ejecutar los ejercicios:
Podés correr cada ejercicio utilizando los scripts configurados en `package.json`:

```bash
pnpm ej1
pnpm ej2
pnpm ej3
pnpm ej4
pnpm ej5
```

O ejecutarlos directamente con tsx:

```Bash
pnpm tsx ej4.ts
```
