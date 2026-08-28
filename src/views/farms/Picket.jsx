// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import PicketList from 'sections/farms/PicketList';

// ==============================|| FARM ELEMENT - FARM LIST ||============================== //

export default function Farm() { 


  return (
    <Row>
      <Col xs={12}>
        <PicketList />
      </Col>  
    </Row>
  );
}