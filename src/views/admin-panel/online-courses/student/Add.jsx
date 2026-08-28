// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import StudentAdd from 'sections/admin-panel/online-courses/student/Add';

// ==============================|| STUDENT - ADD ||============================== //

export default function StudentAddPage() {
  return (
    <Row>
      <Col xs={12}>
        <StudentAdd />
      </Col>
    </Row>
  );
}
