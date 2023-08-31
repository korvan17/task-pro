// import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getDisplayType from 'components/Auth/getDisplayType';
import { sendDisplayTypeToBackend } from 'redux/displayType/operationDisplayType';
import { throttle } from 'lodash';

function ScreenSizeInfo() {
  const dispatch = useDispatch();
  const handleResizeThrottled = throttle(handleResize, 1000); // Throttle the function

  async function handleResize() {
    const lastDisplayType = getDisplayType();
    if (lastDisplayType) {
      try {
        await dispatch(sendDisplayTypeToBackend({ display: lastDisplayType }));
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResizeThrottled);

    return () => {
      window.removeEventListener('resize', handleResizeThrottled);
      handleResizeThrottled.cancel();
    };
  }, [handleResizeThrottled]);

  return null;
}

export default ScreenSizeInfo;
