import PropTypes from 'prop-types';
// react-bootstrap
import Form from 'react-bootstrap/Form';

// ==============================|| INVOICE - TEXT FIELD ||============================== //

export default function InvoiceField({ onEditItem, cellData }) {
  return (
    <td>
      <Form.Control
        type={cellData.type}
        placeholder={cellData.placeholder}
        name={cellData.name}
        id={cellData.id}
        value={cellData.type === 'number' ? (cellData.value > 0 ? cellData.value : '') : cellData.value}
        onChange={onEditItem}
        isInvalid={!!cellData.errors && cellData.touched}
      />
      <Form.Control.Feedback type="invalid">{cellData.errors}</Form.Control.Feedback>
    </td>
  );
}

InvoiceField.propTypes = { onEditItem: PropTypes.any, cellData: PropTypes.any };
