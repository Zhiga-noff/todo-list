import filter from '../img/filter.svg';
import search from '../img/search.svg';
import edit from '../img/edit.svg';
import del from '../img/del.svg';

export const buttonsIcon = [
  {
    name: 'filter',
    url: filter,
    eventClick: 'filter',
  },
  {
    name: 'search',
    url: search,
    eventClick: 'search',
  },
  {
    name: 'edit',
    url: edit,
    eventClick: 'PUT',
  },
  {
    name: 'delete',
    url: del,
    eventClick: 'DELETE',
  },
];
