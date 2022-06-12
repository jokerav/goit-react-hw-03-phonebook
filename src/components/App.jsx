import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactsForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    this.initialContact(JSON.parse(contacts));
  }
  componentDidUpdate(prevProps) {
    const { contacts } = this.props;
    if (prevProps.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  initialContact = contacts => this.setState({ contacts });

  isNameInPhonebook = name => {
    const nameInLowerCase = name.toLowerCase();
    for (const contact of this.state.contacts) {
      if (contact.name.toLowerCase() === nameInLowerCase) {
        return true;
      }
    }
    return false;
  };
  addContact = contact => {
    const { name } = contact;
    if (!this.isNameInPhonebook(name)) {
      contact.id = nanoid(5);
      this.setState(prevState => prevState.contacts.push(contact));
    } else {
      alert(`${name} is already in contacts`);
    }
  };
  onFilterChange = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const normFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
    return (
      <div
        style={{
          fontSize: 22,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={this.state.filter} onChange={this.onFilterChange} />
        <h2>Contacts</h2>
        <ContactList
          contacts={visibleContacts}
          onDelete={this.deleteContact}
          initialContact={this.initialContact}
        />
      </div>
    );
  }
}
