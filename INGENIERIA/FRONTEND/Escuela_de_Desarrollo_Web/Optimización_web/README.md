# Curso de Optimización Web

Estos son los slides del profesor: [link](https://static.platzi.com/media/public/uploads/slideswebperformance_021f9c71-30a8-4226-a6ee-54e4c5bc901a.pdf)

## Tabla de contenido

- [Curso de Optimización Web](#curso-de-optimización-web)
  - [Tabla de contenido](#tabla-de-contenido)
  - [1. Entendiendo el rendimiento](#1-entendiendo-el-rendimiento)
    - [1.1 ¿Vale el esfuerzo optimizar un sitio web?](#11-vale-el-esfuerzo-optimizar-un-sitio-web)
      - [Web Performance](#web-performance)
    - [1.2 ¿Cuándo realmente un sitio es rápido o lento?](#12-cuándo-realmente-un-sitio-es-rápido-o-lento)
  - [2. Antes de optimizar...](#2-antes-de-optimizar)
    - [2.1 Aprendiendo a medir](#21-aprendiendo-a-medir)
      - [Enláces de interés](#enláces-de-interés)
    - [2.2 User Performance Metrics](#22-user-performance-metrics)
      - [Web Vital](#web-vital)
      - [**LCP**: Larget Contentful Paint](#lcp-larget-contentful-paint)
        - [Tiempos LCP](#tiempos-lcp)
      - [**FID**: First Input Delay (Demora del primer input)](#fid-first-input-delay-demora-del-primer-input)
        - [Tiempos FID](#tiempos-fid)
      - [**CLS**: Cumulative Layout Shift (Acumulaciones en los altos de los elementos)](#cls-cumulative-layout-shift-acumulaciones-en-los-altos-de-los-elementos)
        - [Tiempos CLS](#tiempos-cls)
      - [Enlaces de Interés](#enlaces-de-interés)
    - [2.3 Nuestro Proyecto](#23-nuestro-proyecto)
  - [3. Crítical Rendering Path](#3-crítical-rendering-path)
    - [3.1 Etapas de render del navegador](#31-etapas-de-render-del-navegador)
    - [3.2 Network waterfall y recursos que bloquean el navegador](#32-network-waterfall-y-recursos-que-bloquean-el-navegador)
    - [3.3 Priorización de recursos](#33-priorización-de-recursos)
    - [3.4 Preloading y prefetching de recursos](#34-preloading-y-prefetching-de-recursos)
    - [3.5 Fases Paint y Layout del Critical Render Path](#35-fases-paint-y-layout-del-critical-render-path)
  - [4. CSS](#4-css)
    - [4.1 Detectando Paints costosos y optimizando animaciones](#41-detectando-paints-costosos-y-optimizando-animaciones)
    - [4.2 Bloqueos y complejidad en selectores](#42-bloqueos-y-complejidad-en-selectores)
      - [Enlaces de interés](#enlaces-de-interés-1)
  - [5. WebFonts](#5-webfonts)
    - [5.1 WebFonts y su impacto en rendimiento](#51-webfonts-y-su-impacto-en-rendimiento)
      - [WebFontLoader](#webfontloader)
      - [Enlaces de Interés Webfonts](#enlaces-de-interés-webfonts)
  - [6. Imágenes, Iconos y SVG](#6-imágenes-iconos-y-svg)
    - [6.1 Imágenes, formato y compresión](#61-imágenes-formato-y-compresión)
      - [Reducir peso de imágenes](#reducir-peso-de-imágenes)
      - [Formatos de compresión](#formatos-de-compresión)
      - [GIF](#gif)
      - [PNG-8](#png-8)
      - [PNG-24](#png-24)
      - [JPG o JPEG](#jpg-o-jpeg)
      - [Identificando oportunidades con imágenes en el proyecto](#identificando-oportunidades-con-imágenes-en-el-proyecto)
    - [6.2 Imágenes y compresión](#62-imágenes-y-compresión)
      - [API](#api)
      - [Webp](#webp)
    - [6.3 WebFont, Imagen o SVG](#63-webfont-imagen-o-svg)
      - [WebFonts](#webfonts)
      - [SVG](#svg)
    - [6.4 Técnicas avanzadas con Lazy Loading](#64-técnicas-avanzadas-con-lazy-loading)
      - [Implementación](#implementación)
        - [De forma nativa](#de-forma-nativa)
        - [Intersection Observer](#intersection-observer)
        - [A la antigua: Scroll listener](#a-la-antigua-scroll-listener)
      - [Enlaces de interés](#enlaces-de-interés-2)
    - [6.5 Técnicas avanzadas con Responsive Loading](#65-técnicas-avanzadas-con-responsive-loading)
      - [Gatsby: Caso de estudio](#gatsby-caso-de-estudio)
      - [enlaces de interes 6.5](#enlaces-de-interes-65)
  - [7. Aplicaciones JavaScript](#7-aplicaciones-javascript)
    - [7.1 JavaScript y aplicaciones modernas y Utilizando un servidor de producción](#71-javascript-y-aplicaciones-modernas-y-utilizando-un-servidor-de-producción)
    - [7.2 Analizando el bundle de la aplicación](#72-analizando-el-bundle-de-la-aplicación)
      - [Enlaces de interés 7.2](#enlaces-de-interés-72)
    - [7.3 Reduciendo el tamaño del bundle](#73-reduciendo-el-tamaño-del-bundle)
      - [Enlaces de interés 7.3](#enlaces-de-interés-73)
    - [7.4 Code Splitting](#74-code-splitting)
      - [Enlaces de interés 7.4](#enlaces-de-interés-74)
    - [7.5 Lazy Module Loading](#75-lazy-module-loading)
      - [Enlaces de interés 7.5](#enlaces-de-interés-75)
    - [7.6 Llevando los listeners a otro nivel](#76-llevando-los-listeners-a-otro-nivel)
      - [Enlaces de interés 7.6](#enlaces-de-interés-76)
    - [7.7 Instalando Modal video](#77-instalando-modal-video)
    - [7.8 Lazy loading del modal](#78-lazy-loading-del-modal)
      - [Enlaces de interes 7.8](#enlaces-de-interes-78)
    - [7.9 Moviendo la carga de rendering hacia el servidor: Server Side Rendering](#79-moviendo-la-carga-de-rendering-hacia-el-servidor-server-side-rendering)
    - [7.10 Aplicando SSR](#710-aplicando-ssr)
    - [7.11 Pre-renderizando el contenido: Static Generation](#711-pre-renderizando-el-contenido-static-generation)
  - [8. Caché](#8-caché)
    - [8.1 Cómo funciona el Caché de recursos y CDN](#81-cómo-funciona-el-caché-de-recursos-y-cdn)
    - [8.2 Deploy en Netlify y automatización de contenido en GitHub Actions](#82-deploy-en-netlify-y-automatización-de-contenido-en-github-actions)
    - [8.3 Aplicando GitHub Actions](#83-aplicando-github-actions)
      - [Enlaces de interés 8.2](#enlaces-de-interés-82)
    - [8.4 Interceptando los requests del navegador con Service Workers](#84-interceptando-los-requests-del-navegador-con-service-workers)
      - [Otros usos](#otros-usos)
      - [Enlaces de interés 8.3](#enlaces-de-interés-83)
  - [9. Performance Budget](#9-performance-budget)
    - [9.1 Performance budget y auditorias automatizadas](#91-performance-budget-y-auditorias-automatizadas)
      - [Enlaces de interés 9.1](#enlaces-de-interés-91)
    - [9.2 Automatizando una auditoria con Lighthouse CI](#92-automatizando-una-auditoria-con-lighthouse-ci)
    - [9.3 Medidas reales y monitoreo constante](#93-medidas-reales-y-monitoreo-constante)
      - [Enlaces de Interés 9.3](#enlaces-de-interés-93)

## 1. Entendiendo el rendimiento

### 1.1 ¿Vale el esfuerzo optimizar un sitio web?

Caso Amazon

> "100ms of latency costs Amazon 1% of profit"
> Nat Torkington - Radar Theme: Web Ops

Caso Walmart

> "For many e-commerce companies, making the site faster by 1 second increased the conversion 1.05, 1.1 or even 1.2 times"
> Case study: analyzing the Walmart site performance

Ok pero puede que nosotros no seamos Walmart ni trabajemos para Amazon, pero se tiene que considerar que:

> "53% of users will leave a mobile site if it takes more than 3 secs to load"
> Steve Kinney - Web Performance

El acceso qeu se habla aquí no es en desktop con fibra óptica, es el de un celular con red 3G de baja latencia.

Por esto hay que saber cuánto tarda nuestro sitio y cuánto vale esto para la empresa.

#### Web Performance

La optimización web:

* Es sobre conversión
* Es sobre dinero
* Es sobre las personas, sin importar dónde se conecten

La razón principal de hacer optimización web es por las personas, por esto lo que más tenemos que prestar atención es en este punto.

[Caso de estudio de Tinder: Escribieron desde cero la aplicación para que sea una PWA.](https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0)

A Tinder Progressive Web App Performance Case Study

Más recursos sobre por qué tener en cuenta la optimización web:

1. [web.dev/why-speed-matters](https://developers.google.com/web/fundamentals/performance/why-performance-matters)

### 1.2 ¿Cuándo realmente un sitio es rápido o lento?

Lento o Rápido son términos subjetivos que no es igual por cada persona, por lo que Google creó un modelo llamado RAIL que se basa en la **respuesta**, **animación**, **tiempo muerto** y tiempo de **carga**.

**RAIL** es un modelo de rendimiento centrado en el usuario que proporciona una estructura para pensar en el rendimiento. El modelo desglosa la experiencia del usuario en acciones clave y le ayuda a definir objetivos de rendimiento para cada uno de ellos.

![Modelo RAIL](https://i.postimg.cc/NMCkwRwq/img1.png)

**Response** significa el tiempo de respuesta de la página a la hora de que el usuario interactúa.

**Animaciones**: Las animaciones deben de tener un tiempo definido. No queremos que nuestra página se vuelva difícil la navegación.

**Tiempo Muerto**: Hace referencia a los tiempos muerto que tiene el navegador. ¿Estamos aprovechando esos tiempos muertos? Hay tareas secundarias como cargar contenido o procesos de la CPU que se pueden hacer en el tiempo muerto del navegador. El Idle del modelo RAIL nos invita a aprovechar esos tiempos muertos para realizar actividades que no son de prioridad para el ususario.

**Carga**: Cuánto tarda la página en cargar por completa.

Estos puntos lo veremos mas adelante, nos centraremos en la carga, pero tocaremos todos los pilares.

Independiente del pilar hay unos tiempos que son comunes:

**Excelencia: 0ms - 300ms** Nuestros usuarios son felicies y la pagina es perfecta.

**Bueno: 300ms - 1200ms** Los usuarios pueden que no perciban que el contenido de la página van lentos.

**Regular: 1200ms - 2000ms** Los usuarios perciben que las cosas no están funcionando como deben. Ejemplo al dar clic y pasado de 2 segundos enemos ese impulso de volver a dar clic porque se percibe que hubo un error.

**Malo: Mayor a los 2000ms** Los tiempos son malos.

Documentación oficial de RAIL [web.dev/rail](https://web.dev/rail/)

## 2. Antes de optimizar...

### 2.1 Aprendiendo a medir

Antes de empezar a optimizar es aprender a medir. Lo que se no mide, no se mejora.

Las herramientas que utilizaremos es Google DevTools, más específico la pestaña de Network y la de LightHouse.

Network carga todos los archivos que utiliza la página, el peso, tiempo y el waterfall.

Lighthouse realiza un reporte en téminos de Performance, por lo que sólo usaremos esta opción.

El modelo Rail es **centrado al usuario** y Métricas de rendimiento en la **experiencia de usuario**.

Se habla mucho que la entrega del contenido y debe de ser interactiva a los 5 segundos. ¿Pero qué tan cierto es esto? Cada persona posee unos tiempos de carga. Según el modelo Rail debemos de cumplir para la mayoría de los usuarios, más específico el percentíl 75%. O sea que se debe de cumplir al menos 3 de las 4 partes.

¿Es suficiente medir el tiempo de carga?

En la primera imagen se ve una página que carga en 1 segundo.

![Carga 1](https://i.postimg.cc/zv9wy5Bx/img2.png)

En la segunda imagen se ve una página que carga en 1 segundo.

![carga 2](https://i.postimg.cc/D0Wdfm2W/img3.png)

Ambas tienen el mismo tiempo de carga, pero ¿Cuál es mejor?. **La optimización se trata de la Experiencia del Usuario**. El tiempo puede que sea un número más, pero no refleje la experiencia del usuario.

#### Enláces de interés

* [Monitorizar el performance](https://www.pingdom.com/)
* [Testear el performance de un sitio](https://webpagetest.org/)

### 2.2 User Performance Metrics

#### Web Vital

#### **LCP**: Larget Contentful Paint

El tiempo que tarda en pintar el mayor elemento visible en la ventana. Se trata de la CARGA.

##### Tiempos LCP

BIEN: 0s - 2.5s

Necesita Mejora: 2.5s - 4.0s

DEFICIENTE: Mayor de 4.0s

#### **FID**: First Input Delay (Demora del primer input)

El tiempo que tarda la página en responder a las acciones del usuario. Se trata de la INTERACTIVIDAD.

El FID mide por el **mayor tiempo de respuesta**.

##### Tiempos FID

BIEN: 0ms - 100ms

Necesita Mejora: 100ms - 300ms

Deficiente: Mayor de 300ms

#### **CLS**: Cumulative Layout Shift (Acumulaciones en los altos de los elementos)

Mide todos los cambios inesperados en el layout de una página. Se trata de la ESTABILIDAD.

##### Tiempos CLS

BIEN: 0 - 0.1

Necesita Mejora: 0.1 - 0.25

Deficiente: Mayor de 0.25

#### Enlaces de Interés

[web.dev/vitals](https://web.dev/vitals/)

### 2.3 Nuestro Proyecto

El [enlace del proyecto del curso](https://github.com/jonalvarezz/platzi-optimizacion-web)

Código ejecutado:

```bash
git clone git@github.com:jonalvarezz/platzi-optimizacion-web.git optimizacion

git fetch --tag

git checkout -b tuNombre-inicio 0-inicio
```

## 3. Crítical Rendering Path

### 3.1 Etapas de render del navegador

Flujo del Critical Render Path

![flujo](https://i.postimg.cc/C1xstmXs/img4.png)

Animación del Crítical Render Path [link](https://twitter.com/lydiahallie/status/1231255327032541185?s=20)

### 3.2 Network waterfall y recursos que bloquean el navegador

Los archivos JS y CSS son archivos bloqueantes del HTML, por lo que tenemos que saber cómo manejarlos. Primero veremos el JS.

Para importar un elementos JS en un HTML se utiliza la etiqueta `script`, por defecto tiene un comportamiento totalmente bloqueante.

Otra alternativa es el añadir los atributos:

* **defer** dónde se descarga en paralelo y se ejecuta al final del HTML.
* **async** dónde se descarga en paralelo y una vez descargado se ejecuta.

Enlaces de interés

* [Blog Digital Ocean](https://www.digitalocean.com/community/tutorials/html-defer-async)

### 3.3 Priorización de recursos

No todos los recursos tienen la misma prioridad. Piensa en el CSS de mobile, tablet y desktop. Lo usual es colocar todo ese código en un solo archivo.

La forma de solucionar esto es indicando el nivel de prioridad que tiene un archivo.

Hay que tener en cuenta que no siempre conviene hacer esto, ya que aumenta la cantidad de request que se hace, por lo que es una arma de doble filo.

En la página web del profesor, se utiliza este método para el tema oscuro: [jonalvarezz.com](https://jonalvarezz.com/) esto lo loga con:

```html
<link media="(prefers-color-scheme: dark)" rel="stylesheet" href="/css/dark.css" />
```

### 3.4 Preloading y prefetching de recursos

Estrategias para endicarle los recursos que se deben de descargar de forma anticipada.

* **Preload (recursos)**: Recurso que se descarga junto con el html
* **Prefetch (recursos)**: recurso que se descarga para un uso futuro
* **preconnect (dominios)**: conexión anticipada a recursos de servidores remotos.

La forma para hacer preload es con el atributo HTML `rel="preload"`.

Un caso curioso de lo que hace NextJS es que hace `prefetch cache` al hacer hover en un elemento.

En nuestro proyecto utilizamos tres dominios externos: google fonts, unpkg para solucionar un polyfill y la api kitsu.

### 3.5 Fases Paint y Layout del Critical Render Path

Cualquier cambio en una propiedad que no sea _opacity_ o _transform_, genera un Paint.

Hay que tener en cuenta cuando se realiza un Paint, ya que es la acción más costosa que hace el navegador. Por lo que, ¿Cuándo nos afecta esto? Esto nos afecta cada vez que hacemos una animación.

Tanto es esto que Facebook con su ultimo diseño, decidieron no utilizar `box-shador`, pero si utilizar una imagen repetida. Puedes ampliar esto en este [video de youtube](https://youtu.be/KT3XKDBZW7M)

## 4. CSS

### 4.1 Detectando Paints costosos y optimizando animaciones

Hay que tener en cuenta que toda propiedad que no sea opacity y transform genera un nuevo Paint. Por lo que vamos a intentar que toda animación se muevan por estas propiedades.

En el caso del proyecto, se tiene un carousel-item con animación en el hover con box-shadow y margin-left. En estos casos se reemplazaron con opacity y transform.

```css
.carousel-item:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 1);
  opacity: 0.4;
  transition: 450ms opacity;
}

.carousel-item:hover:before {
  opacity: 1;
}

.carousel-item:hover + .carousel-item {
  transform: translateX(100px);
}

.carousel-item {
  will-change: transform;
  border-radius: 20px;
  position: relative;
  display: inline-block;
  width: 200px;
  height: 250px;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: 450ms all;
  transform-origin: center left;
}
```

Enlaces de interés:

1. https://ishadeed.com/article/new-facebook-css/
2. https://calibreapp.com/blog/investigate-animation-performance-with-devtools
3. https://csstriggers.com/
4. https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing

### 4.2 Bloqueos y complejidad en selectores

Entre menos selectores se tenga, mejor para el navegador.

Para solucionar esto es muy útil la metodología BEM.

Solo se deben de usar: 1 Selector, 1 clase y los Id se evitan.

#### Enlaces de interés

* Critical CSS: Ese es el nombre de la técnica y también del paquete. https://github.com/addyosmani/critical
* https://tachyons.io/
* https://tailwindcss.com/

## 5. WebFonts

### 5.1 WebFonts y su impacto en rendimiento

Los webFonts atacan tanto al rendimiento que todos dicen que como máximo se debe de tener 2 tipos de fuentes, pero si puedes, solo ten 1 y lo mejor para el rendimiento es utilizar ninguno. Este último es múy difícil, por lo que hay 3 formas para solucionar esto y por lo tanto, 3 nuevos problemas a que enfrentarse.

1. Como Estilos
   1. usa <link /> común (i.e.: Google Fonts)
   2. HTML parsing no continúa hasta que se descargue la fuente
   3. **Bloqueante**
2. De forma alterna
   1. Utilizar una fuente por defecto mientras carga la webfont
   2. Se le conoce como **Flash Of Unstyled Text (FOUT)**. Esto es perceptible al ojo de las personas.
   3. Con google Fonts, se puede colocar en el link el `&display=swap`
3. Luego del HTML parsing
   1. No mostrar texto hasta que se descargue la fuente
   2. Se le conoce como **Flash Of Invisible Text (FOIT)**
   3. Con google Fonts, se puede colocar en el link el `&display=block`

Pero si no se está utilizando, podemos usar [WebFontLoader](https://github.com/typekit/webfontloader). Para utilizarla se puede apoyar de la documentación del repositorio

Se recomienda que no se utilice el **Flash Of Invisible Text** porque no se alinea con la experiencia del usuario, ya que hay que esperar a que se descargue las fuentes para consumir el servicio.

#### WebFontLoader

En el html, colocar al final del body

```html
<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
<script>
  WebFont.load({
    google: {
      families: ['Droid Sans']
    }
  });
</script>
```

en el css

```css
html {
  font-family: Helvetica, Arial, sans-serif;
}
html.wf-active {
  font-family: 'Muli';
}
```

#### Enlaces de Interés Webfonts

* https://www.zachleat.com/web/css-tricks-web-fonts/
* https://github.com/typekit/webfontloader

## 6. Imágenes, Iconos y SVG

### 6.1 Imágenes, formato y compresión

Comprimir imágenes es la forma más fácil y segura de reducir el tamaño de una página.

El peso sugerido de las imagenes es de 70kb

#### Reducir peso de imágenes

Online

* TinyPNG

API

* Cloudinary
* Netlify
* TinyPNG

Dev Flow

* Webpack
* Grunt
* Gulp
* post-commit

#### Formatos de compresión

Lo mas populares

* GIF
* PNG (y PNG-8)
* JPG

#### GIF

* Animaciones
* 256 colores
* No degradados
* Perfecto cuando hay pocos colores, colores planos y sin transparencia.

#### PNG-8

GIF + Transparencias

Perfecto para íconos y algunos logos.

#### PNG-24

PNG-8 + Colores ilimitados

Imágenes con defradados o muchos colores con transparencia.

#### JPG o JPEG

Fotos

* Millones de colores
* Degradados
* Sin transparencia

Tiene el formato Progresivo, cuando se presenta una versión de baja resolución y se va mejorando con el tiempo.

Siempre hay que preferir por usar JPG progresivo.

#### Identificando oportunidades con imágenes en el proyecto

El logo que se utiliza es muchísimo mas grande. Por lo que vamos a:

1. Reducir el tamaño
   1. Utilizaremos [Photopea](https://www.photopea.com/)
2. Reducir peso
   1. [tinypng.com](https://tinypng.com/)

### 6.2 Imágenes y compresión

#### API

Para el caso de las consultas API, debemos de apoyarnos completamente de las consultas API, por ejemplo, si se tiene varias opciones de imágenes, se debe de escoger la que mejor se adapte.

#### Webp

Este es un mucho mejor formato de imagen, pero aún no es recomendable usarlo ya que aún no lo soportan todos los navegadores. Por lo que se debe de tener un ojo encima por si el percentil de soporte de navegadores sube. [caniuse](https://caniuse.com/#feat=webp)

### 6.3 WebFont, Imagen o SVG

#### WebFonts

Goods

1. Son prácticos
2. Fáciles de usar y distribuir
3. i.e.: FontAwesome

Bads

1. Un recurso más
2. HTTP Request
3. Bloqueantes
4. No son muy Accesible para los usuarios

#### SVG

Goods

1. Livianos
2. Inline en el HTML
3. Accesibilidad
4. Animaciones
5. Data URI

Bads

1. Facilidad
2. Requiere un diseñador
3. Incrementa el largo del HTML

¿Cuándo es perfecto SVG?

1. Logos (Especialmente "Above the fold". Primeros 600px/600px)
2. Ilustraciones
3. Ilustraciones animadas
4. En general: gráficos de los que puedas mantener un fácil control.

### 6.4 Técnicas avanzadas con Lazy Loading

LazyLoading es la carga de imagenes muy similar al JPG progrsivo, pero con la diferencia que esta está desenfocada y pixeleada al comienzo.

#### Implementación

##### De forma nativa

```html
<img src="gatico.png" landing="lazy" alt="" />
```

Goods

* Nativo
* Fácil
* Conveniente
* Video, iframes

Bads

* Poco Soporte. Al ser una opción nueva, no es recomendable usarlo.

##### Intersection Observer

Goods

* Técnicamente más correcto (luego de nativo)
* Realmente fácil

Bads

* No soportado por Internet Explorer
* Versión 2 en proceso

[Implementación de Intersecion Observer](https://codesandbox.io/s/eloquent-joliot-wcc52)

Intersection Observer v1 tiene un buen soporte, más la versión 2, no lo tiene.

##### A la antigua: Scroll listener

Goods

* Soportado en todos los navegadores

Bads

* Scroll listener
* Muchos cálculos por evento

#### Enlaces de interés

[Librería de LazyLoad](https://github.com/ApoorvSaxena/lozad.js)

Otra Librería para aplicar Lazy Loading [github.com/aFarkas/lazysizes](https://github.com/aFarkas/lazysizes)

### 6.5 Técnicas avanzadas con Responsive Loading

Responde al caso de:

Tener una imagen de 300kb, para un usuario con dipositivo gama alta y conexión 5G va a tener experiencias diferentes que un usuario con dispositivo gama baja y con conexión 2G.

Si bien ambos acceden al mismo recurso y sitio web, estos tienen experiencias completamente diferentes.

Cómo ayudamos a que nuestros usuarios tengan la mejor imagen sin importar su conexión y dispositivo.

#### Gatsby: Caso de estudio

Analicemos técnicamente una imagen en Gatsby

Gatsby utiliza el tag de `<picture>`, `source` y `img` para colocar una imagen. En la etiqueta `source` y `img` se puede definir qué imagen se debe de utilizar para qué tamaño de ventana.

#### enlaces de interes 6.5

[gatsby](https://www.gatsbyjs.com/showcase/)

[elemento picture](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/picture)

## 7. Aplicaciones JavaScript

### 7.1 JavaScript y aplicaciones modernas y Utilizando un servidor de producción

Una página web moderna promedio tiene un peso de 350kb en javascript, mayor de 1MB sin comprimir y 15 segundos hasta interacción.

> "If client-side JavaScript isn't benefiting the user'experience, ask yourself if it's really necessary"
> [Addy Osmani - The Cost of JavaScript](https://v8.dev/blog/cost-of-javascript-2019)

Para nuestros proyectos tenemos que verificar:

1. Que se compile en production
2. Que se sirva listo para produccción

Para este último podemos utilizar la librería serve. Lo podemos instalar con `npm install --save serve` y colocar en los script de package.json

```json
"serve": "serve ."
```

El punto es referente al lugar del archivo html

### 7.2 Analizando el bundle de la aplicación

Con `Webpack-bundle-analyzer` se puede analizar los paquetes de webpack que están instalados.

Instalación

`npm install --save-dev webpack-bundle-analyzer`

En Webpack

```js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}
```

Para ejecutar, solo basta con hacer el build. `npm run build`. Esta configuración puede que moleste ya que se ejecutará con cada build, por lo que cambiaremos eso.

En webpack

```js
const shoudAnalyze = process.arg.includes('--analyze')

const plugins = []

if (shoudAnalyze) {
  plugins.push(new BundleAnalyzerPlugin())
}

const config {
  plugins,
}
```

Ahora con `npm run build -- --analyze` ejecutará el plugin.

Este comando es un poco largo, por lo que lo acortaremos en el `package.json`.

En package.json

```json
"scripts": {
  "analyze": "npm run build -- --analyze",
}
```

#### Enlaces de interés 7.2

[bundlephobia.com](https://bundlephobia.com/) Página web que te dice el peso de los paquetes npm.

[NextJS Documentacion](https://github.com/vercel/next.js/tree/canary/examples/analyze-bundles)

### 7.3 Reduciendo el tamaño del bundle

Con [bundlephobia.com](https://bundlephobia.com/) podemos visualizar el tamaño de los paquetes.

En el módulo anterior descubrimos que Lodash y Moment son los paquetes que mayor tamaño nos está ocupando.

Se debe de inspeccionar que:

1. Verificar si soporta Tree Shaking
2. No se importe toda la librería

Estas herramientas nos ayudan a diagnosticar lo que está sucediendo, pero depende del desarrollador de llevar las aplicaciones lo mejor posible, sabiendo que cada dependencia trae un precio.

#### Enlaces de interés 7.3

[Esta es otra opción a utilizar en vez de moment](https://date-fns.org/)

### 7.4 Code Splitting

NextJS y Gatsby utilizan el code splitting para crear mini bundle para cara página del sitio web, así poder mandar exactamente lo que la página necesita.

Existe otra opción de dividir el código del proyecto con las dependencias de las librerías. Esto se puede lograr con webpack.

En webpack

```js
const config = {
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
```

Esto creará dos archivos javascript. Estos archivos se debe de añadir al html con las tags `script`.

Esta técnica es buena ya que podemos colocar el vendor en el caché del navegador.

#### Enlaces de interés 7.4

[Webpack Optimization Doc](https://webpack.js.org/configuration/optimization/)

### 7.5 Lazy Module Loading

Hay casos en los que el usuario no necesita en el momento, se puede postergar para el preciso momento que se necesite. No existe librería que tome estas decisiones, por lo que es responsabilidad nuestra es identificar cuales son esas partes del proyecto en que lo podemos aplicar.

En el proyecto haremos que a la hora de dar clic en un elemento se reproduzca el video de ese tema.

Para hacer esta características se debe de hacer:

1. Event listeners - escuchar click boton play
2. Instalar la librería modal
3. Librería modal funciona
4. Librería modal carga de forma Lazy

Paso 1

en src/modal/index.js

```js
export const modalListener = event => {
  event.preventDefault()
  const img = event.target
  const link = img.parentElement
  console.log(link)
}
```

en src/index.js

```js
import { modalListener } from './modal'

const allYoutubeLink = document.querySelectorAll('.js-video-link') // Clase del ancor

// allYoutubeLink NodeList !== Array
// Si lo queremos convertir a array se hace:
// [...allYoutubeLink]   pero para esto se necesita configurar babel
allYoutubeLink.forEach((link) => {
  link.addEventListener('click', modalListener)
})
```

#### Enlaces de interés 7.5

[Ejemplo de Lazy Loading](https://codesandbox.io/s/eloquent-joliot-wcc52?file=/lazy-loading.js)

### 7.6 Llevando los listeners a otro nivel

La forma de cómo estamos utilizando el event listener no es la mejor, ya que estamos colocando un event listener para cada elemento. Existe otro método que se le coloca un event listener a un elemento padre y este lo propaga a sus elementos hijos, React y Angular son ejemplos de librerías que utilizan esto para mejorar su performance.

Vamos a mejorar el event listener

En src/index.js

```js
document.body.addEventListener('click', event => {
  /** Almacena el tagName del elemento actual que se ha dado clic */
  const tagName = event.target.tagName
  
  if (['IMG', 'A'].includes(tagName)){
    modalListener(event)
  }
})
```

en src/modal/index.js

```js
export const modalListener = event => {
  event.preventDefault()
  const img = event.target
  const link = img.parentElement

  if (link && link.classList.contains('.js-video-link')) {
    console.log(link.dataset.videoid)
  }
}
```

En carouselItem.js Se debe de agregar un atributo llamado `data-videodd` en el anchor.

#### Enlaces de interés 7.6

¿Por qué este método es más óptimo aún cuando se está usando más operaciones? Esto es por el [Event delegation](https://javascript.info/event-delegation)

### 7.7 Instalando Modal video

A este punto ya hemos realizado el paso 1 de la implementación, vamos a proceder a hacer el paso 2.

La selección de la librería a utilizar fue [Modal-Video](https://www.npmjs.com/package/modal-video) (no muy recomendable).

Se instala con `npm install modal-video --save`

En src/modal/index.js

```js
import { openModal } from './open-modal'

export const modalListener = event => {
  event.preventDefault()
  const img = event.target
  const link = img.parentElement

  if (link && link.classList.contains('.js-video-link')) {
    console.log(link.dataset.videoid)
  }
}
```

En src/modal/open-modal.js

```js
import ModalVideo from 'modal-video'

export const openModal = videoId => {
  
  // Hack :(
  const button = document.createElement('BUTTON')
  button.dataset.videoId = videoId
  new ModalVideo([button])
  button.click()
}
```

### 7.8 Lazy loading del modal

En este paso haremos el paso 4 de la implementación. Hemos detectado que la librería modal-video solo se necesita si se da clic al botón.

En src/modal/index.js

```js
export const modalListener = event => {
  event.preventDefault()
  const img = event.target
  const link = img.parentElement
  const videoId = link.dataset.videoid // Por temas de clousure es mejor que se defina antes

  if (link && link.classList.contains('.js-video-link')) {
    import(/* webpackChunkName: "modal" */ './open-modal').then(({ openModal }) => {
      openModal(videoId)
    })
  }
}
```

#### Enlaces de interes 7.8

* [SnowPack](https://www.snowpack.dev/)

### 7.9 Moviendo la carga de rendering hacia el servidor: Server Side Rendering

### 7.10 Aplicando SSR

Lectura recomendada

https://overreacted.io/es/goodbye-clean-code/

### 7.11 Pre-renderizando el contenido: Static Generation

Cuando el servidor hace una petición a la API por cada render es llamado **Server side render On Demand**.

Si pensamos en nuestro proyecto, no es necesario que el servidor vaya a la API en un corto periodo de tiempo, ya que es probable que el contenido no vaya a cambiar. Estos son los casos que conviene realizar un Static Site Generation.

El proceso va que se realice un solo llamado a la API en un intérvalo de tiempo y esa respuesta enviarla a cada render que se haga.

Al realizar esto, estamos usando el Stack [JAMStack](https://jamstack.org/).

Todo lo relativo a métricas y datos en tiempo real no se puede pre-renderizar.

## 8. Caché

Formas de indicarle al navegador que el recurso ha cambiad: Status 304, e-tag y los Headers.

Los CDN, **Content Distributed Network**, es un servicio que lo que hace es tomar el contenido de tu servidor principal que tienes toda la información y replicarlo en servidores por todo el mundo. Esto con el objetivo de **reducir la latencia**.

### 8.1 Cómo funciona el Caché de recursos y CDN

### 8.2 Deploy en Netlify y automatización de contenido en GitHub Actions

El CDN que estudiaremos es Netlify ya que:

1. Aloja nuestro sitio
2. Genera nuestro sitio (build)
3. Genera 'Previews' en cada Pull Request

A la vez utilizaremos GitHub Actions para refrescar el contenido en Netlify

1. Automatización de tareas (CI).
2. 'Refresca' el contenido en Netlify cada semana (build).

Para esto tenemos que hacer:

1. - [ ] Tener un repositorio GitHub/GitLab Proyecto
2. - [ ] Crear una cuenta en Netlify
3. - [ ] Netlify - GitHub/GitLab - Repositorio del proyecto

### 8.3 Aplicando GitHub Actions

Como lo tenemos en el proyecto, necesitamos actualizar la información de la API cada cierto tiempo, esto lo conseguiremos con [**GitHub Actions**](https://github.com/features/actions).

Para esta tarea nos iremos a la [documentación oficial de GitHub Actions](https://docs.github.com/es/free-pro-team@latest/actions). Es aquí dónde nos damos cuenta que necesitaremos el comando **cron**. Cron es un comando de Linux que se ejecuta dado un tiempo y es que, GitHub actions corre sobre máquinas Linux, por lo que si queremos hacer esto en Jenkins, travisCI o GitLabCI, podemos hacerlo.

Para utilizar el comando cron, nos podemos apoyar de una herramienta llamada [crontab.guru](https://crontab.guru/).

En Netlify, nos vamos a configuraciones, Build & Deploy, Build Hooks y le daremos el nombre `build`. Netlify nos dará un URL, cuál si navegamos a ella, netlify hará un build del proyecto.

El URL dado por netlify para hacer las builds, lo colocaremos en el archivo .yaml del github action.

El archivo `.github/workflows/build.yml` se ejecutará de la siguiente manera:

```yaml
# Flujo para ejecutar un build de produccion (rama master)
# En Netlify con el propósito de que nuestros contenido se
# actualice.
name: Trigger Netlify Build

on:
  schedule:
    # You can use https://crontab.guru to generate the
    # desired cron sheduled :)
    - cron: '0 10 * * 1' # At 10:00 on Monday.

jobs:
  build:
    name: Request Netlify Webhook
    runs-on: ubuntu-latest
    steps:
      - name: Ping
        run: curl -X POST -d {} https://api.netlify.com/build_hooks/5edca83478745263425750d1
```

#### Enlaces de interés 8.2

[Coffee Bytes](https://coffeebytes.dev/programa-tus-tareas-periodicas-con-cron-y-crontab-en-gnulinux/)

### 8.4 Interceptando los requests del navegador con Service Workers

Para implementar con Service Worker necesitamos:

1. Instalar el SW en el navegador
2. Escuchar 'fetch' ( request <> internet )
3. Cache
   1. Si ya tenemos el recurso, entonces se lo devolvemos
   2. No está en la cache
      1. El **SW** hará un **request** a **internet** buscando los (asset: css,js,img).
         1. Devolvemos al navegador.

En el archivo /service-worker.js

```js
const CACHE_NAME = 'app-v1'

self.addEventListener('fetch', myCustomFetch)
self.addEventListener('activate', clearCache)

function myCustomFetch(event) {
  const response = cacheOrFetch(event)
  event.respondWith(response)
}

async function cacheOrFetch(event) {
  // event.request contiene la informacion del request, i.e.: la url
  // 1. Verificar la respuesta que necesitamos ya se encuentra en el cache
  let response = await caches.match(event.request)

  // 2. Si es cierto, retornamos la respuesta desde el cache > end
  if (response) {
    return response
  }

  // 3. Si no, hacemos un fetch al servidor para obtener la respuesta
  response = await fetch(event.request)
  // 3.1 Si la respuesta no es valida > end
  if (
    !response ||
    response.status !== 200 ||
    response.type !== 'basic' ||
    !isAssetCSS(event.request.url)
  ) {
    return response
  }

  // 4. Cuando tengamos la respuesta devuelta del servidor, la almacenamos
  //    en el cache para proximas respuestas.
  const clonedResponse = response.clone() // Stream que solo se puede leer una vez
  caches.open(CACHE_NAME).then(cache => {
    cache.put(event.request, clonedResponse)
  })

  return response
}
const assetsRegExp = /.png|.gif|.jpg|.jpeg|.css|.js/g
function isAssetCSS(url) {
  return assetsRegExp.test(url)
}

function clearCache(event) {
  const deletePromise = caches.delete(CACHE_NAME)
  event.waitUntil(deletePromise)
}
```

#### Otros usos

1. **Pre-fetching** de datos que sabes que el usuario puede necesitar en un futuro
2. Caché
3. **Offline Experiences** como lo son las PWA
4. **Background Services** delegar tareas pesadas para que lo haga los Service Workers

#### Enlaces de interés 8.3

[Introducción a los SW](https://developers.google.com/web/fundamentals/primers/service-workers/)

## 9. Performance Budget

### 9.1 Performance budget y auditorias automatizadas

Luego de haber optimizado nuestro sitio, tambien debemos de asegurar que en el paso del tiempo, nuestras optimizaciones se mantengan.

No vale la pena hacer estas optimizaciones si en un futuro serán cambiadas. Es por esto que antes nosotros medimos antes de hacer cualquiera optimización, tenemos que monitorear nuestro sitio en performance.

> "No se controla lo que no se continúa midiendo"

Este monitoreo constante se le conoce como **Performance Budget**. Es decir, tener un presupuesto del performance del sitio y hacer auditorías constantes para comprobar que el sitio cumple con estos presupuestos.

El performance budget trata de 3 puntos:

1. **Elige tus métricas** más importantes para nuestra aplicación. Esto depende del negocio y de los usuarios.
2. **Establece un límite** para el presupuesto.
3. **Automatizar la auditoría** para asegurar que efectivamente se está cumpliendo.

Un ejemplo: La métrica que tomaremos en cuenta es el tamaño del JavaScript y que el presupuesto es de 300kb. Por lo que la auditoría se basará que en cada cambio que se haga en la aplicación es que no sobrepase los 300kb.

Para automatizar esto, podemos pensar en utilizar LightHouse desde la términal, usar webpack, script de npm, grunt y ponerlo en nuestro flujo. Existe otra opción que es integrarlo en nuestro CI.

En este caso usaremos LightHouse CI, GitHub Actions y automatizar cada vez que se haga un Pull Request y confirme que las métricas estén dentro de lo permitido.

#### Enlaces de interés 9.1

[Performance Budgets 101](https://web.dev/performance-budgets-101/)

### 9.2 Automatizando una auditoria con Lighthouse CI

Empezaremos con [GitHub Actions](https://github.com/features/actions) y usaremos un Actions que está en el MarketPlace: Lighthouse CI Action. Esta cuenta con una buena documentación que nos indica cómo podemos implementar las distintas funcionalidades que esta posee, en este caso se usará el de sitios estáticos.

En .github/workflows/audit.yml

```yml
# Flujo automatizada para auditar cada Pull Request con Lighthouse

name: Performance Audit

# Control: Ejecute la acción para cada Pull Request
# Y cada Push a nuestro bello branch de producción
on:
  pull_request:
  push:
    branches:
      - master

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x

      - name: Install and build
        run: |
          npm install
          npm run build
      - name: Audit with lighthouse CI
        uses: treosh/lighthouse-ci-action@v2
        with:
          # Configuración para auditar sobre un sito estático
          # Lee más en:
          # treosh/lg-ci-action options https://github.com/marketplace/actions/lighthouse-ci-action
          runs: 5
          uploadArtifacts: true
          configPath: './.github/workflows/setup/lighthouse-audit.json'
```

En `.github/workflows/setup/lighthouse-audit.json`

```json
{
  "ci": {
    "collect": {
      "staticDistDir": "."
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.8 }],
        "first-contentful-paint": ["error", { "maxNumericValue": 1000 }],
        "interactive": ["error", { "maxNumericValue": 1500 }],
        "resource-summary:font:count": ["error", { "maxNumericValue": 1 }],
        "resource-summary:script:size": [
          "error",
          { "maxNumericValue": 150000 }
        ],
        "resource-summary:stylesheet:size": [
          "error",
          { "maxNumericValue": 100000 }
        ]
      }
    }
  }
}
```

Para correr Lighthouse en la terminal podemos usar:

Mostrando el reporte en html `npx lighthouse [url]`

Mostrando el reporte en json `npx lighthouse [url] --output json`

Con el json podemos tomar las auditorías y añadir más métricas a `lighthouse-audit.json`.
  
### 9.3 Medidas reales y monitoreo constante

Durante todo este tiempo hemos estado haciendo medidas que nos han ayudado con la optimización del sitio, debemos de tener presente que todas esas medidas las hemos tomado desde nuestro computador y siendo nosotros los únicos usuarios. Estos tipos de medidas se les llama **Medidas de Laboratorio**. Son de laboratorio porque tenemos pleno control de lo que está sucediendo y nuestro proyecto está corriendo desde local o desde un servidor. Esto no representa la realidad para nuestros usuarios, es por esto que es tan importante tomar **medidas reales**, porque no sabemos las condiciones con la que se conectan, dispositivos, etc y esto hace que las métricas cambie.

Cuando se está dando el proyecto a usuarios reales:

1. Tomemos **medidas en el sitio de producción**
2. **Monitoreo constante e histórico**
3. Cumplir las métricas para los usuarios del percentíl 75 de nuestros usuarios.

Existen servicios que hacen estas tareas por nosotros, como New Relic o el mismo Google Analytics, que nos ayudan a recopilar los gráficos necesarios para poder tomar decisiones de nuestro sitio.

#### Enlaces de Interés 9.3

Sitios webs que cubren estos servicios:

* [pingdom](https://www.pingdom.com/)
* [webPageTest](https://webpagetest.org/)
* [NewRelic](https://newrelic.com/)
