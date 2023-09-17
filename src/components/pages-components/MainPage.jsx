import React, { useRef, useState } from 'react';
import { CreateTaskList, FormFieldTask } from '../global-components';
import { useDispatch, useSelector } from 'react-redux';
import { refreshSelect } from '../../store/selectors/refresh-select';

export const MainPage = () => {
  return (
    <>
      <FormFieldTask />
      <CreateTaskList />
    </>
  );
};

export default MainPage;
