// CNAE 2.0 - Seção A
// Fonte: https://cnae.ibge.gov.br/?view=secao&tipo=cnae&versaoclasse=7&secao=A

const cnaeSectionA = [ {
  codigo: "A",
  titulo: "AGRICULTURA, PECUÁRIA, PRODUÇÃO FLORESTAL, PESCA E AQUICULTURA",
  descricao: "Atividades relacionadas à produção primária de bens de origem vegetal e animal, incluindo cultivo, criação, manejo florestal, pesca e aquicultura, bem como serviços diretamente relacionados.",
  objetivos: [
    "Produção de bens agrícolas e animais para consumo humano e industrial.",
    "Manejo e exploração de recursos florestais renováveis.",
    "Criação em sistemas de aquicultura.",    
  ],
  caracteristicas: [
    "Predominantemente atividades primárias de extração e produção.",
    "Grande diversidade de técnicas: agricultura de sequeiro, irrigada, pecuária extensiva e intensiva, cultivo florestal e sistemas aquícolas.",
    "Importância para a segurança alimentar e fornecimento de insumos para a indústria.",
    "Presença tanto de unidades familiares quanto de propriedades de grande porte e empresas agroindustriais."
  ],
  divisoes: [
    {
      codigo: "01",
      titulo: "Culturas agrícolas",
      descricao: "Produção de culturas temporárias e permanentes destinadas ao consumo humano, alimentação animal e uso industrial.",
      exemplos: [
        "Cultivo de cereais (ex.: alpiste, arroz, aveia, centeio, cevada, milho, milheto, painço, sorgo, trigo, trigo preto, triticale e outros cereais)",
        "Cultivo de algodão herbáceo e de outras fibras de lavoura (ex.: algodão herbáceo, uta, junco, linho, malva, rami, sorgo vassoura e outras fibras de lavoura)",
        "Horticultura, fruticultura e culturas permanentes (ex.: laranja, banana)",
        "Produção de cana-de-açúcar e demais culturas comerciais"
      ],
      servicos_relacionados: [
        "Preparação de solo, plantio e colheita",
        "Irrigação e drenagem",
        "Tratamento e beneficiamento primário pós-colheita"
      ],
      subclasse: [
        //Cultivo de cereais
        {
            codigo:"0111301", 
            codigo_mascara:"0111-3/01",
            descricao: "Cultivo de arroz"
        },
        {
            codigo:"0111302",
            codigo_mascara:"0111-3/02",
            descricao:"Cultivo de milho"
        },
        {
            codigo:"0111303",
            codigo_mascara:"0111-3/03",
            descricao:"Cultivo de trigo"
        },
        {
            codigo:"0111399",
            codigo_mascara:"0111-3/99",
            descricao:"Cultivo de outros cereais não especificados anteriormente"
        },
        //Cultivo de algodão herbáceo e de outras fibras de lavoura temporária
        {             
            codigo:"0112101",
            codigo_mascara:"0112-1/01",
            descricao:"Cultivo de algodão herbáceo"
        },
        {             
            codigo:"0112102",
            codigo_mascara:"0112-1/02",
            descricao:"Cultivo de juta"
        },
        {             
            codigo:"0112199",
            codigo_mascara:"0112-1/99",
            descricao:"Cultivo de outras fibras de lavoura temporária não especificadas anteriormente"
        },
        {             
            codigo:"0113000",
            codigo_mascara:"0113-0/00",
            descricao:"Cultivo de cana de açúcar"
        },
        {             
            codigo:"0114800",
            codigo_mascara:"0114-8/00",
            descricao:"Cultivo de fumo"
        },
        {             
            codigo:"0115600",
            codigo_mascara:"0115-6/00",
            descricao:"Cultivo de soja"
        },
        {             
            codigo:"0116401",
            codigo_mascara:"0116-4/01",
            descricao:"Cultivo de amendoim"
        },
        {             
            codigo:"0116402",
            codigo_mascara:"0116-4/02",
            descricao:"Cultivo de girassol"
        },
        {             
            codigo:"0116403",
            codigo_mascara:"0116-4/03",
            descricao:"Cultivo de mamona"
        },
        {             
            codigo:"0116499",
            codigo_mascara:"0116-4/99",
            descricao:"Cultivo de outras oleaginosas de lavoura temporária não especificadas anteriormente"
        },
        //01.19-9 Cultivo de plantas de lavoura temporária não especificadas anteriormente
        {             
            codigo:"0119901",
            codigo_mascara:"0119-9/01",
            descricao:"Cultivo de abacaxi"
        },
        {             
            codigo:"0119902",
            codigo_mascara:"0119-9/02",
            descricao:"Cultivo de alho"
        },
        {             
            codigo:"0119903",
            codigo_mascara:"0119-9/03",
            descricao:"Cultivo de batata inglesa"
        },
        {             
            codigo:"0119904",
            codigo_mascara:"0119-9/04",
            descricao:"Cultivo de cebola"
        },
        {             
            codigo:"0119-9/05",
            codigo_mascara:"0119-9/05",
            descricao:"Cultivo de feijão"
        },
        {             
            codigo:"0119906",
            codigo_mascara:"0119-9/06",
            descricao:"Cultivo de mandioca"
        },
        {             
            codigo:"0119907",
            codigo_mascara:"0119-9/07",
            descricao:"Cultivo de melão"
        },
        {             
            codigo:"0119908",
            codigo_mascara:"0119-9/08",
            descricao:"Cultivo de melancia"
        },
        {             
            codigo:"0119909",
            codigo_mascara:"0119-9/09",
            descricao:"Cultivo de tomate rasteiro"
        },
        {             
            codigo:"0119999",
            codigo_mascara:"0119-9/99",
            descricao:"Cultivo de outras plantas de lavoura temporária não especificadas anteriormente"
        },
        //01.21-1 Horticultura
        {             
            codigo:"0121101",
            codigo_mascara:"0121-1/01",
            descricao:"Horticultura, exceto morango"
        },
        {             
            codigo:"0121102",
            codigo_mascara:"0121-1/02",
            descricao:"Cultivo de morango"
        },
        {             
            codigo:"0122900",
            codigo_mascara:"0122-9/00",
            descricao:"Cultivo de flores e plantas ornamentais"
        },
        //01.3 Produção de lavouras permanentes
        {             
            codigo:"01318",
            codigo_mascara:"01.31-8",
            descricao:"Cultivo de laranja"
        },
        {             
            codigo:"01326",
            codigo_mascara:"01.32-6",
            descricao:"Cultivo de uva"
        },
        {             
            codigo:"01334",
            codigo_mascara:"01.33-4",
            descricao:"Cultivo de frutas de lavoura permanente, exceto laranja e uva"
        },
        {             
            codigo:"01342",
            codigo_mascara:"01.34-2",
            descricao:"Cultivo de café"
        },
        {             
            codigo:"01351",
            codigo_mascara:"01.35-1",
            descricao:"Cultivo de cacau"
        },
        {             
            codigo:"01393",
            codigo_mascara:"01.39-3",
            descricao:"Cultivo de plantas de lavoura permanente não especificadas anteriormente"
        },
        {             
            codigo:"01415",
            codigo_mascara:"01.41-5",
            descricao:"Produção de sementes certificadas"
        },
        {             
            codigo:"01423",
            codigo_mascara:"01.42-3",
            descricao:"Produção de mudas e outras formas de propagação vegetal, certificadas"
        }
      ]
    },
    {
      codigo: "02",
      titulo: "Pecuária",
      descricao: "Criação e manejo de animais para produção de carne, leite, couro, lã e outros produtos derivados; inclui pecuária extensiva e intensiva.",
      exemplos: [
        "Criação de bovinos, suínos, aves, caprinos e ovinos",
        "Produção de leite e laticínios primários",
        "Criação para produção de couros e peles"
      ],
      servicos_relacionados: [
        "Serviços veterinários básicos e manejo reprodutivo",
        "Alimentação animal e armazenagem de ração",
        "Estabelecimento e manutenção de pastagens"
      ],
      subclasse:[
        //01.51-2 Criação de bovinos
        {
            codigo:"0151201", 
            codigo_mascara:"0151-2/01",
            descricao: "Criação de bovinos para corte"
        },
        {
            codigo:"0151202", 
            codigo_mascara:"0151-2/02",
            descricao: "Criação de bovinos para leite"
        },
        {
            codigo:"0151203", 
            codigo_mascara:"0151-2/03",
            descricao: "Criação de bovinos, exceto para corte e leite "
        },
        {
            codigo:"0152101", 
            codigo_mascara:"0152-1/01",
            descricao: "Criação de bufalinos"
        },
        {
            codigo:"0152102", 
            codigo_mascara:"0152-1/02",
            descricao: "Criação de eqüinos"
        },
        {
            codigo:"0152103", 
            codigo_mascara:"0152-1/03",
            descricao: "Criação de asininos e muares"
        },
        //01.53-9 Criação de caprinos e ovinos
        {
            codigo:"0153901", 
            codigo_mascara:"0153-9/01",
            descricao: "Criação de caprinos"
        },
        {
            codigo:"0153902", 
            codigo_mascara:"0153-9/02",
            descricao: "Criação de ovinos, inclusive para produção de lã"
        },
        //01.54-7 Criação de suínos
        {
            codigo:"0154700", 
            codigo_mascara:"0154-7/00",
            descricao: "Criação de suínos"
        },
        {
            codigo:"0155501", 
            codigo_mascara:"0155-5/01",
            descricao: "Criação de frangos para corte"
        },
        {
            codigo:"0155502", 
            codigo_mascara:"0155-5/02",
            descricao: "Produção de pintos de um dia"
        },
        {
            codigo:"0155503", 
            codigo_mascara:"0155-5/03",
            descricao: "Criação de outros galináceos, exceto para corte"
        },
        {
            codigo:"0155504", 
            codigo_mascara:"0155-5/04",
            descricao: "Criação de aves, exceto galináceos"
        },
        {
            codigo:"0155505", 
            codigo_mascara:"0155-5/05",
            descricao: "Produção de ovos"
        },
        //01.59-8 Criação de animais não especificados anteriormente
        {
            codigo:"0159801", 
            codigo_mascara:"0159-8/01",
            descricao: "Apicultura"
        },
        {
            codigo:"0159802", 
            codigo_mascara:"0159-8/02",
            descricao: "Criação de animais de estimação"
        },
        {
            codigo:"0159803", 
            codigo_mascara:"0159-8/03",
            descricao: "Criação de escargô"
        },
        {
            codigo:"0159804", 
            codigo_mascara:"0159-8/04",
            descricao: "Criação de bicho da seda"
        },
        {
            codigo:"0159899", 
            codigo_mascara:"0159-8/99",
            descricao: "Criação de outros animais não especificados anteriormente"
        },
      ]
    },
    {
      codigo: "03",
      titulo: "Produção florestal e extração de madeira",
      descricao: "Manejo e exploração de florestas plantadas e nativas para produção de madeira, celulose, óleos essenciais e outros produtos florestais.",
      exemplos: [
        "Florestas plantadas (eucalipto, pinus) para madeira e celulose",
        "Exploração sustentável de florestas nativas",
        "Produção de lenha, carvão vegetal e subprodutos florestais"
      ],
      servicos_relacionados: [
        "Silvicultura e reflorestamento",
        "Transporte e beneficiamento primário de madeira",
        "Manejo de pragas e doenças florestais"
      ],
      subclasse:[
        //02.10-1 Produção florestal - florestas plantadas
        {
            codigo:"0210101", 
            codigo_mascara:"0210-1/01",
            descricao: "Cultivo de eucalipto"
        },
        {
            codigo:"0210102", 
            codigo_mascara:"0210-1/02",
            descricao: "Cultivo de acácia negra"
        },
        {
            codigo:"0210103", 
            codigo_mascara:"0210-1/03",
            descricao: "Cultivo de pinus"
        },
        {
            codigo:"0210104", 
            codigo_mascara:"0210-1/04",
            descricao: "Cultivo de teca"
        },
        {
            codigo:"0210105", 
            codigo_mascara:"0210-1/05",
            descricao: "Cultivo de espécies madeireiras, exceto eucalipto, acácia negra, pinus e teca"
        },
        {
            codigo:"0210106", 
            codigo_mascara:"0210-1/06",
            descricao: "Cultivo de mudas em viveiros florestais"
        },
        {
            codigo:"0210107", 
            codigo_mascara:"0210-1/07",
            descricao: "Extração de madeira em florestas plantadas"
        },
        {
            codigo:"0210108", 
            codigo_mascara:"0210-1/08",
            descricao: "Produção de carvão vegetal - florestas plantadas"
        },
        {
            codigo:"0210109", 
            codigo_mascara:"0210-1/09",
            descricao: "Produção de casca de acácia negra - florestas plantadas"
        },
        {
            codigo:"0210199", 
            codigo_mascara:"0210-1/99",
            descricao: "Produção de produtos não madeireiros não especificados anteriormente em florestas plantadas"
        },
        //02.20-9 Produção florestal - florestas nativas
        {
            codigo:"0220901", 
            codigo_mascara:"0220-9/01",
            descricao: "Extração de madeira em florestas nativas"
        },
        {
            codigo:"0220902", 
            codigo_mascara:"0220-9/02",
            descricao: "Produção de carvão vegetal - florestas nativas"
        },
        {
            codigo:"0220903", 
            codigo_mascara:"0220-9/03",
            descricao: "Coleta de castanha do pará em florestas nativas"
        },
        {
            codigo:"0220-9/04", 
            codigo_mascara:"0220-9/04",
            descricao: "Coleta de látex em florestas nativas"
        },
        {
            codigo:"0220905", 
            codigo_mascara:"0220-9/05",
            descricao: "Coleta de palmito em florestas nativas"
        },
        {
            codigo:"0220906", 
            codigo_mascara:"0220-9/06",
            descricao: "Conservação de florestas nativas"
        },

        {
            codigo:"0220999", 
            codigo_mascara:"0220-9/99",
            descricao: "Coleta de produtos não madeireiros não especificados anteriormente em florestas nativas "
        },
      ]
    },
    {
      codigo: "04",
      titulo: "Pesca e aquicultura",
      descricao: "Atividades de captura de recursos aquáticos em ambiente marinho, continental e a criação intensiva ou extensiva de organismos aquáticos em sistemas de aquicultura.",
      exemplos: [
        "Pesca artesanal e industrial em mar e água doce",
        "Tanques-rede, viveiros e outros sistemas de criação de peixes e crustáceos",
        "Cultivo de moluscos e plantas aquáticas"
      ],
      servicos_relacionados: [
        "Manutenção de embarcações e equipamentos de pesca",
        "Alevinagem e produção de insumos para piscicultura",
        "Beneficiamento primário de pescado"
      ],
      subclasse:[
        {
            "codigo": "0311601",
            "codigo_mascara": "0311-6/01",
            "descricao": "Pesca de peixes em água salgada"
        },
        {
            "codigo": "0311602",
            "codigo_mascara": "0311-6/02",
            "descricao": "Pesca de crustáceos e moluscos em água salgada"
        },
        {
            "codigo": "0311603",
            "codigo_mascara": "0311-6/03",
            "descricao": "Coleta de outros produtos marinhos"
        },
        {
            "codigo": "0312401",
            "codigo_mascara": "0312-4/01",
            "descricao": "Pesca de peixes em água doce"
        },
        {
            "codigo": "0312402",
            "codigo_mascara": "0312-4/02",
            "descricao": "Pesca de crustáceos e moluscos em água doce"
        },
        {
            "codigo": "0312403",
            "codigo_mascara": "0312-4/03",
            "descricao": "Coleta de outros produtos aquáticos de água doce"
        },
        {
            "codigo": "0321301",
            "codigo_mascara": "0321-3/01",
            "descricao": "Criação de peixes em água salgada e salobra"
        },
        {
            "codigo": "0321302",
            "codigo_mascara": "0321-3/02",
            "descricao": "Criação de camarões em água salgada e salobra"
        },
        {
            "codigo": "0321303",
            "codigo_mascara": "0321-3/03",
            "descricao": "Criação de ostras e mexilhões em água salgada e salobra"
        },
        {
            "codigo": "0321304",
            "codigo_mascara": "0321-3/04",
            "descricao": "Criação de peixes ornamentais em água salgada e salobra"
        },
        {
            "codigo": "0322101",
            "codigo_mascara": "0322-1/01",
            "descricao": "Criação de peixes em água doce"
        },
        {
            "codigo": "0322102",
            "codigo_mascara": "0322-1/02",
            "descricao": "Criação de camarões em água doce"
        },
        {
            "codigo": "0322103",
            "codigo_mascara": "0322-1/03",
            "descricao": "Criação de ostras e mexilhões em água doce"
        },
        {
            "codigo": "0322104",
            "codigo_mascara": "0322-1/04",
            "descricao": "Criação de peixes ornamentais em água doce"
        },
        {
            "codigo": "0322105",
            "codigo_mascara": "0322-1/05",
            "descricao": "Ranicultura"
        },
        {
            "codigo": "0322106",
            "codigo_mascara": "0322-1/06",
            "descricao": "Criação de jacaré"
        }
      ]
    }
  ],
  observacoes: [
    "A numeração das divisões na CNAE completa inclui subdivisões e classes muito detalhadas; aqui foram destacadas as principais divisões e atividades representativas da Seção A.",
    "Para mapeamento completo até classes (5 dígitos) consulte a base oficial do IBGE/CNAE.",
    "Termos técnicos e exemplos foram adaptados para facilitar entendimento por produtores, gestores e profissionais agropecuários."
  ]
}
];

export default cnaeSectionA;
