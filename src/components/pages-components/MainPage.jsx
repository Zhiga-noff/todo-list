import React, { useRef, useState } from 'react';
import { CreateTaskList, FormFieldTask } from '../global-components';

export const MainPage = () => {
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [infoAboutTask, setInfoAboutTask] = useState({
    id: '',
    title: '',
    flagForButton: 'add',
    tasksList: [],
    inputFieldRef: useRef(null),
    noRefreshFlag: false,
  });

  const refreshAllRequests = () => {
    setRefreshFlag(!refreshFlag);
  };

  return (
    <>
      <FormFieldTask
        infoAboutTask={infoAboutTask}
        setInfoAboutTask={setInfoAboutTask}
        refreshAllRequests={refreshAllRequests}
      />
      <CreateTaskList
        refreshFlag={refreshFlag}
        refreshAllRequests={refreshAllRequests}
        infoAboutTask={infoAboutTask}
        setInfoAboutTask={setInfoAboutTask}
      />
    </>
  );
};

export default MainPage;
