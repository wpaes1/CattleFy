const cnaeSectionA = [ {
  codigo: "A",
  titulo: "AGRICULTURA, GANADERÍA, PRODUCCIÓN FORESTAL, PESCA Y ACUICULTURA",
  descricao: "Actividades relacionadas con la producción primaria de bienes de origen vegetal y animal, incluyendo cultivo, cría, manejo forestal, pesca y acuicultura, así como servicios directamente relacionados.",
  objetivos: [
    "Producción de bienes agrícolas y pecuarios para consumo humano e industrial.",
    "Manejo y explotación de recursos forestales renovables.",
    "Cría en sistemas de acuicultura."
  ],
  caracteristicas: [
    "Predominantemente actividades primarias de extracción y producción.",
    "Gran diversidad de técnicas: agricultura de secano, irrigada, ganadería extensiva e intensiva, cultivo forestal y sistemas acuícolas.",
    "Importancia para la seguridad alimentaria y el suministro de insumos para la industria.",
    "Presencia tanto de unidades familiares como de propiedades de gran tamaño y empresas agroindustriales."
  ],
  divisoes: [
    {
      codigo: "01",
      titulo: "Cultivos agrícolas",
      descricao: "Producción de cultivos temporales y permanentes destinados al consumo humano, alimentación animal y uso industrial.",
      exemplos: [
        "Cultivo de cereales (ej.: alpiste, arroz, avena, centeno, cebada, maíz, mijo, panizo, sorgo, trigo, trigo sarraceno, triticale y otros cereales)",
        "Cultivo de algodón herbáceo y de otras fibras agrícolas (ej.: algodón herbáceo, yute, junco, lino, malva, ramio, sorgo para escobas y otras fibras agrícolas)",
        "Horticultura, fruticultura y cultivos permanentes (ej.: naranja, banana)",
        "Producción de caña de azúcar y demás cultivos comerciales"
      ],
      servicos_relacionados: [
        "Preparación del suelo, siembra y cosecha",
        "Irrigación y drenaje",
        "Tratamiento y beneficio primario poscosecha"
      ],
      subclasse: [
        {
          codigo:"0111301",
          codigo_mascara:"0111-3/01",
          descricao:"Cultivo de arroz"
        },
        {
          codigo:"0111302",
          codigo_mascara:"0111-3/02",
          descricao:"Cultivo de maíz"
        },
        {
          codigo:"0111303",
          codigo_mascara:"0111-3/03",
          descricao:"Cultivo de trigo"
        },
        {
          codigo:"0111399",
          codigo_mascara:"0111-3/99",
          descricao:"Cultivo de otros cereales no especificados anteriormente"
        },

        {
          codigo:"0112101",
          codigo_mascara:"0112-1/01",
          descricao:"Cultivo de algodón herbáceo"
        },
        {
          codigo:"0112102",
          codigo_mascara:"0112-1/02",
          descricao:"Cultivo de yute"
        },
        {
          codigo:"0112199",
          codigo_mascara:"0112-1/99",
          descricao:"Cultivo de otras fibras de cultivo temporal no especificadas anteriormente"
        },
        {
          codigo:"0113000",
          codigo_mascara:"0113-0/00",
          descricao:"Cultivo de caña de azúcar"
        },
        {
          codigo:"0114800",
          codigo_mascara:"0114-8/00",
          descricao:"Cultivo de tabaco"
        },
        {
          codigo:"0115600",
          codigo_mascara:"0115-6/00",
          descricao:"Cultivo de soja"
        },
        {
          codigo:"0116401",
          codigo_mascara:"0116-4/01",
          descricao:"Cultivo de maní"
        },
        {
          codigo:"0116402",
          codigo_mascara:"0116-4/02",
          descricao:"Cultivo de girasol"
        },
        {
          codigo:"0116403",
          codigo_mascara:"0116-4/03",
          descricao:"Cultivo de ricino"
        },
        {
          codigo:"0116499",
          codigo_mascara:"0116-4/99",
          descricao:"Cultivo de otras oleaginosas de cultivo temporal no especificadas anteriormente"
        },

        {
          codigo:"0119901",
          codigo_mascara:"0119-9/01",
          descricao:"Cultivo de piña"
        },
        {
          codigo:"0119902",
          codigo_mascara:"0119-9/02",
          descricao:"Cultivo de ajo"
        },
        {
          codigo:"0119903",
          codigo_mascara:"0119-9/03",
          descricao:"Cultivo de papa"
        },
        {
          codigo:"0119904",
          codigo_mascara:"0119-9/04",
          descricao:"Cultivo de cebolla"
        },
        {
          codigo:"0119-9/05",
          codigo_mascara:"0119-9/05",
          descricao:"Cultivo de frijol"
        },
        {
          codigo:"0119906",
          codigo_mascara:"0119-9/06",
          descricao:"Cultivo de mandioca"
        },
        {
          codigo:"0119907",
          codigo_mascara:"0119-9/07",
          descricao:"Cultivo de melón"
        },
        {
          codigo:"0119908",
          codigo_mascara:"0119-9/08",
          descricao:"Cultivo de sandía"
        },
        {
          codigo:"0119909",
          codigo_mascara:"0119-9/09",
          descricao:"Cultivo de tomate rastrero"
        },
        {
          codigo:"0119999",
          codigo_mascara:"0119-9/99",
          descricao:"Cultivo de otras plantas de cultivo temporal no especificadas anteriormente"
        },

        {
          codigo:"0121101",
          codigo_mascara:"0121-1/01",
          descricao:"Horticultura, excepto fresa"
        },
        {
          codigo:"0121102",
          codigo_mascara:"0121-1/02",
          descricao:"Cultivo de fresa"
        },
        {
          codigo:"0122900",
          codigo_mascara:"0122-9/00",
          descricao:"Cultivo de flores y plantas ornamentales"
        },

        {
          codigo:"01318",
          codigo_mascara:"01.31-8",
          descricao:"Cultivo de naranja"
        },
        {
          codigo:"01326",
          codigo_mascara:"01.32-6",
          descricao:"Cultivo de uva"
        },
        {
          codigo:"01334",
          codigo_mascara:"01.33-4",
          descricao:"Cultivo de frutas de cultivo permanente, excepto naranja y uva"
        },
        {
          codigo:"01342",
          codigo_mascara:"01.34-2",
          descricao:"Cultivo de café"
        },
        {
          codigo:"01351",
          codigo_mascara:"01.35-1",
          descricao:"Cultivo de cacao"
        },
        {
          codigo:"01393",
          codigo_mascara:"01.39-3",
          descricao:"Cultivo de plantas de cultivo permanente no especificadas anteriormente"
        },
        {
          codigo:"01415",
          codigo_mascara:"01.41-5",
          descricao:"Producción de semillas certificadas"
        },
        {
          codigo:"01423",
          codigo_mascara:"01.42-3",
          descricao:"Producción de plántulas y otras formas de propagación vegetal certificadas"
        }
      ]
    },
    {
    codigo: "02",
    titulo: "Ganadería",
    descricao: "Cría y manejo de animales para la producción de carne, leche, cuero, lana y otros productos derivados; incluye ganadería extensiva e intensiva.",
    exemplos: [
        "Cría de bovinos, porcinos, aves, caprinos y ovinos",
        "Producción de leche y productos lácteos primarios",
        "Cría para la producción de cueros y pieles"
    ],
    servicos_relacionados: [
        "Servicios veterinarios básicos y manejo reproductivo",
        "Alimentación animal y almacenamiento de alimento balanceado",
        "Establecimiento y mantenimiento de pasturas"
    ],
    subclasse: [
        // 01.51-2 Cría de bovinos
        {
        codigo: "0151201",
        codigo_mascara: "0151-2/01",
        descricao: "Cría de bovinos para carne"
        },
        {
        codigo: "0151202",
        codigo_mascara: "0151-2/02",
        descricao: "Cría de bovinos para leche"
        },
        {
        codigo: "0151203",
        codigo_mascara: "0151-2/03",
        descricao: "Cría de bovinos, excepto para carne y leche"
        },

        {
        codigo: "0152101",
        codigo_mascara: "0152-1/01",
        descricao: "Cría de búfalos"
        },
        {
        codigo: "0152102",
        codigo_mascara: "0152-1/02",
        descricao: "Cría de equinos"
        },
        {
        codigo: "0152103",
        codigo_mascara: "0152-1/03",
        descricao: "Cría de asnos y mulas"
        },

        // 01.53-9 Cría de caprinos y ovinos
        {
        codigo: "0153901",
        codigo_mascara: "0153-9/01",
        descricao: "Cría de caprinos"
        },
        {
        codigo: "0153902",
        codigo_mascara: "0153-9/02",
        descricao: "Cría de ovinos, inclusive para producción de lana"
        },

        // 01.54-7 Cría de porcinos
        {
        codigo: "0154700",
        codigo_mascara: "0154-7/00",
        descricao: "Cría de porcinos"
        },

        // 01.55-5 Cría de aves
        {
        codigo: "0155501",
        codigo_mascara: "0155-5/01",
        descricao: "Cría de pollos para carne"
        },
        {
        codigo: "0155502",
        codigo_mascara: "0155-5/02",
        descricao: "Producción de pollitos de un día"
        },
        {
        codigo: "0155503",
        codigo_mascara: "0155-5/03",
        descricao: "Cría de otras gallináceas, excepto para carne"
        },
        {
        codigo: "0155504",
        codigo_mascara: "0155-5/04",
        descricao: "Cría de aves, excepto gallináceas"
        },
        {
        codigo: "0155505",
        codigo_mascara: "0155-5/05",
        descricao: "Producción de huevos"
        },

        // 01.59-8 Cría de animales no especificados anteriormente
        {
        codigo: "0159801",
        codigo_mascara: "0159-8/01",
        descricao: "Apicultura"
        },
        {
        codigo: "0159802",
        codigo_mascara: "0159-8/02",
        descricao: "Cría de animales de compañía"
        },
        {
        codigo: "0159803",
        codigo_mascara: "0159-8/03",
        descricao: "Cría de caracoles"
        },
        {
        codigo: "0159804",
        codigo_mascara: "0159-8/04",
        descricao: "Cría del gusano de seda"
        },
        {
        codigo: "0159899",
        codigo_mascara: "0159-8/99",
        descricao: "Cría de otros animales no especificados anteriormente"
        }
    ]
    },
    {
    codigo: "03",
    titulo: "Producción forestal y extracción de madera",
    descricao: "Manejo y explotación de bosques plantados y nativos para la producción de madera, celulosa, aceites esenciales y otros productos forestales.",
    exemplos: [
        "Bosques plantados (eucalipto, pino) para madera y celulosa",
        "Explotación sostenible de bosques nativos",
        "Producción de leña, carbón vegetal y subproductos forestales"
    ],
    servicos_relacionados: [
        "Silvicultura y reforestación",
        "Transporte y procesamiento primario de madera",
        "Manejo de plagas y enfermedades forestales"
    ],
    subclasse: [
        // 02.10-1 Producción forestal - bosques plantados
        {
        codigo: "0210101",
        codigo_mascara: "0210-1/01",
        descricao: "Cultivo de eucalipto"
        },
        {
        codigo: "0210102",
        codigo_mascara: "0210-1/02",
        descricao: "Cultivo de acacia negra"
        },
        {
        codigo: "0210103",
        codigo_mascara: "0210-1/03",
        descricao: "Cultivo de pino"
        },
        {
        codigo: "0210104",
        codigo_mascara: "0210-1/04",
        descricao: "Cultivo de teca"
        },
        {
        codigo: "0210105",
        codigo_mascara: "0210-1/05",
        descricao: "Cultivo de especies madereras, excepto eucalipto, acacia negra, pino y teca"
        },
        {
        codigo: "0210106",
        codigo_mascara: "0210-1/06",
        descricao: "Cultivo de plántulas en viveros forestales"
        },
        {
        codigo: "0210107",
        codigo_mascara: "0210-1/07",
        descricao: "Extracción de madera en bosques plantados"
        },
        {
        codigo: "0210108",
        codigo_mascara: "0210-1/08",
        descricao: "Producción de carbón vegetal - bosques plantados"
        },
        {
        codigo: "0210109",
        codigo_mascara: "0210-1/09",
        descricao: "Producción de corteza de acacia negra - bosques plantados"
        },
        {
        codigo: "0210199",
        codigo_mascara: "0210-1/99",
        descricao: "Producción de productos no madereros no especificados anteriormente en bosques plantados"
        },

        // 02.20-9 Producción forestal - bosques nativos
        {
        codigo: "0220901",
        codigo_mascara: "0220-9/01",
        descricao: "Extracción de madera en bosques nativos"
        },
        {
        codigo: "0220902",
        codigo_mascara: "0220-9/02",
        descricao: "Producción de carbón vegetal - bosques nativos"
        },
        {
        codigo: "0220903",
        codigo_mascara: "0220-9/03",
        descricao: "Recolección de nuez de Brasil en bosques nativos"
        },
        {
        codigo: "0220-9/04",
        codigo_mascara: "0220-9/04",
        descricao: "Recolección de látex en bosques nativos"
        },
        {
        codigo: "0220905",
        codigo_mascara: "0220-9/05",
        descricao: "Recolección de palmito en bosques nativos"
        },
        {
        codigo: "0220906",
        codigo_mascara: "0220-9/06",
        descricao: "Conservación de bosques nativos"
        },
        {
        codigo: "0220999",
        codigo_mascara: "0220-9/99",
        descricao: "Recolección de productos no madereros no especificados anteriormente en bosques nativos"
        }
    ]
    },
    {
    codigo: "04",
    titulo: "Pesca y acuicultura",
    descricao: "Actividades de captura de recursos acuáticos en ambientes marinos y continentales, así como la cría intensiva o extensiva de organismos acuáticos en sistemas de acuicultura.",
    exemplos: [
        "Pesca artesanal e industrial en mar y agua dulce",
        "Jaulas flotantes, estanques y otros sistemas de cría de peces y crustáceos",
        "Cultivo de moluscos y plantas acuáticas"
    ],
    servicos_relacionados: [
        "Mantenimiento de embarcaciones y equipos de pesca",
        "Producción de alevines e insumos para piscicultura",
        "Procesamiento primario de productos pesqueros"
    ],
    subclasse: [
        {
        codigo: "0311601",
        codigo_mascara: "0311-6/01",
        descricao: "Pesca de peces en agua salada"
        },
        {
        codigo: "0311602",
        codigo_mascara: "0311-6/02",
        descricao: "Pesca de crustáceos y moluscos en agua salada"
        },
        {
        codigo: "0311603",
        codigo_mascara: "0311-6/03",
        descricao: "Recolección de otros productos marinos"
        },
        {
        codigo: "0312401",
        codigo_mascara: "0312-4/01",
        descricao: "Pesca de peces en agua dulce"
        },
        {
        codigo: "0312402",
        codigo_mascara: "0312-4/02",
        descricao: "Pesca de crustáceos y moluscos en agua dulce"
        },
        {
        codigo: "0312403",
        codigo_mascara: "0312-4/03",
        descricao: "Recolección de otros productos acuáticos de agua dulce"
        },

        // 03.21-3 Acuicultura en agua salada y salobre
        {
        codigo: "0321301",
        codigo_mascara: "0321-3/01",
        descricao: "Cría de peces en agua salada y salobre"
        },
        {
        codigo: "0321302",
        codigo_mascara: "0321-3/02",
        descricao: "Cría de camarones en agua salada y salobre"
        },
        {
        codigo: "0321303",
        codigo_mascara: "0321-3/03",
        descricao: "Cría de ostras y mejillones en agua salada y salobre"
        },
        {
        codigo: "0321304",
        codigo_mascara: "0321-3/04",
        descricao: "Cría de peces ornamentales en agua salada y salobre"
        },

        // 03.22-1 Acuicultura en agua dulce
        {
        codigo: "0322101",
        codigo_mascara: "0322-1/01",
        descricao: "Cría de peces en agua dulce"
        },
        {
        codigo: "0322102",
        codigo_mascara: "0322-1/02",
        descricao: "Cría de camarones en agua dulce"
        },
        {
        codigo: "0322103",
        codigo_mascara: "0322-1/03",
        descricao: "Cría de ostras y mejillones en agua dulce"
        },
        {
        codigo: "0322104",
        codigo_mascara: "0322-1/04",
        descricao: "Cría de peces ornamentales en agua dulce"
        },
        {
        codigo: "0322105",
        codigo_mascara: "0322-1/05",
        descricao: "Ranicultura"
        },
        {
        codigo: "0322106",
        codigo_mascara: "0322-1/06",
        descricao: "Cría de caimanes"
        }
    ]
    }
  ],
  observacoes: [
        "La Clasificación Nacional de Actividades Económicas (CNAE) aún no ha sido aprobada para el país.",
        "Esta es una clasificación genérica de la CNAE basada en el modelo brasileño, ya que ofrece un mayor nivel de detalle en cuanto a las actividades.",
        "Los términos técnicos y ejemplos fueron adaptados para facilitar la comprensión de productores, gestores y profesionales agropecuarios."
    ]
}
];

export default cnaeSectionA;