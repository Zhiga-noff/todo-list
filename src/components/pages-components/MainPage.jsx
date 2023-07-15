import React, { useRef, useState } from 'react';
import { CreateTaskList, FormFieldTask } from '../global-components';

export const MainPage = () => {
  const [taskList, setTaskList] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refreshAllRequests = () => {
    setRefreshFlag(!refreshFlag);
  };

  return (
    <>
      <FormFieldTask
        refreshAllRequests={refreshAllRequests}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <CreateTaskList
        refreshFlag={refreshFlag}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </>
  );
};

export default MainPage;
