import PropTypes from 'prop-types';
import { useState, useRef } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

// third-party
import Calendar from 'react-calendar';

// =============================|| DATE - RANGE PICKER ||============================== //

export default function RangePicker({ useClickOutside }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [activeInput, setActiveInput] = useState(null);

  const calendarRef = useRef(null);

  // close calendar on outside click
  useClickOutside(calendarRef, () => setActiveInput(null));

  const handleInputClick = (input) => {
    setActiveInput(input);
  };

  const handleDateChange = (value) => {
    if (Array.isArray(value)) {
      const [start, end] = value;
      setStartDate(start);
      setEndDate(end);
      setActiveInput(null);
    } else if (value instanceof Date) {
      setStartDate(value);
      setEndDate(null);
    }
  };

  return (
    <Row className="mb-3">
      <Col lg={3} sm={12} className="col-form-label text-lg-end">
        <Form.Label className="mb-0">Date Range</Form.Label>
      </Col>

      <Col lg={4} md={9} sm={12} className="position-relative">
        <InputGroup>
          {/* Start Date */}
          <Form.Control
            type="text"
            className="rounded-start rounded-end-0"
            placeholder="Start date"
            value={startDate ? startDate.toLocaleDateString() : ''}
            onClick={() => handleInputClick('start')}
            readOnly
          />

          <InputGroup.Text>to</InputGroup.Text>

          {/* End Date */}
          <Form.Control
            type="text"
            className="text-end rounded-start-0 rounded-end"
            placeholder="End date"
            value={endDate ? endDate.toLocaleDateString() : ''}
            onClick={() => handleInputClick('end')}
            readOnly
          />
        </InputGroup>

        {/* Calendar */}
        {activeInput && (
          <div ref={calendarRef} className="position-absolute start-0 top-100 z-3">
            <Calendar
              selectRange
              onChange={handleDateChange}
              value={[startDate, endDate]}
              formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'short' }).slice(0, 2)}
              prev2Label={null}
              next2Label={null}
              prevLabel="«"
              nextLabel="»"
              className={`react-calendar react-calendar-${activeInput}`}
            />
          </div>
        )}
      </Col>
    </Row>
  );
}

RangePicker.propTypes = { useClickOutside: PropTypes.any };
