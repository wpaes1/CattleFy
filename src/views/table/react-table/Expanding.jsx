// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import ExpandingDetails from 'sections/tables/react-table/expanding/ExpandingDetails';
import ExpandingTable from 'sections/tables/react-table/expanding/ExpandingTable';
import ExpandingSubTable from 'sections/tables/react-table/expanding/ExpandingSubTable';

// ==============================|| REACT TABLE - EXPANDING  ||============================== //

export default function ExpandingTablePage() {
  return (
    <Row>
      <Col xs={12}>
        <ExpandingTable title="Expanding Table" />
      </Col>
      <Col xs={12}>
        <ExpandingDetails title="Expanding User Details" />
      </Col>
      <Col xs={12}>
        <ExpandingSubTable title="Expanding Sub Table" />
      </Col>
    </Row>
  );
}
