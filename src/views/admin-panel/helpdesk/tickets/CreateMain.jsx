// react-bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// project-imports
import Create from 'sections/admin-panel/helpdesk/tickets/Create';

// =============================|| TICKET - CREATE ||============================== //

export default function CreatePage() {
  return (
    <Row>
      <Col sm={12}>
        <Create />
      </Col>
    </Row>
  );
}
