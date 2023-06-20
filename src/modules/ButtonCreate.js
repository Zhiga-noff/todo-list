import { buttonsIcon } from '../data/buttons-icon';

export const ButtonCreate = ({ flag }) => {
  return buttonsIcon.map(({ name, url }) => {
    if (flag && (name === 'filter' || name === 'search')) {
      return (
        <a key={name}>
          <img src={url} alt="" />
        </a>
      );
    } else if (!flag && name !== 'filter' && name !== 'search') {
      return (
        <a key={name}>
          <img src={url} alt="" />
        </a>
      );
    }
  });
};
