import React, { Component } from "react";
import propTypes from "prop-types";
import { nanoid } from 'nanoid'

import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";


class App extends Component {

  static propTypes = {
    
  }

  state = {
    contacts: [
      { id: 'id-2', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-3', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-4', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-5', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  }

  handleImputChange = event => {
    console.log(event.currentTarget.value);
    this.setState({ [event.currentTarget.name]: event.currentTarget.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state);
    this.setState(({ contacts }) => [this.state.name, ...contacts])
    console.log(this.state);
  }

  addNewContact = event => {
    event.preventDefault()
    const contact = {
      id: this.state.name,
      name: this.state.name,
      number: this.state.number,

    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts]
    }))
    this.reset()

  }

  deleteContact = contId => {
    this.setState(prevState => ({
      contacts : prevState.contacts.filter(item=> item.id !== contId)
    }))
  }

  changeFilter = event => {
    this.setState({filter: event.currentTarget.value})
  }
 

  reset = () => {
    this.setState({
    name: '',
    number: '',
  })
  }

  render() {
    const notmFilter = this.state.filter.toLowerCase()
    const filteredContact = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(notmFilter))

    return (
      <main>
        <h1>Phonebook</h1>
        {/* <ContactForm /> */}
        <form action="" onSubmit={this.addNewContact}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // required
              onChange={this.handleImputChange}
              value={this.state.name}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={this.handleImputChange}
              value={this.state.number}
              // required
            />
          </label>
          <button type="sybmit">Add</button>
        </form>
        

        <h2>Contacts</h2>
        <form action="">
          <label>Find by contact name
            <input type="text" name="filter" value={this.state.filter} onChange={this.handleImputChange}></input>
          </label>
        </form>


        
        
        {/* <Filter/> */}
        {/* <ContactList /> */}
        <ul className="">
          {filteredContact.map(item =>
            <li className="" key={item.id}>
              <span className="">{`${item.name}: ${item.number}`}</span>
              <button onClick={()=> this.deleteContact(item.id)}>Delete</button>
            </li>)}
        </ul>
        
      </main>
    )
  }
};

export default App