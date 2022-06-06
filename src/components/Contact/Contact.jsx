import PropTypes from 'prop-types';
const Contact = ({ contact, onDelete }) => {
  const { name, number, id } = contact;
  return (
    <li>
      <p>
        {name} : {number}
      </p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};
export default Contact;
Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
