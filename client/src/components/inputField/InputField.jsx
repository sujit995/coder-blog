import React from 'react';
import './input.css';

const InputField = ({type, placeholder, icon, onChange, value}, ref) => {
    return (
        <>
            <div className="input-field">
                <i className={icon}></i>
                <input type={type} placeholder={placeholder} onChange={(e) => onChange(e)} value={value} ref={ref} />
            </div>
        </>
    )
}

const forwardInput = React.forwardRef(InputField)

export default forwardInput;