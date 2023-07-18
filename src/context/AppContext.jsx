import { ContextIsLoading, ContextTaskList } from './context';
import { useReducer } from 'react';
import { reducer } from '../util/reducer';

export const AppContext = ({ children }) => {
  const [taskList, dispatchTaskList] = useReducer(reducer, []);
  const [isLoading, dispatchIsLoading] = useReducer(reducer, false);

  return (
    <ContextTaskList.Provider value={{ taskList, dispatchTaskList }}>
      <ContextIsLoading.Provider value={{ isLoading, dispatchIsLoading }}>
        {children}
      </ContextIsLoading.Provider>
    </ContextTaskList.Provider>
  );
};
