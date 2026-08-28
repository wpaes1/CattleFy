const cnaeSectionA = [ {
  codigo: "A",
  titulo: "Producción agropecuaria, forestación y pesca",
  descricao: "CIIU Rev. 4 – Clasificación Industrial Internacional Uniform Estructura y notas explicativas a cinco dígitos",
  objetivos: [
    "Esta sección incluye la explotación de recursos naturales vegetales y animales, comprendiend las actividades de cultivo, cría de animales, cosecha de árboles y otras plantas, animales productos animales de granja o de su estado natural"
  ],
  caracteristicas: [
    "Esta división distingue dos actividades básicas, la producción de productos de cultivos y producción de productos animales. Se incluye la agricultura orgánica, así como la producción de cultivos y cría de animales genéticamente modificados.",
    "También incluye actividades de servicio relacionadas con la agricultura, la caza ordinaria, mediante trampas y actividades conexas. Para el Grupo 015 (Explotación Mixta), se rompe el principio de clasificar según la actividad principal, se acepta que en muchas prácticas agrícolas se logra un equilibrio razonable en la producción de cultivos y animales, por lo que sería  arbitrario clasificarlos en una u otra categoría.",
    "La actividad agrícola excluye productos que derivan de un proceso (Clasificados en divisiones 10 y 11 (Elaboración de productos alimenticios y bebidas) y la división 12 (Elaboración de productos del tabaco).",
    "Se excluyen actividades de preparación del terreno (Preparación del terreno para la agricultura, drenaje, etc) clasificadas en la sección F (Construcción). Las actividades de comercialización  realizadas por comisionistas asociaciones cooperativas de productos agrícolas se incluyen en la sección G.",
  ],
  divisoes: [
    {
      codigo: "01",
      titulo: "Cultivo de productos no perennes",
      descricao: "Este Grupo incluye la producción de cultivos no perennes, es decir de plantaciones que no duran más de dos años (temporadas) de cultivo. Incluye la producción de plantas con el propósito de producción de semillas.",
      exemplos: [
        "Cultivo de cereales (excepto arroz), legumbres y semillas oleaginosas"
      ],
      servicos_relacionados: [],
      subclasse: [
        {
          "codigo": "01110",
          "codigo_mascara": "01110",
          "descricao": "Cultivo de cereales (excepto arroz), legumbres y semillas oleaginosas"
        },
        {
          "codigo": "01120",
          "codigo_mascara": "01120",
          "descricao": "Cultivo de arroz"
        },
        {
          "codigo": "01131",
          "codigo_mascara": "01131",
          "descricao": "Cultivos de hortalizas hidropónicas"
        },
        {
          "codigo": "01132",
          "codigo_mascara": "01132",
          "descricao": "Cultivos de hortalizas no hidropónicas"
        },
        {
          "codigo": "01133",
          "codigo_mascara": "01133",
          "descricao": "Cultivo de papa"
        },
        {
          "codigo": "01139",
          "codigo_mascara": "01139",
          "descricao": "Otros cultivo de raíces y tubérculos (excepto papa)"
        },
        {
          "codigo": "01140",
          "codigo_mascara": "01140",
          "descricao": "Cultivo de caña de azúcar"
        },
        {
          "codigo": "01150",
          "codigo_mascara": "01150",
          "descricao": "Cultivo de tabaco"
        },
        {
          "codigo": "01160",
          "codigo_mascara": "01160",
          "descricao": "Cultivo de fibras"
        },
        {
          "codigo": "01191",
          "codigo_mascara": "01191",
          "descricao": "Cultivo de forrajes"
        },
        {
          "codigo": "01199",
          "codigo_mascara": "01199",
          "descricao": "Cultivo de flores: corte, brotes y semillas de flores y otros cultivos no perennes"
        }
      ]
    },    
    {
    codigo: "02",
    titulo: "Cultivo de productos perennes y Propagación de plantas",
    descricao: "Este grupo incluye la producción de cultivos perennes, plantas que duran por más de dos temporadas de cultivo, muriendo después de cada temporada o creciendo continuamente. Incluye el cultivo de plantas para la producción de semillas.",
    exemplos: [
        ""
    ],
    servicos_relacionados: [],
    subclasse: [
        {
          "codigo": "01210",
          "codigo_mascara": "01210",
          "descricao": "Cultivo de uvas"
        },
        {
          "codigo": "01220",
          "codigo_mascara": "01220",
          "descricao": "Cultivo de frutas tropicales y subtropicales"
        },
        {
          "codigo": "01230",
          "codigo_mascara": "01230",
          "descricao": "Cultivo de frutas cítricas"
        },
        {
          "codigo": "01240",
          "codigo_mascara": "01240",
          "descricao": "Cultivo de frutas con pepita y con hueso (ej. manzanas, duraznos, peras, ciruelas, pelones, membrillos, etc.)"
        },
        {
          "codigo": "01250",
          "codigo_mascara": "01250",
          "descricao": "Cultivo de otras frutas y frutos secos arbóreos y de arbustos (ej. nueces, arándanos, moras, etc.)"
        },
        {
          "codigo": "01260",
          "codigo_mascara": "01260",
          "descricao": "Cultivo de frutas oleaginosas (ej. coco, aceitunas, etc.)"
        },
        {
          "codigo": "01270",
          "codigo_mascara": "01270",
          "descricao": "Cultivo de plantas para preparar bebidas"
        },
        {
          "codigo": "01280",
          "codigo_mascara": "01280",
          "descricao": "Cultivo de especias y plantas aromáticas, medicinales y farmacéuticas"
        },
        {
          "codigo": "01290",
          "codigo_mascara": "01290",
          "descricao": "Cultivos de otros productos perennes"
        },
        {
          "codigo": "01300",
          "codigo_mascara": "01300",
          "descricao": "Propagación de plantas"
        }
    ]
    },    
    {
    codigo: "03",
    titulo: "Ganadería",
    descricao: "Este grupo incluye la cría de todos los animales, excepto los animales acuáticos. Esta grupo excluye, cuidado y alojamiento de animales de granja, ver 0162.9 y producción de cuero y piel en los mataderos, ver 1011.1 y 1011.2.",
    exemplos: [
        ""
    ],
    servicos_relacionados: [
        ""
    ],
    subclasse: [
        {
          "codigo": "01411",
          "codigo_mascara": "01411",
          "descricao": "Cría de ganado vacuno con destino a producción de carne"
        },
        {
          "codigo": "01412",
          "codigo_mascara": "01412",
          "descricao": "Cría de ganado vacuno lechero ( con producción de leche para industria)"
        },
        {
          "codigo": "01413",
          "codigo_mascara": "01413",
          "descricao": "Cría de ganado vacuno lechero ( con producción de leche sin destino industrial)"
        },
        {
          "codigo": "01414",
          "codigo_mascara": "01414",
          "descricao": "Producción de semen bovino"
        },
        {
          "codigo": "01419",
          "codigo_mascara": "01419",
          "descricao": "Otras producciones de ganados vacunos no incluidas en las CIIU Rev. 4"
        },
        {
          "codigo": "01420",
          "codigo_mascara": "01420",
          "descricao": "Cría de caballos y otros equinos"
        },
        {
          "codigo": "01430",
          "codigo_mascara": "01430",
          "descricao": "Cría de camellos y camélidos"
        },
        {
          "codigo": "01440",
          "codigo_mascara": "01440",
          "descricao": "Cría de ovejas y cabras"
        },
        {
          "codigo": "01450",
          "codigo_mascara": "01450",
          "descricao": "Cría de ganado porcino"
        },
        {
          "codigo": "01461",
          "codigo_mascara": "01461",
          "descricao": "Cría de aves de corral para su venta"
        },
        {
          "codigo": "01469",
          "codigo_mascara": "01469",
          "descricao": "Producción de huevos"
        },
        {
          "codigo": "01491",
          "codigo_mascara": "01491",
          "descricao": "Apicultura: producción de cera y miel de abeja."
        },
        {
          "codigo": "01492",
          "codigo_mascara": "01492",
          "descricao": "Cría de ñandúes"
        },
        {
          "codigo": "01493",
          "codigo_mascara": "01493",
          "descricao": "Cría de conejos"
        },
        {
          "codigo": "01499",
          "codigo_mascara": "01499",
          "descricao": "Cría de otros animales n.c.p., excepto apicultura, ñandúes y conejos"
        },
        {
          "codigo": "01500",
          "codigo_mascara": "01500",
          "descricao": "Explotación agropecuaria mixta"
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