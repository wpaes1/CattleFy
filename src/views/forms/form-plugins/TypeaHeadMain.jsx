// project-imports
import ReferenceHeader from 'components/ReferenceHeader';
import AsyncTypeahead from 'sections/forms/form-plugins/TypeaHead/AsynchronousSearching';
import BasicTypeahead from 'sections/forms/form-plugins/TypeaHead/BasicTypeahead';
import CustomSelection from 'sections/forms/form-plugins/TypeaHead/CustomSelection';

// ==============================|| FORM PLUGIN - TYPEAHEAD ||============================== //

export default function TypeaHeadPage() {
  return (
    <>
      <ReferenceHeader
        caption="A React-based typeahead that relies on Bootstrap for styling and was originally inspired by Twitter's typeahead.js."
        link="https://ericgio.github.io/react-bootstrap-typeahead/"
      />
      <BasicTypeahead />
      <AsyncTypeahead />
      <CustomSelection />
    </>
  );
}
