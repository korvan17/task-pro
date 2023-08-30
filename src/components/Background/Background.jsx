import css from './Background.module.css';
import { useMedia } from 'react-use';

// Определение компонента Background с пропсами children и img
export const Background = ({ children, img }) => {
  // // Использование хука useMedia для проверки ширины экрана
  // const isWide = useMedia('(min-width: 1280px)');
  // // Использование хука useMedia для проверки мобильного экрана
  // const isMobile = useMedia('(max-width: 320px)');
  // // Проверка наличия Retina-дисплея через свойство devicePixelRatio
  // const isRetinaDisplay = window.devicePixelRatio >= 2;

  // // Базовый URL для изображений
  // const BASE_URL = 'https://res.cloudinary.com/task-pro/image/upload/v16929573';

  // // Подготовка объекта стилей для фона
  // let bg = {};

  // // Проверка, если img не равен '0', формируется URL для фона
  // if (img !== '0') {
  //   // Определение размера экрана в зависимости от ширины
  //   const userScreen = isWide ? '1280' : isMobile ? '320-min' : '768-min';
  //   // Определение плотности пикселей в зависимости от Retina-дисплея
  //   const userRatio = isRetinaDisplay ? '2x' : '1x';
  //   // Формирование URL для изображения фона
  //   const url = `${BASE_URL}/backgrounds/${img}@${userRatio}_${userScreen}.jpg.webp`;
  //   // Присвоение стиля фона объекту bg
  //   bg = { backgroundImage: `url(${url})` };
  // }

  // Возвращение компонента с примененными стилями фона
  return (
    <div className={css.back} style={null}>
      {children}
    </div>
  );
};
