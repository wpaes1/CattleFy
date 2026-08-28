import PropTypes from 'prop-types';
// third party
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

// ==============================|| EDITOR - QUILL ||============================== //

export default function ReactQuillDemo({ value, onChange }) {
  return (
    <ReactQuill
      modules={{
        toolbar: {
          container: [
            [{ size: ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['link', 'image', 'video', 'formula'],
            ['image', 'code']
          ]
        }
      }}
      {...(value && { value })}
      {...(onChange && { onChange })}
    />
  );
}

ReactQuillDemo.propTypes = { value: PropTypes.string, onChange: PropTypes.func };
