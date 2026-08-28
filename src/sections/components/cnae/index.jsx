import { useState, useMemo, useEffect } from 'react';

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';

import MainCard from 'components/MainCard';

import cnae     from '../../../data/rulesLegislation/cnae';
import cnaepPY  from '../../../data/rulesLegislation/cnaepPY';
import cnaeBR   from '../../../data/rulesLegislation/cnaeBR';
import cnaeAR   from '../../../data/rulesLegislation/cnaeAR';
import cnaeUY   from '../../../data/rulesLegislation/cnaeUY';

import HeaderData from './HeaderData';
import DataNav from './DataNav';
import TableData from './TableData';


export const sources = [
    {id:'AA', filedata: cnae},//Modelo BR traduzido para Espanhol
    {id:'PY', filedata: cnaepPY},
    {id:'BR', filedata: cnaeBR},
    {id:'AR', filedata: cnaeAR},
    {id:'UY', filedata: cnaeUY}
];

export default function FarmDataCnae(props) {

   // const countryAcronym = props.country ? props.country : 'BR';
    const [cnaeSection, setCnaeSection] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [headers, setHeaders] = useState({});
    const [navItems, setNavItems] = useState([]);
    const [footers, setFooters] = useState([]);



    useEffect(()=>{
        if(props.country){
                const cnaeFile = sources.find(
                    ({ id }) => id === props.country  
                );
                const cnaeSectionA = (!!cnaeFile) ? cnaeFile.filedata : (sources.find(u => u.id === 'AA').filedata);;
                setCnaeSection(cnaeSectionA);
                setActiveTab(cnaeSectionA[0]?.divisoes[0]?.codigo);
                setHeaders(cnaeSectionA.map((cnae) => ({
                    titulo: cnae.titulo,
                    descricao: cnae.descricao,
                    objetivos: cnae.objetivos
                })));

                setNavItems(cnaeSectionA.flatMap((cnae) => (cnae.divisoes)));
                setFooters(cnaeSectionA.map((cnae) => (cnae.observacoes)));
        }
    }, [props.country]);




  return (
    (cnaeSection!= '')?
    <>
      <HeaderData headers={headers} />

      <MainCard
        bodyClassName="p-0"
        title={
          <Nav
            variant="pills"
            activeKey={activeTab}
            onSelect={setActiveTab}
            className="mx-0"
          >
            <DataNav navItems={navItems} />
          </Nav>
        }
      >
        <Card.Body className="border-bottom">
          <Tab.Container
            activeKey={activeTab}
            onSelect={setActiveTab}
            >
            <Tab.Content>
                {navItems.map((divisao) => (
                <TableData
                    key={divisao.codigo}
                    divisao={divisao}
                />
                ))}
            </Tab.Content>
          </Tab.Container>
        </Card.Body>
        <Card.Footer>            
            {footers.map((footer, index)=>(
                <i key={index}>{footer}</i> 
            ))}
        </Card.Footer>
      </MainCard>
    </>
    :
    ''
 
  );
}