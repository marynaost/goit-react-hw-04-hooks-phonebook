import { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import './App.css';
import shortid from 'shortid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const newContacts = {
      id: shortid.generate(),
      name,
      number,
    };

    contacts.find(
      contact => newContacts.name.toLowerCase() === contact.name.toLowerCase(),
    )
      ? alert(`${newContacts.name} is already in contacts`)
      : setContacts(prevContact => [newContacts, ...prevContact]);
  };

  const deleteContacts = contactsId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactsId),
    );
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={filteredContacts()}
        onDeleteContact={deleteContacts}
      />
    </div>
  );
}
