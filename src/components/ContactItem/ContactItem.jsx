import React from "react";
import css from './ContactItem.module.css'
import propTypes from "prop-types";

const ContactItem = ({ id, name, number, onDelete }) => {
    return (
        <li className={css.contactList__item}>
            <span className={css.contactList__text}>{`${name}: ${number}`}</span>
            <button className={css.contactList__button} onClick={() => onDelete(id)}>Delete</button>
        </li>
    )
}

ContactItem.propTypes = {
    id:propTypes.string.isRequired,
    name:propTypes.string.isRequired,
    number:propTypes.string.isRequired,
    onDelete:propTypes.func.isRequired,
}

export default ContactItem