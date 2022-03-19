import React,{ Component } from "react";
import propTypes from "prop-types";

class ContactForm extends Component {
    static propTypes = {
    
    }



    render() {
        return (
            <>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.props.onChange}
                    value={ this.props.value}
                />
            </>
        )
    }
}

export default ContactForm