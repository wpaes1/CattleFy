// project-imports
import ReferenceHeader from 'components/ReferenceHeader';
import ImageCropPlugin from 'sections/forms/images-cropper';

// =============================|| IMAGE CROPPER - FORMS IMAGE CROP ||============================== //

export default function ImageCropPage() {
  return (
    <>
      <ReferenceHeader
        caption="React Image Crop uses image cropper for image or canvas element for cropping"
        link="https://github.com/dominictobias/react-image-crop?tab=readme-ov-file"
      />
      <ImageCropPlugin />
    </>
  );
}
