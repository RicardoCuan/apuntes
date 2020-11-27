# Introducción a TypseScript

[Link de las diapositivias](https://static.platzi.com/media/public/uploads/platzi_slides_fundamentos-typescript_61b51d92-9d96-4ace-ab85-9cb23cbef600.pdf)

- [Introducción a TypseScript](#introducción-a-typsescript)
  - [1. Introducción a TypeScript](#1-introducción-a-typescript)
    - [1.1 El lenguaje de programación TypeScript](#11-el-lenguaje-de-programación-typescript)
    - [1.2 Instalación de herramientas](#12-instalación-de-herramientas)
    - [1.3 Instalación de herramientas en Window](#13-instalación-de-herramientas-en-window)
    - [1.4 Navegación y refactorización](#14-navegación-y-refactorización)
  - [2. Entorno de Desarrollo](#2-entorno-de-desarrollo)
    - [2.1 El compilador de TypeScript](#21-el-compilador-de-typescript)
      - [La opción --watch](#la-opción---watch)
    - [2.2 El archivo configuración de TypeScript](#22-el-archivo-configuración-de-typescript)
      - [Usando el archivo tsconfig.json](#usando-el-archivo-tsconfigjson)
    - [2.3 Mi primer proyecto TypeScript](#23-mi-primer-proyecto-typescript)
  - [3. Tipos en TypeScript](#3-tipos-en-typescript)
    - [3.1 Tipado en TypeScript](#31-tipado-en-typescript)
    - [3.2 Number, Boolean y String](#32-number-boolean-y-string)
      - [Number](#number)
      - [Boolean](#boolean)
      - [String](#string)
        - [Template String](#template-string)
    - [3.3 Any](#33-any)
    - [3.4 Void y never](#34-void-y-never)
      - [void](#void)
      - [never](#never)
    - [3.5 null y undefined](#35-null-y-undefined)
    - [3.6 Object](#36-object)
    - [3.7 Array](#37-array)
    - [3.8 Tupla](#38-tupla)
    - [3.9 Enum](#39-enum)
    - [3.10 Unión de Tipos, Alias y Tipos Literales](#310-unión-de-tipos-alias-y-tipos-literales)
      - [Unión de tipos](#unión-de-tipos)
      - [Alias](#alias)
      - [Tipos Literales](#tipos-literales)
    - [3.11 Aserciones de Tipo](#311-aserciones-de-tipo)
    - [3.12 Funciones en TypeScript](#312-funciones-en-typescript)
    - [3.13 Resumen](#313-resumen)
  - [4. Tipos Personalizados](#4-tipos-personalizados)
    - [4.1 Interfaces](#41-interfaces)
    - [4.2 Interfaces: Propiedades opcionales](#42-interfaces-propiedades-opcionales)
      - [Propiedades de Solo Lectura](#propiedades-de-solo-lectura)
    - [4.3 Extensión de interfaces](#43-extensión-de-interfaces)
    - [4.4 Clases](#44-clases)
    - [4.5 Clases públicas y privadas](#45-clases-públicas-y-privadas)
    - [4.6 Métodos Get y Set](#46-métodos-get-y-set)
    - [4.7 Herencia de clases y propiedades estáticas](#47-herencia-de-clases-y-propiedades-estáticas)
      - [Clases abstractas](#clases-abstractas)
      - [Propiedades estáticas](#propiedades-estáticas)
      - [propiedades de solo lectura](#propiedades-de-solo-lectura-1)
    - [4.8 Resumen](#48-resumen)
      - [Módulos en TypeScript](#módulos-en-typescript)
      - [Importando y Exportando en Módulos](#importando-y-exportando-en-módulos)
  - [5. Módulos](#5-módulos)
    - [5.1 Principios de responsabilidad única](#51-principios-de-responsabilidad-única)
    - [5.2 Resolviendo módulos](#52-resolviendo-módulos)
      - [classic](#classic)
      - [classic: Import Relativo](#classic-import-relativo)
      - [classic: Import No Relativo](#classic-import-no-relativo)
      - [node](#node)
      - [node: Import Relativo](#node-import-relativo)
      - [node: Import No Relativo](#node-import-no-relativo)
    - [5.3 Webpack y agrupación de módulos](#53-webpack-y-agrupación-de-módulos)

## 1. Introducción a TypeScript

### 1.1 El lenguaje de programación TypeScript

1. Lenguaje de Programación Tipado
2. Lenguaje de ALto Nivel
3. Genera como resultado Código JavaScript
4. Código Abierto
5. Desarrollo en cualquier Sistema Operativo
6. El código puede ejecutarse en cualquier navegador o plataforma
7. TypeScript soporta todo el conjunto de JavaScript
8. Quiénes usan TypeScript?
   1. Microsoft
   2. Google
   3. airbnb
   4. shopify
   5. 2393+

¿Por qué usar TypeScript?

1. Programación Orientada a Objetos
2. Potencia tu código JavaScript
3. Mayor Productividad
4. Poderoso Sistema de tipos
5. Compila a ES5, ES6 y más
6. Puede pervenir cerca de 15% de bugs

### 1.2 Instalación de herramientas

1. NodeJS
2. VisualStudioCode
3. nvm

### 1.3 Instalación de herramientas en Window

### 1.4 Navegación y refactorización

Con Visual Studio Code al hacer un cambio en una función, este te destaca en cuáles archivos se está utilizando. Esto es una de las ventajas contra javascript ya que estos cambios en JS vanilla puede llegar a ser peligrosos.

## 2. Entorno de Desarrollo

### 2.1 El compilador de TypeScript

Para descargar el compilador de Typescript se utiliza el siguiente código:

```bash
npm install -g typescript
```

Para verificar que está instalada ejecutamos `tsc --version` o `tsc -v`

Los archivos tienen extensión .ts. Este archivo pasa por tsc y tiene como archivo salida un .js

#### La opción --watch

Esta opción responde a cambios en un archivo TypeScript

`tsc --watch hello.ts`

### 2.2 El archivo configuración de TypeScript

tsconfig.json

1. Especifica la raíz de un proyecto TypeScript
2. Permite configurar opciones para el compilador

Se puede generar con `tsc --init`

tsconfig.json

```json
{
  "extends": "./configs/base",
  "compileOnSave": true,
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "removeComents": true
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules",
    "**/*.test.ts"
  ]
}
```

#### Usando el archivo tsconfig.json

```bash
tsc # Busca la configuración

tsc --project platzi # Especifíca un directorio que contiene la configuración

tsc file.ts # omite la configuración
```

### 2.3 Mi primer proyecto TypeScript

## 3. Tipos en TypeScript

### 3.1 Tipado en TypeScript

1. Explícito

Define una sintaxis para la creación de variables con tipo de datos

2. Inferido

TypeScript tiene la habilidad de "deducir" el tipo en función de un valor

Síntaxis

[nombre de variable] : [tipo De Dato]

### 3.2 Number, Boolean y String

#### Number

1. Valores numéricos
2. Valores hexadecimales
3. Valores binarios
4. Valores octales

#### Boolean

1. El tipo de dato más simple en TypeScript
2. Dos únicos valores: true y false

#### String

1. El tipo de dato para trabajar con datos textuales o cadenas
2. Así como en JavaScript, se pueden usar comillas dobles ("") y simples ('')

##### Template String

1. Permiten definir múltiples líneas de texto
2. Pueden contener expresiones o variables embebidas
3. Se debe usar el caracter backtick/backquote(`) y para expresiones ${expr}

### 3.3 Any

1. Usado para capturar valores dinámicos
2. Los valores pueden cambiar de tipo en el tiempo:
   1. APIs externas
   2. Librerías de terceros

### 3.4 Void y never

#### void

1. void es lo opuesto de any: representa la ausencia de tipo
2. Comunmente se usa como tipo de retorno en funciones

#### never

1. Representa el tipo de valor que nunca ocurre
   1. Funciones que lanzan excepciones
   2. Funciones que nunca retornan un valor

### 3.5 null y undefined

1. En typescript, ambos "valores" tienen sus respectivos tipos:
   1. null
   2. undefined
2. Null y Undefined se pueden asumir como subtipos de los otros tipos de datos
3. Significa que se peude asignar null y undefined a una variable de tipo String, por ejemplo
4. Son subtipos de any

con --strictNullCheck nos genera un reporte de las variables que utilizan Null, esto es debido a la existencia del error null point excepcion

### 3.6 Object

1. object es el tipo de dato que representa un valor no primitivo
2. Es el tipo para variable que no sea number, string, boolean, null, undefined, etc

### 3.7 Array

1. Al igual que JavaScript, TypeScript permite definir un arreglo para contener un conjunto de valores
2. Usa dos notaciones: [] y `Array<tipo>`

### 3.8 Tupla

1. Las tuplas permiten expresar un arreglo con un número fijo de elementos
2. Los tipos de datos son conocidos

### 3.9 Enum

1. Los enumerados permiten definir un conjunto de constantes con nombre
2. Tienen la ventaja de adaptarse al contexto de la aplicación

### 3.10 Unión de Tipos, Alias y Tipos Literales

#### Unión de tipos

1. En typeScript se puede definir una variable con múltiples tipos de datos: Union Type
2. Se usa el símbolo de pipe('|') entre los tipos

#### Alias

1. TypeScript permite crear un alias como nuevo nombre para un tipo
2. El alias se puede aplicar también a un conjuno co mbinación de tipos
3. Se usa la palabra reservada type

#### Tipos Literales

1. Una variable con un tipo literal puede contener únicamente una cadena del conjunto
2. Se usan cadenas como "tipos", combinados con el símbolo de pipe ('|') entre ellos

### 3.11 Aserciones de Tipo

1. Cuando el programador puede conocer más que TypeScript sobre el valor de una variable
2. Es un mensaje al compilador: "Confía en mí, sé lo que hago"
3. Se parece al casting de tipos  en otros lenguajes de programación
4. Usa dos sintaxis: **`<AngleBracket>`** y (variable **as** tipo)
5. TypeScript no utiliza ninguna verificación y no afecta el tiempo de ejecución del código
6. La prioridad de usar as por encima de <> es desde la versión 1.6 de Typescript debido a que había ambigüedad en archivos .jsx

### 3.12 Funciones en TypeScript

1. Los parámetros en las funciones son tipados
2. Se pueden definir parámetros opcionales
3. El tipo de retorno puede ser un tipo básico, enum, alias, tipo literal o una combinación de ellos

### 3.13 Resumen

## 4. Tipos Personalizados

### 4.1 Interfaces

Las interfaces en TypeScript constituyen una forma poderosa de definir contratos tanto para tu proyecto, como para el código externo del mismo.

### 4.2 Interfaces: Propiedades opcionales

No todas las propiedades de una interfaz podrian ser requeridas. Establecemos una propiedad como opcional como el símbolo (?) después del nombre.

#### Propiedades de Solo Lectura

Algunas propiedades de la interfaz podrían no ser modificables una vez creado el objeto.
Esto es posible usando readonly antes del nombre de propiedad

### 4.3 Extensión de interfaces

Las interfaces pueden extenderse unas de otras. Esto permite copiar los miembros ya definidos en una interfaz a otra, ganando flexibilidad y resuabilidad de componentes.

### 4.4 Clases

A partir de ECMAScript 2015 es posible construir clases y hacer uso del paradigma de la Programación Orientada a Objetos en JavaScript.

TypeScript permite aplicar estas técnicas sin tener que esperar por otra versión.

### 4.5 Clases públicas y privadas

TypeScript define un modificador de acceso público por defecto para los miembros de clase.

También es posible marcar un miembro como publico usando la palabra reservada **public**

TypeScript define una manera propia de declarar om arcar un miembro como privado usando la palabra reservada **private**

TypeScript también soporta (a partir de la version 3.8) la nueva sintaxis javascript para miembros privados: #atributo

Esta característica puede ofrecer mejores garantías de aislamiento en miembros privados

### 4.6 Métodos Get y Set

TypeScript soporta los métodos accesores set y get como una forma de interceptar los accesos a los miembros privados de un objeto.

### 4.7 Herencia de clases y propiedades estáticas

Se puede aplicar Herencia de clases, al igual que en java, se utiliza la palabra reservada `extends`

#### Clases abstractas

Las clases abstractas son la base de donde otras clases podrían derivarse. A diferencia de una interfaz, una clase abstracta puede implementar funciones para sus instancias.

La palabra reservada es: `abstract`

#### Propiedades estáticas

Las clases por lo general definen atributos y métodos aplicables a las instancias de las mismas.

A través de la palabra reservada `static` se puede definir un miembro visible a nivel de clase.

#### propiedades de solo lectura

Al igual que las interfaces, podemos usar la palabra reservada `readonly` para marcar el miembro de una clase como solo lectura.

### 4.8 Resumen

#### Módulos en TypeScript

Los módulos en TypeScript proveen un mecanismo para una mejor organización  del código y promueven su reutilización.

A partir de ECMAScript 2015, los módulos son parte nativa del lenguaje JavaScript.

#### Importando y Exportando en Módulos

Generalmente se define un módulo con la idea de agrupar código relacionado.

Podemos tomar criterios en torno a la funcionalidad, features, utilitarios, modelos, etc.

Los miembros de módulo interactúan con el uso de las palabras reservadas **import** y **export**.

## 5. Módulos

### 5.1 Principios de responsabilidad única

Idealmente, un archivo debería tener un propósito o responsabilidad única; definir una clase, una interfaz, un enumerado, etc

Esto mejora la legibilidad de código, facilita su lectura, testing y favorece su mantenimiento

### 5.2 Resolviendo módulos

TypeScript resuelve la ubicación de módulos observando referencias relativas y no relativas.

Posteriormente intenta localizar el módulo usando una **estrategia de resolución de módulos**.

esto lo podemos hacer con el código

```bash
tsc --moduleResolution node

tsc --moduleResolution classic
```

Las diferencias son:

#### classic

1. Módulos AMD, System, ES2015
2. Poco configurable

#### classic: Import Relativo

```ts
// Archivo: /typescript/photo-app/main.ts
import { Picture } from './picture';

/typescript/photo-app/picture.ts
/typescript/photo-app/picture.d.ts
```

#### classic: Import No Relativo

```ts
// Archivo: /typescript/photo-app/main.ts
import { Picture } from 'picture';

/typescript/photo-app/picture.ts
/typescript/photo-app/picture.d.ts

/typescript/picture.ts
/typescript/picture.d.ts
(continúa buscando en el árbol de directorios)
```

#### node

1. Módulos Common JS o UMD
2. Más opciones de configuración

`"module";"<valor>"(tsconfig.json)`

#### node: Import Relativo

```ts
// Archivo: /typescript/photo-app/main.ts
import { Picture } from './picture';

/typescript/photo-app/picture.ts
/typescript/photo-app/picture.tsx
/typescript/photo-app/picture.d.ts
```

#### node: Import No Relativo

```ts
// Archivo: /typescript/photo-app/main.ts
import { Picture } from 'picture';

/typescript/photo-app/node_modules/picture.ts
/typescript/photo-app/node_modules/picture.tsx
/typescript/photo-app/node_modules/picture.d.ts
/typescript/photo-app/node_modules/picture/package.json
/typescript/photo-app/node_modules/index.ts

/typescript/node_modules/picture.ts
/typescript/node_modules/picture.tsx
/typescript/node_modules/picture.d.ts
/typescript/node_modules/picture/package.json
/typescript/node_modules/index.ts

(continúa buscando en el árbol de directorios)
```

### 5.3 Webpack y agrupación de módulos

```bash
npm init -y

npm install typescript webpack webpack-cli ts-loader --save-dev

```
