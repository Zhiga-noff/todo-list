import React, { useRef, useState } from 'react';
import { CreateTaskList, FormFieldTask } from '../global-components';

export const MainPage = () => {
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refreshAllRequests = () => {
    setRefreshFlag(!refreshFlag);
  };

  return (
    <>
      <FormFieldTask refreshAllRequests={refreshAllRequests} />
      <CreateTaskList refreshFlag={refreshFlag} />
    </>
  );
};

export default MainPage;
