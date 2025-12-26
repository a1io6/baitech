import React from 'react';
import './InputField.scss';
import {Eye, EyeOff} from "lucide-react"

const InputField = React.forwardRef(({ 
  label, 
  type = "text", 
  id, 
  placeholder, 
  required = true,
  error,
  className = '',
  ...props 
}, ref) => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`input-field ${className} ${error ? 'input-fie ld--error' : ''}`}>
      {label && (
        <label htmlFor={inputId} className="input-field__label">
          {label}
          {required && <span className="input-field__required">*</span>}
        </label>
      )}
      
      <input
        ref={ref}
        type={type === 'password' ? (passwordVisible ? 'text' : 'password') : type}
        id={inputId}
        placeholder={placeholder}
        required={required}
        className="input-field__input"
        {...props}
      />

      {
        type === 'password' && (
          <span className="input-field__toggle-visibility">
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="input-field__toggle-visibility-button"
            >
                {!passwordVisible ? <EyeOff /> : <Eye />}
            </button>
          </span>
        )
      }
      
      {error && <div className="input-field__error">{error}</div>}
    </div>
  );
});

InputField.displayName = 'InputField';

export default InputField;