import React from 'react';

interface IInput {
    type: string,
    className?: string,
    placeholder?: string,
    name: string,
    state: string,
    setState: React.Dispatch<React.SetStateAction<any>>
}

export const Input = ({ type, className, placeholder, name, state, setState }: IInput) => {
    return (
        <input
            type={ type }
            className={ className }
            placeholder={ placeholder }
            name={ name }
            value={state[name]}
            onChange={setState}
            required
        />
    );
};
