import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getDisplayType from 'components/Auth/getDisplayType';
import { sendDisplayTypeToBackend } from 'redux/displayType/operationDisplayType';
// import debounce from 'lodash.debounce';

function ScreenSizeInfo() {
  const dispatch = useDispatch();
  let lastDisplayType = null;
  let timeoutId = null;

  const handleResize = async () => {
    lastDisplayType = getDisplayType();

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(async () => {
      if (lastDisplayType) {
        try {
          await dispatch(
            sendDisplayTypeToBackend({ display: lastDisplayType })
          );
        } catch (error) {
          // Handle error if needed
        }
      }
    }, 300);
  };

  useEffect(() => {
    const handleResizeCallback = () => {
      handleResize();
    };

    window.addEventListener('resize', handleResizeCallback);

    return () => {
      window.removeEventListener('resize', handleResizeCallback);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return null;
}

export default ScreenSizeInfo;
