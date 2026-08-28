const cnaeSectionA = [ {
  codigo: "A",
  titulo: "AGRICULTURA, GANADERÍA, CAZA, SILVICULTURA Y PESCA",
  descricao: "CLAE - Clasificador de Actividades Económicas é o código oficial da AFIP (Administração Federal de Receitas Públicas) usado para classificar os ramos de atuação de empresas e profissionais.",
  objetivos: [
    "Producción de bienes agrícolas y pecuarios para consumo humano e industrial.",
    "Manejo y explotación de recursos forestales renovables."
  ],
  caracteristicas: [
    "Identificación de actividades primarias de extracción y producción.",
    "Identificar las actividades relacionadas con la producción agrícola, ganadera, forestal, pesquera y acuícola.",
    "Gran diversidad de técnicas: agricultura de secano, irrigada, ganadería extensiva e intensiva, cultivo forestal y sistemas acuícolas.",
    "Importancia para la seguridad alimentaria y el suministro de insumos para la industria.",
  ],
  divisoes: [
    {
      codigo: "01",
      titulo: "CULTIVOS TEMPORALES",
      descricao: "Esta categoría abarca aquellos cultivos con un ciclo vegetativo de hasta dos años.",
      exemplos: [
        "Incluye la producción de cereales, legumbres, hortalizas, frutas y otros cultivos de temporada."
      ],
      servicos_relacionados: [],
      subclasse: [
        {
          "codigo": "11111",
          "codigo_mascara": "11111",
          "descricao": "Cultivo de arroz"
        },
        {
          "codigo": "11112",
          "codigo_mascara": "11112",
          "descricao": "Cultivo de trigo"
        },
        {
          "codigo": "11119",
          "codigo_mascara": "11119",
          "descricao": "Cultivo de cereales n.c.p., excepto los de uso forrajero"
        },
        {
          "codigo": "11121",
          "codigo_mascara": "11121",
          "descricao": "Cultivo de maíz"
        },
        {
          "codigo": "11129",
          "codigo_mascara": "11129",
          "descricao": "Cultivo de cereales de uso forrajero n.c.p."
        },
        {
          "codigo": "11130",
          "codigo_mascara": "11130",
          "descricao": "Cultivo de pastos de uso forrajero"
        },
        {
          "codigo": "11211",
          "codigo_mascara": "11211",
          "descricao": "Cultivo de soja"
        },
        {
          "codigo": "11291",
          "codigo_mascara": "11291",
          "descricao": "Cultivo de girasol"
        },
        {
          "codigo": "11299",
          "codigo_mascara": "11299",
          "descricao": "Cultivo de oleaginosas n.c.p. excepto soja y girasol"
        },
        {
          "codigo": "11310",
          "codigo_mascara": "11310",
          "descricao": "Cultivo de papa, batata y mandioca"
        },
        {
          "codigo": "11321",
          "codigo_mascara": "11321",
          "descricao": "Cultivo de tomate"
        },
        {
          "codigo": "11329",
          "codigo_mascara": "11329",
          "descricao": "Cultivo de bulbos, brotes, raíces y hortalizas de fruto n.c.p."
        },
        {
          "codigo": "11331",
          "codigo_mascara": "11331",
          "descricao": "Cultivo de hortalizas de hoja y de otras hortalizas frescas"
        },
        {
          "codigo": "11341",
          "codigo_mascara": "11341",
          "descricao": "Cultivo de legumbres frescas"
        },
        {
          "codigo": "11342",
          "codigo_mascara": "11342",
          "descricao": "Cultivo de legumbres secas"
        },
        {
          "codigo": "11400",
          "codigo_mascara": "11400",
          "descricao": "Cultivo de tabaco"
        },
        {
          "codigo": "11501",
          "codigo_mascara": "11501",
          "descricao": "Cultivo de algodón"
        },
        {
          "codigo": "11509",
          "codigo_mascara": "11509",
          "descricao": "Cultivo de plantas para la obtención de fibras n.c.p."
        },
        {
          "codigo": "11911",
          "codigo_mascara": "11911",
          "descricao": "Cultivo de flores"
        },
        {
          "codigo": "11912",
          "codigo_mascara": "11912",
          "descricao": "Cultivo de plantas ornamentales"
        },
        {
          "codigo": "11990",
          "codigo_mascara": "11990",
          "descricao": "Cultivos temporales n.c.p."
        }
      ]
    },
    {
    codigo: "02",
    titulo: "CULTIVOS PERENNES",
    descricao: "Las plantas que duran más de dos temporadas se clasifican como tales.",
    exemplos: [
        "Incluye la producción de frutas, nueces, café, té, cacao y otros cultivos perennes."
    ],
    servicos_relacionados: [
        ""
    ],
    subclasse: [
        {
          "codigo": "12110",
          "codigo_mascara": "12110",
          "descricao": "Cultivo de vid para vinificar"
        },
        {
          "codigo": "12121",
          "codigo_mascara": "12121",
          "descricao": "Cultivo de uva de mesa"
        },
        {
          "codigo": "12200",
          "codigo_mascara": "12200",
          "descricao": "Cultivo de frutas cítricas"
        },
        {
          "codigo": "12311",
          "codigo_mascara": "12311",
          "descricao": "Cultivo de manzana y pera"
        },
        {
          "codigo": "12319",
          "codigo_mascara": "12319",
          "descricao": "Cultivo de frutas de pepita n.c.p."
        },
        {
          "codigo": "12320",
          "codigo_mascara": "12320",
          "descricao": "Cultivo de frutas de carozo"
        },
        {
          "codigo": "12410",
          "codigo_mascara": "12410",
          "descricao": "Cultivo de frutas tropicales y subtropicales"
        },
        {
          "codigo": "12420",
          "codigo_mascara": "12420",
          "descricao": "Cultivo de frutas secas"
        },
        {
          "codigo": "12490",
          "codigo_mascara": "12490",
          "descricao": "Cultivo de frutas n.c.p."
        },
        {
          "codigo": "12510",
          "codigo_mascara": "12510",
          "descricao": "Cultivo de caña de azúcar"
        },
        {
          "codigo": "12590",
          "codigo_mascara": "12590",
          "descricao": "Cultivo de plantas sacaríferas n.c.p."
        },
        {
          "codigo": "12600",
          "codigo_mascara": "12600",
          "descricao": "Cultivo de frutos oleaginosos"
        },
        {
          "codigo": "12701",
          "codigo_mascara": "12701",
          "descricao": "Cultivo de yerba mate"
        },
        {
          "codigo": "12709",
          "codigo_mascara": "12709",
          "descricao": "Cultivo de té y otras plantas cuyas hojas se utilizan para preparar infusiones"
        },
        {
          "codigo": "12800",
          "codigo_mascara": "12800",
          "descricao": "Cultivo de especias y de plantas aromáticas y medicinales"
        },
        {
          "codigo": "12900",
          "codigo_mascara": "12900",
          "descricao": "Cultivos perennes n.c.p."
        }
    ]
    },
    {
    codigo: "03",
    titulo: "PRODUCCIÓN DE SEMILLAS Y DE OTRAS FORMAS DE PROPAGACIÓN DE CULTIVOS AGRÍCOLAS",
    descricao: "Abarca la producción de semillas certificadas y material de propagación vegetativa para cultivos agrícolas.",
    exemplos: [
        "Incluye la producción de semillas de cereales, legumbres, hortalizas, frutas y otros cultivos agrícolas."
    ],
    servicos_relacionados: [
        ""
    ],
    subclasse: [
        {
          "codigo": "13011",
          "codigo_mascara": "13011",
          "descricao": "Producción de semillas híbridas de cereales y oleaginosas"
        },
        {
          "codigo": "13012",
          "codigo_mascara": "13012",
          "descricao": "Producción de semillas varietales o autofecundadas de cereales, oleaginosas, y forrajeras"
        },
        {
          "codigo": "13013",
          "codigo_mascara": "13013",
          "descricao": "Producción de semillas de hortalizas y legumbres, flores y plantas ornamentales y árboles frutales"
        },
        {
          "codigo": "13019",
          "codigo_mascara": "13019",
          "descricao": "Producción de semillas de cultivos agrícolas n.c.p."
        },
        {
          "codigo": "13020",
          "codigo_mascara": "13020",
          "descricao": "Producción de otras formas de propagación de cultivos agrícolas"
        }
    ]
    },
    {
    codigo: "04",
    titulo: "CRÍA DE ANIMALES",
    descricao: "Este sistema clasifica de manera detallada cada tipo de producción ",
    exemplos: [
        "Incluye la cría de ganado bovino, porcino, ovino, caprino, equino, avícola y otros animales de granja."
    ],
    servicos_relacionados: [
        ""
    ],
    subclasse: [
        {
          "codigo": "14113",
          "codigo_mascara": "14113",
          "descricao": "Cría de ganado bovino, excepto la realizada en cabañas y para la producción de leche"
        },
        {
          "codigo": "14114",
          "codigo_mascara": "14114",
          "descricao": "Invernada de ganado bovino excepto el engorde en corrales (Feed-Lot)"
        },
        {
          "codigo": "14115",
          "codigo_mascara": "14115",
          "descricao": "Engorde en corrales (Feed-Lot)"
        },
        {
          "codigo": "14121",
          "codigo_mascara": "14121",
          "descricao": "Cría de ganado bovino realizada en cabañas"
        },
        {
          "codigo": "14211",
          "codigo_mascara": "14211",
          "descricao": "Cría de ganado equino, excepto la realizada en haras"
        },
        {
          "codigo": "14300",
          "codigo_mascara": "14300",
          "descricao": "Cría de camélidos"
        },
        {
          "codigo": "14410",
          "codigo_mascara": "14410",
          "descricao": "Cría de ganado ovino -excepto en cabañas y para la producción de lana y leche"
        },
        {
          "codigo": "14420",
          "codigo_mascara": "14420",
          "descricao": "Cría de ganado ovino realizada en cabañas"
        },
        {
          "codigo": "14430",
          "codigo_mascara": "14430",
          "descricao": "Cría de ganado caprino -excepto la realizada en cabañas y para producción de pelos y de leche"
        },
        {
          "codigo": "14440",
          "codigo_mascara": "14440",
          "descricao": "Cría de ganado caprino realizada en cabañas"
        },
        {
          "codigo": "14510",
          "codigo_mascara": "14510",
          "descricao": "Cría de ganado porcino, excepto la realizada en cabañas"
        },
        {
          "codigo": "14520",
          "codigo_mascara": "14520",
          "descricao": "Cría de ganado porcino realizado en cabañas"
        },
        {
          "codigo": "14610",
          "codigo_mascara": "14610",
          "descricao": "Producción de leche bovina"
        },
        {
          "codigo": "14620",
          "codigo_mascara": "14620",
          "descricao": "Producción de leche de oveja y de cabra"
        },
        {
          "codigo": "14710",
          "codigo_mascara": "14710",
          "descricao": "Producción de lana y pelo de oveja y cabra (cruda)"
        },
        {
          "codigo": "14720",
          "codigo_mascara": "14720",
          "descricao": "Producción de pelos de ganado n.c.p."
        },
        {
          "codigo": "14810",
          "codigo_mascara": "14810",
          "descricao": "Cría de aves de corral, excepto para la producción de huevos"
        },
        {
          "codigo": "14820",
          "codigo_mascara": "14820",
          "descricao": "Producción de huevos"
        },
        {
          "codigo": "14910",
          "codigo_mascara": "14910",
          "descricao": "Apicultura"
        },
        {
          "codigo": "14920",
          "codigo_mascara": "14920",
          "descricao": "Cunicultura"
        },
        {
          "codigo": "14930",
          "codigo_mascara": "14930",
          "descricao": "Cría de animales pelíferos, pilíferos y plumíferos, excepto de las especies ganaderas"
        },
        {
          "codigo": "14990",
          "codigo_mascara": "14990",
          "descricao": "Cría de animales y obtención de productos de origen animal, n.c.p."
        }
    ]
    },
    {
    codigo: "05",
    titulo: "CAZA, REPOBLACIÓN DE ANIMALES DE CAZA",
    descricao: "Esta categoría abarca la caza de animales silvestres y la repoblación de especies cinegéticas.",
    exemplos: [
        "Esta categoría abarca la explotación de la fauna silvestre con fines productivos o de conservación, con exclusión explícita de la caza deportiva."
    ],
    servicos_relacionados: [
        ""
    ],
    subclasse: [
        {
        codigo: "17010",
        codigo_mascara: "17010",
        descricao: "Caza y repoblación  de animales de caza"
        }
    ]
    },
    {
    codigo: "06",
    titulo: "SILVICULTURA",
    descricao: "Esta categoría abarca la producción de madera, leña, resina y otros productos forestales.",
    exemplos: [
        "Incluye la explotación de bosques naturales y plantaciones forestales para la obtención de madera, leña, resina y otros productos forestales."
    ],
    servicos_relacionados: [
        ""
    ],
    subclasse: [
        {
        codigo: "21010",
        codigo_mascara: "21010",
        descricao: "Plantación de bosques"
        },
        {
        codigo: "21020",
        codigo_mascara: "21020",
        descricao: "Repoblación y conservación de bosques nativos y zonas forestadas"
        },
        {
        codigo: "21030",
        codigo_mascara: "21030",
        descricao: "Explotación de viveros forestales"
        }
    ]
    },
    {
    codigo: "07",
    titulo: "EXTRACCIÓN DE PRODUCTOS FORESTALES",
    descricao: "Se divide en dos códigos principales según el origen del bosque, detallando las tareas de tala, desbaste y aprovechamiento de recursos madereros y no madereros",
    exemplos: [
        "Incluye la extracción de productos forestales de bosques cultivados y nativos, como madera, leña, resina y otros productos no madereros."
    ],
    servicos_relacionados: [
        ""
    ],
    subclasse: [
        {
        codigo: "22010",
        codigo_mascara: "22010",
        descricao: "Extracción de productos forestales de bosques cultivados"
        },
        {
        codigo: "22020",
        codigo_mascara: "22020",
        descricao: "Extracción de productos forestales de bosques nativos"
        }
    ]
    },
    {
    codigo: "08",
    titulo: "PESCA Y ACUICULTURA",
    descricao: "Se subdivide en códigos específicos según el tipo de extracción, procesamiento y ubicación de la captura.",
    exemplos: [
        "Incluyendo la pesca marítima, continental y la acuicultura."
    ],
    servicos_relacionados: [
        ""
    ],
    subclasse: [
        {
          "codigo": "031110",
          "codigo_mascara": "031110",
          "descricao": "Pesca de organismos marinos, excepto cuando es realizada en buques procesadores"
        },
        {
          "codigo": "031120",
          "codigo_mascara": "031120",
          "descricao": "Pesca y elaboración de productos marinos realizada a bordo de buques procesadores"
        },
        {
          "codigo": "031130",
          "codigo_mascara": "031130",
          "descricao": "Recolección de organismos marinos excepto peces, crustáceos y moluscos"
        },
        {
          "codigo": "031200",
          "codigo_mascara": "031200",
          "descricao": "Pesca continental: fluvial y lacustre"
        },
        {
          "codigo": "032000",
          "codigo_mascara": "032000",
          "descricao": "Explotación de criaderos de peces, granjas piscícolas y otros frutos acuáticos (acuicultura)"
        }
    ]
    }
  ],
  observacoes: [
        "En Argentina, el Nomenclador de Actividades Económicas (CLAE) de la AFIP clasifica la actividad pesquera dentro de la Sección A: Agricultura, Ganadería, Caza, Silvicultura y Pesca."
    ]
}
];

export default cnaeSectionA;