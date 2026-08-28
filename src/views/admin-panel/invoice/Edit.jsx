// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import EditInvoice from 'sections/admin-panel/invoice/EditInvoice';

// ==============================|| ADMIN PANEL - INVOICE EDIT ||============================== //

export default function InvoiceEditPage() {
  return (
    <Row>
      <Col xs={12}>
        <EditInvoice />
      </Col>
    </Row>
  );
}
