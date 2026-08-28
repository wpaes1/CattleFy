import PropTypes from 'prop-types';
// react-bootstrap
import FormCheck from 'react-bootstrap/FormCheck';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| SETTING - NOTIFICATION ||============================== //

export default function Notification({ data }) {
  return (
    <MainCard title="Notification">
      {data.map((item, index) => (
        <div key={index}>
          <h6 className={`${index !== 0 ? 'mt-md-5' : ''}`}>{item.title}</h6>
          <p className="text-muted">{item.description}</p>
          <MainCard className="shadow-none border" bodyClassName="p-3">
            {item.details.map((detail, idx) => (
              <FormCheck key={idx} className="form-switch form-check-reverse text-start mb-2">
                <FormCheck.Input
                  id={`notification-checkbox-${index}-${idx}`}
                  className="input-primary"
                  type="checkbox"
                  defaultChecked={detail.switch}
                />
                <FormCheck.Label htmlFor={`notification-checkbox-${index}-${idx}`}>{detail.label}</FormCheck.Label>
              </FormCheck>
            ))}
          </MainCard>
        </div>
      ))}
    </MainCard>
  );
}

Notification.propTypes = { data: PropTypes.array };
