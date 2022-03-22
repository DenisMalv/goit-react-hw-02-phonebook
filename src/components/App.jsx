import React, { Component } from "react";
import { nanoid } from 'nanoid'

import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";


class App extends Component {

  state = {
    contacts: [
      { id: 'id-2', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-3', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-4', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-5', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }
  
  checkingAddedContact = (outName) => {
    const res = this.state.contacts.find(({ name }) => {
      if (name === outName ) {
        return name
      }
    })
    return res
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(3),
      name,
      number,
    }
    const newContact = this.checkingAddedContact(name)
  
    newContact ? alert(`${newContact.name} is already in contacts`)
               : this.setState(({ contacts }) => ({
                contacts: [contact, ...contacts]
              }))
  }

  deleteContact = contId => {
        this.setState(prevState => ({
        contacts : prevState.contacts.filter(item=> item.id !== contId)
        }))
    }

  handleFilterInput = event => {
    this.setState({filter: event.currentTarget.value})
  }

  getFilteredContacts = () => {
    const { filter, contacts } = this.state

    const normalizedFilter = filter.toLowerCase()
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

  render() {

    const { addContact, handleFilterInput, deleteContact} = this
    const { filter } = this.state
    const filteredContact = this.getFilteredContacts()

    return (
      <main>

        <h1 className="titlePhonebook">Phonebook</h1>
        <ContactForm onSubmit={ addContact }/>

        <h2 className="titleContacts">Contacts</h2>
        <Filter value={ filter } onChange={ handleFilterInput }/>
        <ContactList contacts={filteredContact} deleteContact={ deleteContact }/>
  
      </main>
    )
  }
};

export default App



// ----------------- рендер контакта который есть в списке ------
// {
//             r ? <li className="" key={r.id}>
//                 <span className="">{`${r.name}: ${r.number}`}</span>
//                 <button onClick={() => this.deleteContact(r.id)}>Delete</button>
//                 </li>
//               : filteredContact.map(({ id, name, number }) => {
//                 return <li className="" key={id}>
//                 <span className="">{`${name}: ${number}`}</span>
//                 <button onClick={() => this.deleteContact(id)}>Delete</button>
//                 </li>
//}