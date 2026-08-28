import PropTypes from 'prop-types';

// project-imports
import Navigation from '../DrawerContent';

export default function HorizontalDrawerContent({ selectedItems, setSelectedItems }) {
  return <Navigation selectedItems={selectedItems} setSelectedItems={setSelectedItems} />;
}

HorizontalDrawerContent.propTypes = {
  selectedItems: PropTypes.any,
  setSelectedItems: PropTypes.oneOfType([PropTypes.func, PropTypes.any])
};
