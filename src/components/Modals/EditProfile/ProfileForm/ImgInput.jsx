import { useFormikContext } from 'formik';

export default function ImageInput() {
  const { setFieldValue } = useFormikContext();

  const handleChooseFile = async e => {
    const file = e.target.files?.[0];
    if (file) {
      const res = await new Promise(resolve => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          if (fileReader.readyState === 2) {
            resolve(fileReader.result);
          }
        };
        fileReader.readAsDataURL(file);
      });
      setFieldValue('avatar', res);
    }
  };
  return (
    <input
      type="file"
      id="avatar"
      name="avatar"
      accept="image/*"
      hidden
      onChange={handleChooseFile}
    />
  );
}
