import React from 'react';

interface IInput {
    type: string,
    className?: string,
    placeholder?: string,
    name: string
}

export const Input = ({ type, className, placeholder, name }: IInput) => {
    return (
        <input
            type={ type }
            className={ className }
            placeholder={ placeholder }
            name={ name }
        />
    );
};
