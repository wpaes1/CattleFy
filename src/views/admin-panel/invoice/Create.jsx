// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import CreateInvoice from 'sections/admin-panel/invoice/CreateInvoice';

// ==============================|| ADMIN PANEL - INVOICE CREATE ||============================== //

export default function InvoiceCreatePage() {
  return (
    <Row>
      <Col xs={12}>
        <CreateInvoice />
      </Col>
    </Row>
  );
}
