const getDisplayType = () => {
  const displayWidth = window.innerWidth;
  const isRetina =
    window.matchMedia &&
    window.matchMedia(
      '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
    ).matches;
  switch (displayWidth) {
    case displayWidth >= 1440:
      return isRetina ? 'desktop-2x' : 'desktop';
    case displayWidth >= 768:
      return isRetina ? 'tablet-2x' : 'tablet';
    default:
      return isRetina ? 'mobile-2x' : 'mobile';
  }
};

export default getDisplayType;
