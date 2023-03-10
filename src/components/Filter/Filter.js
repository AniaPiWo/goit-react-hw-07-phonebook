import { useDispatch } from 'react-redux';
import { setNameFilterAction } from 'redux/filters/filters.slice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const name = event.target.value;
    console.log(name);
    dispatch(setNameFilterAction({ name }));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        placeholder="Search..."
        onChange={handleChange}
      />
    </label>
  );
};
