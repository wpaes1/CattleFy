// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import PicketForm from 'sections/farms/PicketForm';

// ==============================|| FARM ELEMENT - FARM LIST ||============================== //

export default function Farm() { 


  return (
    <Row>
      <Col xs={12}>
        <PicketForm />
      </Col>  
    </Row>
  );
}