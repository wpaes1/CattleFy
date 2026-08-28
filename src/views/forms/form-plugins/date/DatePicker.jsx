import { useEffect } from 'react';

// project-imports
import ReferenceHeader from 'components/ReferenceHeader';
import DatePickerPreview from 'sections/forms/form-plugins/date/DatePicker';

// =============================|| DATE - DATE PICKER ||============================== //

export default function DatePickerPage() {
  const useClickOutside = (ref, callback) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref, callback]);
  };
  return (
    <>
      <ReferenceHeader
        caption="React-Calendar is a lightweight, customizable calendar component for React apps. It supports native date formatting, works with any language, and offers features like decade pickers and numbered weeks—all in a fast, open-source package."
        link="https://projects.wojtekmaj.pl/react-calendar/"
      />
      <DatePickerPreview useClickOutside={useClickOutside} />
    </>
  );
}
