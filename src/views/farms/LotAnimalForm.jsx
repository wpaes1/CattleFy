// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import LotAnimalForm from 'sections/farms/LotAnimalForm';

// ==============================|| FARM ELEMENT - FARM LIST ||============================== //

export default function Farm() { 


  return (
    <Row>
      <Col xs={12}>
        <LotAnimalForm />
      </Col>  
    </Row>
  );
}