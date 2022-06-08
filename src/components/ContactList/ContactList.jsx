import PropTypes from 'prop-types';
import { Component } from 'react';
import Contact from '../Contact/Contact';
class ContactList extends Component {
  componentDidMount() {
    const { initialContact } = this.props;
    const contacts = localStorage.getItem('contacts');
    initialContact(JSON.parse(contacts));
  }
  componentDidUpdate(prevProps) {
    const { contacts } = this.props;
    if (prevProps.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  render() {
    const { contacts, onDelete } = this.props;
    return (
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
  }
}
export default ContactList;
ContactList.propType = {
  contacts: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
