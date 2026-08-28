// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import LayoutCard from 'sections/layouts/LayoutCard';

// ==============================|| LAYOUT - HORIZONTAL ||============================== //

export default function HorizontalPage() {
  return (
    <Row>
      <Col xs={12}>
        <LayoutCard />
      </Col>
      <Col xs={12}>
        <LayoutCard />
      </Col>
      <Col xs={12}>
        <LayoutCard />
      </Col>
    </Row>
  );
}
