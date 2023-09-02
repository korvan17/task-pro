const imageFiles = require.context(
  './images',
  false,
  /\.(png|jpg|jpeg|gif|svg)$/
);
const images = {};

imageFiles.keys().forEach(imageName => {
  const image = imageFiles(imageName);
  images[imageName] = image;
});

export default images;
