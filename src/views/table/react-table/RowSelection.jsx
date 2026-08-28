// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import RowSelectionTable from 'sections/tables/react-table/row-selection/RowSelectionTable';
import RSPControl from 'sections/tables/react-table/row-selection/RSPControlTable';

// ==============================|| REACT TABLE - ROW SELECTION  ||============================== //

export default function RowSelectionTablePage() {
  return (
    <Row>
      <Col xs={12}>
        <RowSelectionTable title="Row Selection" />
      </Col>
      <Col xs={12}>
        <RSPControl title="Row Selection (Pagination Control)" />
      </Col>
    </Row>
  );
}
