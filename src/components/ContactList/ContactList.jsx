import React,{ Component } from "react";
import propTypes from "prop-types";
import css from './ContactList.module.css'

class ContactList extends Component {
    static propTypes = {
        filteredContact: propTypes.arrayOf(propTypes.exact({
            id: propTypes.string,
            name: propTypes.string,
            number: propTypes.string,
        })),
        deleteContact: propTypes.func,
    }
    

    render() {
        const {filteredContact,deleteContact} = this.props
        return (
            <ul className={css.contactList}>
                {
                    filteredContact.map(({ id, name, number }) =>
                    <li className={css.contactList__item} key={id}>
                            <span className={css.contactList__text}>{`${name}: ${number}`}</span>
                            <button className={css.contactList__button} onClick={() => deleteContact(id)}>Delete</button>
                    </li>)
                }
            </ul>
        )
    }
}

export default ContactList