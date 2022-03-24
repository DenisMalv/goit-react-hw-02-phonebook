import React from "react";
import propTypes from "prop-types";
import css from './ContactList.module.css'
import ContactItem from "components/ContactItem/ContactItem";

const ContactList = ({ contacts,deleteContact }) => {
    return (
            <ul className={css.contactList}>
                {
                contacts.map(({id,name,number}) =>
                    <ContactItem id={ id }name={ name } number={ number } onDelete={ deleteContact } key={ id }/>
                    )
                }  
            </ul>
        )
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