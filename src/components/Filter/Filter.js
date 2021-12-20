import PropTypes from 'prop-types';
import s from './Filter.module.scss';

function Filter({ value, onChange }) {
  return (
    <>
      <label className={s.label}>
        Find contact by name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
