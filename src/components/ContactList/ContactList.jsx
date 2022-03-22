import React,{ Component } from "react";
import propTypes from "prop-types";
import css from './ContactList.module.css'
import ContactItem from "components/ContactItem/ContactItem";

class ContactList extends Component {
    static propTypes = {
        contacts: propTypes.arrayOf(propTypes.exact({
            id: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            number: propTypes.string.isRequired,
        })),
        deleteContact: propTypes.func.isRequired
    }

    handleDelete = contId => {
        this.props.deleteContact(contId)
    }

    render() {
        const { contacts } = this.props
        const { handleDelete } = this
        
        return (
            <ul className={css.contactList}>
                {
                contacts.map(({id,name,number}) =>
                    <ContactItem id={ id }name={ name } number={ number } onDelete={ handleDelete } key={ id }/>
                    )
                }  
            </ul>
        )
        
    }

}

ContactList.propTypes = {
        filteredContact: propTypes.arrayOf(propTypes.exact({
            id: propTypes.string,
            name: propTypes.string,
            number: propTypes.string,
        })),
        deleteContact: propTypes.func,
    }

export default ContactList