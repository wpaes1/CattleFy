// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import FarmForm from 'sections/farms/FarmForm';

// ==============================|| FARM ELEMENT - FARM ADD ||============================== //

export default function Farm() { 
  return (
    <Row>
      <Col xs={12}>
        <FarmForm  />
      </Col>  
    </Row>
  );
}
