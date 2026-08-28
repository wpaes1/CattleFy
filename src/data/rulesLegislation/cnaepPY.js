// ESTRUCTURA DE LA CLASIFICACION NACIONAL DE ACTIVIDADES ECONOMICAS DEL PARAGUAY CNAEP 1.0 Sección A
//Fonte: https://www.ine.gov.py/clasificadores/clasificadores/Nacional/Actividad%20Economica/CNAEP%201.0.pdf

const cnaeSectionA = [ {
  codigo: "A",
  titulo: "AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA",
  descricao: "A Sección A da CNAEP 1.0 Engloba las actividades del sector primario de la economía, incluyendo la agricultura, la ganadería, la silvicultura, la extracción de madera, la pesca y la acuicultura, que son responsables de la producción de alimentos, materias primas y recursos naturales.",
  objetivos: [
    "Clasificar y organizar las actividades económicas de los sectores agrícola, forestal y pesquero.",
    "Permitir la producción y comparación de estadísticas económicas nacionales e internacionales.",
    "Apoyar el registro e identificación de las actividades realizadas por empresas y productores.",
    "Facilitar los análisis económicos, censos, encuestas y estudios sectoriales.",
    "Identificar las actividades relacionadas con la producción agrícola, ganadera, forestal, pesquera y acuícola.",
    "Promover la armonización de las estadísticas paraguayas con las clasificaciones internacionales, especialmente con la CIIU Rev. 4 de la División de Estadística de las Naciones Unidas.",
    ],
  divisoes: [
    {
      codigo: "01",
      titulo: "AGRICULTURA",
      exemplos: [
        "Cultivo de soja, maíz, trigo y arroz.",
        "Producción de frutas, hortalizas y legumbres.",
        "Producción de semillas y plántulas."
      ],
      subclasse: [
          {
            "codigo": "01110",
            "codigo_mascara": "0111.0",
            "descricao": "Cultivo de arroz"
          },
          {
            "codigo": "01121",
            "codigo_mascara": "0112.1",
            "descricao": "Cultivo de soja"
          },
          {
            "codigo": "01122",
            "codigo_mascara": "0112.2",
            "descricao": "Cultivo de maíz"
          },
          {
            "codigo": "01123",
            "codigo_mascara": "0112.3",
            "descricao": "Cultivo de trigo"
          },
          {
            "codigo": "01124",
            "codigo_mascara": "0112.4",
            "descricao": "Cultivo de girasol"
          },
          {
            "codigo": "01125",
            "codigo_mascara": "0112.5",
            "descricao": "Cultivo de sésamo"
          },
          {
            "codigo": "01126",
            "codigo_mascara": "0112.6",
            "descricao": "Cultivo de legumbres"
          },
          {
            "codigo": "01129",
            "codigo_mascara": "0112.9",
            "descricao": "Cultivo de otros cereales y otras semillas oleaginosas n.c.p."
          },
          {
            "codigo": "01131",
            "codigo_mascara": "0113.1",
            "descricao": "Cultivo de mandioca, papa y batata"
          },
          {
            "codigo": "01132",
            "codigo_mascara": "0113.2",
            "descricao": "Cultivo de bulbos, brotes, raíces y hortalizas de fruto"
          },
          {
            "codigo": "01133",
            "codigo_mascara": "0113.3",
            "descricao": "Cultivo de hortalizas de hoja y de otras hortalizas frescas"
          },
          {
            "codigo": "01140",
            "codigo_mascara": "0114.0",
            "descricao": "Cultivo de caña de azúcar"
          },
          {
            "codigo": "01150",
            "codigo_mascara": "0115.0",
            "descricao": "Cultivo de tabaco"
          },
          {
            "codigo": "01161",
            "codigo_mascara": "0116.1",
            "descricao": "Cultivo de algodón"
          },
          {
            "codigo": "01169",
            "codigo_mascara": "0116.9",
            "descricao": "Cultivo de otras fibras vegetales"
          },
          {
            "codigo": "01191",
            "codigo_mascara": "0119.1",
            "descricao": "Cultivo de forrajes"
          },
          {
            "codigo": "01192",
            "codigo_mascara": "0119.2",
            "descricao": "Cultivo de flores"
          },
          {
            "codigo": "01199",
            "codigo_mascara": "0119.9",
            "descricao": "Cultivo de otras cosechas no perennes n.c.p."
          },
          {
            "codigo": "01210",
            "codigo_mascara": "0121.0",
            "descricao": "Cultivo de uvas"
          },
          {
            "codigo": "01221",
            "codigo_mascara": "0122.1",
            "descricao": "Cultivo de piña"
          },
          {
            "codigo": "01222",
            "codigo_mascara": "0122.2",
            "descricao": "Cultivo de banana"
          },
          {
            "codigo": "01223",
            "codigo_mascara": "0122.3",
            "descricao": "Cultivo de mango"
          },
          {
            "codigo": "01224",
            "codigo_mascara": "0122.4",
            "descricao": "Cultivo de mburucuya"
          },
          {
            "codigo": "01229",
            "codigo_mascara": "0122.9",
            "descricao": "Cultivo de otras frutas tropicales y subtropicales n.c.p."
          },
          {
            "codigo": "01231",
            "codigo_mascara": "0123.1",
            "descricao": "Cultivo de naranja"
          },
          {
            "codigo": "01232",
            "codigo_mascara": "0123.2",
            "descricao": "Cultivo de mandarina"
          },
          {
            "codigo": "01233",
            "codigo_mascara": "0123.3",
            "descricao": "Cultivo de limón"
          },
          {
            "codigo": "01234",
            "codigo_mascara": "0123.4",
            "descricao": "Cultivo de pomelo"
          },
          {
            "codigo": "01235",
            "codigo_mascara": "0123.5",
            "descricao": "Cultivo de naranjo agrio"
          },
          {
            "codigo": "01239",
            "codigo_mascara": "0123.9",
            "descricao": "Cultivo de otras frutas cítricas n.c.p."
          },
          {
            "codigo": "01240",
            "codigo_mascara": "0124.0",
            "descricao": "Cultivo de frutas con pepita y con hueso"
          },
          {
            "codigo": "01250",
            "codigo_mascara": "0125.0",
            "descricao": "Cultivo de otras frutas y frutos secos arbóreos y de arbustos"
          },
          {
            "codigo": "01260",
            "codigo_mascara": "0126.0",
            "descricao": "Cultivo de frutos oleaginosos"
          },
          {
            "codigo": "01271",
            "codigo_mascara": "0127.1",
            "descricao": "Cultivo de yerba mate"
          },
          {
            "codigo": "01272",
            "codigo_mascara": "0127.2",
            "descricao": "Cultivo de té"
          },
          {
            "codigo": "01273",
            "codigo_mascara": "0127.3",
            "descricao": "Cultivo de café"
          },
          {
            "codigo": "01274",
            "codigo_mascara": "0127.4",
            "descricao": "Cultivo de cacao y de otras plantas para elaboración de bebidas n.c.p."
          },
          {
            "codigo": "01280",
            "codigo_mascara": "0128.0",
            "descricao": "Cultivo de especias y plantas aromáticas, medicinales y farmacéuticas"
          },
          {
            "codigo": "01291",
            "codigo_mascara": "0129.1",
            "descricao": "Cultivo de estévia"
          },
          {
            "codigo": "01299",
            "codigo_mascara": "0129.9",
            "descricao": "Cultivo de otras cosechas perennes n.c.p."
          },
          {
            "codigo": "01300",
            "codigo_mascara": "0130.0",
            "descricao": "Propagación de plantas"
          }          
        ]            
    },
    {
      codigo: "02",
      titulo: "GANADERÍA",
      exemplos: [
        "Cría de ganado vacuno para carne y leche.",
        "Cría de aves de corral, cerdos y ovejas."        
      ],
      subclasse: [
          {
            "codigo": "01411",
            "codigo_mascara": "0141.1",
            "descricao": "Cría de ganado vacuno con destino a la producción de carne"
          },
          {
            "codigo": "01412",
            "codigo_mascara": "0141.2",
            "descricao": "Cría de ganado vacuno lechero"
          },
          {
            "codigo": "01419",
            "codigo_mascara": "0141.9",
            "descricao": "Otras producciones de ganados vacunos n.c.p."
          },
          {
            "codigo": "01420",
            "codigo_mascara": "0142.0",
            "descricao": "Cría de ganado equino"
          },
          {
            "codigo": "01430",
            "codigo_mascara": "0143.0",
            "descricao": "Cría de camellos y camélidos"
          },
          {
            "codigo": "01440",
            "codigo_mascara": "0144.0",
            "descricao": "Cría de ganado ovino y caprino"
          },
          {
            "codigo": "01450",
            "codigo_mascara": "0145.0",
            "descricao": "Cría de ganado porcino"
          },
          {
            "codigo": "01461",
            "codigo_mascara": "0146.1",
            "descricao": "Cría de aves de corral"
          },
          {
            "codigo": "01462",
            "codigo_mascara": "0146.2",
            "descricao": "Producción de huevos"
          },
          {
            "codigo": "01491",
            "codigo_mascara": "0149.1",
            "descricao": "Apicultura"
          },
          {
            "codigo": "01492",
            "codigo_mascara": "0149.2",
            "descricao": "Cunicultura"
          },
          {
            "codigo": "01499",
            "codigo_mascara": "0149.9",
            "descricao": "Cría de otros animales n.c.p."
          },
          {
            "codigo": "01500",
            "codigo_mascara": "0150.0",
            "descricao": "Cultivo de productos agrícolas en combinación con la cría de animales"
          }
      ]
    },
    {
      codigo: "03",
      titulo: "SILVICULTURA Y EXTRACCIÓN DE MADERA",
      exemplos:[
        "Plantación y manejo de bosques comerciales.",
        "Producción de plántulas forestales.",
        "Reforestación de áreas degradadas.",
        "Extracción de madera para aserraderos.",
        "Producción de leña y carbón vegetal.",
        "Recolección de productos forestales no madereros, como resinas y semillas."
      ],
      subclasse: [         
        {
        codigo: "02101",
        codigo_mascara: "0210.1",
        descricao: "Viveros de árboles forestales"
        },
        {
        codigo: "02102",
        codigo_mascara: "0210.2",
        descricao: "Explotación de bosques"
        },
        {
        codigo: "02103",
        codigo_mascara: "0210.3",
        descricao: "Actividades de forestación y reforestación"
        },
        {
        codigo: "02201",
        codigo_mascara: "0220.1",
        descricao: "Producción de leña"
        },
        {
        codigo: "02209",
        codigo_mascara: "0220.9",
        descricao: "Extracción de madera para la producción de otros artículos n.c.p."
        },
        {
        codigo: "02300",
        codigo_mascara: "0230.0",
        descricao: "Recolección de productos forestales diferentes a la madera"
        },
        {
        codigo: "02400",
        codigo_mascara: "0240.0",
        descricao: "Servicios de apoyo a la silvicultura"
        }         
      ]
    },
    {
      codigo: "04",
      titulo: "PESCA Y ACUICULTURA",
      exemplos:[
        "Pesca en ríos, lagos y embalses.",
        "Pesca comercial en aguas marinas.",
        "Cultivo de peces en tanques y estanques.",
        "Producción de camarones en sistemas de acuicultura.",
        "Cultivo de ostras y mejillones.",
        "Cultivo de peces ornamentales."
      ],
      subclasse: [
        {
        codigo: "03110",
        codigo_mascara: "0311.0",
        descricao: "Pesca marítima"
        },
        {
        codigo: "03120",
        codigo_mascara: "0312.0",
        descricao: "Pesca de agua dulce"
        },
        {
        codigo: "03210",
        codigo_mascara: "0321.0",
        descricao: "Acuicultura marítima"
        },
        {
        codigo: "03220",
        codigo_mascara: "0322.0",
        descricao: "Acuicultura de agua dulce"
        }
      ]
    }
  ],
  observacoes:[
    "Los códigos y descripciones anteriores siguen la estructura oficial CNAEP 1.0 para la Sección A."
  ]
}
];

export default cnaeSectionA;