// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import LotAnimalList from 'sections/farms/LotAnimalList';

// ==============================|| FARM ELEMENT - FARM LIST ||============================== //

export default function Farm() { 


  return (
    <Row>
      <Col xs={12}>
        <LotAnimalList />
      </Col>  
    </Row>
  );
}