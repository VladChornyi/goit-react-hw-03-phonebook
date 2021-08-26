import React, { Component } from 'react';
import ContactsForm from './contactsForm/ContactsForm';
import ContactsList from './contactsList/ContactsList';
import Filter from './filter/Filter';
import shortid from 'shortid';

class App extends Component {
 state = {
   contacts: [
     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
   ],
   filter:''
 
 }
  addContact = (number) => {
    const searchRepeat = this.state.contacts
      .map((user) => user.name.toLowerCase())
      .includes(number.name.toLowerCase());
    
    if (searchRepeat) {
      alert(`${number.name} is already in contacts`)
    }
    else {
      const contact = {
        ...number,
        id: shortid.generate()
      }
      this.setState(prev => ({ contacts: [...prev.contacts, contact] }));
    }
  };


  getFilteredContacts = () => {

    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  }

   changeFilter = (filter) => {
    this.setState({ filter });
   };
  
   removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };
  
  render() {
    const { filter } = this.state;
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactsForm addContact={this.addContact} />

          <h2>Contacts</h2>
          <Filter value={filter} onChangeFilter={this.changeFilter} />
          <ContactsList contacts={this.getFilteredContacts()} onRemoveContact={this.removeContact}  />
      </div>
      </>
    );
  }
}

export default App;