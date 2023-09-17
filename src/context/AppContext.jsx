import { ContextTaskList, ContextIsLoading } from './';
import {  useState } from 'react';

export const AppContext = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ContextTaskList.Provider value={{ taskList, setTaskList }}>
      <ContextIsLoading.Provider value={{ isLoading, setIsLoading }}>
        {children}
      </ContextIsLoading.Provider>
    </ContextTaskList.Provider>
  );
};
