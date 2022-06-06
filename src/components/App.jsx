import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactsForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

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
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}
