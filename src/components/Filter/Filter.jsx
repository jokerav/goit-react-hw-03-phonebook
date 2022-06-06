import PropTypes from 'prop-types';
const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input
      value={value}
      onChange={onChange}
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    />
  </label>
);

export default Filter;
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
