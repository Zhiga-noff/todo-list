import { buttonsIcon } from '../../data/buttons-icon';
import { useDispatch, useSelector } from 'react-redux';
import { taskListSelect } from '../../store/selectors';

export const ButtonForForm = ({ setAction }) => {
  const taskList = useSelector(taskListSelect);
  const dispatch = useDispatch();

  return buttonsIcon.map(({ name, url, eventClick }) => {
    if (name === 'filter') {
      return (
        <a key={name} onClick={() => dispatch({ type: 'SORT' })}>
          <img src={url} alt="" />
        </a>
      );
    }
    if (name === 'search') {
      return (
        <a
          key={name}
          onClick={() => {
            setAction('search');
          }}
        >
          <img src={url} alt="" />
        </a>
      );
    }
  });
};
