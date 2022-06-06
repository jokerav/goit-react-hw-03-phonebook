import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(contact => (
      <Contact
        key={contact.id}
        contact={contact}
        onDelete={onDelete}
        id={contact.id}
      />
    ))}
  </ul>
);
export default ContactList;
ContactList.propType = {
  contacts: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
