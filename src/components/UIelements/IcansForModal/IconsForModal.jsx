import css from './IconsForModal.module.css';

export default function IconForModal({ handleBackground, selectedBackground }) {
  const endOfName = '-icon-min.png';
  const endOfName2x = '-icon-2x-min.png';
  const imageFiles = require.context('../../../iconsForModal', false, /\.png$/);
  const nameFile = new Set();
  imageFiles.keys().forEach(imageName => {
    const fileNameParts = imageName.split('/').pop().split('-');
    const fileName = fileNameParts[0];
    nameFile.add(fileName);
  });
  const images = Array.from(nameFile).sort();

  return (
    <ul className={css.arrayOfIcons}>
      {images.map(img => (
        <li key={img}>
          <button
            type="button"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
            onClick={() => handleBackground(img.slice(1))}
          >
            <picture
              className={`${css.backgroundsImg} ${
                selectedBackground === img.slice(1)
                  ? css.selectedBackground
                  : ''
              }`}
            >
              <source
                srcSet={
                  require(`../../../iconsForModal/${img}${endOfName}`) +
                  ' 1x,' +
                  require(`../../../iconsForModal/${img}${endOfName2x}`) +
                  ' 2x'
                }
              />
              <img
                src={require(`../../../iconsForModal/${img}${endOfName}`)}
                alt="user"
                height="124"
              />
            </picture>
          </button>
        </li>
      ))}
    </ul>
  );
}
