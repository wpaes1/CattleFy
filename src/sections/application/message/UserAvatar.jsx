import PropTypes from 'prop-types';
// react-bootstrap
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';

const statusColorMap = {
  active: 'bg-success', // green
  away: 'bg-warning', // yellow/orange
  dnd: 'bg-danger' // red
};

// ==============================|| USER AVATAR ||============================== //

export default function UserAvatar({ userName, userRole, userAvatar, status = 'active', className = '', userDetailsclass = '' }) {
  return (
    <Stack direction="horizontal" className={`align-items-center ${className}`}>
      <div className="chat-avatar position-relative">
        <Image className="rounded-circle img-fluid wid-40" src={userAvatar} alt="user image" />
        {status && <i className={`chat-badge ${statusColorMap[status]}`} />}
      </div>
      <div className={`flex-grow-1 mx-2 ${userDetailsclass}`}>
        <h6 className="mb-0">{userName}</h6>
        <span className="text-sm text-muted">{userRole}</span>
      </div>
    </Stack>
  );
}

UserAvatar.propTypes = {
  userName: PropTypes.string,
  userRole: PropTypes.string,
  userAvatar: PropTypes.string,
  status: PropTypes.oneOf(['active', 'away', 'dnd']),
  className: PropTypes.string,
  userDetailsclass: PropTypes.string
};
