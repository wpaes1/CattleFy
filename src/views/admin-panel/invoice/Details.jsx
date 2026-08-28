// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import DetailsInvoice from 'sections/admin-panel/invoice/DetailsInvoice';

// ==============================|| ADMIN PANEL - INVOICE DETAILS ||============================== //

export default function InvoiceDetailsPage() {
  return (
    <Row>
      <Col xs={12}>
        <DetailsInvoice />
      </Col>
    </Row>
  );
}
