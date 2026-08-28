// project-imports
import ReferenceHeader from 'components/ReferenceHeader';
import BasicSnowTheme from 'sections/forms/text-editor/quill-editor/BasicSnowTheme';
import BubbleTheme from 'sections/forms/text-editor/quill-editor/BubbleTheme';

// ==============================|| TEXT EDITOR - QUILL EDITOR ||============================== //

export default function QuillPage() {
  return (
    <>
      <ReferenceHeader
        caption="A React wrapper for Quill, a free, open source WYSIWYG editor built for modern browsers"
        link="https://zenoamaro.github.io/react-quill/"
      />
      <BasicSnowTheme />
      <BubbleTheme />
    </>
  );
}
