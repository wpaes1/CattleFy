import PropTypes from 'prop-types';
// react-bootstrap
import ProgressBar from 'react-bootstrap/ProgressBar';
import Stack from 'react-bootstrap/Stack';

// ==============================|| PROGRESS - LINEAR WITH LABEL ||============================== //

export default function LinearWithLabel({ value, ...others }) {

const class_name = "w-100 bg-blue-100 table-progress";
const class_name1 = others.className; 

  return (
    <Stack direction="horizontal" className="align-items-center justify-content-between" gap={2}>
      <ProgressBar now={value} {...others} className={`${class_name} ${class_name1}`}/>
      <span className="text-end">{`${Math.round(value)}%`}</span>
    </Stack>
  );
}

LinearWithLabel.propTypes = { value: PropTypes.number, others: PropTypes.any };
