import React,{ Component } from "react";
import propTypes from "prop-types";
import css from './filter.module.css'

class Filter extends Component {
    static propTypes = {
        value: propTypes.string,
        onChange: propTypes.func
    }


    render() {
        const {value,onChange} = this.props
        return (
            <>
                <label className={css.label}>Find by contact name
                    <input className={css.inputFilter} type="text" value={value} onChange={onChange}></input>
                </label>
            </>
        )
    }
    
}


export default Filter
