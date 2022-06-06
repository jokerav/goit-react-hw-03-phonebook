import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  onChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name
          <input
            value={this.state.name}
            onChange={this.onChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            value={this.state.number}
            onChange={this.onChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
