// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
//import FarmForm from 'sections/farms/FarmForm';
import AnimalForm from 'sections/animals/AnimalForm';

// ==============================|| FARM ELEMENT - FARM LIST ||============================== //

export default function Farm() { 


  return (
    <Row>
      <Col xs={12}>
        <AnimalForm />
      </Col>  
    </Row>
  );
}