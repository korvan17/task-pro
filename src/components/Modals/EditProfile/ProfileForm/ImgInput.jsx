import { useFormikContext } from 'formik';
export default function ImageInput() {
  const { setFieldValue } = useFormikContext();

  const handleChooseFile = async e => {
    const file = e.target.files?.[0];
    if (file) {
      const res = await new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = e => {
          resolve(e.target.result);
        };
        reader.readAsDataURL(file);
        
      });
      console.log(res)
      setFieldValue('avatar', file);
      setFieldValue('avatarURL', res);
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
