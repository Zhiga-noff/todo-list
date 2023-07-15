import style from './components/styles/App.module.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import {
  MainPage,
  CreateSelectedTask,
  NotFoundPage,
} from './components/pages-components';

export const TODOS_URL = 'http://localhost:3005/todos\n';

export const App = () => {
  return (
    <div className={style.app}>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={`/task/:id`} element={<CreateSelectedTask />}></Route>
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
