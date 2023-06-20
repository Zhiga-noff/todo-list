import filter from '../filter.svg';
import search from '../search.svg';
import edit from '../edit.svg';
import del from '../del.svg';

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
