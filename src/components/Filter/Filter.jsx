import React from "react";
import propTypes from "prop-types";
import css from './filter.module.css'

const Filter = ({value,onChange}) => {
    return (
            <>
                <label className={css.label}>Find by contact name
                    <input className={css.inputFilter} type="text" value={value} onChange={onChange}></input>
                </label>
            </>
        )
}

Filter.propTypes = {
        value: propTypes.string.isRequired,
        onChange: propTypes.func.isRequired
    }

export default Filter
