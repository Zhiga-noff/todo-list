import { useEffect } from 'react';

export const useExchangeButton = (infoAboutTask, setValue) => {
  useEffect(() => {
    if (infoAboutTask.flagForButton === 'edit') {
      setValue(infoAboutTask.title);
    }
  }, [infoAboutTask]);
};
