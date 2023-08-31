// import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getDisplayType from 'components/Auth/getDisplayType';
import { sendDisplayTypeToBackend } from 'redux/displayType/operationDisplayType';
import { throttle } from 'lodash';

function ScreenSizeInfo() {
  const dispatch = useDispatch();
  const handleResizeThrottled = throttle(handleResize, 300); // Throttle the function

  async function handleResize() {
    const lastDisplayType = getDisplayType();
    if (lastDisplayType) {
      try {
        await dispatch(sendDisplayTypeToBackend({ display: lastDisplayType }));
      } catch (error) {
        // Handle error if needed
      }
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResizeThrottled);

    return () => {
      window.removeEventListener('resize', handleResizeThrottled);
      handleResizeThrottled.cancel(); // Cancel any pending executions
    };
  }, [handleResizeThrottled]);

  return null;
}

export default ScreenSizeInfo;
