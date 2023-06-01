import React, { useState } from 'react';
import '../../App.less';

interface InputFieldProps {
    type: 'text' | 'email' | 'password';
    placeholder: string;
    error?: boolean;
    name: string;
}

const InputField: React.FC<InputFieldProps> = ({
    type,
    placeholder,
    error,
    name,
}) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);

    return (
    <input
        type={type}
        placeholder={placeholder}
        className={`input-field ${error ? 'error' : ''} ${focused ? 'focused' : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
    />
    );
};

export default InputField;
