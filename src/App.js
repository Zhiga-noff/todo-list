import style from './styles/App.module.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import { MainPage, TaskPage, NotFoundPage } from './components/pages-components';
import { AppContext } from './context/AppContext';

export const TODOS_URL = 'http://localhost:3005/todos\n';

export const App = () => {
  return (
    <div className={style.app}>
      <AppContext>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={`/task/:id`} element={<TaskPage />}></Route>
          <Route path={'*'} element={<NotFoundPage />} />
        </Routes>
      </AppContext>
    </div>
  );
};
