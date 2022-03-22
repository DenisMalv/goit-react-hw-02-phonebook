import React,{ Component } from "react";
import propTypes from "prop-types";
import css from './contactForm.module.css'

const initialState = {
        name: '',
        number: '',
        }

class ContactForm extends Component {
    static propTypes = {
        onSubmit: propTypes.func,
    }

    state = {
        name: '',
        number: '',
    }

    handleImputChange = event => {
        const {name,value} = event.currentTarget
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.onSubmit(this.state)
        this.reset()
        console.log(this.state);
    }

    reset = () => {
        this.setState(initialState)
    }

    render() {
        const {handleImputChange, handleSubmit} = this
        const { name, number } = this.state
        
        return (
            <>
                <form className={css.contactForm} onSubmit={handleSubmit}>
                    <label className={css.contactForm__label}>
                        <span className={css.contactForm__text}>Name</span>
                        <input
                        className={css.contactForm__input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={handleImputChange}
                        placeholder=""                        
                        />
                    </label>
                    <label className={css.contactForm__label}>
                        <span className={css.contactForm__text}>Number</span> 
                        <input
                        className={css.contactForm__input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={number}
                        onChange={handleImputChange}
                        placeholder="+"
                        required
                        />
                    </label>
                    <button className={css.contactForm__button} type="sybmit">Add contact</button>
                </form>
            </>
        )
    }
}

export default ContactForm