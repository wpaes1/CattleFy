// react bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import FileUpload from 'sections/forms/form-upload/FileUpload';

// ======================|| FORM UPLOAD - DROPZONE ||====================== //

export default function DropZonePage() {
  return (
    <Row>
      <Col sm={12}>
        <FileUpload />
      </Col>
    </Row>
  );
}
