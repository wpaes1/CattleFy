import PropTypes from 'prop-types';
import { useState, useRef } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

// third-party
import Calendar from 'react-calendar';

function formatDate(date) {
  return date.toLocaleDateString('en-GB'); // dd/mm/yyyy
}

// ==============================|| DATE - HELPER BUTTON ||============================== //

export default function HelperButton({ useClickOutside }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef(null);

  useClickOutside(containerRef, () => setIsOpen(false));

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleDateChange = (value) => {
    if (value instanceof Date) {
      setSelectedDate(value);
      handleClose();
    }
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
    if (event.key === 'Escape') {
      event.stopPropagation();
      handleClose();
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      handleOpen();
    }
  };

  return (
    <Row className="mb-3">
      <Col lg={3} sm={12} className="col-form-label text-lg-end">
        <Form.Label className="mb-0">Helper Button</Form.Label>
      </Col>
      <Col lg={4} md={9} sm={12} className="position-relative">
        <div ref={containerRef} className="position-relative">
          <InputGroup>
            <Form.Control
              type="text"
              className="datepicker-input"
              placeholder="Select date"
              id="helperbutton-input"
              value={selectedDate ? formatDate(selectedDate) : ''}
              onClick={handleToggle}
              onKeyDown={handleInputKeyDown}
              aria-haspopup="dialog"
              aria-expanded={isOpen}
              aria-controls="helperbutton-calendar"
              readOnly
            />
            <InputGroup.Text
              as="button"
              type="button"
              aria-label="Toggle calendar"
              onClick={handleToggle}
              aria-expanded={isOpen}
              aria-controls="helperbutton-calendar"
            >
              <i className="ph ph-calendar-blank f-18" />
            </InputGroup.Text>
          </InputGroup>

          {isOpen && (
            <div id="helperbutton-calendar" role="dialog" aria-modal="false" className="position-absolute start-0 top-100 z-3">
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'short' }).slice(0, 2)}
                prev2Label={null}
                next2Label={null}
                prevLabel="«"
                nextLabel="»"
              />
            </div>
          )}
        </div>
      </Col>
    </Row>
  );
}

HelperButton.propTypes = { useClickOutside: PropTypes.any };
