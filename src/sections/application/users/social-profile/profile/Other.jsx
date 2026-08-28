import { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';

// field data
const initialFields = [
  { label: 'Occupation', value: 'Designer', type: 'text' },
  { label: 'Skills', value: 'C#, Javascript, Scss', type: 'text' },
  { label: 'Jobs', value: 'CodedTheme', type: 'text' },
  { label: 'Email Address', value: 'Demo@domain.com', type: 'text' }
];

// ==============================|| PROFILE - OTHER ||============================== //

export default function Other() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [formData, setFormData] = useState(() =>
    initialFields.reduce((acc, cur) => {
      acc[cur.label] = cur.value;
      return acc;
    }, {})
  );

  const handleChange = (label, value) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsCollapsed(true);
  };

  const getRowClassName = (index) => {
    const baseClass = 'align-items-center col-form-label';
    if (index === 0) return `${baseClass} pt-0`;
    if (index === initialFields.length - 1) return `${baseClass} pb-0`;
    return baseClass;
  };

  return (
    <MainCard
      bodyClassName="p-0"
      title="Other Information"
      secondary={
        <Button variant="primary" size="sm" className="rounded m-0 float-end" onClick={() => setIsCollapsed(!isCollapsed)}>
          <i className="ph ph-note-pencil align-middle" />
        </Button>
      }
    >
      {isCollapsed && (
        <Card.Body className="border-top">
          <Form>
            {initialFields.map((item, index) => (
              <Row key={index} className={getRowClassName(index)}>
                <Col sm={3} xs={5} className="f-w-500">
                  {item.label}
                </Col>
                <Col sm={9} xs={7} className="text-muted">
                  {formData[item.label]}
                </Col>
              </Row>
            ))}
          </Form>
        </Card.Body>
      )}
      {!isCollapsed && (
        <Card.Body className="border-top">
          <Form onSubmit={handleSave}>
            {initialFields.map((item, index) => (
              <Row key={index} className="mb-3 align-items-center">
                <Col sm={3} className="col-form-label f-w-500">
                  {item.label}
                </Col>
                <Col sm={9}>
                  <Form.Control type={item.type} value={formData[item.label]} onChange={(e) => handleChange(item.label, e.target.value)} />
                </Col>
              </Row>
            ))}
            <Row className="align-items-center">
              <Col sm={3} />
              <Col sm={9}>
                <Button variant="primary" type="submit">
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      )}
    </MainCard>
  );
}
