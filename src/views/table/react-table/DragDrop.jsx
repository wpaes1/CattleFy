// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import ColumnDragDrop from 'sections/tables/react-table/drag-drop/ColumnDragDropTable';
import RowDragDrop from 'sections/tables/react-table/drag-drop/RowDragDropTable';

// ==============================|| REACT TABLE - DRAG & DROP ||============================== //

export default function DragDropTable() {
  return (
    <Row>
      <Col xs={12}>
        <RowDragDrop title="Row Drag & Drop (Ordering)" />
      </Col>
      <Col xs={12}>
        <ColumnDragDrop title="Column Drag & Drop (Ordering)" />
      </Col>
    </Row>
  );
}
