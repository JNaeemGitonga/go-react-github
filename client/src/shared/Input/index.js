import React from 'react';
import { TextField } from '../material-ui.components';

/**
 * props type definition
 * @typedef {Object} props
 * @property {Function} setState
 * @property {string} email
 * @property {boolean} error
 * @property {boolean} required
 * @property {string} id
 * @property {[string, [string, function, (undefined|string)]]} utilities
 * @property {string} type
 * @property {string} label
 */

 /**
  * Creates an input component
  * @param {props} props 
  */
const Input = ({ updateComponent, error, required, id, utilities, type, label }) => (
    <TextField
        id={id}
        required={required}
        error={error}
        onChange={({ target }) => {
            let setStateObject;
            if (utilities[1].length === 3) {
                setStateObject = {
                    [utilities[0]]: target.value,
                    [utilities[1][0]]: utilities[1][1](utilities[1][2], target.value),
                }
            }

            if (utilities[1].length === 2) {
                setStateObject = {
                    [utilities[0]]: target.value,
                    [utilities[1][0]]: utilities[1][1](utilities[0], target.value),
                }
            } else {
                setStateObject = { [utilities[0]]: utilities[0] }
            }
            return updateComponent(setStateObject);
        }}
        type={type}
        label={label}
        aria-label={`${label} input`}
    />
);

export default Input;
