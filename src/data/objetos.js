export const objetos = [
  {
    id: "capsula-neumatica",
    nombre: "Cápsula del Correo Neumático Continental",
    lineaTemporal: "N-1934",
    año: 1934,
    region: "Cono Sur, Sudamérica",
    coordenadas: [-64, -34],
    descripcion:
      "Cápsula de latón que viajaba por tubos de aire comprimido entre las ciudades de la red.",
    componentes: [
      { id: "c1", nombre: "Cuerpo de latón", descripcion: "Cilindro sellado con un número de serie grabado." },
      { id: "c2", nombre: "Sello de presión", descripcion: "Anillo de goma que mantenía la cápsula hermética dentro del tubo." },
      { id: "c3", nombre: "Mapa de rutas", descripcion: "Plano interior con las ciudades conectadas." },
    ],
    documentos: [
      {
        id: "d1",
        titulo: "Manifiesto de inauguración de la Red Neumática",
        fecha: "1934-03-12",
        texto: "La Red conectará Valmora, Puerto Sereno y Altacruz con entregas de menos de quince minutos.",
        autenticidad: null, 
      },
      {
        id: "d2",
        titulo: "Registro de despacho n.º 4471",
        fecha: "1936-06-03",
        texto: "Cápsula enviada desde Valmora hacia Altacruz. Tiempo de tránsito: 11 minutos.",
        autenticidad: null,
      },
      {
        id: "d3",
        titulo: "Informe de clausura de la Red",
        fecha: "1941-11-20",
        texto: "La red nunca pasó del tramo Valmora–Puerto Sereno. Altacruz jamás tuvo estación.",
        autenticidad: null,
      },
    ],
    testimonios: [
      { id: "t1", autor: "Elio Marchetti, repartidor", texto: "Yo entregué esa cápsula en Altacruz con mis propias manos." },
      { id: "t2", autor: "Inés Brandt, operadora", texto: "En Altacruz no había estación. Yo misma cerré la red." },
    ],
        contradicciones: [
      {
        id: "x1",
        documentos: ["d2", "d3"],
        testimonios: ["t1", "t2"],
        pista: "Una entrega a una ciudad que, según otro documento, nunca estuvo conectada.",
        resultados: {
          d2: "Altacruz sí tuvo estación. El informe de clausura omitió un tramo secreto de la red: alguien quiso borrar Altacruz de la historia oficial.",
          d3: "Altacruz nunca estuvo conectada. El registro de despacho es una falsificación, y la cápsula que Elio recuerda haber entregado jamás existió en esta línea temporal.",
        },
      },
    ],
  },
    {
    id: "regulador-climatico",
    nombre: "Regulador Climático",
    lineaTemporal: "C-1957",
    año: 1957,
    region: "Altiplano, Sudamérica",
    coordenadas: [-66, -18],
    descripcion:
      "Consola de latón y cristal con diales para controlar la lluvia y la temperatura de una región entera.",
    componentes: [
      { id: "r-c1", nombre: "Dial de lluvia", descripcion: "Ajustaba los milímetros de lluvia programados para cada zona." },
      { id: "r-c2", nombre: "Válvula central", descripcion: "Liberaba el compuesto que provocaba las nubes. Está corroída por dentro." },
      { id: "r-c3", nombre: "Panel de calibración", descripcion: "Registraba cada ajuste. Las últimas anotaciones están borradas." },
    ],
    documentos: [
      {
        id: "r-d1",
        titulo: "Acta de inauguración del Regulador Climático",
        fecha: "1957-04-02",
        texto: "Se inaugura el Regulador, que mantendrá la lluvia de Altacruz dentro de los límites de la temporada agrícola.",
      },
      {
        id: "r-d2",
  titulo: "Bitácora de operación, hoja 14",
  fecha: "1958-09-14",
  texto: "Lluvia programada sobre Altacruz: 40 mm. Resultado: 40 mm. Sin incidentes.",
  alertas: [
    {
      contradiccion: "x1",
      cuando: "d2",
      texto: "Consistente: Altacruz tuvo estación, así que recibir lluvia programada tiene sentido.",
    },
    {
      contradiccion: "x1",
      cuando: "d3",
      texto: "Anomalía: este documento registra lluvia sobre Altacruz, una ciudad que según tu decisión en la cápsula nunca existió.",
    },
  ],
      },
      {
        id: "r-d3",
        titulo: "Informe técnico de desmantelamiento",
        fecha: "1955-02-10",
        texto: "El Regulador fue apagado y desmantelado por falla irreparable de la válvula central.",
      },
    ],
    testimonios: [
      { id: "r-t1", autor: "Dora Quintana, técnica de mantenimiento", texto: "Calibré esos diales hasta el último día. Nunca los vi apagados." },
      { id: "r-t2", autor: "Hugo Salvatierra, agricultor", texto: "Ese año no cayó ni una gota. El Regulador llevaba años muerto." },
    ],
    contradicciones: [
      {
        id: "r-x1",
        documentos: ["r-d1", "r-d3"],
        testimonios: ["r-t1", "r-t2"],
        pista: "Una máquina inaugurada dos años después de haber sido desmantelada.",
        resultados: {
          "r-d1": "El Regulador volvió a funcionar en 1957 con piezas recuperadas. El informe de 1955 describía un apagado temporal que alguien convirtió en definitivo.",
          "r-d3": "El Regulador nunca volvió a funcionar. La inauguración de 1957 fue una puesta en escena para calmar a los agricultores.",
        },
      },
    ],
  },
    {
    id: "sismografo-cristal",
    nombre: "Sismógrafo de Cristal de Nagoya",
    lineaTemporal: "S-1961",
    año: 1961,
    region: "Japón, Asia Oriental",
    coordenadas: [136.9, 35.2],
    descripcion:
      "Aparato de cristal y mercurio que anunciaba los temblores con horas de anticipación.",
    componentes: [
      { id: "s-c1", nombre: "Péndulo de mercurio", descripcion: "Oscilaba segundos antes de cada temblor. Hoy no se mueve, aunque nadie lo ha tocado." },
      { id: "s-c2", nombre: "Campana de cristal", descripcion: "Resonaba con una nota distinta según la magnitud del sismo anunciado." },
      { id: "s-c3", nombre: "Cinta de registro", descripcion: "Papel continuo con las alertas emitidas. Faltan tres metros." },
    ],
    documentos: [
      {
        id: "s-d1",
        titulo: "Alerta n.º 212",
        fecha: "1962-05-17",
        texto: "Se anuncia un sismo de magnitud 7 para las 03:40 de la madrugada. Se ordena evacuar los barrios bajos.",
      },
      {
        id: "s-d2",
        titulo: "Gaceta oficial de la prefectura",
        fecha: "1962-05-18",
        texto: "La noche transcurrió sin incidentes. No se registraron movimientos en la región.",
      },
      {
        id: "s-d3",
        titulo: "Informe del servicio de socorro",
        fecha: "1962-05-18",
        texto: "Los barrios bajos fueron evacuados a tiempo. No hubo víctimas, pero las calles quedaron agrietadas.",
      },
    ],
    testimonios: [
      { id: "s-t1", autor: "Kenji Arai, operario de turno", texto: "La campana sonó a las tres. Yo mismo desperté al barrio." },
      { id: "s-t2", autor: "Mitsuko Hara, funcionaria de la prefectura", texto: "Esa noche no se movió ni una taza de té." },
    ],
    contradicciones: [
      {
        id: "s-x1",
        documentos: ["s-d2", "s-d3"],
        testimonios: ["s-t1", "s-t2"],
        pista: "Una misma noche descrita de dos maneras por dos documentos oficiales.",
        resultados: {
          "s-d2": "No hubo sismo. El Sismógrafo dio una falsa alarma y alguien ocultó el error; las grietas de las calles tienen otro origen.",
          "s-d3": "El sismo ocurrió y la evacuación funcionó. La gaceta lo ocultó para que la gente no confiara demasiado en la máquina.",
        },
      },
    ],
  },
  {
    id: "heliografo-tombuctu",
    nombre: "Heliógrafo Monumental de Tombuctú",
    lineaTemporal: "H-1948",
    año: 1948,
    region: "Malí, África Occidental",
    coordenadas: [-3, 16.8],
    descripcion:
      "Torre de espejos que enviaba mensajes con destellos de sol a través del desierto.",
    componentes: [
      { id: "h-c1", nombre: "Espejo mayor", descripcion: "Tres metros de bronce pulido. Tiene una grieta con forma de rayo." },
      { id: "h-c2", nombre: "Obturador de láminas", descripcion: "Cortaba el haz de luz para formar el código de destellos." },
      { id: "h-c3", nombre: "Libro de claves", descripcion: "Tabla de equivalencias entre destellos y palabras. Falta una página." },
    ],
    documentos: [
      {
        id: "h-d1",
        titulo: "Acta de construcción de la Torre",
        fecha: "1948-02-09",
        texto: "La Torre quedó terminada y operativa en la cima de la duna alta, con visibilidad hasta cuatrocientos kilómetros.",
      },
      {
        id: "h-d2",
        titulo: "Mensaje n.º 31, recibido",
        fecha: "1949-07-21",
        texto: "Destello recibido en clave: 'Valmora y Altacruz confirman la ruta del correo.' Respondido a las 14:05.",
        alertas: [
          {
            contradiccion: "x1",
            cuando: "d2",
            texto: "Consistente: Altacruz tuvo estación, así que un mensaje que confirma su ruta del correo tiene sentido.",
          },
          {
            contradiccion: "x1",
            cuando: "d3",
            texto: "Anomalía: este mensaje confirma una ruta con Altacruz, una ciudad que según tu decisión en la cápsula nunca estuvo conectada.",
          },
        ],
      },
      {
        id: "h-d3",
        titulo: "Informe del topógrafo",
        fecha: "1951-03-30",
        texto: "En la duna alta no hay torre, cimientos ni espejos. El terreno no muestra rastros de construcción alguna.",
      },
    ],
    testimonios: [
      { id: "h-t1", autor: "Amadou Keita, guía de caravanas", texto: "Yo vi los destellos desde la ruta. Parecían una segunda estrella." },
      { id: "h-t2", autor: "Lucien Moreau, topógrafo", texto: "Caminé la duna entera. Ahí solo hay arena y viento." },
    ],
    contradicciones: [
      {
        id: "h-x1",
        documentos: ["h-d1", "h-d3"],
        testimonios: ["h-t1", "h-t2"],
        pista: "Una torre terminada según un acta, y ausente según quien midió el terreno.",
        resultados: {
          "h-d1": "La Torre existió y alguien la desmanteló sin dejar rastro. El informe del topógrafo se redactó para que nadie la buscara.",
          "h-d3": "La Torre nunca se construyó. El acta presentó una promesa de obra como un hecho consumado para conseguir fondos.",
        },
      },
    ],
  },
  {
    id: "brujula-hielo",
    nombre: "Brújula de Hielo de la Estación Meridiana",
    lineaTemporal: "M-1975",
    año: 1975,
    region: "Antártida",
    coordenadas: [20, -72],
    descripcion:
      "Brújula tallada en hielo azul cuya aguja apuntaba hacia un lugar que las cartas no marcaban.",
    componentes: [
      { id: "m-c1", nombre: "Aguja de cuarzo", descripcion: "Giraba hacia el mismo punto aunque la movieran de sitio." },
      { id: "m-c2", nombre: "Cuenco de hielo azul", descripcion: "No se derrite aunque lo expongan al sol del verano austral." },
      { id: "m-c3", nombre: "Cuaderno de rumbos", descripcion: "Anotaciones de la expedición. Las últimas hojas están en blanco." },
    ],
    documentos: [
      {
        id: "m-d1",
        titulo: "Parte de la expedición n.º 9",
        fecha: "1975-12-03",
        texto: "La aguja apuntó durante once días a un punto del mar donde las cartas no marcan nada.",
      },
      {
        id: "m-d2",
        titulo: "Carta náutica oficial",
        fecha: "1976-02-14",
        texto: "En el punto señalado solo hay océano abierto, con profundidades superiores a cuatro mil metros.",
      },
      {
        id: "m-d3",
        titulo: "Informe del capitán del rompehielos",
        fecha: "1976-03-01",
        texto: "Navegamos hasta el punto. Había una isla de roca negra de unos dos kilómetros de largo.",
      },
    ],
    testimonios: [
      { id: "m-t1", autor: "Greta Lindqvist, meteoróloga", texto: "Pisé esa roca negra. Estaba tibia." },
      { id: "m-t2", autor: "Tomás Aguirre, cartógrafo", texto: "Revisé las sondas diez veces. Ahí el mar tiene cuatro mil metros." },
    ],
    contradicciones: [
      {
        id: "m-x1",
        documentos: ["m-d2", "m-d3"],
        testimonios: ["m-t1", "m-t2"],
        pista: "Un punto del mapa donde una carta ve océano y un capitán ve una isla.",
        resultados: {
          "m-d2": "No hay isla. La brújula estaba averiada y el capitán inventó su informe para justificar el desvío de la expedición.",
          "m-d3": "La isla existe y alguien la borró de las cartas oficiales. La brújula apuntaba a un lugar que el mundo prefirió no tener.",
        },
      },
    ],
  },
  {
    id: "locomotora-magnetica",
    nombre: "Locomotora Magnética del Yukón",
    lineaTemporal: "Y-1960",
    año: 1960,
    region: "Yukón, Norteamérica",
    coordenadas: [-135, 63],
    descripcion:
      "Locomotora que flotaba sobre un riel magnético para cruzar la nieve sin detenerse.",
    componentes: [
      { id: "y-c1", nombre: "Bobinas de levitación", descripcion: "Mantenían la locomotora a un palmo del riel. Dos están quemadas." },
      { id: "y-c2", nombre: "Cabina del maquinista", descripcion: "Tiene el vidrio escarchado por dentro, como si hubiera nevado en el interior." },
      { id: "y-c3", nombre: "Placa de velocidad", descripcion: "Indicaba la velocidad máxima autorizada. El número fue raspado." },
    ],
    documentos: [
      {
        id: "y-d1",
        titulo: "Horario inaugural de la Línea Boreal",
        fecha: "1960-01-15",
        texto: "Servicio diario entre Puerto Aurora y Lago Cobre: novecientos kilómetros en seis horas.",
      },
      {
        id: "y-d2",
        titulo: "Diario de a bordo",
        fecha: "1961-01-12",
        texto: "Nevada programada sobre la ruta: 30 cm. Resultado: 30 cm. Vía despejada con el calor de las bobinas.",
        alertas: [
          {
            contradiccion: "r-x1",
            cuando: "r-d1",
            texto: "Consistente: según tu decisión, el Regulador funcionaba en esos años, así que una nevada programada es posible.",
          },
          {
            contradiccion: "r-x1",
            cuando: "r-d3",
            texto: "Anomalía: este diario registra clima controlado en 1961, pero según tu decisión el Regulador ya no funcionaba.",
          },
        ],
      },
      {
        id: "y-d3",
        titulo: "Informe de ingeniería de vía",
        fecha: "1960-03-02",
        texto: "La velocidad máxima de la locomotora es de noventa kilómetros por hora. El recorrido completo requiere diez horas.",
      },
    ],
    testimonios: [
      { id: "y-t1", autor: "Marguerite Dubois, maquinista", texto: "Hice el trayecto en seis horas más de una vez. Flotábamos sobre la nieve." },
      { id: "y-t2", autor: "Walter Pruitt, ingeniero de vía", texto: "Nunca bajó de diez horas. Hice los cálculos tres veces." },
    ],
    contradicciones: [
      {
        id: "y-x1",
        documentos: ["y-d1", "y-d3"],
        testimonios: ["y-t1", "y-t2"],
        pista: "Un viaje que, según el horario, dura seis horas y, según los cálculos, diez.",
        resultados: {
          "y-d1": "La locomotora superaba lo que decían los papeles. El informe de ingeniería subestimó su velocidad, y alguien no quiso que se supiera de lo que era capaz.",
          "y-d3": "La línea nunca cumplió su horario. Prometía un viaje imposible, y los pasajeros lo descubrieron en las primeras semanas.",
        },
      },
    ],
  },
];