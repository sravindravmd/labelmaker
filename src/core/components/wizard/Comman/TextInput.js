import React from 'react';
export  const InputComponent = ({onChange, label, inputValue, placeholder}) => {

    return (
        <div className="form-group row">
            <label htmlFor={label} className="col-sm-2 col-form-label">{label}</label>
            <div className="col-sm-10">
            <input type="text"
                   name={label}
                   className="form-control"
                   placeholder={placeholder}
                   value={inputValue}
                   onChange={onChange}
            />
            </div>
        </div>
    )
};

export default  InputComponent;