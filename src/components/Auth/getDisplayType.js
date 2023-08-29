const getDisplayType = () => {
  const displayWidth = window.innerWidth;
  console.log('displayWidth:', displayWidth);
  const isRetina =
    window.matchMedia &&
    window.matchMedia(
      '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
    ).matches;

  if (displayWidth >= 1440) return isRetina ? 'desktop-2x' : 'desktop';
  else if (displayWidth >= 768) return isRetina ? 'tablet-2x' : 'tablet';
  else if (displayWidth >= 320) return isRetina ? 'mobile-2x' : 'mobile';
};

export default getDisplayType;
