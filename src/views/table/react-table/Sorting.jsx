// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import SortingTable from 'sections/tables/react-table/SortingTable';

// ==============================|| REACT TABLE - SORTING  ||============================== //

export default function SortingTablePage() {
  return (
    <Row>
      <Col>
        <SortingTable title="Sorting Table" />
      </Col>
    </Row>
  );
}
