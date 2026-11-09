# Museo de los Futuros que Nunca Ocurrieron

Un archivo clasificado interactivo con objetos de líneas temporales que jamás existieron, repartidos por todo el planeta. Cada objeto trae documentos que se contradicen entre sí: tú decides cuáles son auténticos y, con eso, qué historia queda en pie.

**Demo en vivo:** https://museo-futuros.netlify.app/

## Cómo funciona

1. Entras al archivo y eliges un objeto, desde la lista o desde el mapa del mundo.
2. Inspeccionas sus componentes, lees sus documentos y escuchas a sus testimonios.
3. Sellas cada documento como **auténtico** o **falso**.
4. Cuando dos documentos contradictorios quedan con sellos opuestos, la contradicción se resuelve y el archivista revela una versión distinta de la historia.
5. Tus decisiones se propagan: un documento de un objeto puede reaccionar a lo que decidiste en otro. Por ejemplo, el mensaje del Heliógrafo de Tombuctú se marca como consistente o como anomalía según lo que decidas sobre Altacruz en la Cápsula del Correo Neumático.

## Los objetos del archivo

| Objeto | Región | Línea temporal |
| --- | --- | --- |
| Cápsula del Correo Neumático Continental | Cono Sur, Sudamérica | N-1934 |
| Regulador Climático | Altiplano, Sudamérica | C-1957 |
| Sismógrafo de Cristal de Nagoya | Japón, Asia Oriental | S-1961 |
| Heliógrafo Monumental de Tombuctú | Malí, África Occidental | H-1948 |
| Brújula de Hielo de la Estación Meridiana | Antártida | M-1975 |
| Locomotora Magnética del Yukón | Yukón, Norteamérica | Y-1960 |

Las personas, las instituciones y los hechos son ficticios; solo las regiones son reales.

## Características

- **Mapa del mundo** dibujado en SVG con `d3-geo`: un punto por objeto que pulsa mientras su contradicción sigue abierta y se vuelve verde al resolverla.
- **Sellos de autenticidad** en cada documento, que se pueden poner, cambiar o quitar.
- **Nota del archivista** con una versión distinta de la historia según la decisión del visitante.
- **Efectos entre objetos:** las decisiones en un expediente cambian los avisos que aparecen en otro.
- **Progreso guardado** en el navegador, que se conserva al recargar.
- **Animaciones con propósito:** entrada escalonada, sello que cae sobre el documento, nota que se revela, cambio de pestañas y un efecto de texto que se descifra en la página de inicio.
- **Página 404 temática** que muestra la referencia del expediente "perdido".

## Tecnologías

- React + Vite
- React Router
- Tailwind CSS
- Framer Motion
- d3-geo, topojson-client y world-atlas (mapa)
- Desplegado en Netlify

## Decisiones técnicas

- **Estado global con Context.** Los sellos viven en un `StampsContext`. La página de inicio, la lista, el mapa y cada expediente leen el mismo progreso sin pasarse props.
- **Datos separados de la interfaz.** Los objetos, documentos, testimonios y contradicciones están en `src/data/objetos.js`. Agregar un objeto nuevo es agregar datos, sin tocar los componentes.
- **Lógica en funciones puras.** Decidir si una contradicción está resuelta, qué resultado corresponde o qué avisos mostrar vive en `src/utils/contradictions.js`, separado de los componentes.
- **Efectos entre objetos dirigidos por datos.** Un documento declara sus `alertas` indicando de qué contradicción dependen y con qué resultado se activan. El mismo código sirve para cualquier combinación.
- **Identificadores únicos por objeto.** Los sellos se guardan por id de documento, así que cada objeto usa su propio prefijo (`r-d1`, `s-d1`, `h-d1`...) para evitar colisiones.
- **El mapa calcula, React dibuja.** `d3-geo` solo proyecta las coordenadas a posiciones en pantalla, y el SVG se renderiza como cualquier otro componente de React.
- **Persistencia en `localStorage`**, con el estado inicial leído de forma perezosa para no acceder al almacenamiento en cada render.
- **Variantes de animación compartidas** (`animation.js`), para que las entradas escalonadas se comporten igual en todas las páginas.

## Estructura del proyecto

```
src/
  animation.js          Variantes compartidas de Framer Motion
  components/           Tabs, DocumentCard, TestimonyCard, InteractiveCapsule, WorldMap, DecryptText
  contexts/             StampsContext (sellos y persistencia)
  data/                 objetos.js (todo el contenido del museo)
  pages/                Home, Files, FileDetail, Page404
  utils/                contradictions.js (reglas del juego)
```

## Ejecutar en local

```bash
git clone https://github.com/[tu-usuario]/[tu-repositorio].git
cd [tu-repositorio]
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
```

## Agregar un objeto nuevo

Basta con añadir un elemento al arreglo de `src/data/objetos.js`:

```js
{
  id: "mi-objeto",
  nombre: "...",
  lineaTemporal: "X-1900",
  año: 1900,
  region: "...",
  coordenadas: [longitud, latitud],
  descripcion: "...",
  componentes: [{ id, nombre, descripcion }],
  documentos: [
    // un documento puede reaccionar a la contradicción de otro objeto
    { id, titulo, fecha, texto, alertas: [{ contradiccion, cuando, texto }] },
  ],
  testimonios: [{ id, autor, texto }],
  contradicciones: [
    {
      id,
      documentos: [idA, idB],
      testimonios: [idT1, idT2],
      pista: "...",
      resultados: { [idA]: "...", [idB]: "..." },
    },
  ],
}
```

El mapa, la lista, los contadores y las alertas se actualizan solos.

## Próximos pasos

- Objetos de Europa y Oceanía, y más contradicciones que se conecten entre sí.
- Botón para reiniciar el archivo y volver a empezar.
- Backend con Express y MongoDB para guardar las decisiones de los visitantes y mostrar qué eligió la mayoría.
- Respetar la preferencia de menos movimiento del sistema en las animaciones.

## Autor

**Gabriel Gallegos Bautista**, desarrollador frontend.

- Portafolio: [gabrielgallegosbautista.co](https://portafolio-six-vert-50.vercel.app/)
