import PropTypes from 'prop-types';
// react bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// ==============================|| INVOICE - PRODUCT DELETE ||============================== //

export default function AlertProductDelete({ title, open, handleClose }) {
  return (
    <Modal show={open} centered scrollable>
      <Modal.Body>
        <Stack direction="vertical" gap={3} className="align-items-center">
          <div className="avatar avatar-l bg-light-danger rounded-circle">
            <i className="ti ti-trash f-28"></i>
          </div>
          <Stack gap={2}>
            <h4 className="text-center f-w-600">Are you sure you want to delete?</h4>
            <p className="text-center">By deleting {title} product, Its details will also be removed from invoice.</p>
          </Stack>
          <Row className="w-100 g-2">
            <Col sm={6}>
              <div className="d-grid">
                <Button variant="outline-secondary" onClick={() => handleClose(true)}>
                  Cancel
                </Button>
              </div>
            </Col>
            <Col sm={6}>
              <div className="d-grid">
                <Button variant="danger" onClick={() => handleClose(true)}>
                  Delete
                </Button>
              </div>
            </Col>
          </Row>
        </Stack>
      </Modal.Body>
    </Modal>
  );
}

AlertProductDelete.propTypes = { title: PropTypes.string, open: PropTypes.bool, handleClose: PropTypes.func };
