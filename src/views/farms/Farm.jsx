// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
//import FarmForm from 'sections/farms/FarmForm';
import FarmList from 'sections/farms/FarmList';

// ==============================|| FARM ELEMENT - FARM LIST ||============================== //

export default function Farm() { 


  return (
    <Row>
      <Col xs={12}>
        <FarmList />
      </Col>  
    </Row>
  );
}