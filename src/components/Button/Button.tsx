import React from 'react';
import '../../App.less';

interface ButtonProps {
    children: React.ReactNode;
    variant: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    size?: 'lg' | 'sm';
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant,
    disabled,
    onClick,
    type,
    size,
}) => {
    const buttonClasses = `button ${variant} ${disabled ? 'disabled' : ''} ${size}`;

    return (
    <button
        className={buttonClasses}
        onClick={disabled ? undefined : onClick}
        type={type}
    >
        {children}
    </button>
    );
};

export default Button;
